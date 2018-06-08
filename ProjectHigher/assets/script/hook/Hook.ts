// import {IFixedTick,ITick} from "../commonlib/Ticker";
import HookMoveUnit from "./HookMoveUnit";
import HookViewUnit from "./HookViewUnit";
import HookConfigMgr from "./HookConfigMgr";
import HookManager from "./HookManager";
import SingleApp from "../single/SingleApp"

export default class Hook
{
    public m_iLastX: number = 0;
    public m_iLastY: number = 0;
    public m_iX: number = 0;
    public m_iY: number = 0;
    public m_iT: number = 0;

    public m_iXZero: number = HookConfigMgr.Instance.m_iXZero;//绳子顶端点
    public m_iYZero: number = HookConfigMgr.Instance.m_iYZero;

    public m_iUp_b: number = HookConfigMgr.Instance.m_iUp_b;//上短轴
    public m_iDown_b: number = HookConfigMgr.Instance.m_iDown_b;//下短轴
    public m_iLeftRight_a: number = HookConfigMgr.Instance.m_iLeftRight_a;//长轴
    public m_iSpeed: number = HookConfigMgr.Instance.m_iSpeed;//速度

    private m_stMove: HookMoveUnit = null;

    private m_stView: HookViewUnit = null;

    public m_stHookManager: HookManager;//父亲
    constructor(host: HookManager)
    {
        this.m_stHookManager = host;
        this.m_iXZero += host.SingleApp.m_CanvasChangeX;
        this.m_iUp_b *= host.SingleApp.m_CanvasSize;
        this.m_iDown_b *= host.SingleApp.m_CanvasSize;
        this.m_iLeftRight_a *= host.SingleApp.m_CanvasSize;
        this.m_stMove = new HookMoveUnit(this);
        this.m_stView = new HookViewUnit(this);
    }


    Update(dt: number)
    {
        // console.log('>>>>>>>>>>>hook',this.m_iXZero);
        this.m_stView.Update(dt);
    }

    FixedUpdate(tickCount: number,dt: number)
    {
        this.m_stMove.Update(dt);
    }

}
