import Brick from "./Brick"
import Hook from "../hook/Hook";
import HookManager from "../hook/HookManager";
import BrickManager from "./BrickManager";
import CameraControl from "../camera/CameraControl";
import BrickConfigMgr from "./BrickConfigMgr";
import HookConfigMgr from "../hook/HookConfigMgr";
import SingleApp from "../single/SingleApp";


/** 
 * 控制砖块的移动
*/
export default class BrickMoveUnit
{

    private host: Brick = null;
    private lastBrick: Brick = null;
    private SingleApp: SingleApp = null;
    private m_stBrickManager: BrickManager = null;
    private m_stHookManager: HookManager = null;
    private m_bIsBeginDown = false;
    constructor(SingleApp: SingleApp,BrickManager: BrickManager,host: Brick)
    {
        this.SingleApp = SingleApp;
        this.host = host;
        this.m_stBrickManager = BrickManager;
        this.m_stHookManager = this.SingleApp.m_stHookManager;
    }

    //public BrickManager: BrickManager = null;
    private m_iSpeedX: number = 0;
    private m_iSppedY: number = 0;
    private m_iMaxRotate: number = 0;
    private m_iMinRotate: number = 0;
    private is_rotate: boolean = false;

    //** 钩子上 staus 1 */
    private OnStatusHook(): void
    {
        this.host.m_iLastX = this.m_stHookManager.m_stHook.m_iLastX;
        this.host.m_iLastY = this.m_stHookManager.m_stHook.m_iLastY;
        this.host.m_iX = this.m_stHookManager.m_stHook.m_iX;
        this.host.m_iY = this.m_stHookManager.m_stHook.m_iY;
        this.host.m_Rotation = 180 / Math.PI * Math.atan((this.host.m_iX - this.m_stHookManager.m_stHook.m_iXZero)
            / (this.host.m_iY - this.m_stHookManager.m_stHook.m_iYZero)) * BrickConfigMgr.Instance.m_iBrickAngleOffset;
    }

