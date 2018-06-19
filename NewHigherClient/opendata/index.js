
var openCanvas = wx.getSharedCanvas();
var openContext = openCanvas.getContext('2d');

let rankNumBeginX = 0;
let rankNumBeginY = 0;
let nicknameBeginX = 0;
let nicknameBeginY = 0;
let scoreBeginX = 0;
let scoreBeginY = 0;
let avatarInterval = 0;
let avatarWidth = 30;
let avatarHeight = 30;
let img_IconX = 0;
let img_IconY = 0;
let avatarSize = 0;
let textHeight = -10;
let selfNickName = "";

let nicknameMaxLength = 6;

let maxPlayer = 5;

let scoreKeyName = "score";

let rankNumColor = "#FFFFFF";
let nicknameColor = "#FFFFFF";
let scoreColor = "#FFFFFF";

let rankNumSize = 40;
let nicknameSize = 40;
let scoreSize = 40;
let currentPage = 0;//当前页数
let layoutDir = 200;

wx.onMessage(data => {
  console.log("wx onmessage" + data + "--" + data.score);
  mainData = data;
  HandleData(data);
});


function ChangeRankConfig(rankConfig) {
  if (rankConfig.img_IconX) {
    img_IconX = rankConfig.img_IconX;
  }
  if (rankConfig.img_IconY) {
    img_IconY = rankConfig.img_IconY;
  }
  if (rankConfig.m_iRankNumberBeginX) {
    rankNumBeginX = rankConfig.m_iRankNumberBeginX;
  }
  if (rankConfig.m_iRankNumberBeginY) {
    rankNumBeginY = rankConfig.m_iRankNumberBeginY;
  }
  if (rankConfig.m_iNicknameBeginX) {
    nicknameBeginX = rankConfig.m_iNicknameBeginX;
  }
  if (rankConfig.m_iNicknameBeginY) {
    nicknameBeginY = rankConfig.m_iNicknameBeginY;
  }
  if (rankConfig.m_iScoreBeginX) {
    scoreBeginX = rankConfig.m_iScoreBeginX;
  }
  if (rankConfig.m_iScoreBeginY) {
    scoreBeginY = rankConfig.m_iScoreBeginY;
  }
  if (rankConfig.m_iAvatarBeginX) {
    avatarBeginX = rankConfig.m_iAvatarBeginX;
  }
  if (rankConfig.m_iAvatarBeginY) {
    avatarBeginY = rankConfig.m_iAvatarBeginY;
  }
  if (rankConfig.m_iAvatarInterval) {
    avatarInterval = rankConfig.m_iAvatarInterval;
  }
  if (rankConfig.m_iAvatarWidth) {
    avatarWidth = rankConfig.m_iAvatarWidth;
  }
  if (rankConfig.m_iAvatarheight) {
    avatarHeight = rankConfig.m_iAvatarheight;
  }
  if (rankConfig.m_iNicknameMaxLength) {
    nicknameMaxLength = rankConfig.m_iNicknameMaxLength;
  }
  if (rankConfig.m_iMaxNum) {
    maxPlayer = rankConfig.m_iMaxNum;
  }
  if (rankConfig.m_sScoreKeyName) {
    scoreKeyName = rankConfig.m_sScoreKeyName;
  }
  if (rankConfig.m_sRankNumColor) {
    rankNumColor = rankConfig.m_sRankNumColor;
  }
  if (rankConfig.m_sNicknameColor) {
    nicknameColor = rankConfig.m_sNicknameColor;
  }
  if (rankConfig.m_sScoreColor) {
    scoreColor = rankConfig.m_sScoreColor;
  }
  if (rankConfig.m_iRankNumSize) {
    rankNumSize = rankConfig.m_iRankNumSize;
  }
  if (rankConfig.m_iNicknameSize) {
    nicknameSize = rankConfig.m_iNicknameSize;
  }
  if (rankConfig.m_iScoreSize) {
    scoreSize = rankConfig.m_iScoreSize;
  }
  if (rankConfig.layoutDir) {
    layoutDir = rankConfig.layoutDir;
  }
  if (rankConfig.m_AvatarSiz) {
    avatarSize = rankConfig.m_AvatarSiz;
  }
  if (rankConfig.selfNickName) {
    selfNickName = rankConfig.selfNickName;
  }
}



