import BaseUI from "../../corelibs/uiframe/BaseUI";
import { UIType, UIShowMode } from "../../corelibs/uiframe/UIMgr";
import { RankConfig, CanvasConfig, ShareCbMsg } from "../../corelibs/sdk/wxgame/SdkObject";
import Core from "../../corelibs/Core";
import { MessageType } from "../../corelibs/sdk/SdkType";
import { ENUMS } from "../common/Enums";
import { All } from "../common/All";
import { LinkManager, LinkType } from "../../corelibs/manager/LinkManager";
import { ShareContext } from "../common/ShareContext";
import { EventID } from "../../corelibs/CoreDefine";
import { WSAEWOULDBLOCK } from "constants";

export class RandData
{
    constructor(uid: number , rank: number , score: number)
    {
        this.uid = uid;
        this.rank = rank;
        this.score = score;
    }
    uid: number = 0;
    rank: number = 0;
    score: number = 0;
}

export class UIRank extends BaseUI{
    constructor(){
        super(UIType.Normal , UIShowMode.Normal);
    }
    private readonly MAX_COUNT:number = 6;
    private btn_return: cc.Node;
    private btn_pre: cc.Node;
    private btn_next: cc.Node;
    private m_pBaseUI = null;
    private content: cc.Node = null;
    private btn_txt_rankFriends: cc.Node;
    private btn_txt_rankGroup: cc.Node;
    private lab_GroupShare: cc.Node;
    private rankType: number;
    private shareTicket: string;
    private stRankConfig: RankConfig;
    private m_stsPrite: cc.Component;
    private canvasConfig: CanvasConfig;
    public static RankList: Array<RandData> = new Array<RandData>(10);