    //** 下落 staus 2 */
    //初始高度
    private tmp_base = 80;
    private OnStatusDrop(): void
    {
        let SpeedY: number = -this.host.m_iHeight * BrickConfigMgr.Instance.m_iDownSpeedY;
        let SpeedX: number = this.m_iSpeedX;
        if(this.m_bIsBeginDown == false)
        {
            this.m_iSpeedX = -1 * this.host.m_iLeftRight_a * this.host.m_iSpeed * Math.sin(Math.PI * this.m_stHookManager.m_stHook.m_iT / 180);
            this.m_bIsBeginDown = true;
        }
        let target: cc.Vec2 = cc.p(-1000,this.host.get_disty(this.host.m_iHeight,this.host.m_Rotation) + this.tmp_base);//目标位置
        let target_len = 0;
        SpeedX = SpeedX * BrickConfigMgr.Instance.m_iDownSpeedX;
        let tmp: cc.Vec2 = cc.p(this.host.m_iX,this.host.m_iY);//实时砖块位置

        let i_limity: number = 1000;
        let i_limitx: number = 1000;//用来判掉落
        let tmp_poi: number = -1000;

        if(this.m_stBrickManager.m_bIsFirst == true)//根据上一砖块状态设置目标位置
        {
            let tmp_Brick: Brick = this.m_stBrickManager.GetSecondToLastBrick();
            let poi: cc.Vec2 = cc.p(tmp_Brick.m_iX,tmp_Brick.m_iY + tmp_Brick.m_iHeight / 2);
            let dy: number = this.host.get_disty(this.host.m_iHeight,this.host.m_Rotation);
            let dx: number = (poi.y + dy - this.host.m_iY) / SpeedY * SpeedX;
            i_limity = poi.y - tmp_Brick.m_iHeight * 3 / 2;
            i_limitx = poi.x;
            tmp_poi = poi.y;
            if((poi.y - this.host.m_iY) <= 0)
            {//落上目标位置判定
                let vertex: cc.Vec2 = cc.p(0,0);
                vertex.x = this.host.m_iX + this.host.get_distx(this.host.m_iWidth,this.host.m_Rotation) + dx;
                if(Math.abs(vertex.x - poi.x) <= tmp_Brick.m_iWidth / 2)
                {
                    target.y = poi.y + dy;
                    target.x = poi.x;
                    target_len = tmp_Brick.m_iWidth;
                }
                else if(Math.abs(vertex.x - poi.x) <= tmp_Brick.m_iWidth / 2 * 3)
                {
                    //线碰点判定
                    let vertex2: cc.Vec2 = cc.p(0,0);
                    if(vertex.x > poi.x + tmp_Brick.m_iWidth / 2)
                    {
                        vertex2 = cc.p(tmp_Brick.m_iX + tmp_Brick.m_iWidth / 2,tmp_Brick.m_iY + tmp_Brick.m_iHeight / 2);
                    }
                    else
                    {
                        vertex2 = cc.p(tmp_Brick.m_iX - tmp_Brick.m_iWidth / 2,tmp_Brick.m_iY + tmp_Brick.m_iHeight / 2);
                    }
                    let c1 = vertex2.y - (SpeedY / SpeedX) * vertex2.x
                    let b1 = -1;
                    let a1 = (SpeedY / SpeedX);
                    vertex.x = this.host.m_iX + this.host.get_distx(this.host.m_iWidth,this.host.m_Rotation);
                    vertex.y = this.host.m_iY - this.host.get_disty(this.host.m_iHeight,this.host.m_Rotation);
                    let a2 = -Math.tan(this.host.m_Rotation * Math.PI / 180);
                    let c2 = vertex.y - a2 * vertex.x;
                    let b2 = -1;
                    let nv: cc.Vec2 = cc.p((b1 * c2 - b2 * c1) / (a1 * b2 - a2 * b1),(a2 * c1 - a1 * c2) / (a1 * b2 - a2 * b1));
                    let ndy: number = poi.y - nv.y;
                    //cc.log("bitch"+nv);
                    let sx: number = this.host.m_iX + this.host.get_distsx(this.host.m_iWidth,this.host.m_Rotation);
                    if(nv.x >= sx && nv.x <= vertex.x)
                    {
                        target.y = this.host.m_iY + ndy;
                        target.x = poi.x;
                        target_len = tmp_Brick.m_iWidth;
                        //cc.log(target.y);
                    }
                    else if(nv.x <= sx && nv.x >= vertex.x)
                    {
                        target.y = this.host.m_iY + ndy;
                        target.x = poi.x;
                        target_len = tmp_Brick.m_iWidth;
                        //cc.log(target.y);
                    }
                    else target.y = this.m_stHookManager.m_iMoveUpMax - 1000;
                }
                //cc.log(poi);
                //cc.log(cc.p(this.host.m_iX,this.host.m_iY));
            }
            else target.y = this.m_stHookManager.m_iMoveUpMax - 1000;
        }
        //cc.log(SpeedX);
        if(tmp.y + SpeedY < target.y)
        {
            let dx: number = SpeedX * ((tmp.y - target.y) / SpeedY);
            this.host.m_iX = tmp.x + dx;
            this.host.m_iY = target.y;
        }
        else
        {
            this.host.m_iX = this.host.m_iX + SpeedX;
            this.host.m_iY = this.host.m_iY + SpeedY;
        }

        if(this.host.m_iY > i_limity && this.host.m_iY < i_limity + this.host.m_iHeight)
        {
            if(this.host.m_iX > i_limitx)
            {
                if(this.host.m_iX - this.host.m_iWidth / 2 < i_limitx + this.host.m_iWidth / 2)
                    this.m_stBrickManager.ChangeBrickStatusToFall(Math.abs(SpeedX));
            }
            else if(this.host.m_iX + this.host.m_iWidth / 2 > i_limitx - this.host.m_iWidth / 2)
                this.m_stBrickManager.ChangeBrickStatusToFall(-Math.abs(SpeedX));
        }
        //this.host.center_gravity = cc.p(this.host.m_iX,this.host.m_iY);
        if(this.host.m_iY <= target.y)
        {
            this.m_stBrickManager.ChangeBrickStatusTo3();
            if(this.host.m_iY > this.m_stHookManager.m_iMoveUpMax - 1000)
            {
                //cc.log(Math.abs(this.host.m_iX+this.host.get_distsx(this.host.m_iWidth,this.host.m_Rotation)-target.x));
                if(Math.abs(this.host.m_iX - target.x) < target_len / 15)//prefect
                {
                    this.host.m_iX = target.x;
                    this.host.m_iY = target.y - this.host.get_disty(this.host.m_iWidth,this.host.m_Rotation) + this.host.m_iHeight / 2;
                    this.host.m_Rotation = 0;
                    this.flag = 0;
                }
                else if(Math.abs(this.host.m_iX + this.host.get_distx(this.host.m_iWidth,this.host.m_Rotation) - target.x) <= target_len / 2)
                {
                    this.initTo3();
                    //cc.log('shitbitch');
                }
                else if(Math.abs(this.host.m_iX + this.host.get_distsx(this.host.m_iWidth,this.host.m_Rotation) - target.x) <= target_len / 2)
                {
                    let x: number = 0;
                    let lx: number = 0;
                    if(this.host.m_Rotation > 0)
                    {
                        x = target_len / 2;
                        lx = this.host.m_iX + this.host.get_distsx(this.host.m_iWidth,this.host.m_Rotation);
                    }
                    else
                    {
                        x = -target_len / 2;
                        lx = this.host.m_iX + this.host.get_distx(this.host.m_iWidth,this.host.m_Rotation);
                    }
                    let y: number = tmp_poi;
                    this.tmp_dx = (target.x + x) - lx;
                    this.tmp_dx = this.tmp_dx / Math.cos(this.host.m_Rotation * Math.PI / 180);
                    this.tmp_dx = this.host.m_iWidth / 2 - this.tmp_dx;
                    //cc.log(this.tmp_dx);
                    this.host.OnStatusAddShake();
                    this.host.set_center(this.host,cc.p(target.x + x,y),lx);
                    this.flag = 3;
                    this.tag_rotate = 0;
                    //cc.log("fuckbitch"+cc.p(target.x,y)+" "+this.host.m_iX);
                }
                else
                    this.initTo3();
            }
            else
                this.flag = 4;
        }
    }
    private initTo3()
    {
        let x = this.host.get_distx(this.host.m_iWidth,this.host.m_Rotation);
        let y = this.host.get_disty(this.host.m_iHeight,this.host.m_Rotation);
        this.host.OnStatusAddShake();
        //cc.log(cc.p(this.host.m_iX,this.host.m_iY));
        this.host.change_center(this.host,cc.p(this.host.m_iX + x,this.host.m_iY - y));
        this.flag = 1;
        this.tag_rotate = 0;
    }
    private keep3()
    {
        //this.host.m_Rotation = (this.host.m_Rotation+this.tag_rotate)/2;
        let ax: number = this.host.m_stView.m_stNode.anchorX;
        let ay: number = this.host.m_stView.m_stNode.anchorY;
        this.host.ChangeBasePosition(this.host,cc.p(0.5,0.5));
        this.host.aaa();
        let x = this.host.m_iX - this.m_stBrickManager.m_iDownedBrickBasePointX;
        let y = this.host.m_iY - this.m_stBrickManager.m_iDownedBrickBasePointY;
        let t = this.m_stBrickManager.m_iDownedBrickNowBaseAngle + this.host.m_iBrickDownedDev;
        // cc.log('777 ' ,this.m_stBrickManager.m_iDownedBrickBasePointX + this.host.m_iBrickDownedDis * Math.cos(t)-this.host.m_iX);
        this.host.m_iX = this.m_stBrickManager.m_iDownedBrickBasePointX + this.host.m_iBrickDownedDis * Math.cos(t);
        this.host.m_iY = this.m_stBrickManager.m_iDownedBrickBasePointY + this.host.m_iBrickDownedDis * Math.sin(t);
        this.host.ChangeBasePosition(this.host,cc.p(ax,ay));

    }
    //** 碰撞 staus 3 */
    private flag: number = 1;
    private tag_rotate: number = 0;
    private dtag: number = 30;//碰撞最大旋转角度
    private tmp_dx: number = 0;
    private dr: number = 0.8;
    private OnStatusCollision(): void
    {
        //this.host.m_Rotation = (this.host.m_Rotation+this.tag_rotate)/2;
        if(this.host.m_Rotation > this.tag_rotate)
        {
            this.host.m_Rotation -= this.dr;
            if(this.flag != 3) this.host.m_Rotation -= 2 * this.dr;
            if(this.host.m_Rotation < this.tag_rotate)
                this.host.m_Rotation = this.tag_rotate + 0.05;
        }
        else
        {
            this.host.m_Rotation += this.dr;
            if(this.flag != 3) this.host.m_Rotation += 2 * this.dr;
            if(this.host.m_Rotation > this.tag_rotate)
                this.host.m_Rotation = this.tag_rotate - 0.05;
        }
        if(this.flag == 0)
        {//完美
            let tmp_Brick: Brick = this.m_stBrickManager.GetSecondToLastBrick();
            let r = tmp_Brick.m_Rotation / 180 * Math.PI;
            this.host.m_iX = tmp_Brick.m_iX + Math.sin(r) * tmp_Brick.m_iHeight;
            this.host.m_iY = tmp_Brick.m_iY + Math.cos(r) * tmp_Brick.m_iHeight;
            this.host.OnStatusAddShake();
            this.m_stBrickManager.ChangeBrickStatusTo6(3);
            this.host.m_stView.FlyPerson(3);//飞出人物
            if(this.m_stBrickManager.GetBrickNum() > 3) this.m_stHookManager.m_iMoveUpMax += BrickConfigMgr.Instance.m_iHeight;//钩子上移
            else if(this.m_stBrickManager.GetBrickNum() == 3) this.m_stHookManager.m_iMoveUpMax += BrickConfigMgr.Instance.m_iHeight / 2;
            this.host.m_stView.m_stskeleton.active = true;
            this.host.m_stView.m_stskeleton.position = cc.p(this.host.m_iX,this.host.m_iY - this.host.m_iHeight / 2);
            this.m_stBrickManager.AddBrick();
            cc.log('prefect');
        }
        else if(this.flag == 1)
        {//砖块回
            if(this.host.jfe(this.host.m_Rotation,this.tag_rotate))
            {
                let x: number = 0;
                let y: number = 0;
                if(this.host.m_Rotation > 0)
                {
                    x = this.host.m_iX - this.host.m_iWidth / 2;
                    y = this.host.m_iY + this.host.m_iHeight / 2;
                    //cc.log("shit");
                }
                else
                {
                    x = this.host.m_iX + this.host.m_iWidth / 2;
                    y = this.host.m_iY + this.host.m_iHeight / 2;
                }
                this.host.change_center(this.host,cc.p(x,y));
                //cc.log(cc.p(x,y));
                this.host.m_Rotation = 0;
                this.flag = 2;
                if(this.m_stBrickManager.m_bIsFirst == true)
                {
                    let tmp_Brick: Brick = this.m_stBrickManager.GetSecondToLastBrick();
                    let poi: cc.Vec2 = cc.p(tmp_Brick.m_iX,tmp_Brick.m_iY);
                    if(this.host.m_iX < poi.x)
                    {
                        this.tag_rotate = (this.host.m_iX - poi.x) / this.host.m_iWidth * this.dtag;//根据偏移量设置偏移角
                        x = poi.x - tmp_Brick.m_iWidth / 2;
                    }
                    else
                    {
                        this.tag_rotate = (this.host.m_iX - poi.x) / this.host.m_iWidth * this.dtag;//根据偏移量设置偏移角
                        x = poi.x + tmp_Brick.m_iWidth / 2;
                    }
                    this.tmp_dx = this.host.m_iX - x;
                    this.host.change_center(this.host,cc.p(x,poi.y + tmp_Brick.m_iHeight / 2));
                    this.flag = 2;
                }
                else
                    this.flag = 4;
                //this.host.change_center(this.host,cc.p());
            }
        }
        else if(this.flag == 2)
        {//左右摇晃
            let tmp_Brick: Brick = this.m_stBrickManager.GetSecondToLastBrick();
            let poi: cc.Vec2 = cc.p(tmp_Brick.m_iX,tmp_Brick.m_iY);
            let cpoi: cc.Vec2 = cc.p(this.host.m_iX + this.tmp_dx,this.host.m_iY + this.host.m_iHeight / 2);
            if(Math.abs(poi.x - cpoi.x) >= tmp_Brick.m_iWidth / 2)
            {
                if(poi.x > cpoi.x)
                    this.tag_rotate = -90;
                else
                    this.tag_rotate = 90;
                this.flag = 5;
            }
            else if(this.host.jfe(this.host.m_Rotation,this.tag_rotate))
            {
                let tmp_Brick: Brick = this.m_stBrickManager.GetSecondToLastBrick();
                let poi: cc.Vec2 = cc.p(tmp_Brick.m_iX,tmp_Brick.m_iY);
                let cpoi: cc.Vec2 = cc.p(this.host.m_iX + this.tmp_dx,this.host.m_iY + this.host.m_iHeight / 2);
                if(Math.abs(poi.x - cpoi.x) < tmp_Brick.m_iWidth / 2)
                {
                    this.tag_rotate = 0;
                    this.flag = 3;
                }
                else
                {
                    this.tag_rotate = this.tag_rotate / Math.abs(this.tag_rotate) * 90;
                    this.flag = 5;
                }
            }
        }
        else if(this.flag == 3)
        {//摇晃回正
            let tmp_Brick: Brick = this.m_stBrickManager.GetSecondToLastBrick();
            let poi: cc.Vec2 = cc.p(tmp_Brick.m_iX,tmp_Brick.m_iY);
            let cpoi: cc.Vec2 = cc.p(this.host.m_iX + this.tmp_dx,this.host.m_iY + this.host.m_iHeight / 2);
            if(Math.abs(poi.x - cpoi.x) >= tmp_Brick.m_iWidth / 2)
            {
                if(poi.x > cpoi.x)
                    this.tag_rotate = -90;
                else
                    this.tag_rotate = 90;
                this.flag = 5;
            }
            else if(this.host.jfe(this.host.m_Rotation,this.tag_rotate))
            {
                let x: number = 0;
                let y: number = 0;
                x = this.host.m_iX + this.tmp_dx;
                y = this.host.m_iY + this.host.m_iHeight / 2;
                //cc.log("fuckshit",x,y);
                this.host.change_center(this.host,cc.p(x,y));
                this.flag = 4;
            }
        }
        else if(this.flag == 5)
        {
            this.dr += 5;
            if(this.host.jfe(this.host.m_Rotation,this.tag_rotate))
            {
                let tmpx: number;
                if(this.tag_rotate > 0)
                    tmpx = 2;
                else
                    tmpx = -2;
                this.m_stBrickManager.ChangeBrickStatusToFall(tmpx);
            }
        }
        else
        {//碰撞结束
            //cc.log(this.host.m_stView.m_stNode.anchorX);
            //this.host.ChangeBasePosition(this.host,cc.p(0.5,0.5));
            this.host.OnStatusAddShake();
            if(this.host.m_iY > this.m_stHookManager.m_iMoveUpMax - 1000)
            {
                let tmp_Brick: Brick = this.m_stBrickManager.GetSecondToLastBrick();
                if(tmp_Brick != null && Math.abs(this.host.m_iX - tmp_Brick.m_iX) <= tmp_Brick.m_iWidth / 4)
                {
                    this.m_stBrickManager.ChangeBrickStatusTo6(2);
                    this.host.m_stView.FlyPerson(2);
                }
                else
                {
                    this.m_stBrickManager.ChangeBrickStatusTo6(1);
                    this.host.m_stView.FlyPerson(1);
                }
                if(this.m_stBrickManager.GetBrickNum() > 3) this.m_stHookManager.m_iMoveUpMax += BrickConfigMgr.Instance.m_iHeight;//钩子上移
                else if(this.m_stBrickManager.GetBrickNum() == 3) this.m_stHookManager.m_iMoveUpMax += BrickConfigMgr.Instance.m_iHeight / 2;
                this.m_stBrickManager.AddBrick();
            }
            else
                this.m_stBrickManager.FallBrickAndNewBrick();
        }
        if(this.m_stBrickManager.GetBrickNum() > 13 && this.flag != 5) this.keep3();
    }
    //** 跌落staus 4 跌落出界面之后 新建砖块 */
    private OnStatusFallAndNewBrick(): void
    {
        let tmpx: number = this.host.m_iWidth * this.host.m_iFallSpeedX * BrickConfigMgr.Instance.m_iFallSpeedX / 4;
        let tmpy: number = -this.host.m_iHeight * BrickConfigMgr.Instance.m_iFallSpeedY * 2;
        let tmpr: number = 5;
        let poi: cc.Vec2 = cc.p(this.host.m_iX,this.host.m_iY);
        this.host.m_iX = poi.x + tmpx;
        this.host.m_iY = poi.y + tmpy;
        this.host.m_Rotation += tmpr * this.host.m_iFallSpeedX / Math.abs(this.host.m_iFallSpeedX);
        if(this.host.m_iY < this.m_stHookManager.m_iMoveUpMax - 1000)
        {
            this.m_stBrickManager.EraseBrick();
            this.m_stBrickManager.FallBrickAndNewBrick();
        }
    }

