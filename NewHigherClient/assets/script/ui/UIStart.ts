import BaseUI from "../../corelibs/uiframe/BaseUI";
import {UIType,UIShowMode} from "../../corelibs/uiframe/UIMgr";
import {BattleManager} from "../manager/BattleManager";
import Core from "../../corelibs/Core";

/**
 * 开始界面
 * @author zhouyulong
 * 2018年5月24日 16:29:03
 */
export class UIStart extends BaseUI
{

    /**开始按钮 */
    private btn_start: cc.Node;

    constructor()
    {
        super(UIType.Normal,UIShowMode.Normal);
    }

    public Init(): void
    {
        super.Init();

        this.btn_start = this.UINode.getChildByName("btn_start");
        this.btn_start.on(cc.Node.EventType.TOUCH_END,this.startHandler,this);
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
}