    public Init(): void{
        super.Init();

        this.m_stsPrite = this.UINode.getChildByName("all").getChildByName("rankRender").getChildByName("rankSprite").getComponent(cc.Component);
        this.btn_return = this.UINode.getChildByName("btn_back");
        this.btn_pre = this.UINode.getChildByName("all").getChildByName("pre_page");
        this.btn_next = this.UINode.getChildByName("all").getChildByName("next_page");
        this.lab_GroupShare = this.UINode.getChildByName("all").getChildByName("groupRank");
        this.btn_txt_rankFriends = this.UINode.getChildByName("all").getChildByName("title").getChildByName("btn_rankFriends");
        this.btn_txt_rankGroup = this.UINode.getChildByName("all").getChildByName("title").getChildByName("btn_rankGroup");

        this.btn_return.on(cc.Node.EventType.TOUCH_END , this.returnHandler , this);
        this.btn_pre.on(cc.Node.EventType.TOUCH_END , this.prePage , this);
        this.btn_next.on(cc.Node.EventType.TOUCH_END , this.nextPage , this);
        this.lab_GroupShare.on(cc.Node.EventType.TOUCH_END , this.groupRankShare ,this);

        this.stRankConfig = new RankConfig();
        this.stRankConfig.m_iRankNumberBeginX = 50;
        this.stRankConfig.canvasWidth = this.m_stsPrite.node.width;
        this.stRankConfig.canvasHeight = this.m_stsPrite.node.height;
        this.stRankConfig.m_iMaxNum = this.MAX_COUNT;
        this.stRankConfig.m_iAvatarInterval = 87;
        this.stRankConfig.m_iNicknameMaxLength = 10;
        this.stRankConfig.m_iScoreBeginX = 505;
        this.stRankConfig.m_iNicknameBeginX = 200;
        this.stRankConfig.m_iAvatarWidth = 50;
        this.stRankConfig.m_iAvatarheight  = 50;
        this.stRankConfig.m_AvatarSiz = 64;
        this.stRankConfig.img_IconX = 100;
        this.stRankConfig.img_IconY = 25;
        this.stRankConfig.TextSize = 24;
        this.stRankConfig.layoutDir = MessageType.Horizontal;
        this.canvasConfig = new CanvasConfig();
    }
    Display(args : any[])
    {
        super.Display(args);
        this.rankType = args[0];
        if (ENUMS.RANK_TYPE.FRIEND_RANK == args[0]) {
            this.btn_txt_rankFriends.active = true;
            this.btn_txt_rankGroup.active = false;
        }else if (ENUMS.RANK_TYPE.GROUP_RANK == args[0]) {
            this.shareTicket = args[1];
            this.btn_txt_rankFriends.active = false;
            this.btn_txt_rankGroup.active = true;
        }
        Core.EventMgr.BindEvent(EventID.SdkEvent.CB_SHARE_SUCCESS , this.shareSuccess , this);
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            this.rankListGo();
        }

    }
    public Hiding(): void
    {
        super.Hiding();
        Core.EventMgr.UnbindEvent(EventID.SdkEvent.CB_SHARE_SUCCESS , this.shareSuccess , this);
    }
    private rankListGo(): void
    { 
        this.stRankConfig.action = MessageType.RestCurrPage;
        if (ENUMS.RANK_TYPE.FRIEND_RANK == this.rankType) {
            Core.SdkHandleMgr.ShowFriendRank(this.stRankConfig);
        }else if (ENUMS.RANK_TYPE.GROUP_RANK == this.rankType) {
            Core.SdkHandleMgr.ShowGroupRank(this.shareTicket , this.stRankConfig);
        }
        this.m_stsPrite.node.width = Core.SdkHandleMgr.GetRankWidht();
        this.m_stsPrite.node.height = Core.SdkHandleMgr.GetRankHeight();
        let self = this;
        let texture = new cc.Texture2D();
        this.m_stsPrite.schedule(function(){
            Core.SdkHandleMgr.GetRankTexture(texture);
            if (self.m_stsPrite.getComponent(cc.Sprite).spriteFrame != null) {
                self.m_stsPrite.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame();
            }
            self.m_stsPrite.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
        } , 0.1 , 30 , 1);
    }
    private shareSuccess(shareResults: ShareCbMsg): void
    {
        if (shareResults == null) {
            this.Display([ENUMS.RANK_TYPE.GROUP_RANK , shareResults.sShareTickets[0]]);
        }
    }
    private groupRankShare(): void
    {
        cc.log("share to group");
        this.canvasConfig.m_iCanvasWidth = 630;
        this.canvasConfig.m_iCanvasHeight = 300;
        this.canvasConfig.m_sScoreText = "" + All.currentScore;
        this.canvasConfig.m_sScoreFont = "110px Arial";
        this.canvasConfig.m_sScoreStyle = "#000000";
        this.canvasConfig.m_sTitleStyle = "";
        this.canvasConfig.m_shareKey = LinkType.GROUP_RANK;
        this.canvasConfig.m_iScoreX = 250 + this.getWeishu(All.currentScore);
        this.canvasConfig.m_iScoreY = 185;
        this.canvasConfig.m_sBGImgurl = ShareContext.ranImg[Math.floor(Math.random() * ShareContext.ranImg.length)];
        this.canvasConfig.m_sTitleText = ShareContext.rankMsg[Math.floor(Math.random() * ShareContext.rankMsg.length)];
        Core.SdkHandleMgr.shareToGroup(this.canvasConfig);
    }
    private nextPage(): void
    {
        if (cc.sys.platform != cc.sys.WECHAT_GAME) {
            return;
        }
        this.stRankConfig.action = MessageType.NextPage;
        if (ENUMS.RANK_TYPE.FRIEND_RANK == this.rankType) {
            Core.SdkHandleMgr.ShowFriendRank(this.stRankConfig);
        }else if (ENUMS.RANK_TYPE.GROUP_RANK == this.rankType) {
            Core.SdkHandleMgr.ShowGroupRank(this.shareTicket , this.stRankConfig);
        }
        let self = this;
        let texture = new cc.Texture2D();
        this.m_stsPrite.schedule(function(){
            Core.SdkHandleMgr.GetRankTexture(texture);
            if (!self.m_stsPrite.getComponent(cc.Sprite).spriteFrame) {
                self.m_stsPrite.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame();
            }
            self.m_stsPrite.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
        } , 0.1 , 30 , 1);
    }
    private prePage(): void
    {
        if (cc.sys.platform != cc.sys.WECHAT_GAME) {
            return;
        }
        this.stRankConfig.action = MessageType.PrePage;
        if (ENUMS.RANK_TYPE.FRIEND_RANK == this.rankType) {
            Core.SdkHandleMgr.ShowFriendRank(this.stRankConfig);
        }else if (ENUMS.RANK_TYPE.GROUP_RANK == this.rankType) {
            Core.SdkHandleMgr.ShowGroupRank(this.shareTicket , this.stRankConfig);
        }
        let self = this;
        let texture = new cc.Texture2D();
        this.m_stsPrite.schedule(function(){
            Core.SdkHandleMgr.GetRankTexture(texture);
            if (!self.m_stsPrite.getComponent(cc.Sprite).spriteFrame) {
                self.m_stsPrite.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame();
            }
            self.m_stsPrite.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
        } , 0.1 , 30 , 1);
    }
    private returnHandler(): void
    {
        Core.UIMgr.CloseUI("UIRank");
    }
    private getWeishu(score : number){
        if(score <= 9) return 30;
        if(score <= 99) return 0;
        if(score <= 999) return -30;
        if(score <= 9999) return -60;
        if(score <= 99999) return -90;
    }
}