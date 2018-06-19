import {ConfigData} from "../common/ConfigData";
import {BattleManager} from "../manager/BattleManager";
import {BrickState} from "../common/GameEnum";
import {ResStruct} from "../../corelibs/util/ResourcesMgr";
import Core from "../../corelibs/Core";
import {ResType} from "../../corelibs/CoreDefine";

/**
 * 砖块单元
 * @author zhouyulong
 * @2018年5月24日 14:51:20
 */
export class BrickCell
{
    /**播放次数 */
    private readonly PLAY_COUNT = 3;
    /**完美特效偏移量 */
    private readonly PERFECT_EFFECT_OFFSETY: number = 45;
    /**砖块层级 */
    private readonly LOCAL_ZORDER: number = 3;
    /**砖块ID 唯一标记 */
    private id: number;
    /**资源 */
    public res: cc.Node;
    /** 上一个砖块 */
    public m_stLastBrick: BrickCell;
    /**完美动画资源 */
    private perfectEffectRes: cc.Node;
    /**父结点 */
    private parent: cc.Node;
    /** 完美特效*/
    private perfectEffect: cc.Node;
    /**当前播放次数 */
    private currentPlayCount: number;
    /** 偏移量 */
    public offset: number;
    /** 落点坐标 */
    private originPosition: cc.Vec2;
    /** 跌落时旋转幅度 (非弧度单位)*/
    private rotate: number;
    /** 砖块的状态 */
    public state: BrickState;
    /** 人口 */
    public m_iPopulation: number;

    // 动画
    public m_bShouldFly: boolean = false;
    private m_bIsFlying: boolean = false;
    private m_iFlyDuration: number = 130;
    private m_iFlyTick: number = 0;
    private m_iDestroyTime: number = 110;
    private m_stPerson1: cc.Node = null;
    private m_stPerson2: cc.Node = null;
    private m_stPerson3: cc.Node = null;
    private m_stPerson4: cc.Node = null;
    private m_iPerson3Changex: number = 0;
    private m_iPerson3Changey: number = 0;

    constructor(_id: number,_res: cc.Node,_perfectEffect: cc.Node)
    {
        this.id = _id;
        this.res = _res;
        this.perfectEffectRes = _perfectEffect.getChildByName("sp_perfectEffect");
        this.currentPlayCount = 0;
        this.offset = 0;
        this.rotate = 0;
        this.m_iPopulation = 0;
    }

    public init(_parent: cc.Node): void
    {
        this.parent = _parent;
        this.parent.addChild(this.res);
        //放在最前
        this.res.setLocalZOrder(this.LOCAL_ZORDER);
    }

    /**
     * 设置位置
     */
    public setPosition(_x: number,_y: number): void
    {
        this.res.x = _x;
        this.res.y = _y;
    }
    /**
     *设置旋转角度
     *
     * @param {number} rotaion
     * @memberof BrickCell
     */
    public setRotation(rotaion: number): void
    {
        this.res.rotation = rotaion;
    }
    public animateWithBrickPopulation(): void
    {
        console.log("animateWithBrickPopulation");
        if(this.m_bIsFlying == false)
        {
            let num = Math.floor(Math.random() * 10) % 2 + 1;
            let path: string = "animation/person" + num + "/skeleton" + num;
            if(this.id < 33)
            {
                Core.ResourcesMgr.LoadRes(ResStruct.CreateRes(path,ResType.Prefab),this.PopulationOnBoardAnimation1.bind(this));
            }
            else
            {
                Core.ResourcesMgr.LoadRes(ResStruct.CreateRes(path,ResType.Prefab),this.PopulationOnBoardAnimation1.bind(this));
            }
            this.m_bIsFlying = true;
        }
        else
        {
            let shouldDestroy: boolean = false;
            if(this.m_stPerson3 != null)
            {
                this.m_iFlyTick += 1;
                this.m_stPerson3.setScale(cc.p(-0.25 * this.m_iFlyTick / this.m_iFlyDuration,0.25 * this.m_iFlyTick / this.m_iFlyDuration));
                if(this.m_iFlyTick >= this.m_iDestroyTime)
                {
                    this.m_stPerson3.active = false;
                    shouldDestroy = true;

                }
                this.m_stPerson3.position = cc.p(this.m_stPerson3.position.x - this.m_iPerson3Changex,this.m_stPerson3.position.y - this.m_iPerson3Changey);
                this.m_iPerson3Changex = (this.m_stPerson3.position.x) / (this.m_iFlyDuration - this.m_iFlyTick);
                this.m_iPerson3Changey = this.m_stPerson3.position.y / (this.m_iFlyDuration - this.m_iFlyTick);
                console.log(">>>>>>>>>>>>>>>>tick: ",this.m_iFlyTick,"postion: ",this.m_stPerson3.position,"change X: ",this.m_iPerson3Changex,"Y: ",this.m_iPerson3Changey);
            }
            if(shouldDestroy == true && this.m_stPerson3 != null)
            {
                this.m_stPerson3.destroy();
                this.m_bShouldFly = false;
            }
        }
    }

