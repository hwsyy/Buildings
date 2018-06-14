import BaseUI from "../../corelibs/uiframe/BaseUI";
import { UIType, UIShowMode } from "../../corelibs/uiframe/UIMgr";
import Core from "../../corelibs/Core";

export  class UIGzh extends BaseUI {
    private btn_back: cc.Node;

    constructor()
    {
        super(UIType.Normal,UIShowMode.Normal);
    }

    public Init(): void
    {
        super.Init();
        this.btn_back = this.UINode.getChildByName("background").getChildByName("btn_back");
        this.btn_back.on(cc.Node.EventType.TOUCH_END , this.backHandler , this);
    }

    private backHandler(): void
    {
        Core.UIMgr.CloseUI("UIGzh");
        Core.UIMgr.ShowUI("UIStart");
    }
}
