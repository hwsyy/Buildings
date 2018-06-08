// import {ITick} from "../commonlib/Ticker";
import Brick from "./Brick";
import HookManager from "../hook/HookManager";
import BrickConfigMgr from "./BrickConfigMgr";
import SingleApp from "../single/SingleApp";


export default class BrickManager
{

    // public static readonly Instance: BrickManager = new BrickManager();
    public SingleApp: SingleApp = null;
    public constructor(host: SingleApp)
    {
        this.SingleApp = host;
    }
    /////////////////////////////////

    //**底层楼体左右摇晃的最大角度 */
    public m_iDownedBrickLeftmax: number;

    //**底层楼体摇晃角频率 */
    public m_iDownedBrickFrequency: number;

    //**底层楼体摇晃的原点 */
    public m_iDownedBrickBasePointX: number;
    public m_iDownedBrickBasePointY: number;

    //**底层楼体此时的摇晃角度 */
    public m_iDownedBrickNowBaseAngle: number = 0.0;

    //**底层楼体是否在向左晃ing */
    //public m_bIsDownedBrickLefting: boolean = false;

    /////////////////////////////////

    ////*仅仅测试显示，删掉就行了*/
    private m_stBrick: Brick = null;

    //*砖块的队列 */
    private m_stBrickQueue: Brick[] = [];

    //* 砖块的个数 */
    private m_iBrickNum: number = 0;

    //* 单个操作得分队列 */
    private m_iSPQueue: number[] = [];

    //* 队列大小 */
    private m_iSPNum: number = 0;

    //* 需要更新的砖块默认数值*/
    private m_iNeedUpdateBrickNUM: number = BrickConfigMgr.Instance.m_iNeedUpdateBrickNUM;

    //* 用来延迟更新楼体振幅*/
    private m_iLazyA: number = 0;

    //* 当前帧编号*/
    //该变量目前只在UpdateDownedBrickangle函数运行结束前更新
    private m_iFrameCnt: number = 0;

    //* 第一个是否已经落在地上*//
    public m_bIsFirst: boolean = false;

    public m_HP: number = 3;
    public m_score3: number[] = [];
    public m_bIsFall: boolean = false;
    public PrefectEffect()
    {
        for(var i = this.m_iBrickNum - 1;i >= this.m_iBrickNum - 4 && i >= 0;i--)
            if(this.m_stBrickQueue[i].m_stView != null)
                this.m_stBrickQueue[i].m_stView.m_stkirakira.active = true;
    }
    public ExitEffect()
    {
        for(var i = this.m_iBrickNum - 1;i >= this.m_iBrickNum - 5 && i >= 0;i--)
            if(this.m_stBrickQueue[i].m_stView != null)
                this.m_stBrickQueue[i].m_stView.m_stkirakira.active = false;
    }
    //* 增加一个砖块*/
    public AddBrick(): void
    {
        this.m_stBrickQueue[this.m_iBrickNum] = new Brick(this.SingleApp,this);
        this.m_stBrickQueue[this.m_iBrickNum].m_iBrickStatus = 1;//状态一
        this.m_iBrickNum = this.m_iBrickNum + 1;
    }

    //** 砖块跌落并创建一个砖块*/
    public FallBrickAndNewBrick(): void
    {
        this.m_HP--;
        this.m_bIsFall = true;
        this.m_stBrickQueue[this.m_iBrickNum - 1].m_stView.m_stkirakira.destroy();
        this.m_stBrickQueue[this.m_iBrickNum - 1].OnDestory();//删除 prefab
        this.m_stBrickQueue[this.m_iBrickNum - 1] = new Brick(this.SingleApp,this);
        this.m_stBrickQueue[this.m_iBrickNum - 1].m_iBrickStatus = 1;
    }

    //** 获取倒数第二个砖块*/
    public GetSecondToLastBrick(): Brick
    {

        // cc.log(this.m_BrickNum);
        if(this.m_iBrickNum < 2) return null;
        return this.m_stBrickQueue[this.m_iBrickNum - 2];
    }

