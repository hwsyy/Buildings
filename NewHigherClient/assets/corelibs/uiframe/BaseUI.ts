import Core from "../Core";
import {UIType,UIShowMode} from "./UIMgr";

export const enum UI_LAYER
{
    UI = 10,
    MASK = 15,
    PopUp = 20,
    TOAST = 25,
}

export default class BaseUI
{
    private m_stUINode: cc.Node;
    private m_sUIName: string;

    private m_iUIType: UIType;
    private m_iUIShowMode: UIShowMode;
    private _showHandlerOnce: Function;
    private _closeHandlerOnce: Function;
    private _mask: cc.Graphics;
    private _bgColor: cc.Color;

    constructor(type: UIType,showMode: UIShowMode)
    {
        this.m_iUIType = type;
        this.m_iUIShowMode = showMode;
        this.m_stUINode = null;
    }

    /**
     * 设置UI显示回调(回调只执行一次 每次打开要重新设置)
     */
    public showHandlerOnce(handler: Function)
    {
        this._showHandlerOnce = handler;
    }

    /**
     * 设置UI关闭回调(回调只执行一次 每次关闭后要重新设置)
     */
    public closeHandlerOnce(handler: Function)
    {
        this._closeHandlerOnce = handler;
    }

    // 用于子类添加监听等初始化操作
    public Init(args: any[] = null): void
    {
        // add
        this.m_stUINode.height = cc.find('Canvas').height;
        this.m_stUINode.width = cc.find('Canvas').width;
        if(this.m_iUIType == UIType.PopUp)
        {
            this._bgColor = new cc.Color(0,32,54,180);
            this._mask = this.m_stUINode.addComponent(cc.Graphics);
            this._mask.node.on(cc.Node.EventType.TOUCH_END,() => {},this);//防止穿透  好弱鸡,居然连个禁止点击的属性都没有 反正我是没找到
        }

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
                console.log("can not find the UIType: " + this.m_iUIType + "in" + this.UIName);
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
    public Display(args: any[] = null): void
    {
        this.RegisterEvent();
        this.m_stUINode.active = true;
        if(this.m_iUIType == UIType.PopUp)
        {
            this.m_stUINode.setLocalZOrder(UI_LAYER.UI);
            this.showMask();
        }
        if(this._showHandlerOnce != null)
        {
            this._showHandlerOnce();
        }
        this._showHandlerOnce = null;
    }

    // 隐藏，不留在显示栈中
    public Hiding(): void
    {
        this.UnRegisterEvent();
        this.m_stUINode.active = false;
        if(this.m_iUIType == UIType.PopUp)
        {
            this.hideMask();
            this.m_stUINode.setLocalZOrder(0);
        }
        if(this._closeHandlerOnce != null)
        {
            this._closeHandlerOnce();
        }
        this._closeHandlerOnce = null;
    }

    // 重新显示
    public Redisplay(): void
    {
        this.RegisterEvent();
        this.m_stUINode.active = true;
        if(this.m_iUIType == UIType.PopUp)
        {
            this.showMask();
            this.m_stUINode.setLocalZOrder(UI_LAYER.PopUp);
        }
    }

    // 冻结，留在显示栈中
    public Freeze(): void
    {
        this.UnRegisterEvent();
        this.m_stUINode.active = true;
        if(this.m_iUIType == UIType.PopUp)
        {
            this.hideMask();
            this.m_stUINode.setLocalZOrder(0);
        }
    }

    private showMask(): void
    {
        this._mask.fillColor = this._bgColor;
        this._mask.rect(0,0,cc.view.getVisibleSize().width,cc.view.getVisibleSize().height);
        this._mask.fill();
    }

    private hideMask(): void
    {
        this._mask.clear(true);
    }

    public get UIName(): string 
    {
        return this.m_sUIName;
    }
    public get UINode(): cc.Node 
    {
        return this.m_stUINode;
    }

    public get Type(): UIType 
    {
        return this.m_iUIType;
    }
    public get ShowMode(): UIShowMode 
    {
        return this.m_iUIShowMode;
    }

    public set UIName(uiName: string) 
    {
        this.m_sUIName = uiName;
    }
    public set UINode(uiNode: cc.Node) 
    {
        this.m_stUINode = uiNode;
    }
}
