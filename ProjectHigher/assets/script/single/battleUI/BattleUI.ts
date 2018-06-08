
import BrickManager from "../../brick/BrickManager";
import SingleApp from "../SingleApp";
import PvpEntrance from "../../pvp/PvpEntrance";
import SingleEntrance from "../SingleEntrance";
import {GlobalProtoID,ReqPlayerRankList,ReqUpdatePlayerMaxScore,RspPlayerRankList,ReqGetPlayerNearbyRank} from "../../pp/proto";
import Core from "../../../corelibs/Core";
import {ResStruct} from "../../../corelibs/util/ResourcesMgr";
import {ResType} from "../../../corelibs/CoreDefine";
import {basename} from "path";
import {ShareAppMsg,RankConfig} from "../../../corelibs/sdk/wxgame/SdkObject";
import {ImageUrlType} from "../../../corelibs/sdk/SdkType";


const {ccclass,property} = cc._decorator;

/*
  此脚本加载所需的UI
  按钮(音乐开关。。。)
  人口数
  楼层数目

  待补充
*/


@ccclass
export default class BattleUI extends cc.Component
{

    public SingleApp: SingleApp = null;
    //这个按钮是控制砖块掉落的
    private m_btnRelease: cc.Node = null;

    //该节点为空节点，含有三个按钮、楼层数、人口总数.
    private m_All: cc.Node = null;
    @property(cc.AudioClip)
    public m_baseMusic: cc.AudioClip = null;
    @property(cc.Node)
    private m_shit: cc.Node = null;
    @property(cc.Node)
    private m_scrollview: cc.Node = null;
    private current: number = 0;
    //这三个按钮是备用（具体功能待定）位置：右上方
    // private m_btn1: cc.Node = null;
    // private m_btn2: cc.Node = null;
    // private m_btn3: cc.Node = null;
    //这个是控制完美下落时候的加分进度（即在这个进度条显示的时候，人口有加成） 位置：最上面的中间
    private m_PrefectNum: number = 0;     //当前完美个数
    private m_PrefectLastNum: number = 0;
    private m_Prefect: cc.Node = null;    //空节点（prefeb)
    private m_Label: cc.Node = null;      //倍数显示
    private m_ProgressBar: cc.Node = null; //进度条（5秒）
    //这个是每一个砖块掉落时候的人口显示   位置：左上方
    private m_OneBrickNum: cc.Node = null;
    //这是总人口  位置：右下    他显示每一块砖的人口（左上方的那个数字）总和，当有完美降落的时候，他也只是显示加上（左上方的），但完美降落加成结束后，会加上加成的所有数字）
    private m_PeopleNum: cc.Node = null;
    //这个是楼层高度  位置： 左下
    private m_FloorNum: cc.Node = null;
    //可失败次数
    // private m_DamageNum: cc.Node = null;
    //一轮完美得分
    private m_AllScore: cc.Node = null;
    private m_AllScoreaction: number = 0;
    @property(cc.Node)
    private m_JS: cc.Node = null;
    private m_Rank: cc.Node = null;
    // private m_PVP: cc.Node = null;
    private m_Entrance: SingleEntrance = null;
    private m_BrickMng: BrickManager = null;
    private m_HPnode: cc.Node[] = [];
    private m_HP: number = 3;
    private m_HPmax: number = 3;
    private m_lou: cc.Node = null;
    private readynum: number = 0;
    private Endnum: number = 0;
    private m_OneRank: cc.Node[] = [];
    private m_NearRank: cc.Node[] = [];
    private m_OneRankH: cc.Node[] = [];


    onLoad()
    {
    }

