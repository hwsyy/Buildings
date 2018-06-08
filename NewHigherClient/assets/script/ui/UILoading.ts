import BaseUI from "../../corelibs/uiframe/BaseUI";
import {UIType,UIShowMode} from "../../corelibs/uiframe/UIMgr";

/**
 * loading界面
 * @author zhouyulong
 * 2018年5月23日 19:04:41
 */
export class UILoading extends BaseUI
{
    constructor()
    {
        super(UIType.PopUp,UIShowMode.Normal);
    }

    public Init(): void
    {
        super.Init();
    }

    public Display(): void
    {
        super.Display();
    }
}