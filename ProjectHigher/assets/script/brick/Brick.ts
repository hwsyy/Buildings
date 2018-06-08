import BrickMoveUnit from "./BrickMoveUnit";
// import {ITick,IFixedTick} from "../commonlib/Ticker";
import BrickView from "./BrickViewUnit";
import BrickManager from "./BrickManager";
import BrickViewUnit from "./BrickViewUnit";
import BrickConfigMgr from "./BrickConfigMgr";
import HookConfigMgr from "../hook/HookConfigMgr";
import SingleApp from "../single/SingleApp"

export default class Brick
{

    private m_stMove: BrickMoveUnit = null;

    public m_stView: BrickView = null;
    public SingleApp: SingleApp = null;
    public m_stBrickManager: BrickManager = null;//父亲

    public constructor(SingleApp: SingleApp,host: BrickManager)
    {
        this.SingleApp = SingleApp;
        this.m_stBrickManager = host;
        this.m_stMove = new BrickMoveUnit(this.SingleApp,this.m_stBrickManager,this);
        this.m_stView = new BrickViewUnit(this);
    }



    /** 砖块的状态 */
    public m_iBrickStatus: number = 0;

    /**砖块落下后摆动的初始偏移角度 */
    public m_iBrickDownedDev: number = 0.0;

    /**砖块与摇晃圆心的距离 */
    public m_iBrickDownedDis: number = 0.0;

    /**运行砖块状态6 */
    public OnStatusAddShake()
    {
        let x = this.m_iX - this.m_stBrickManager.m_iDownedBrickBasePointX;
        let y = this.m_iY - this.m_stBrickManager.m_iDownedBrickBasePointY;
        this.m_iBrickDownedDis = Math.sqrt(x * x + y * y);
        this.m_iBrickDownedDev = 1.0 * Math.acos(x / (Math.sqrt(x * x + y * y))) - this.m_stBrickManager.m_iDownedBrickNowBaseAngle;
    }
    public aaa()
    {
        let x = this.m_iX - this.m_stBrickManager.m_iDownedBrickBasePointX;
        let y = this.m_iY - this.m_stBrickManager.m_iDownedBrickBasePointY;
        this.m_iBrickDownedDis = Math.sqrt(x * x + y * y);
    }
    public change_center(node: Brick,poi1: cc.Vec2)
    {

        if(this.jfe(node.m_Rotation,0))
        {
            node.m_stView.m_stNode.anchorX = (poi1.x - (node.m_iX - node.m_stView.m_stNode.anchorX * node.m_iWidth)) / node.m_iWidth;
            node.m_stView.m_stNode.anchorY = (poi1.y - (node.m_iY - node.m_stView.m_stNode.anchorY * node.m_iHeight)) / node.m_iHeight;
            //cc.log(node.m_stView.m_stNode.anchorY);

        }
        else if(node.m_Rotation > 0)
        {
            node.m_stView.m_stNode.anchorX = 1;
            node.m_stView.m_stNode.anchorY = 0;
        }
        else if(node.m_Rotation < 0)
        {
            node.m_stView.m_stNode.anchorX = 0;
            node.m_stView.m_stNode.anchorY = 0;
        }
        //cc.log(poi1.x,poi1.y);
        //node.m_stView.m_stNode.position = cc.p(poi1.x,poi1.y);
        node.m_iX = poi1.x;
        node.m_iY = poi1.y;
    }
    public set_gravity_center(node: Brick,poi: cc.Vec2)
    {
        //node.m_stView.m_stNode.anchorX=0.5;
        //node.m_stView.m_stNode.anchorY=0.5;
        let x: number = node.m_iX - node.m_stView.m_stNode.anchorX * node.m_iWidth;
        let y: number = node.m_iY - node.m_stView.m_stNode.anchorY * node.m_iHeight;

        node.m_iX = poi.x;
        node.m_iY = poi.y;
    }
    public ChangeBasePosition(node: Brick,nowBP: cc.Vec2)
    {
        let x: number = node.m_stView.m_stNode.anchorX;
        let y: number = node.m_stView.m_stNode.anchorY;
        let disV: cc.Vec2 = cc.p(nowBP.x - x,nowBP.y - y);
        disV = disV.rotateSelf(node.m_Rotation / 180 * Math.PI);
        node.m_iX += 1 * node.m_iWidth * disV.x;
        node.m_iY -= 1 * node.m_iWidth * disV.y;
        node.m_stView.m_stNode.anchorX = nowBP.x;
        node.m_stView.m_stNode.anchorY = nowBP.y;
    }
    public set_center(node: Brick,poi1: cc.Vec2,lx: number)
    {
        node.m_stView.m_stNode.anchorX = (poi1.x - lx) / node.m_iWidth;
        node.m_stView.m_stNode.anchorY = 0;
        node.m_iX = poi1.x;
        node.m_iY = poi1.y;
    }
    private dist(poi1: cc.Vec2,poi2: cc.Vec2): number
    {
        return Math.sqrt((poi1.x - poi2.x) * (poi1.x - poi2.x) + (poi1.y - poi2.y) * (poi1.y - poi2.y));
    }
    public jfe(num1: number,num2: number): boolean//浮点数判断相等
    {
        if(Math.abs(num1 - num2) < 1e-1)
            return true;
        return false;
    }
    public get_disty(width: number,rot: number): number 
    {
        width = width / Math.sin(Math.PI / 4) / 2;
        return width * (Math.cos(Math.PI / 4 - Math.abs(rot * Math.PI / 180)));
    }
    public get_distx(width: number,rot: number): number 
    {
        width = width / Math.sin(Math.PI / 4) / 2;
        if(rot > 0)
            return width * (Math.sin(Math.PI / 4 - Math.abs(rot * Math.PI / 180)));
        else
            return -width * (Math.sin(Math.PI / 4 - Math.abs(rot * Math.PI / 180)));
    }
    public get_distsx(width: number,rot: number): number
    {
        width = width / Math.cos(Math.PI / 4) / 2;
        if(rot > 0)
            return -width * (Math.cos(Math.PI / 4 - Math.abs(rot * Math.PI / 180)));
        else
            return width * (Math.cos(Math.PI / 4 - Math.abs(rot * Math.PI / 180)));
    }

    //** 砖块的上一个位置*/
    public m_iLastX: number = 0;
    public m_iLastY: number = 0;
    //** 砖块的位置*/
    public m_iX: number = -1000;
    public m_iY: number = -1000;
    public m_Rotation: number = 0;
    public center_gravity: cc.Vec2 = cc.p(0,0);

    public m_iHeight: number = BrickConfigMgr.Instance.m_iHeight;
    public m_iWidth: number = BrickConfigMgr.Instance.m_iWidth;

    //** 与钩子的数值相同 */
    public m_iUp_b: number = HookConfigMgr.Instance.m_iUp_b;
    public m_iDown_b: number = HookConfigMgr.Instance.m_iDown_b;
    public m_iLeftRight_a: number = HookConfigMgr.Instance.m_iLeftRight_a;//长轴 与 钩子的长轴数值相同 有一次引用
    public m_iSpeed: number = HookConfigMgr.Instance.m_iSpeed;

    public m_iFallSpeedX: number = 0;//砖块跌落时的X速度 注意是跌落不是下落


    //** 销毁砖块*/
    public OnDestory()
    {
        this.m_stView.OnDestory();
    }
    Update(dt: number)
    {
        this.m_stView.Update(dt);
    }

    FixedUpdate(tickCount: number,dt: number)
    {
        if(this.m_stMove != null)
            this.m_stMove.Update(dt);
    }

}
