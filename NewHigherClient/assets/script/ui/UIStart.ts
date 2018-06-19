import BaseUI from "../../corelibs/uiframe/BaseUI";
import {UIType,UIShowMode} from "../../corelibs/uiframe/UIMgr";
import {BattleManager} from "../manager/BattleManager";
import Core from "../../corelibs/Core";
import { ENUMS } from "../common/Enums";
import { Toast, showToast } from "../../corelibs/util/Toast";

/**
 * 开始界面
 * @author zhouyulong
 * 2018年5月24日 16:29:03
 */
declare var wx;
export class UIStart extends BaseUI
{

    /**开始按钮 */
    private btn_start: cc.Node;
    private btn_rank: cc.Node; 

    private btn_material: cc.Node;
    private btn_follow: cc.Node;
    private btn_more: cc.Node;

    constructor()
    {
        super(UIType.Normal,UIShowMode.Normal);
    }

    public Init(): void
    {
        super.Init();
        console.log("uistart start");

        this.btn_start = this.UINode.getChildByName("btn_start");
        this.btn_start.on(cc.Node.EventType.TOUCH_END,this.startHandler,this);

        this.btn_rank = this.UINode.getChildByName("btn_layout").getChildByName("btn_rank");
        this.btn_rank.on(cc.Node.EventType.TOUCH_END,this.showRank,this);
        this.btn_material = this.UINode.getChildByName("btn_layout").getChildByName("btn_material");
        this.btn_material.on(cc.Node.EventType.TOUCH_END , this.showMaterial , this);
        this.btn_follow = this.UINode.getChildByName("btn_layout").getChildByName("btn_follow");
        this.btn_follow.on(cc.Node.EventType.TOUCH_END , this.showFollow , this);
        this.btn_more = this.UINode.getChildByName("btn_layout").getChildByName("btn_more");
        this.btn_more.on(cc.Node.EventType.TOUCH_END , this.showMore , this);
    }

    public Display(): void
    {
        super.Display();
    }

    /**
     * 开始
     */
    private startHandler(): void
    {
        Core.UIMgr.CloseUI("UIStart");
        cc.find("Canvas").active = false;
        // BattleManager.getInstance().startGame();
        cc.director.loadScene('MainScene',function()
        {
            console.log('MainScene loaded!');
        });
    }
    private showRank(): void
    {
        Core.UIMgr.CloseUI("UIStart");
        Core.UIMgr.ShowUI("UIRank" , ENUMS.RANK_TYPE.FRIEND_RANK).closeHandlerOnce(() => {
            Core.UIMgr.ShowUI("UIStart");
        });
    }
    private showMaterial(): void
    {
        showToast("敬请期待！");
    }
    private showFollow(): void
    {
        Core.UIMgr.CloseUI("UIStart");
        Core.UIMgr.ShowUI("UIGzh");
    }
    private showMore(): void
    {
        let that: any = this;
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
           wx.request({
               url: 'https://mprogram.boomegg.cn/sprogram/ads/c/ad/get',
               method: 'post',
               data: {
                   id: 'wx895855a4ae6c101a'
               },
               header: {
                   'content-type': 'application/x-www-form-urlencoded'
               },
               success: function(res)
               {
                   if (res.data.ret == 0) {
                       let imgUrl = res.data.data.imgUrl;
                       wx.previewImage({
                           urls: [imgUrl]
                       })
                   }
               }
           }); 
        }
    }
}