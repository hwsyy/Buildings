import Hook from "./Hook";
// import Ticker from "../commonlib/Ticker";
import HookConfigMgr from "./HookConfigMgr";
import CameraConfigMgr from "../camera/CameraConfigMgr";
import SingleApp from "../single/SingleApp"
export default class HookManager
{

    // public static readonly Instance: HookManager = new HookManager();
    public SingleApp: SingleApp = null;

    public constructor(host: SingleApp)
    {
        this.SingleApp = host;

    }

    //** 钩子偏移量 */
    public m_iXChange: number;
    public m_iYChange: number;

    public m_iMoveUpMax: number;//要位移到的位置
    public m_iSpeedY: number;//镜头移动速度

    public m_stHook: Hook = null;
    public m_cameraMoveCnt: number = 0;
    public HP: number = 3;
    Init()
    {
        this.HP = 3;
        this.m_stHook = new Hook(this);
        //this.m_stHook.m_stHookManager = this;

        // Ticker.Instance.AddFixedTick(this.m_stHook);
        // Ticker.Instance.AddTick(this.m_stHook);
        this.m_iXChange = HookConfigMgr.Instance.m_iXChange;
        this.m_iYChange = HookConfigMgr.Instance.m_iYChange;

        this.m_iMoveUpMax = HookConfigMgr.Instance.m_iYChange;//要位移到的位置
        this.m_iSpeedY = CameraConfigMgr.Instance.m_iSpeedY;//镜头移动速度
        this.m_iXChange += this.SingleApp.m_CanvasChangeX;//游戏中心偏移导致钩子偏移
    }
    Update(dt)
    {
        if(this.m_iMoveUpMax > this.m_iYChange)
        {
            this.m_iYChange += this.m_iSpeedY;
            this.m_stHook.m_iYZero += this.m_iSpeedY;
            this.m_cameraMoveCnt++;
        }
        if(this.m_iMoveUpMax < this.m_iYChange)
        {
            this.m_iYChange -= this.m_iSpeedY;
            this.m_stHook.m_iYZero -= this.m_iSpeedY;
            this.m_cameraMoveCnt--;
        }

        this.m_stHook.FixedUpdate(60,dt);

        this.m_stHook.Update(dt);

    }
}