    start()
    {
        //console.log("UIStart!");
        this.readynum = 0;
        this.Endnum = 0;
        this.m_btnRelease = this.node.getChildByName("ReleaseBtn");
        //加载预制体
        // cc.loader.loadRes("prefabs/AllButton",this.OnLoadResponse.bind(this));
        // cc.loader.loadRes("prefabs/OneBrickNum",this.OnloadOneBrick.bind(this));
        // cc.loader.loadRes("prefabs/AllScore",this.OnLoadAllSocre.bind(this));
        // cc.loader.loadRes("prefabs/HP",this.OnloadResHP.bind(this));
        Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("prefabs/AllButton",ResType.Prefab),this.OnLoadResponse.bind(this));
        Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("prefabs/lou",ResType.Prefab),this.OnLoadResponselou.bind(this));
        Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("prefabs/OneBrickNum",ResType.Prefab),this.OnloadOneBrick.bind(this));
        Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("prefabs/AllScore",ResType.Prefab),this.OnLoadAllSocre.bind(this));
        Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("prefabs/HP",ResType.Prefab),this.OnloadResHP.bind(this));
        //Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("sound/music/score",ResType.AudioClip),this.OnloadSound.bind(this));
        // Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("sound/music/baseMusic",ResType.AudioClip),this.OnloadSound.bind(this));
        Core.AudioMgr.PlayMusic("baseMusic");
        // cc.loader.load(cc.url.raw('resources/jump.mp3'),this.OnloadSound.bind(this));
        this.InitEvent();
        //排行榜事件监听
        Core.EventMgr.BindEvent(GlobalProtoID.RSP_PLAYER_RANKLIST,this.OnPlayerRankList,this);
        Core.EventMgr.BindEvent(GlobalProtoID.RSP_GET_PLAYER_NEARBY_RANK,this.OnPlayerNearbyRankList,this);
        this.AddJS();
        //console.log("UIStart!2");
    }
    init()
    {
        this.node.addChild(this.m_All);
        this.node.addChild(this.m_lou);
        // this.m_lou = this.m_All.getChildByName("lou");
        this.m_FloorNum = this.m_lou.getChildByName("LouLabel");    //楼层数
        this.m_PeopleNum = this.m_All.getChildByName("timg").getChildByName("PeopleLabel");  //人口数

        this.node.addChild(this.m_OneBrickNum);

        this.node.addChild(this.m_AllScore);
        this.m_AllScore.getComponent(cc.Label).string = "";

        this.m_Entrance = cc.find("GameApp").getComponent(SingleEntrance);
        this.m_BrickMng = this.m_Entrance.SingleApp.m_stBrickManager;
        for(let i = 0;i < this.m_HP;i++)
        {
            this.m_lou.addChild(this.m_HPnode[i]);
            this.m_HPnode[i].setPositionX(0);
            this.m_HPnode[i].setPositionY(i * this.m_HPnode[i].height);
        }
        //this.current = cc.audioEngine.play(this.m_baseMusic,true,1);
    }
    private m_stTimer: cc.Component;    //用于计划任务

    private rankListGo()
    {
        this.m_stTimer = new cc.Component();
        //设置一下排行榜配置
        let stRankConfig = new RankConfig();
        stRankConfig.TextSize = 40;
        stRankConfig.TextColor = "#FFFFFF";
        Core.SdkHandleMgr.SetRankConfig(stRankConfig);
        //开始渲染排行榜
        Core.SdkHandleMgr.ShowFriendRank();

        this.m_scrollview.getChildByName("view").getChildByName("content").height = Core.SdkHandleMgr.GetRankHeight() / 4;
        this.m_shit = this.m_scrollview.getChildByName("view").getChildByName("content").getChildByName("target");
        this.m_shit.height = Core.SdkHandleMgr.GetRankHeight();
        //this.m_shit.anchorY = 1;
        this.m_shit.width = Core.SdkHandleMgr.GetRankWidht();
        this.m_shit.zIndex = 11;

        console.log(this.m_shit.height + "height");
        console.log(this.m_shit.width + "width");

        //避免this指针在回调里混乱
        let self = this;
        //准备好一张接收排行榜的图片
        let texture = new cc.Texture2D();
        //延时1秒后，每0.1秒获取一次排行榜图片，一共获取30次，尽量保证排行榜已经成功渲染出来
        console.log(texture);


        this.m_stTimer.schedule(function()
        {
            //将排行榜贴图置入对应的材质图片中
            Core.SdkHandleMgr.GetRankTexture(texture);
            //设置对应的Sprite里SpriteFramd的材质
            if(self.m_shit != null)
            {
                if(!self.m_shit.getComponent(cc.Sprite).spriteFrame)
                {
                    self.m_shit.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame();
                }
                self.m_shit.getComponent(cc.Sprite).spriteFrame.setTexture(texture);
            }
        },0.1,30,1);
        //cc.audioEngine.stop(this.current);
    }
    private OnloadSound(prefab)
    {
        this.m_baseMusic = prefab;
        //cc.log(this.m_baseMusic);
        // cc.audioEngine.play(this.m_baseMusic,true,1);
    }
    public OnloadResHP(prefab)
    {
        for(let i = 0;i < this.m_HPmax;i++)
        {
            this.m_HPnode[i] = cc.instantiate(prefab);
        }

        this.readynum++;
        console.log("HP");
    }
    public OnLoadResponse(prefab)
    {

        this.m_All = cc.instantiate(prefab);
        this.readynum++;
        //console.log("OnLoadResponse");
    }

    public OnLoadResponselou(prefab)
    {
        this.m_lou = cc.instantiate(prefab);
        this.readynum++;

    }


    //按钮对应具体的函数
    InitEvent()
    {
        this.m_btnRelease.on("click",this.OnClickHandler,this);
    }

    private OnClickHandler()
    {
        if(this.SingleApp != null)
            this.SingleApp.m_stBrickManager.OnReleaseBtnClicked();
    }
    //楼层数
    private FloorNumber()
    {
        //this.m_FloorNum.getComponent(cc.Label).string = BrickManager.Instance.GetBrickNum().toString();
    }
    //人口数
    private PeopleNumber(hhx: number)
    {
        this.m_PeopleNum.getComponent(cc.Label).string = hhx.toString();//老哥你这个参数有问题！！！！！！！！！！！！！！
    }

    //单个得分数
    private OneBrick(hhx: number)
    {
        //this.m_OneBrickNum.getComponent(cc.Label).string = hhx.toString();

    }
    //游戏结束
    private ChangeGameOver()
    {
        if(this.m_HP == 0)
        {
            this.m_btnRelease.active = false;
            this.m_JS.active = true;
            console.log("游戏结束");
            this.m_JS.getChildByName("num_RenKou").getComponent(cc.Label).string = this.m_PeopleNum.getComponent(cc.Label).string;
            console.log("游戏结束2");
            this.m_JS.getChildByName("Again").on("click",this.OnAgain,this);
            console.log("游戏结束3");
            //this.m_JS.getChildByName("FindRank").on("click",this.ShowRank,this);
            this.m_JS.getChildByName("Fenxiang").on("click",this.Share,this);
            console.log("游戏结束4");
            /*
            let req4: ReqUpdatePlayerMaxScore = ReqUpdatePlayerMaxScore.create();
            // 填写pb内容
            req4.itype = 1;
            req4.score = this.m_iTotalPeopleNum;
            console.log("最终分数 === " + this.m_iTotalPeopleNum);
            let buff4: Uint8Array = ReqUpdatePlayerMaxScore.encode(req4).finish();
            //向服务器发送自己的请求，第一个参数为自己定义的协议号，第二个参数为pb生成的uint8array串
            Core.ServerHandler.PlayerGlobalData(GlobalProtoID.REQ_UPDATE_PLAY_MAX_SCORE,buff4);



            let req5: ReqGetPlayerNearbyRank = ReqGetPlayerNearbyRank.create();
            req5.itype = 1;
            let buff5: Uint8Array = ReqGetPlayerNearbyRank.encode(req5).finish();
            Core.ServerHandler.PlayerGlobalData(GlobalProtoID.REQ_GET_PLAYER_NEARBY_RANK,buff5);
            // 请求排行榜
            // 使用自己的pb生成uint8array串
            let req6: ReqPlayerRankList = ReqPlayerRankList.create();
            // 填写pb内容
            req6.itype = 1; // type == 1 表示是分数的排行榜  type == 2 表示是楼高的排行榜
            req6.beginRank = 1;
            req6.len = 100;
            let buff6: Uint8Array = ReqPlayerRankList.encode(req6).finish();
            //向服务器发送自己的请求，第一个参数为自己定义的协议号，第二个参数为pb生成的uint8array串
            Core.ServerHandler.PlayerGlobalData(GlobalProtoID.REQ_PLAYER_RANKLIST,buff6);
            


            let req: ReqUpdatePlayerMaxScore = ReqUpdatePlayerMaxScore.create();
            // 填写pb内容
            req.itype = 2;
            req.score = this.SingleApp.m_stBrickManager.GetBrickNum() - 1;
            console.log("最终分数 === " + this.m_iTotalPeopleNum);
            let buff: Uint8Array = ReqUpdatePlayerMaxScore.encode(req).finish();
            //向服务器发送自己的请求，第一个参数为自己定义的协议号，第二个参数为pb生成的uint8array串
            Core.ServerHandler.PlayerGlobalData(GlobalProtoID.REQ_UPDATE_PLAY_MAX_SCORE,buff);
            let req3: ReqGetPlayerNearbyRank = ReqGetPlayerNearbyRank.create();
            req3.itype = 2;
            let buff3: Uint8Array = ReqGetPlayerNearbyRank.encode(req3).finish();
            Core.ServerHandler.PlayerGlobalData(GlobalProtoID.REQ_GET_PLAYER_NEARBY_RANK,buff);
            // 请求排行榜
            // 使用自己的pb生成uint8array串
            
            let req2: ReqPlayerRankList = ReqPlayerRankList.create();
            // 填写pb内容
            req2.itype = 2; // type == 1 表示是分数的排行榜  type == 2 表示是楼高的排行榜
            req2.beginRank = 1;
            req2.len = 100;
            let buff2: Uint8Array = ReqPlayerRankList.encode(req2).finish();
            //向服务器发送自己的请求，第一个参数为自己定义的协议号，第二个参数为pb生成的uint8array串
            Core.ServerHandler.PlayerGlobalData(GlobalProtoID.REQ_PLAYER_RANKLIST,buff2);
            */

            let score: number = this.m_iTotalPeopleNum;
            console.log(Core.ServerHandler.m_iUin);
            Core.SdkHandleMgr.UploadDataToCloud("score",score.toString());
            //Core.SdkHandleMgr.RemoveDataFromCloud(Core.ServerHandler.m_iUin.toString());
            this.rankListGo();
            //cc.audioEngine.stop(this.current);
        }
    }

    /**
     * 点击分享按钮
     */
    private Share()
    {
        console.log("点击分享按钮");
        let stShareAppMsg: ShareAppMsg = new ShareAppMsg();
        stShareAppMsg.Title = "我在欢乐建造得到了" + this.m_iTotalPeopleNum + "分，来挑战我吧！";
        stShareAppMsg.ImageUrl = "aaa.jpg"
        stShareAppMsg.SetImageUrlType(ImageUrlType.LOCAL);
        //关键字为"team"（字符串） ，值为对应的队伍id号（或者说是房间号）,都是字符串
        stShareAppMsg.SetQueryKV("分数",this.m_iTotalPeopleNum.toString());
        Core.SdkHandleMgr.Share(stShareAppMsg);
    }

    // /**
    //  * 点击分享按钮
    //  */
    // private Share()
    // {
    //     console.log("点击分享按钮");
    //     let stShareAppMsg: ShareAppMsg = new ShareAppMsg();
    //     stShareAppMsg.Title = "我在欢乐建造得到了" + this.m_iTotalPeopleNum + "分，来挑战我吧！";
    //     stShareAppMsg.ImageUrl = "aaa.jpg"
    //     stShareAppMsg.SetImageUrlType(ImageUrlType.LOCAL);
    //     //关键字为"team"（字符串） ，值为对应的队伍id号（或者说是房间号）,都是字符串
    //     stShareAppMsg.SetQueryKV("分数",this.m_iTotalPeopleNum.toString());
    //     Core.SdkHandleMgr.Share(stShareAppMsg);
    // }

    private ShowRank()
    {
        this.m_JS.active = false;
        for(let i = 0;i < this.nearlen;i++) this.m_NearRank[i].active = false;
        this.m_Rank.getChildByName("Rank").getChildByName("tuichu").on("click",this.OnExitRanklist,this);
        this.m_Rank.getChildByName("louceng").on("click",this.ChangeToLouCeng,this);
        this.m_Rank.getChildByName("rengkou").on("click",this.ChangeToRengkou,this);
        this.m_Rank.active = true;
    }
    private ChangeToLouCeng()
    {
        for(let i = 0;i < this.tol_number;i++)
        {
            this.m_OneRank[i].active = false;
            this.m_OneRankH[i].active = true;
        }
        this.m_Rank.getChildByName("NewNode").getChildByName("rengkou").active = false;
        this.m_Rank.getChildByName("NewNode").getChildByName("louceng").active = true;
    }
    private ChangeToRengkou()
    {
        for(let i = 0;i < this.tol_number;i++)
        {
            this.m_OneRank[i].active = true;
            this.m_OneRankH[i].active = false;
        }
        this.m_Rank.getChildByName("NewNode").getChildByName("rengkou").active = true;
        this.m_Rank.getChildByName("NewNode").getChildByName("louceng").active = false;
    }
    private OnExitRanklist()
    {
        this.m_JS.active = true;
        for(let i = 0;i < this.nearlen;i++) this.m_NearRank[i].active = true;
        this.m_Rank.active = false;
    }

    //单个箱子降落获得的分数
    private flag: boolean = true;
    private OneBrickNumber(num: number)
    {

        this.OneBrick(num);
        this.PeopleNumber(this.m_iTotalPeopleNum);

    }
    public OnloadOneBrick(prefab)
    {

        this.m_OneBrickNum = cc.instantiate(prefab);
        cc.log("生成单个砖块分数预制体");

        this.readynum++;
        console.log("OneBrick");
    }


    //完美降落
    private PrefectDown()
    {
        //console.log(this.m_PrefectNum);
        if(this.m_PrefectNum === 0)
        {
            if(this.m_Prefect == null)
                Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("prefabs/PerfectDown",ResType.Prefab),this.OnLoadPrefectDown.bind(this));
            else
            {
                this.m_Prefect.active = true;
                //let Max: number = this.m_Prefect.getComponent(cc.Sprite).fillRange;
                let Max: number = this.m_Prefect.getChildByName("GreenCircle").getComponent(cc.Sprite).fillRange;
                //console.log(this.m_Prefect.getComponent(cc.Sprite).fillRange);
                //this.m_Prefect.getComponent(cc.Sprite).fillRange = 1;
                this.m_Prefect.getChildByName("GreenCircle").getComponent(cc.Sprite).fillRange = 1;
                this.m_Prefect.getChildByName("LightGreenCircle").getComponent(cc.Sprite).fillRange = 1;
                this.m_Prefect.getChildByName("YellowCircle").getComponent(cc.Sprite).fillRange = 1;
                this.m_Prefect.getChildByName("RedCircle").getComponent(cc.Sprite).fillRange = 1;
                this.m_Prefect.getChildByName("GreenCircle").opacity = 255;
                this.m_Prefect.getChildByName("LightGreenCircle").opacity = 0;
                this.m_Prefect.getChildByName("YellowCircle").opacity = 0;
                this.m_Prefect.getChildByName("RedCircle").opacity = 0;
                this.m_PrefectNum = 1;
            }
        }
        //当前为开始完美降落的加分阶段,生成预制体
        //console.log(this.m_PrefectNum);

        this.m_PrefectNum++;
    }
    //生成进度条
    public OnLoadPrefectDown(prefab)
    {

        this.m_Prefect = cc.instantiate(prefab);
        cc.log("生成进度条预制体");
        //把该预制体挂到canvas上
        this.node.addChild(this.m_Prefect);

        //let Max: number = this.m_Prefect.getComponent(cc.Sprite).fillRange;
        let Max: number = this.m_Prefect.getChildByName("GreenCircle").getComponent(cc.Sprite).fillRange;

        //this.m_Prefect.getComponent(cc.Sprite).fillRange = 1;
        this.m_Prefect.getChildByName("GreenCircle").getComponent(cc.Sprite).fillRange = 1;
        this.m_Prefect.getChildByName("LightGreenCircle").getComponent(cc.Sprite).fillRange = 1;
        this.m_Prefect.getChildByName("YellowCircle").getComponent(cc.Sprite).fillRange = 1;
        this.m_Prefect.getChildByName("RedCircle").getComponent(cc.Sprite).fillRange = 1;
        this.m_Prefect.getChildByName("GreenCircle").opacity = 255;
        this.m_Prefect.getChildByName("LightGreenCircle").opacity = 0;
        this.m_Prefect.getChildByName("YellowCircle").opacity = 0;
        this.m_Prefect.getChildByName("RedCircle").opacity = 0;
        this.m_PrefectNum = 1;
    }
    public OnLoadAllSocre(prefab)
    {

        this.m_AllScore = cc.instantiate(prefab);

        cc.log("生成一轮完美降落得分prefb");

        this.readynum++;
        console.log("Sorce");
    }
    private AllScore(hhx: number)
    {
        this.m_AllScore.getComponent(cc.Label).string = "+" + hhx.toString();
        this.m_AllScoreaction = 2;
    }
    private m_iTotalPeopleNum = 0;
    private dx = 40;
    private dy = 5;
    private prefect_total = 0;
    update(dt)
    {
        if(this.loadflag1 && this.loadflag2 && this.loadflag3)
        {
            let p = this.m_Rank.getChildByName("Rank").getChildByName("view").getChildByName("content").getChildByName("target").getPosition();
            //cc.log(p);
            let num = this.m_OneRank[0].height * this.tol_number / 4 + this.m_OneRank[0].height / 2;
            this.m_Rank.getChildByName("Rank").getChildByName("view").getChildByName("content").height = num;
            for(let i = 0;i < this.tol_number;i++)
            {
                this.m_Rank.getChildByName("Rank").getChildByName("view").getChildByName("content").addChild(this.m_OneRank[i]);
                this.m_OneRank[i].setPosition(p.add(cc.p(0,-1 * (i + 1) * this.m_OneRank[i].height / 4)));
                this.m_OneRank[i].scaleX = 0.37;
                this.m_OneRank[i].scaleY = 0.25;
                this.m_Rank.getChildByName("Rank").getChildByName("view").getChildByName("content").addChild(this.m_OneRankH[i]);
                this.m_OneRankH[i].setPosition(p.add(cc.p(0,-1 * (i + 1) * this.m_OneRankH[i].height / 4)));
                this.m_OneRankH[i].scaleX = 0.37;
                this.m_OneRankH[i].scaleY = 0.25;
                this.m_OneRankH[i].active = false;
            }

            p = this.m_JS.getChildByName("level1").getPosition();
            for(let i = 0;i < 5;i++)
            {
                this.node.addChild(this.m_NearRank[i]);
                this.m_NearRank[i].setPosition(p.add(cc.p(0,-1 * i * this.m_NearRank[i].height)));
            }
            this.m_JS.active = false;
            for(let i = 0;i < 5;i++) this.m_NearRank[i].active = false;
            this.loadflag1 = false;
            this.loadflag2 = false;
            this.loadflag3 = false;
        }
        if(this.readynum != -1)
        {
            if(this.readynum == 5)
            {
                this.init();
                this.readynum = -1;
            }
            else
            {
                return;
            }
        }
        if(this.m_HP != this.m_BrickMng.m_HP)
        {
            this.m_HP = this.m_BrickMng.m_HP;
            for(let i = this.m_HPmax - 1;i >= this.m_HP;i--)
            {
                this.m_HPnode[i].active = false;
            }
            this.ChangeGameOver();
        }

        if(this.m_AllScoreaction == 2)
        {
            // console.log(this.m_AllScore.getComponent(cc.Label).string);
            this.m_AllScore.getComponent(cc.Label).fontSize += 10;
            if(this.m_AllScore.getComponent(cc.Label).fontSize >= 250)
            {
                this.m_AllScoreaction = 1;
            }

        }
        else if(this.m_AllScoreaction == 1)
        {
            this.m_AllScore.getComponent(cc.Label).fontSize -= 4;
            if(this.m_AllScore.getComponent(cc.Label).fontSize < 40)
            {
                this.m_AllScore.getComponent(cc.Label).string = "";
                this.m_AllScoreaction = 0;
            }
        }
        if(this.m_FloorNum == null)
        {
            return;
        }
        this.m_FloorNum.getComponent(cc.Label).string = (this.SingleApp.m_stBrickManager.GetBrickNum() - 1).toString();
        if(this.SingleApp.m_stBrickManager.m_bIsFall) Core.AudioMgr.PlaySound("score");
        if(this.SingleApp.m_stBrickManager.GetSPNum() > 0)
        {
            let x = this.SingleApp.m_stBrickManager.GetSinglePeople();
            if(x == 3)
            {
                this.PrefectDown();
            }
            if(x > 0)
                Core.AudioMgr.PlaySound("jump");
            x = x * (Math.floor(this.SingleApp.m_stBrickManager.GetBrickNum() / 20) + 1);
            this.m_iTotalPeopleNum += x;
            this.prefect_total += x;
            this.OneBrickNumber(x);
        }
        if(this.m_PrefectNum > 0)
        {
            //  console.log(this.m_PrefectLastNum);
            //console.log(this.m_PrefectNum);
            if(this.m_Prefect == null || this.SingleApp == null)
            {
                return;
            }
            this.SingleApp.m_stBrickManager.PrefectEffect();
            if(this.m_Prefect.getChildByName("RedCircle").getComponent(cc.Sprite).fillRange <= 0 || this.SingleApp.m_stBrickManager.m_bIsFall == true)
            {//进度条百分比为0,重置，并且销毁这个预设体
                let x: number = this.m_PrefectNum * this.prefect_total;
                this.m_iTotalPeopleNum += x;
                this.m_PrefectNum = 0;
                this.m_PrefectLastNum = 0;
                this.SingleApp.m_stBrickManager.m_bIsFall = false;
                this.m_Prefect.active = false;
                //开始该轮完美降落总得分

                //显示得分
                this.SingleApp.m_stBrickManager.ExitEffect();
                this.AllScore(x);
                this.OneBrickNumber(x);
                this.prefect_total = 0;
            }
            else
            {
                if(this.m_PrefectLastNum != this.m_PrefectNum)
                {   //代表重新开始这个加分阶段
                    this.m_PrefectLastNum = this.m_PrefectNum;
                    //然后根据m_prefectNumber改变label的倍数
                    let sss: string = "";

                    let kk: number = this.m_PrefectNum;
                    sss += kk;

                    this.m_Prefect.getChildByName("PrefectNum").getComponent(cc.Label).string = sss;
                    this.m_Prefect.getChildByName("OneBrickNum").getComponent(cc.Label).string = this.prefect_total.toString();
                    this.dy = 5;
                    //this.m_Prefect.getComponent(cc.Sprite).fillRange = 1;
                    this.m_Prefect.getChildByName("GreenCircle").getComponent(cc.Sprite).fillRange = 1;
                    this.m_Prefect.getChildByName("LightGreenCircle").getComponent(cc.Sprite).fillRange = 1;
                    this.m_Prefect.getChildByName("YellowCircle").getComponent(cc.Sprite).fillRange = 1;
                    this.m_Prefect.getChildByName("RedCircle").getComponent(cc.Sprite).fillRange = 1;
                    this.m_Prefect.getChildByName("GreenCircle").opacity = 255;
                    this.m_Prefect.getChildByName("LightGreenCircle").opacity = 0;
                    this.m_Prefect.getChildByName("YellowCircle").opacity = 0;
                    this.m_Prefect.getChildByName("RedCircle").opacity = 0;
                }
                else
                {  //加分阶段不需要重新开始，执行5秒即可
                    this.dy -= dt;
                    let sss: string = "";

                    let kk: number = this.m_PrefectNum;
                    sss += kk;

                    this.m_Prefect.getChildByName("PrefectNum").getComponent(cc.Label).string = sss;
                    this.m_Prefect.getChildByName("OneBrickNum").getComponent(cc.Label).string = this.prefect_total.toString();
                    //this.m_Prefect.getComponent(cc.Sprite).fillRange = this.dx * this.dy / 200;
                    this.m_Prefect.getChildByName("GreenCircle").getComponent(cc.Sprite).fillRange = this.dx * this.dy / 200;
                    this.m_Prefect.getChildByName("LightGreenCircle").getComponent(cc.Sprite).fillRange = this.dx * this.dy / 200;
                    this.m_Prefect.getChildByName("YellowCircle").getComponent(cc.Sprite).fillRange = this.dx * this.dy / 200;
                    this.m_Prefect.getChildByName("RedCircle").getComponent(cc.Sprite).fillRange = this.dx * this.dy / 200;
                    if(this.dx * this.dy > 150)
                    {
                        this.m_Prefect.getChildByName("GreenCircle").opacity = (this.dx * this.dy - 150) / 50 * 255;
                        this.m_Prefect.getChildByName("LightGreenCircle").opacity = 255;
                    }
                    else if(this.dx * this.dy > 100)
                    {
                        this.m_Prefect.getChildByName("LightGreenCircle").opacity = (this.dx * this.dy - 100) / 50 * 255;
                        this.m_Prefect.getChildByName("YellowCircle").opacity = 255;
                    }
                    else if(this.dx * this.dy > 50)
                    {
                        this.m_Prefect.getChildByName("YellowCircle").opacity = (this.dx * this.dy - 50) / 50 * 255;
                        this.m_Prefect.getChildByName("RedCircle").opacity = 255;
                    }
                    else
                    {

                    }
                }
            }
        }
        else
        {
            this.SingleApp.m_stBrickManager.m_bIsFall = false;
            this.prefect_total = 0;
        }
    }

    AddJS()
    {
        //Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("prefabs/JS",ResType.Prefab),this.initJS.bind(this));
        //Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("prefabs/RankUI",ResType.Prefab),this.AllRank.bind(this));
        //Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("prefabs/OneRank",ResType.Prefab),this.OneRank.bind(this));
    }
    private loadflag1: boolean = false;
    private loadflag2: boolean = false;
    AllRank(prefab)
    {
        this.m_Rank = cc.instantiate(prefab);
        this.node.addChild(this.m_Rank);
        this.m_Rank.active = false;
        this.loadflag1 = true;
        // cc.log('shit');
    }
    private loadflag3: boolean = false;
    initJS(prefab)
    {

        this.m_JS = cc.instantiate(prefab);
        cc.log("生成结算界面");
        this.node.addChild(this.m_JS);
        this.m_JS.zIndex = 10;
        this.m_JS.active = false;
        this.loadflag3 = true;

    }
    public OneRank(prefab)
    {
        // if(err)
        // {
        //     cc.error("loading prefabs/OneRank failed")
        //     return;
        // }
        for(let i = 0;i < this.tol_number;i++)
        {
            this.m_OneRank[i] = cc.instantiate(prefab);
            this.m_OneRank[i].zIndex = 11;
            this.m_OneRankH[i] = cc.instantiate(prefab);
            this.m_OneRankH[i].zIndex = 11;
        }
        for(let i = 0;i < 5;i++)
        {
            this.m_NearRank[i] = cc.instantiate(prefab);
            this.m_NearRank[i].zIndex = 11;
        }

        //console.log("false!");
        this.loadflag2 = true;

    }
    OnAgain()
    {
        console.log("再来一局");
        // Core.ResourcesMgr.Release
        Core.Ticker.RemoveKeyTick(cc.find("GameApp").getComponent("SingleEntrance"));
        Core.Ticker.RemoveUpdate(cc.find("GameApp").getComponent("SingleEntrance"));

        //Core.EventMgr.UnbindEvent(CSProtoID.RSP_PLAYER_LOGIN,this.OnLogin,this);
        Core.EventMgr.UnbindEvent(GlobalProtoID.RSP_PLAYER_RANKLIST,this.OnPlayerRankList,this);
        Core.EventMgr.UnbindEvent(GlobalProtoID.RSP_GET_PLAYER_NEARBY_RANK,this.OnPlayerNearbyRankList,this);
        //Core.EventMgr.Clear();
        cc.director.loadScene("BaseGame");
    }
    OnReturn()
    {
        console.log("返回大厅");
        cc.director.loadScene("Lobby");
    }

    private rrsp: RspPlayerRankList;
    private top: number;
    private tol_number: number = 100;
    private OnPlayerRankList(buff: Uint8Array): void
    {

        // 使用pb解析服务器返回的uint8array串
        this.rrsp = RspPlayerRankList.decode(buff);

        let playerEntry = this.rrsp.playerEntry;
        let entryList = this.rrsp.entryList;
        let len = entryList.length;
        let type = this.rrsp.itype;
        /*
        if(type != 1) {
            let myRank = 0;
            //console.log("hhhhhhhhhhhhhhx   ==== " + len);
            for(let i = 0;i < len;i++) 
            {
                let rankEntry = entryList[i];
                let uin = rankEntry.uin;
                //cc.log(i+"shit "+rankEntry.score);
                let rank = i + 1;
                let score = rankEntry.score;
                //console.log("第" + rank + "名: " + uin + ", uid: " + uin + "score: " + score);
            }
            this.top = Math.max(0,myRank - 2);
            var best: number = this.m_iTotalPeopleNum;
            //cc.log(this.top);
            for(let i = 0;i < this.tol_number;i++)
            {
                if(this.m_OneRankH[i] == null) continue;
                if(len<=i)  break;
                this.m_OneRankH[i].getChildByName("Rank").getComponent(cc.Label).string = (this.top + i + 1).toString();
                if(entryList[this.top + i].uin == Core.ServerHandler.m_iUin)
                {
                    this.m_OneRankH[i].getChildByName("Name").getComponent(cc.Label).string = (entryList[this.top + i].uin).toString() + "(自己)";
                }
                else
                {
                    this.m_OneRankH[i].getChildByName("Name").getComponent(cc.Label).string = (entryList[this.top + i].uin).toString();
                }
                this.m_OneRankH[i].getChildByName("Scores").getComponent(cc.Label).string = (entryList[this.top + i].score).toString();

                if(entryList[this.top + i].uin == Core.ServerHandler.m_iUin)
                {
                    //console.log("2 2222222222" + entryList[this.top + i].score + "  " + best);
                    if(entryList[this.top + i].score > best)
                    {
                        best = entryList[this.top + i].score;
                    }
                }
            }
            return;
        }
        let myRank = 0;
        for(let i = 0;i < len;i++) 
        {
            let rankEntry = entryList[i];
            let uin = rankEntry.uin;
            let rank = i + 1;
            let score = rankEntry.score;
            //console.log("第" + rank + "名: " + uin + ", uid: " + uin + "score: " + score);
        }
        this.top = Math.max(0,myRank - 2);
        var best: number = this.m_iTotalPeopleNum;
        for(let i = 0;i < this.tol_number;i++)
        {
            if(this.m_OneRank[i] == null) continue;
            if(len<=i)  break;
            this.m_OneRank[i].getChildByName("Rank").getComponent(cc.Label).string = (this.top + i + 1).toString();
            if(entryList[this.top + i].uin == Core.ServerHandler.m_iUin)
            {
                this.m_OneRank[i].getChildByName("Name").getComponent(cc.Label).string = (entryList[this.top + i].uin).toString() + "(自己)";
            }
            else
            {
                this.m_OneRank[i].getChildByName("Name").getComponent(cc.Label).string = (entryList[this.top + i].uin).toString();
            }
            this.m_OneRank[i].getChildByName("Scores").getComponent(cc.Label).string = (entryList[this.top + i].score).toString();

            if(entryList[this.top + i].uin == Core.ServerHandler.m_iUin)
            {
                //console.log("2 2222222222" + entryList[this.top + i].score + "  " + best);
                if(entryList[this.top + i].score > best)
                {
                    best = entryList[this.top + i].score;
                }
            }
        }

        this.m_JS.getChildByName("BestScore").getComponent(cc.Label).string = best.toString();
        */
    }
    private nearlen: number = 3;//用于特判的变量
    private OnPlayerNearbyRankList(buff: Uint8Array): void
    {
        /*
        let fff: RspPlayerRankList = RspPlayerRankList.decode(buff);
        let playerEntry = fff.playerEntry;
        let entryList = fff.entryList;
        let len = entryList.length;
        let type = fff.itype;
        if(type != 1) return;
        this.nearlen = len;

        for(let i = 0;i < len;i++) 
        {
            let rankEntry = entryList[i];
            let uin = rankEntry.uin;
            let rank = rankEntry.rank;
            let score = rankEntry.score;
            console.log("这是附近的排行榜 2333   第" + rank + "名: " + uin + ", uid: " + uin + "score: " + score);
        }
        
        var best: number = this.m_iTotalPeopleNum;
        for(let i = 0;i < len;i++)
        {
            let rankEntry = entryList[i];
            let uin = rankEntry.uin;
            let rank = rankEntry.rank;
            let score = rankEntry.score;
            /*
            if(this.m_NearRank[i] == null)
            {
                continue;
            }
            this.m_NearRank[i].getChildByName("Rank").getComponent(cc.Label).string = rank.toString();
            if(uin == Core.ServerHandler.m_iUin)
            {
                //this.m_NearRank[i].getChildByName("Name").getComponent(cc.Label).string = (uin).toString() + "(自己)";
                if(score > best)
                    best = score;
            }
            //else        this.m_NearRank[i].getChildByName("Name").getComponent(cc.Label).string = (uin).toString();
            //this.m_NearRank[i].getChildByName("Scores").getComponent(cc.Label).string = score.toString();
        }
        //cc.log(this.nearlen);
        //for(let i = 0;i < this.nearlen;i++) this.m_NearRank[i].active = true;
        this.m_JS.getChildByName("BestScore").getComponent(cc.Label).string = best.toString();
        */

    }

}
