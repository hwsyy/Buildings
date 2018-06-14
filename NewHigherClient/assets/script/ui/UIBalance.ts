import BaseUI from "../../corelibs/uiframe/BaseUI";
import { UIType, UIShowMode } from "../../corelibs/uiframe/UIMgr";
import Core from "../../corelibs/Core";
import { CanvasConfig, RankConfig } from "../../corelibs/sdk/wxgame/SdkObject";
import {All} from "../common/All";
import { LinkType } from "../../corelibs/manager/LinkManager";
import {ShareContext} from "../common/ShareContext";
import {BattleManager} from "../manager/BattleManager";
import { Enum } from "protobufjs";
import { POINT_CONVERSION_UNCOMPRESSED } from "constants";
import {ENUMS} from "../common/Enums"
import { MessageType } from "../../corelibs/sdk/SdkType";
import { ReqUpdatePlayerMaxScore, GlobalProtoID } from "../pp/proto";

export class UIBalance extends BaseUI {
    private new_record: cc.Node;
    private score: cc.Label;
    private button_rank: cc.Node;
    private button_vs: cc.Node;
    private button_back: cc.Node;
    private button_playAgain: cc.Node;
    private rankCanvas: cc.Component;
    private canvasConfig: CanvasConfig;
    private rankConfig: RankConfig;

    constructor() 
    {
        super(UIType.PopUp , UIShowMode.Normal);
    }

    public Init(): void
    {
        super.Init();
        this.new_record = this.UINode.getChildByName("backgroundTop").getChildByName("new_record");
        this.score = this.UINode.getChildByName("backgroundTop").getChildByName("score").getComponent(cc.Label);
        this.button_rank = this.UINode.getChildByName("backgroundBottom").getChildByName("button_rank");
        this.button_vs = this.UINode.getChildByName("button_vs");
        this.button_back = this.UINode.getChildByName("button_back");
        this.button_playAgain = this.UINode.getChildByName("button_playAgain");
        this.rankCanvas = this.UINode.getChildByName("backgroundBottom").getChildByName("rankCanvas").getComponent(cc.Component);

        this.button_back.on(cc.Node.EventType.TOUCH_END , this.returnHandler , this);
        this.button_vs.on(cc.Node.EventType.TOUCH_END , this.shareHandler , this);
        this.button_playAgain.on(cc.Node.EventType.TOUCH_END , this.againHandler , this);
        this.button_rank.on(cc.Node.EventType.TOUCH_END , this.rankHandler , this);

        this.canvasConfig = new CanvasConfig();

        this.rankConfig = new RankConfig();
        this.rankConfig.m_iRankNumberBeginY = 50;
        this.rankConfig.canvasWidth = this.rankCanvas.node.width;
        this.rankConfig.canvasHeight = this.rankCanvas.node.height;
        this.rankConfig.m_iMaxNum = 3;
        this.rankConfig.m_iAvatarInterval = 175;
        this.rankConfig.m_iNicknameMaxLength = 10;
        this.rankConfig.m_iScoreBeginY = 270;
        this.rankConfig.m_iNicknameBeginY = 225;
        this.rankConfig.img_IconX = 95;
        this.rankConfig.img_IconY = 85;
        this.rankConfig.m_iAvatarWidth = 100;
        this.rankConfig.m_iAvatarheight = 100;
        this.rankConfig.TextSize = 24;
        this.rankConfig.selfNickName = All.nickName;
        this.rankConfig.layoutDir = MessageType.Vertical;
    }

    Display(): void
    {
        console.log("new uibalance display" + "max:" + All.maxScore + "current:" + All.currentScore);
        if (All.currentScore > All.maxScore) {
            this.new_record.active = true;
            Core.SdkHandleMgr.UploadDataToCloud("score" , All.currentScore.toString());
            let req: ReqUpdatePlayerMaxScore = ReqUpdatePlayerMaxScore.create();
            req.score = All.currentScore;
            let buff: Uint8Array = ReqUpdatePlayerMaxScore.encode(req).finish();
            Core.ServerHandler.PlayerGlobalData(GlobalProtoID.REQ_UPDATE_PLAY_MAX_SCORE , buff);
        }
        else
        {
            this.new_record.active = false;
        }
        if (cc.sys.platform != cc.sys.WECHAT_GAME) {
            return;
        }
        this.score.string = All.currentScore + "";
        Core.SdkHandleMgr.ShowSelfRank(this.rankConfig);
        let self = this;
        let texture = new cc.Texture2D();
        this.rankCanvas.schedule(function()
    {
        Core.SdkHandleMgr.GetRankTexture(texture);
        if (self.rankCanvas.getComponent(cc.Sprite).spriteFrame != null) {
            self.rankCanvas.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame();
        }
        self.rankCanvas.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    },0.1 , 30 , 1);
    super.Display();
    }

    private returnHandler(): void
    {
        Core.UIMgr.CloseUI("UIBalance");
        Core.UIMgr.ShowUI("UIStart");
    }

    private shareHandler(): void
    {
       this.canvasConfig.m_iCanvasWidth = 630;
       this.canvasConfig.m_iCanvasHeight = 504;
       this.canvasConfig.m_sScoreText = "" + All.currentScore;
       this.canvasConfig.m_sScoreFont = "110px Arial";
       this.canvasConfig.m_sScoreStyle = "#000000";
       this.canvasConfig.m_sTitleText = "";
       this.canvasConfig.m_shareKey = LinkType.GROUP_RANK;
       this.canvasConfig.m_iScoreX = this.getWeishu(All.currentScore);
       this.canvasConfig.m_iScoreY = 185;
       this.canvasConfig.m_sBGImgurl = ShareContext.chllengeImg[Math.floor(Math.random() * ShareContext.chllengeImg.length)];
       this.canvasConfig.m_sTitleText = ShareContext.chllengeMsg[Math.floor(Math.random() * ShareContext.chllengeMsg.length)];
       Core.SdkHandleMgr.shareToGroup(this.canvasConfig);
    }

    private getWeishu(score: number)
    {
        if(score <= 9) return 30;
        if(score <= 99) return 0;
        if(score <= 999) return -30;
        if(score <= 9999) return -60;
        if(score <= 99999) return -90;
    }
    
    private againHandler(): void
    {
        Core.UIMgr.CloseUI("UIBalance");
        BattleManager.getInstance().startGame();
    }

    private rankHandler(): void
    {
        Core.UIMgr.CloseUI("UIBalance");
        Core.UIMgr.ShowUI("UIRank" , ENUMS.RANK_TYPE.FRIEND_RANK).closeHandlerOnce(() =>{
            Core.UIMgr.ShowUI("UIBalance");
        });
    }
}