function HandleData(data) {
  openContext.clearRect(0, 0, openCanvas.width, openCanvas.height);
  ChangeRankConfig(mainData.data);
  switch (data.data.action) {
    case MessageType.PrePage:
      currentPage = currentPage - 1 < 0 ? 0 : --currentPage;
      break;
    case MessageType.NextPage:
      currentPage++;
      break;
    default:
      currentPage = 0;
      break;
  }
  switch (data.msgType) {
    case MessageType.ShowFriendRank:
      DrawFriend();
      break;
    case MessageType.ShowGroupRank:
      DrawGroup(data.shareTicket);
      break;
    case MessageType.ShowSelfRank:
      selfRankHandler();
      break;
    default:
      break;
  }
}

/**
 * 自己排名规则
 */
function selfRankHandler() {

  wx.getFriendCloudStorage
    (
    {
      keyList: [scoreKeyName],
      success: friendCloud => {
        SortRank(friendCloud.data);
        let tempArr = [];
        let rankArr = [];
        for (let a = 0; a < friendCloud.data.length; a++) {

          if (friendCloud.data[a].nickname == selfNickName) {

            rankStart = a;
            //拿比自己前一名好友
            if (a - 1 >= 0) {

              tempArr.push(friendCloud.data[a - 1]);
              rankArr.push(a - 1 + 1);
            }
            tempArr.push(friendCloud.data[a]);//自己成绩
            rankArr.push(a + 1);
            //拿比自己后一名好友
            if (a + 1 < friendCloud.data.length) {

              tempArr.push(friendCloud.data[a + 1]);
              rankArr.push(a + 1 + 1);
            }
            break;
          }
        }
        drawRank(tempArr, rankArr);
      },
      fail: errMsg => {
        console.log(errMsg);
      }
    }
    );
}

function DrawRank() {
  DrawRankBg();

}

function DrawFriend() {
  wx.getFriendCloudStorage
    (
    {
      keyList: [scoreKeyName],
      success: friendCloud => {
        SortRank(friendCloud.data);
        drawRank(friendCloud.data);
      },
      fail: errMsg => {
        console.log(errMsg);
      }
    }
    );
}

/**
 * 绘制排行榜
 */
function drawRank(friendCloud, rankArr = undefined) {

  let cnt = 0;//rankStart排名起始值
  let endPage = Math.ceil(getCount(friendCloud) / maxPlayer);//当前数据最大页数
  let startPage = currentPage >= endPage ? endPage - 1 : currentPage;//当前要翻的页
  let startIndex = startPage * maxPlayer;//起始下标
  let endIndex = startIndex + maxPlayer;//结束下标
  currentPage = currentPage < 0 ? 0 : currentPage;//判断当前页有没有超过最少页
  currentPage = currentPage >= endPage ? endPage - 1 : currentPage;//判断当前页有没有超过最后页
  let tempArr = [];
  for (let i = startIndex; i < endIndex; i++) {

    tempArr.push(i + 1);
    if (friendCloud[i] == null) {//说明没有数据

      break;
    }

    if (rankArr == undefined) {//排名

      rankArr = tempArr;
    }
    for (let j = 0; j < friendCloud[i].KVDataList.length; j++) {

      if (friendCloud[i].KVDataList[j].key == scoreKeyName) {
        DrawRankNum(cnt, rankArr);
        DrawAvatar(friendCloud[i].avatarUrl, cnt);
        DrawNickname(friendCloud[i].nickname, cnt);
        DrawScore(friendCloud[i].KVDataList[j].value, cnt);
        cnt++;
        break;
      }
    }

  }
}

function DrawGroup(tickets) {
  wx.getGroupCloudStorage({
    shareTicket: tickets,
    keyList: [scoreKeyName],
    success: groupCloud => {
      SortRank(groupCloud.data);
      let cnt = 0;
      let endPage = Math.ceil(getCount(groupCloud.data) / maxPlayer);//当前数据最大页数
      let startPage = currentPage >= endPage ? endPage - 1 : currentPage;//当前要翻的页
      let startIndex = startPage * maxPlayer;//起始下标
      let endIndex = startIndex + maxPlayer;//结束下标
      currentPage = currentPage < 0 ? 0 : currentPage;//判断当前页有没有超过最少页
      currentPage = currentPage >= endPage ? endPage - 1 : currentPage;//判断当前页有没有超过最后页
      let tempArr = [];
      for (let i = startIndex; i < endIndex; i++) {
        tempArr.push(i + 1);
        if (groupCloud.data[i] == null) {//说明没有数据

          break;
        }
        for (let j = 0; j < groupCloud.data[i].KVDataList.length; j++) {
          if (groupCloud.data[i].KVDataList[j].key == scoreKeyName) {
            DrawRankNum(cnt, tempArr);
            DrawAvatar(groupCloud.data[i].avatarUrl, cnt);
            DrawNickname(groupCloud.data[i].nickname, cnt);
            DrawScore(groupCloud.data[i].KVDataList[j].value, cnt);
            cnt++;
            break;
          }
        }

      }
    }
  })
}

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

