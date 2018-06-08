import Core from "../Core";
import {UIType, UIShowMode} from "./UIMgr";
import {LogLevel} from "../log/Log";

export default class BaseUI
{
    private m_stUINode: cc.Node;
    private m_sUIName: string;

    private m_iUIType: UIType;
    private m_iUIShowMode: UIShowMode;

    constructor(type: UIType, showMode: UIShowMode)
    {
        this.m_iUIType = type;
        this.m_iUIShowMode = showMode;

        this.m_stUINode = null;
    }

    // 用于子类添加监听等初始化操作
    public Init(): void
    {
        // add
        this.m_stUINode.height = cc.find('Canvas').height;
        this.m_stUINode.width = cc.find('Canvas').width;

        this.m_stUINode.active = false;
        switch(this.m_iUIType)
        {
            case UIType.Normal:
                Core.UIRoot.Normal.addChild(this.m_stUINode);
                break;
            case UIType.Fixed:
                Core.UIRoot.Fixed.addChild(this.m_stUINode);
                break;
            case UIType.PopUp:
                Core.UIRoot.PopUp.addChild(this.m_stUINode);
                break;
            default:
                Core.Log("can not find the UIType: " + this.m_iUIType + "in" + this.UIName, LogLevel.Error);
                return;
        }
    }

    // 添加网络事件
    public RegisterEvent(): void {}

    // 移除所有事件监听
    private UnRegisterEvent(): void
    {
        Core.EventMgr.UnBindTarget(this);
    }

    // 显示
    public Display(): void
    {
        this.RegisterEvent();
        this.m_stUINode.active = true;
        if(this.m_iUIType == UIType.PopUp)
        {
            this.m_stUINode.setLocalZOrder(10000);
            Core.UIRoot.ShowMask();
        }
    }

    // 隐藏，不留在显示栈中
    public Hiding(): void
    {
        this.UnRegisterEvent();
        this.m_stUINode.active = false;
        if(this.m_iUIType == UIType.PopUp)
        {
            this.m_stUINode.setLocalZOrder(0);
            Core.UIRoot.HideMask();
        }
    }

    // 重新显示
    public Redisplay(): void
    {
        this.RegisterEvent();
        this.m_stUINode.active = true;
        if(this.m_iUIType == UIType.PopUp)
        {
            this.m_stUINode.setLocalZOrder(10000);
            Core.UIRoot.ShowMask();
        }
    }

    // 冻结，留在显示栈中
    public Freeze(): void
    {
        this.UnRegisterEvent();
        this.m_stUINode.active = true;
        if(this.m_iUIType == UIType.PopUp)
        {
            this.m_stUINode.setLocalZOrder(0);
            Core.UIRoot.HideMask();
        }
    }

    public get UIName(): string {return this.m_sUIName;}
    public get UINode(): cc.Node {return this.m_stUINode;}

    public get Type(): UIType {return this.m_iUIType;}
    public get ShowMode(): UIShowMode {return this.m_iUIShowMode;}

    public set UIName(uiName: string) {this.m_sUIName = uiName;}
    public set UINode(uiNode: cc.Node) {this.m_stUINode = uiNode;}
}