    private PopulationOnBoardAnimation1(prefab)
    {
        let dis1 = 100;
        let dis2 = 150;
        this.m_stPerson3 = cc.instantiate(prefab);
        this.m_stPerson3.setScale(cc.p(-0.25 / this.m_iFlyDuration,0.25 / this.m_iFlyDuration));
        this.m_stPerson3.position = new cc.Vec2(dis2,dis1);
        this.res.addChild(this.m_stPerson3);
        console.log("person",this.m_stPerson3);

        // this.m_iPerson3Changex = (this.m_stPerson3.position.x - this.res.x) / this.m_iFlyDuration;
        // this.m_iPerson3Changey = (this.m_stPerson3.position.y - this.res.x) / this.m_iFlyDuration;
        // console.log("创建一个ren3 " + this.m_iPerson3Changex + " " + this.m_iPerson3Changey);
    }

    /**
     * 播放完美动画
     */
    public playPerfectEffect(): void
    {
        if(this.perfectEffect != null)
        {
            this.removePerfectEffect();
        }
        this.perfectEffect = cc.instantiate(this.perfectEffectRes);
        this.perfectEffect.getComponent(sp.Skeleton).setCompleteListener(this.playComplete.bind(this));
        this.res.addChild(this.perfectEffect);
        this.perfectEffect.setLocalZOrder(this.LOCAL_ZORDER + 1);//在砖块层级之上
        // this.perfectEffect.x = this.res.x;
        // this.perfectEffect.y = this.res.y - this.PERFECT_EFFECT_OFFSETY;
        this.perfectEffect.x = 0;
        this.perfectEffect.y = 0 - this.PERFECT_EFFECT_OFFSETY;
    }
    /**
     *砖块跌落动画
     *
     * @memberof BrickCell
     */
    public brickFallAnimation(): void
    {
        this.res.x += Math.sign(this.offset) * ConfigData.BRICK_SPEED_X * 3;
        this.res.y = -0.01 * Math.pow(this.res.x - this.originPosition.x,2) + this.originPosition.y * 2;
        this.rotate += Math.sign(this.offset) * ConfigData.BRICK_ROTATE_SPEED;
        this.rotate %= 360;
        this.res.rotation = this.rotate;
    }