function DrawRankNum(rankNum, rankArr) {
  if (rankNumBeginX < 0) {
    return;
  }
  let iRealRank = rankArr == undefined ? rankNum + 1 : rankArr[rankNum];//排名如果外部传值就用外部的 否则用默认规则
  let tempX, tempY;
  if (layoutDir == MessageType.Horizontal) {

    tempX = rankNumBeginX;
    tempY = img_IconY + (avatarInterval * rankNum + (avatarHeight - textHeight) / 2);
  }
  else {

    tempX = img_IconX + (avatarInterval * rankNum + (avatarWidth - openContext.measureText(iRealRank).width) / 2);
    tempY = rankNumBeginY;
  }

  openContext.fillStyle = rankNumColor;
  openContext.font = "bold " + rankNumSize.toString() + "px " + "Arial";
  openContext.fillText(iRealRank.toString(), tempX, tempY);
}

function DrawNickname(nickname, rankNum) {
  openContext.fillStyle = nicknameColor;
  openContext.font = "bold " + nicknameSize.toString() + "px " + "Arial";
  let tempX, tempY;
  if (layoutDir == MessageType.Horizontal) {

    tempX = nicknameBeginX;
    tempY = img_IconY + (avatarInterval * rankNum + (avatarHeight - textHeight) / 2);
  }
  else {

    tempX = img_IconX + (avatarInterval * rankNum + (avatarWidth - openContext.measureText(nickname).width) / 2);
    tempY = nicknameBeginY;
  }
  if (nickname.length >= nicknameMaxLength) {
    openContext.fillText(nickname.slice(0, nicknameMaxLength) + "...", tempX, tempY);
  }
  else {
    openContext.fillText(nickname, tempX, tempY);
  }
}

function DrawAvatar(imgUrl, rankNum) {
  let img = wx.createImage();
  imgUrl = imgUrl.substr(0, imgUrl.lastIndexOf("/")) + "/" + avatarSize;
  img.src = imgUrl;
  let tempX, tempY;
  if (layoutDir == MessageType.Horizontal) {

    tempX = img_IconX;
    tempY = img_IconY + avatarInterval * rankNum;
  }
  else {

    tempX = img_IconX + avatarInterval * rankNum;
    tempY = img_IconY;
  }
  img.onload = function () {

    openContext.drawImage(img, tempX, tempY, avatarWidth, avatarHeight);
  }
}

function DrawScore(score, rankNum) {
  openContext.fillStyle = scoreColor;
  openContext.font = "bold " + scoreSize.toString() + "px " + "Arial";
  let tempX, tempY;
  if (layoutDir == MessageType.Horizontal) {

    tempX = scoreBeginX;
    tempY = img_IconY + (avatarInterval * rankNum + (avatarHeight - textHeight) / 2);
  }
  else {

    tempX = img_IconX + (avatarInterval * rankNum + (avatarWidth - openContext.measureText(score).width) / 2);
    tempY = scoreBeginY;
  }
  openContext.fillText(score, tempX, tempY);
}

function getCount(listArr) {

  let count = 0;
  for (let a = 0; a < listArr.length; a++) {

    for (let b = 0; b < listArr[a].KVDataList.length; b++) {

      if (listArr[a].KVDataList[b].key == scoreKeyName) {

        count++;
      }
    }
  }

  return count;
}

var MessageType = {
  ShowFriendRank: 0,
  ShowGroupRank: 1,
  SetRankConfig: 2,
  ShowSelfRank: 3,
  PrePage: 100,
  NextPage: 101,
  RestCurrPage: 102,
  Horizontal: 200,
  Vertical: 201,
}