    //** 改变砖块的状到三状态*/
    public ChangeBrickStatusTo3()
    {
        this.m_stBrickQueue[this.m_iBrickNum - 1].m_iBrickStatus = 3;
        if(this.m_iBrickNum == 1)
        {
            //this.m_bIsFirst = true;
            this.m_iDownedBrickBasePointX = this.m_stBrickQueue[this.m_iBrickNum - 1].m_iX;
            this.m_iDownedBrickBasePointY = BrickConfigMgr.Instance.m_iDownedBrickBasePointY;
            //this.m_iDownedBrickBasePointX += this.SingleApp.m_CanvasChangeX;
        }
    }
    //** 改变砖块的状到六状态*/
    public ChangeBrickStatusTo6(num: number)
    {
        if(this.m_bIsFirst)
            this.m_iSPQueue[this.m_iSPNum++] = num;
        else
        {
            num = 1;
            this.m_iSPQueue[this.m_iSPNum++] = 1;
        }
        this.m_score3[this.m_iBrickNum - 1] = num;
        this.m_bIsFirst = true;//将这个改变移到了状态6
        this.m_stBrickQueue[this.m_iBrickNum - 1].m_iBrickStatus = 6;
    }

    //** 获取砖块的数量*/
    public GetBrickNum(): number
    {
        return this.m_iBrickNum;
    }
    public GetSPNum(): number
    {
        return this.m_iSPNum;
    }
    public GetSinglePeople(): number
    {
        return this.m_iSPQueue[--this.m_iSPNum];
    }

    //** 改变砖块的状态到跌落状态*/
    public ChangeBrickStatusToFall(tmp: number): void
    {
        this.m_stBrickQueue[this.m_iBrickNum - 1].m_iFallSpeedX = tmp;
        this.m_stBrickQueue[this.m_iBrickNum - 1].m_iBrickStatus = 4;
        //this.m_HP--;
        //this.m_bIsFall = true;
        if(this.m_iBrickNum - 2 > 0)
        {
            this.m_stBrickQueue[this.m_iBrickNum - 2].m_iFallSpeedX = tmp;
            this.m_stBrickQueue[this.m_iBrickNum - 2].m_iBrickStatus = 5;
            this.m_iSPQueue[this.m_iSPNum++] = -this.m_score3[this.m_iBrickNum - 2];
            if(this.m_iBrickNum > 4) this.SingleApp.m_stHookManager.m_iMoveUpMax -= BrickConfigMgr.Instance.m_iHeight;
            else if(this.m_iBrickNum == 4) this.SingleApp.m_stHookManager.m_iMoveUpMax -= BrickConfigMgr.Instance.m_iHeight / 2;
        }
    }

    //** 删除一个砖块*/
    public EraseBrick(): void
    {
        if(this.m_iBrickNum > 2)
        {
            this.m_stBrickQueue[this.m_iBrickNum - 1].OnDestory();//删除 prefab
            this.m_iBrickNum--;
        }
    }

    //** 更新底层楼体摇晃角度*/
    /*
    private UpdateDownedBrickangle()
    {
        let u = Math.min(1.0,Math.max(0,this.m_iBrickNum - 4) / 15);
        if(this.m_bIsDownedBrickLefting)
        {
            this.m_iDownedBrickNowBaseAngle += this.m_iDownedBrickSpeed * u * 0.8;//左
        }
        else
        {
            this.m_iDownedBrickNowBaseAngle -= this.m_iDownedBrickSpeed * u * 0.8;//右
        }
        let realU = u * 0.8;
        if(this.m_iDownedBrickNowBaseAngle > this.m_iDownedBrickLeftmax * realU)
        {
            this.m_iDownedBrickNowBaseAngle = 2.0 * this.m_iDownedBrickLeftmax * realU - this.m_iDownedBrickNowBaseAngle;
            this.m_bIsDownedBrickLefting = false;
        }
        else if(this.m_iDownedBrickNowBaseAngle < -1.0 * this.m_iDownedBrickLeftmax * realU)
        {
            this.m_iDownedBrickNowBaseAngle = -2.0 * this.m_iDownedBrickLeftmax * realU - this.m_iDownedBrickNowBaseAngle;
            this.m_bIsDownedBrickLefting = true;
        }
    }
    */