    //**跌落 staus 5 */
    private OnStatusFall(): void
    {
        let tmpx: number = this.host.m_iWidth * this.host.m_iFallSpeedX * BrickConfigMgr.Instance.m_iFallSpeedX / 4;//X速度
        let tmpy: number = -this.host.m_iHeight * BrickConfigMgr.Instance.m_iFallSpeedY;//Y速度
        let tmpr: number = 5;
        let poi: cc.Vec2 = cc.p(this.host.m_iX,this.host.m_iY);
        this.host.m_iX = poi.x + tmpx;
        this.host.m_iY = poi.y + tmpy;
        this.host.m_Rotation += tmpr * this.host.m_iFallSpeedX / Math.abs(this.host.m_iFallSpeedX);

    }

    //**已经摆放的砖块的摇晃 staus 6 */
    private OnStatusShake(): void
    {
        let x = this.host.m_iX - this.m_stBrickManager.m_iDownedBrickBasePointX;
        let y = this.host.m_iY - this.m_stBrickManager.m_iDownedBrickBasePointY;
        let t = this.m_stBrickManager.m_iDownedBrickNowBaseAngle + this.host.m_iBrickDownedDev;
        //cc.log( '666'+' ',this.m_stBrickManager.m_iDownedBrickBasePointX + this.host.m_iBrickDownedDis * Math.cos(t)-this.host.m_iX);
        this.host.m_iX = this.m_stBrickManager.m_iDownedBrickBasePointX + this.host.m_iBrickDownedDis * Math.cos(t);
        this.host.m_iY = this.m_stBrickManager.m_iDownedBrickBasePointY + this.host.m_iBrickDownedDis * Math.sin(t);
        this.host.m_Rotation = -1 * this.m_stBrickManager.m_iDownedBrickNowBaseAngle / Math.PI * 180;
        //cc.log("666"+this.host.m_iBrickDownedDis * Math.cos(t),this.host.m_iBrickDownedDis * Math.sin(t));
    }
    // private fun7()
    // {
    //     if(BrickManager.Instance.ismoveLeft)
    //     {
    //         this.host.m_iX -= BrickManager.Instance.movespeed;
    //     }
    //     else
    //     {
    //         this.host.m_iX += BrickManager.Instance.movespeed;
    //     }

    // }

    Update(dt: number)
    {
        //cc.log("!!!~~~!!!:::" + this.host)
        switch(this.host.m_iBrickStatus)
        {
            case 1: this.OnStatusHook(); break;
            case 2: this.OnStatusDrop(); break;
            case 3: this.OnStatusCollision(); break;
            case 4: this.OnStatusFallAndNewBrick(); break;
            case 5: this.OnStatusFall(); break;
            case 6: this.OnStatusShake(); break;
            default: break;
        }
    }
}