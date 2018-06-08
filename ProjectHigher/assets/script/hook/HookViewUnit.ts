import Hook from "./Hook";
import Core from "../../corelibs/Core";
import {ResStruct} from "../../corelibs/util/ResourcesMgr";
import {ResType} from "../../corelibs/CoreDefine";
import BrickConfigMgr from "../brick/BrickConfigMgr";

/** 
 * 控制钩子的显示
*/

export default class HookViewUnit
{

    private m_stHost: Hook = null;

    private m_stNode: cc.Node = null;

    private m_stHook: cc.Node = null;

    private m_stHangingRod: cc.Node = null;

    private m_stHangingRodPos: cc.Node = null;

    private m_bIsView: boolean = false;

    public BricksName: string;

    constructor(host: Hook)
    {
        this.m_stHost = host;
        this.BricksName = "camera" + host.m_stHookManager.SingleApp.Name + '/' + "Bricks" + host.m_stHookManager.SingleApp.Name;
        this.Init();
    }

    private Init()
    {
        console.log(this.m_bIsView);
        Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("prefabs/rope",ResType.Prefab),this.OnLoadResponse.bind(this));
        Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("prefabs/hook2",ResType.Prefab),this.OnLoadResponsehook.bind(this));
        Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("prefabs/HangingRod",ResType.Prefab),this.OnLoadResponseHangingRod.bind(this));
        Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("prefabs/HangingRodPos",ResType.Prefab),this.OnLoadResponseHangingRodPos.bind(this));



    }

    private OnLoadResponse(prefab)
    {
        this.m_stNode = cc.instantiate(prefab);
        console.log(this.m_stNode);
        //仅仅测试用
        console.log("创建一个绳子")
        this.m_stNode.position = cc.p(-3000,-3000);
        cc.find(this.BricksName).addChild(this.m_stNode,3);
        this.m_bIsView = true;
    }
    private OnLoadResponsehook(prefab)
    {
        this.m_stHook = cc.instantiate(prefab);
        console.log(this.m_stHook);
        //仅仅测试用
        console.log("创建一个钩子")
        this.m_stHook.position = cc.p(-3000,-3000);
        cc.find(this.BricksName).addChild(this.m_stHook,5);
    }
    private OnLoadResponseHangingRod(prefab)
    {
        this.m_stHangingRod = cc.instantiate(prefab);
        console.log(this.m_stHangingRod);
        //仅仅测试用
        console.log("创建一个挂杆")
        this.m_stHangingRod.position = cc.p(-3000,-3000);
        cc.find(this.BricksName).addChild(this.m_stHangingRod,4);
    }

    private OnLoadResponseHangingRodPos(prefab)
    {
        this.m_stHangingRodPos = cc.instantiate(prefab);
        console.log(this.m_stHangingRodPos);
        //仅仅测试用
        console.log("创建一个挂杆位置")
        this.m_stHangingRodPos.position = cc.p(-3000,-3000);
        cc.find(this.BricksName).addChild(this.m_stHangingRodPos,4);

    }
    //** 计算两点的距离*/
    private GetDistance(poi_1: cc.Vec2,poi_2: cc.Vec2): number
    {
        return Math.sqrt((poi_1.x - poi_2.x) * (poi_1.x - poi_2.x) + (poi_1.y - poi_2.y) * (poi_1.y - poi_2.y));
    }

    //** 获取中点的位置*/
    private GetMidPostion(poi_1: cc.Vec2,poi_2: cc.Vec2): cc.Vec2
    {
        return cc.p((poi_1.x + poi_2.x) / 2,(poi_1.y + poi_2.y) / 2);
    }

    Update(dt: number)
    {
        if(this.m_bIsView == false)
        {
            return;
        }
        if(this.m_stNode.name == "")
        {
            return;
        }
        let ro: number = Math.atan((this.m_stHost.m_iXZero - this.m_stHost.m_iX) / (this.m_stHost.m_iYZero - this.m_stHost.m_iY - 70));
        // console.log("ro: ",ro,"x: ",this.m_stHost.m_iX,"y: ",this.m_stHost.m_iY);
        if(this.m_stNode != null)
        {
            this.m_stNode.position = this.GetMidPostion(cc.p(this.m_stHost.m_iX,this.m_stHost.m_iY + 70),cc.p(this.m_stHost.m_iXZero,this.m_stHost.m_iYZero));
            this.m_stNode.height = this.GetDistance(cc.p(this.m_stHost.m_iX,this.m_stHost.m_iY + 70),cc.p(this.m_stHost.m_iXZero,this.m_stHost.m_iYZero)) - 22;
            this.m_stNode.rotation = ro / Math.PI * 180;
        }

        if(this.m_stHook != null)
        {
            this.m_stHook.position = cc.p(this.m_stHost.m_iX + 25 * Math.tan(this.m_stNode.rotation / 180 * Math.PI),this.m_stHost.m_iY + 77);
            this.m_stHook.rotation = ro / Math.PI * 180 * BrickConfigMgr.Instance.m_iBrickAngleOffset;
        }

        if(this.m_stHangingRod != null)
            this.m_stHangingRod.position = cc.p(this.m_stHost.m_iXZero - 100,this.m_stHost.m_iYZero + 28);

        if(this.m_stHangingRodPos != null)
            this.m_stHangingRodPos.position = cc.p(this.m_stHost.m_iXZero,this.m_stHost.m_iYZero - 10)
    };
}