    //** 更新底层楼体摇晃角度*/
    private UpdateDownedBrickangle()
    {
        
        /*
        // 4 层之前：不摇晃
        // 4 - 19层：摇晃角度增大
        // 25 层之后：摇晃角度随楼的高度增高而变小，保持弧长基本一致
        let A = Math.min(1.0,Math.max(0,this.m_iBrickNum - 4) / 15);
        if (this.m_iBrickNum >= 25) {
            A = Math.asin(Math.sin(this.m_iDownedBrickLeftmax) * 25 / this.m_iBrickNum) / this.m_iDownedBrickLeftmax;
        }
        this.m_iDownedBrickNowBaseAngle = this.m_iDownedBrickLeftmax * this.m_iLazyA * Math.sin(this.m_iDownedBrickFrequency * this.m_iFrameCnt); 
        */

        // 缓慢改变振幅
        // f(x) = A * sin(omega * x)
        // 为保证楼摇动弧长与楼层数平方根成正比，即 C ∝ sqrt(n);
        // A = k / sqrt(n), 下式中k取5
        // n <= 5 时，楼体不晃动
        let A = this.m_iBrickNum > 5 ? 5 / Math.sqrt(this.m_iBrickNum + 10) : 0;
        /*
        console.log("C = " + (A * this.m_iDownedBrickLeftmax * this.m_iBrickNum * 120).toString() 
                   + ", original C = " , (Math.min(1.0,Math.max(0,this.m_iBrickNum - 4) / 15) * this.m_iDownedBrickLeftmax * this.m_iBrickNum * 120).toString());
        */
        if (Math.abs(this.m_iLazyA - A) > 0.05) {
            if (this.m_iLazyA < A) this.m_iLazyA += 0.001;
            else this.m_iLazyA -= 0.001;
        }
        this.m_iDownedBrickNowBaseAngle = this.m_iDownedBrickLeftmax * this.m_iLazyA * Math.sin(this.m_iDownedBrickFrequency * this.m_iFrameCnt); 
        this.m_iFrameCnt += 1;
    }

    Update(dt: number)
    {
        if(this.m_iBrickNum > 4)
            this.UpdateDownedBrickangle();
        let Counts: number = this.m_iBrickNum;

        if(Counts > this.m_iNeedUpdateBrickNUM)
        {
            Counts = this.m_iNeedUpdateBrickNUM;
        }
        for(var i = 0;i <= this.m_iBrickNum - 1;i = i + 1)
        {
            //** 所有砖块逻辑的更新*/
            if(this.m_stBrickQueue[i] != null)
                this.m_stBrickQueue[i].FixedUpdate(60,dt);
        }

        for(var i = 0;i <= this.m_iBrickNum - 1;i = i + 1)
        {
            //** 所有砖块表现的更新*/
            if(this.m_stBrickQueue[i] != null)
                this.m_stBrickQueue[i].Update(dt);
        }

    }

    Init()
    {
        this.m_iDownedBrickLeftmax = BrickConfigMgr.Instance.m_iDownedBrickLeftmax;

        //**底层楼体摇晃速度 */
        this.m_iDownedBrickFrequency = BrickConfigMgr.Instance.m_iDownedBrickFrequency;

        //**底层楼体摇晃的原点 */
        // this.m_iDownedBrickBasePointX = BrickConfigMgr.Instance.m_iDownedBrickBasePointX;
        // this.m_iDownedBrickBasePointY = BrickConfigMgr.Instance.m_iDownedBrickBasePointY;
        // this.m_iDownedBrickBasePointX += this.SingleApp.m_CanvasChangeX;
        this.AddBrick();
    }

    /** 触发点击事件之后 更改顶端砖块的状态*/
    OnReleaseBtnClicked()
    {
        if(this.m_stBrickQueue[this.m_iBrickNum - 1].m_iBrickStatus == 1)
            this.m_stBrickQueue[this.m_iBrickNum - 1].m_iBrickStatus = 2;
    }
}
