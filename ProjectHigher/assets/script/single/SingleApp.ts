import BrickManager from "../brick/BrickManager";
import CameraControl from "../camera/CameraControl";
// import Ticker from "../commonlib/Ticker";
import Hook from "../hook/Hook";
import BackgroundMgr from "../background/BackgroundMgr";
import HookManager from "../hook/HookManager";
import HookConfigMgr from "../hook/HookConfigMgr";
import BrickConfigMgr from "../brick/BrickConfigMgr";
import CameraConfigMgr from "../camera/CameraConfigMgr";

export default class SingleApp
{

    //public static readonly Instance: SingleApp = new SingleApp();

    constructor() {}

    public m_stHookManager: HookManager;
    public m_stBrickManager: BrickManager;
    public CameraControl: CameraControl;
    public m_stBackgoundMgr: BackgroundMgr;
    public m_CanvasSize: number;//画布缩放比例
    public m_CanvasChangeX: number;//画布横移像素
    public Name: string;//本游戏名字标识

    public m_iBrickType: number = 0;


    Init()
    {
        this.m_iBrickType = Math.floor((Math.random() * 300)) % 3 + 1;
        this.m_stHookManager = new HookManager(this);
        this.m_stBrickManager = new BrickManager(this);
        this.CameraControl = new CameraControl(this);
        this.m_stBackgoundMgr = new BackgroundMgr(this);
        this.m_stHookManager.Init();
        this.m_stBrickManager.Init();
        this.m_stBackgoundMgr.Init();
        this.CameraControl.Init();
    }

    Update(dt: number)
    {
        // if(Ticker != null)
        //     Ticker.Instance.Update(dt);
        if(this.m_stHookManager != null)
            this.m_stHookManager.Update(dt);
        //this.m_stHook.Update(dt);
        //this.m_stHook.FixedUpdate(60,dt);
        if(this.m_stBrickManager != null)
            this.m_stBrickManager.Update(dt);

        if(this.m_stBackgoundMgr != null)
        {
            this.m_stBackgoundMgr.Update(dt);
        }
    }

    LateUpdate(dt: number)
    {
        this.CameraControl.LateUpdate(dt);
    }

}