    /**
     * 帧刷新
     */
    public update(_endX: number,_endY: number,_callBack: Function): void
    {

        if(this.state == BrickState.COLLAPSE)
        {
            if(this.res.y < -ConfigData.CAMERA_HEIGHT / 2 - 70)
            {
                if(this.parent != null)
                {
                    this.parent.removeChild(this.res);
                }
                if(this.m_stLastBrick != null && this.m_stLastBrick.parent != null)
                {
                    this.m_stLastBrick.res.removeFromParent();
                }
                this.state = BrickState.CRACK;
                _callBack(BrickState.CRACK);
            }
            else
            {
                this.res.x += Math.sign(this.offset) * ConfigData.BRICK_SPEED_X;
                this.res.y = -0.01 * Math.pow(this.res.x - this.originPosition.x,2) + this.originPosition.y;
                this.rotate += Math.sign(this.offset) * ConfigData.BRICK_ROTATE_SPEED;
                this.rotate %= 360;
                this.res.rotation = this.rotate;
                if(this.m_stLastBrick != null)
                {
                    this.m_stLastBrick.setPosition(this.res.x - this.offset,this.res.y - ConfigData.BRICK_HEIGHT);
                    this.m_stLastBrick.res.rotation = this.res.rotation;
                }
            }
            return;
        }
        this.offset = this.res.x - _endX;//掉落的楼层和底部楼层的偏差
        if(this.res.y - ConfigData.BRICK_FALL_SPEED > _endY)
        {
            this.res.y -= ConfigData.BRICK_FALL_SPEED;
        }
        else
        {
            /** 第一次掉落直接返回 */
            if(this.id == 0)
            {
                this.res.y = _endY;
                this.originPosition = this.res.position;
                this.m_bShouldFly = true;
                _callBack(BrickState.NORMAL);
                return;
            }
            if(Math.abs(this.offset) > ConfigData.BRICK_WIDTH)//没有触碰到楼层跌落
            {
                this.res.y = this.res.y - ConfigData.BRICK_FALL_SPEED;
                //离开屏幕后移除并返回状态
                if(this.res.y - ConfigData.BRICK_FALL_SPEED < -ConfigData.CAMERA_HEIGHT / 2 - 70)
                {
                    if(this.parent != null)
                    {
                        this.parent.removeChild(this.res);
                    }
                    this.state = BrickState.FALLING;
                    _callBack(BrickState.FALLING);
                }
            }
            else if(Math.abs(this.offset) > ConfigData.NORMAL_OFFSET_X) //触碰到楼层跌落
            {
                console.log("callapse!!");
                this.res.y = _endY;
                this.state = BrickState.COLLAPSE;
                this.originPosition = this.res.position;
                _callBack(BrickState.COLLAPSE);
            }
            else
            {
                //盖楼成功
                this.res.y = _endY;
                this.originPosition = this.res.position;
                if(Math.abs(this.offset) <= ConfigData.PERFECT_OFFEST_X)
                {
                    console.log("perfect!!");
                    this.state = BrickState.PERFECT;
                    _callBack(BrickState.PERFECT);//完美 结束回调
                }
                else if(Math.abs(this.offset) <= ConfigData.GOOD_OFFSET_X && Math.abs(this.offset) > ConfigData.PERFECT_OFFEST_X)
                {
                    console.log("good!!");
                    this.state = BrickState.GOOD;
                    _callBack(BrickState.GOOD);
                }
                else if(Math.abs(this.offset) <= ConfigData.NORMAL_OFFSET_X && Math.abs(this.offset) > ConfigData.GOOD_OFFSET_X)
                {
                    console.log("normal!!");
                    this.state = BrickState.NORMAL;
                    _callBack(BrickState.NORMAL);//结束回调
                }
                this.m_bShouldFly = true;
            }

        }
    }

    /**
     * 一次播放完成
     */
    private playComplete(): void
    {
        this.currentPlayCount++;
        if(this.currentPlayCount >= this.PLAY_COUNT)
        {
            this.removePerfectEffect();
        }
    }

    /**
     * 移除完美特效
     */
    private removePerfectEffect(): void
    {
        this.currentPlayCount = 0;
        this.perfectEffect.getComponent(sp.Skeleton).setCompleteListener(null);
        this.perfectEffect.parent.removeChild(this.perfectEffect);
        this.perfectEffect.destroy();
        this.perfectEffect = null;
    }
}