
var openCanvas = wx.getSharedCanvas();
var openContext = openCanvas.getContext('2d');

let rankNumBeginX = 50;
let nicknameBeginX = 250;
let scoreBeginX = 500;
let avatarBeginX = 120;
let avatarBeginY = 500;
let avatarInterval = 200;
let avatarWidth = 64;
let avatarHeight = 64;

let nicknameMaxLength = 6;

let maxPlayer = 5;

let scoreKeyName = "score";

let rankNumColor = "#FFFFFF";
let nicknameColor = "#FFFFFF";
let scoreColor = "#FFFFFF";

let rankNumSize = 40;
let nicknameSize = 40;
let scoreSize = 40;

let rankCurrentPage = 0;

let dataList;
let validDataLength;

//监听主域发送的消息
wx.onMessage(data => {
  HandleData(data);
});

//设置排行榜配置
function ChangeRankConfig(rankConfig) {
  rankNumBeginX = rankConfig.m_iRankNumberBeginX;
  nicknameBeginX = rankConfig.m_iNicknameBeginX;
  scoreBeginX = rankConfig.m_iScoreBeginX;
  avatarBeginX = rankConfig.m_iAvatarBeginX;
  avatarBeginY = rankConfig.m_iAvatarBeginY;
  avatarInterval = rankConfig.m_iAvatarInterval;
  avatarWidth = rankConfig.m_iAvatarWidth;
  avatarHeight = rankConfig.m_iAvatarheight;
  nicknameMaxLength = rankConfig.m_iNicknameMaxLength;
  maxPlayer = rankConfig.m_iMaxNum;
  scoreKeyName = rankConfig.m_sScoreKeyName;
  rankNumColor = rankConfig.m_sRankNumColor;
  nicknameColor = rankConfig.m_sNicknameColor;
  scoreColor = rankConfig.m_sScoreColor;
  rankNumSize = rankConfig.m_iRankNumSize;
  nicknameSize = rankConfig.m_iNicknameSize;
  scoreSize = rankConfig.m_iScoreSize;
}



function HandleData(data) {
  switch (data.msgType) {
    case MessageType.ShowFriendRank:
      BeginDrawFriend();
      break;
    case MessageType.ShowGroupRank:
      BeginDrawGroup(data.data);
      break;
    case MessageType.SetRankConfig:
      ChangeRankConfig(data.data);
      break;
    case MessageType.NextPage:
      NextRankPage();
      break;
    case MessageType.PrePage:
      PreRankPage();
      break;
    default:
      break;
  }
}

//开始画好友排行
function BeginDrawFriend() {
  //拉取的同玩好友信息里是包括自己的
  wx.getFriendCloudStorage(
    {
      keyList: [scoreKeyName],
      success: friendCloud => {
        SetRankDataList(friendCloud.data);
        DrawRank();
      }
    }
  )
}

//开始画群排行
function BeginDrawGroup(ticket) {
  wx.getGroupCloudStorage(
    {
      shareTicket: tickets,
      keyList: [scoreKeyName],
      success: groupCloud => {
        SetRankDataList(groupCloud.data);
        DrawRank();
      }
    })
}

//设置需要显示的数据列表
function SetRankDataList(data) {
  dataList = data;
  SortRank(dataList);
  CheckValidData();
  rankCurrentPage = 0;
}

//前一页
function PreRankPage() {
  if (rankCurrentPage <= 0) {
    return;
  }
  rankCurrentPage--;
  DrawRank();
}

//后一页
function NextRankPage() {
  if ((rankCurrentPage + 1) * maxPlayer > validDataLength) {
    return;
  }

  rankCurrentPage++;
  DrawRank();
}

//画排行
function DrawRank() {
  //清空canvas
  openContext.clearRect(0, 0, openCanvas.width, openCanvas.height);
  let cnt = 0;
  let rankId = rankCurrentPage * maxPlayer;
  for (let i = rankCurrentPage * maxPlayer; i < dataList.length; i++) {
    if (cnt >= maxPlayer) {
      break;
    }
    for (let j = 0; j < dataList[i].KVDataList.length; j++) {
      if (dataList[i].KVDataList[j].key == scoreKeyName) {
        DrawRankNum(cnt, rankId);
        DrawAvatar(dataList[i].avatarUrl, avatarBeginX, avatarBeginY + avatarInterval * cnt);
        DrawNickname(dataList[i].nickname, cnt);
        DrawScore(dataList[i].KVDataList[j].value, cnt);
        cnt++;
        rankId++;
      }
    }
  }
}

//获取合法数据的长度，因为有可能存在某个误操作，导致某个用户数据里并没有某个key
function CheckValidData() {
  validDataLength = 0;
  for (let i = 0; i < dataList.length; i++) {
    for (let j = 0; j < dataList[i].KVDataList.length; j++) {
      if (dataList[i].KVDataList[j].key == scoreKeyName) {
        validDataLength++;
      }
    }
  }
}

//排行榜排序规则
function SortRank(dataArr) {
  dataArr.sort(function (a, b) {
    let tempA = -1;
    let tempB = -1;;
    for (let i = 0; i < a.KVDataList.length; i++) {
      if (a.KVDataList[i].key == scoreKeyName) {
        tempA = parseInt(a.KVDataList[i].value);
      }
    }
    for (let i = 0; i < b.KVDataList.length; i++) {
      if (b.KVDataList[i].key == scoreKeyName) {
        tempB = parseInt(b.KVDataList[i].value);
      }
    }
    return tempA < tempB ? 1 : -1;
  })
}


//排行数字
function DrawRankNum(idInPage, rankNum) {
  if (rankNumBeginX < 0) {
    return;
  }
  let iRealRank = rankNum + 1;
  openContext.fillStyle = rankNumColor;
  openContext.font = rankNumSize.toString() + "px " + "Arial";
  openContext.fillText(iRealRank.toString(), rankNumBeginX, (avatarBeginY + avatarInterval * idInPage) + avatarHeight / 1.5);
}

//昵称
function DrawNickname(nickname, rankNum) {
  openContext.fillStyle = nicknameColor;
  openContext.font = nicknameSize.toString() + "px " + "Arial";
  if (nickname.length >= nicknameMaxLength) {
    openContext.fillText(nickname.slice(0, nicknameMaxLength) + "...", nicknameBeginX, (avatarBeginY + avatarInterval * rankNum) + avatarHeight / 1.5);
  }
  else {
    openContext.fillText(nickname, nicknameBeginX, (avatarBeginY + avatarInterval * rankNum) + avatarHeight / 1.5);
  }
}

//头像
function DrawAvatar(imgUrl, tempX, tempY) {
  let img = wx.createImage();
  imgUrl = imgUrl.slice(0, imgUrl.length - 1) + "64";
  img.src = imgUrl;
  img.onload = function () {
    openContext.drawImage(img, tempX, tempY, avatarWidth, avatarHeight);
  }
}

//分数
function DrawScore(score, rankNum) {
  openContext.fillStyle = scoreColor;
  openContext.font = scoreSize.toString() + "px " + "Arial";
  openContext.fillText(score, scoreBeginX, (avatarBeginY + avatarInterval * rankNum) + avatarHeight / 1.5);
}

//信息类型，请保证与主域相同
var MessageType =
  {
    ShowFriendRank: 0,
    ShowGroupRank: 1,
    SetRankConfig: 2,
    PrePage: 3,
    NextPage: 4,
  }

