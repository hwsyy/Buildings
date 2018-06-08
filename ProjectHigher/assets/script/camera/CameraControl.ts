/** 
 * 相机控制
*/
import HookManager from "../hook/HookManager";
import SingleApp from "../single/SingleApp";

export default class CameraControl
{

    //public static readonly Instance: CameraControl = new CameraControl();

    private m_stTarget: cc.Node = null;
    private m_CameraYDis: number = 0;
    public SingleApp: SingleApp = null;
    public CameraName: string = "camera";

    public constructor(host: SingleApp)
    {
        this.SingleApp = host;
        this.CameraName += host.Name;
    }

    public Init()
    {
        //cc.loader.loadRes("prefabs/camera",this.OnLoadResponse.bind(this));
        //cc.log(this.CameraName);
        this.m_stTarget = cc.find(this.CameraName);
        //this.m_CameraYDis = this.SingleApp.m_stHookManager.m_iYChange - this.m_stTarget.position.y;
    }

    LateUpdate(dt: number)
    {

        if(this.m_stTarget == null)
        {
            console.log("Can't find the camera");
            return;
        }
        //console.log("lala:" + this.SingleApp.m_stHookManager.m_cameraMoveCnt);
        if(this.SingleApp.m_stHookManager.m_cameraMoveCnt > 0)
        {
            this.m_stTarget.setPositionY(this.m_stTarget.getPositionY() - this.SingleApp.m_stHookManager.m_iSpeedY);
            this.SingleApp.m_stHookManager.m_cameraMoveCnt--;
        }
        if(this.SingleApp.m_stHookManager.m_cameraMoveCnt < 0)
        {
            this.m_stTarget.setPositionY(this.m_stTarget.getPositionY() + this.SingleApp.m_stHookManager.m_iSpeedY);
            this.SingleApp.m_stHookManager.m_cameraMoveCnt++;
        }


    }
}