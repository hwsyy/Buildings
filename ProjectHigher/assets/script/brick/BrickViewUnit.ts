import Brick from "./Brick";
import HookManager from "../hook/HookManager";
import BrickConfigMgr from "./BrickConfigMgr";
import Core from "../../corelibs/Core";
import {ResStruct} from "../../corelibs/util/ResourcesMgr";
import {ResType} from "../../corelibs/CoreDefine";
import SingleEntrance from "../single/SingleEntrance";
import {configure} from "protobufjs";
import BackgroundMgr from "../background/BackgroundMgr";

/**
 * 控制砖块的显示
 */

export default class BrickViewUnit
{

    public m_stNode: cc.Node = null;
    public m_stkirakira: cc.Node = null;
    public m_stskeleton: cc.Node = null;

    public m_stSkeletonPerson1: cc.Node = null;
    public m_stSkeletonPerson2: cc.Node = null;//飞入人物
    public m_stSkeletonPerson3: cc.Node = null;
    public m_stSkeletonPerson4: cc.Node = null;//飞入人物

    public m_iFlyShowStaus: number = 0;

    public m_iPerson1Changex: number = 0;
    public m_iPerson2Changex: number = 0;

    public m_iPerson1Changey: number = 0;
    public m_iPerson2Changey: number = 0;//飞入人物偏移

    public m_iPerson3Changex: number = 0;
    public m_iPerson4Changex: number = 0;

    public m_iPerson3Changey: number = 0;
    public m_iPerson4Changey: number = 0;//飞入人物偏移

    public m_iFlyTime: number = 130; //飞行时间

    public m_iDestoryTime: number = 110;

    public m_iTargetTick: number = 0;

    public m_ststar: cc.Node = null;
    private m_stHost: Brick = null;

    private b_isLoaded: boolean = null;
    private mbIsView: boolean = false;
    public BricksName: string;

    public m_bIsFly: boolean = false;
    constructor(host: Brick)
    {
        this.m_stHost = host;
        this.BricksName = "camera" + host.m_stBrickManager.SingleApp.Name + '/' + "Bricks" + host.m_stBrickManager.SingleApp.Name;
        this.Init();
    }

    private Init()
    {
        this.b_isLoaded = false;
        let x = this.m_stHost.SingleApp.m_iBrickType;
        let y = 1;
        if(this.m_stHost.m_stBrickManager.m_bIsFirst == false)
        {
            y = 0;
        }
        // cc.loader.loadRes("prefabs/brick1",this.OnLoadResponse.bind(this));
        Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("prefabs/brick" + x.toString() + y.toString(),ResType.Prefab),this.OnLoadResponse.bind(this));
        Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("prefabs/kirakira",ResType.Prefab),this.OnLoadEffect.bind(this));
        Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("prefabs/skeleton",ResType.Prefab),this.OnLoadEffect2.bind(this));
        this.m_bIsFly = false;

    }
    private OnLoadEffect(prefab)
    {
        //console.log("kirakira");
        this.m_stkirakira = cc.instantiate(prefab);
        cc.find(this.BricksName).addChild(this.m_stkirakira,7);
        //this.m_stkirakira.active =true;
        this.m_stkirakira.position = cc.p(500,-1000);
    }
    private OnLoadEffect2(prefab)
    {
        this.m_stskeleton = cc.instantiate(prefab);
        cc.find(this.BricksName).addChild(this.m_stskeleton,7);

    }
    private OnLoadEffect3(prefab)
    {
        this.m_stSkeletonPerson1 = cc.instantiate(prefab);
        let dis1 = 300 + Math.random() * 200;
        let dis2 = -Math.random() * 100 - 50;
        this.m_stSkeletonPerson1.setScale(cc.p(0.25 / this.m_iFlyTime,0.25 / this.m_iFlyTime));
        this.m_stSkeletonPerson1.position = new cc.Vec2(dis2,this.m_stHost.m_iY + dis1);
        console.log(this.m_stSkeletonPerson1.position.y);
        cc.find(this.BricksName).addChild(this.m_stSkeletonPerson1,8);

        this.m_iPerson1Changex = (this.m_stHost.m_iX - this.m_stSkeletonPerson1.position.x) / this.m_iFlyTime;
        this.m_iPerson1Changey = (this.m_stSkeletonPerson1.position.y - this.m_stHost.m_iY) / this.m_iFlyTime;
        console.log("创建一个ren3 " + this.m_iPerson1Changex + " " + this.m_iPerson1Changey);
    }
    private OnLoadEffect4(prefab)
    {
        let dis1 = 100 + Math.random() * 200;
        let dis2 = -Math.random() * 100 - 50;
        this.m_stSkeletonPerson2 = cc.instantiate(prefab);
        this.m_stSkeletonPerson2.setScale(cc.p(0.25 / this.m_iFlyTime,0.25 / this.m_iFlyTime));
        this.m_stSkeletonPerson2.position = new cc.Vec2(dis2,this.m_stHost.m_iY + dis1);
        cc.find(this.BricksName).addChild(this.m_stSkeletonPerson2,8);

        this.m_iPerson2Changex = (this.m_stHost.m_iX - this.m_stSkeletonPerson2.position.x) / this.m_iFlyTime;
        this.m_iPerson2Changey = (this.m_stSkeletonPerson2.position.y - this.m_stHost.m_iY) / this.m_iFlyTime;
        console.log("创建一个ren4");
    }

    private OnLoadEffect5(prefab)
    {
        let dis1 = 300 + Math.random() * 200;
        let dis2 = -Math.random() * 100 + 950;
        this.m_stSkeletonPerson3 = cc.instantiate(prefab);
        this.m_stSkeletonPerson3.setScale(cc.p(-0.25 / this.m_iFlyTime,0.25 / this.m_iFlyTime));
        this.m_stSkeletonPerson3.position = new cc.Vec2(dis2,this.m_stHost.m_iY + dis1);
        console.log(this.m_stSkeletonPerson3.position.y);
        cc.find(this.BricksName).addChild(this.m_stSkeletonPerson3,8);

        this.m_iPerson3Changex = (this.m_stSkeletonPerson3.position.x - this.m_stHost.m_iX) / this.m_iFlyTime;
        this.m_iPerson3Changey = (this.m_stSkeletonPerson3.position.y - this.m_stHost.m_iY) / this.m_iFlyTime;
        console.log("创建一个ren3 " + this.m_iPerson3Changex + " " + this.m_iPerson3Changey);
    }
    private OnLoadEffect6(prefab)
    {
        let dis1 = 100 + Math.random() * 200;
        let dis2 = -Math.random() * 100 + 950;
        this.m_stSkeletonPerson4 = cc.instantiate(prefab);
        this.m_stSkeletonPerson4.setScale(cc.p(-0.25 / this.m_iFlyTime,0.25 / this.m_iFlyTime));
        this.m_stSkeletonPerson4.position = new cc.Vec2(dis2,this.m_stHost.m_iY + dis1);
        cc.find(this.BricksName).addChild(this.m_stSkeletonPerson4,8);

        this.m_iPerson4Changex = (this.m_stSkeletonPerson4.position.x - this.m_stHost.m_iX) / this.m_iFlyTime;
        this.m_iPerson4Changey = (this.m_stSkeletonPerson4.position.y - this.m_stHost.m_iY) / this.m_iFlyTime;
        console.log("创建一个ren4");
    }

    private OnLoadResponse(prefab)
    {
        this.m_stNode = cc.instantiate(prefab);
        //console.log(this.m_stNode.height,this.m_stNode.width);

        // console.log(this.m_stNode.height,this.m_stNode.width);
        //仅仅测试用
        //console.log("创建一个砖块")
        this.m_stNode.position = new cc.Vec2(-10000,-10000);
        cc.find(this.BricksName).addChild(this.m_stNode,6);
        this.mbIsView = true;
        this.b_isLoaded = true;
        this.m_stNode.height = BrickConfigMgr.Instance.m_iHeight;
        this.m_stNode.width = BrickConfigMgr.Instance.m_iWidth;
        //以上测试用
    }
    //** 销毁砖块*/
    public OnDestory()
    {
        if(this.m_stSkeletonPerson1 != null)
            this.m_stSkeletonPerson1.destroy();
        if(this.m_stSkeletonPerson2 != null)
            this.m_stSkeletonPerson2.destroy();
        if(this.m_stSkeletonPerson3 != null)
            this.m_stSkeletonPerson3.destroy();
        if(this.m_stSkeletonPerson4 != null)
            this.m_stSkeletonPerson4.destroy();

        this.m_stNode.destroy();
    }

    public FlyPerson(num: number)
    {
        this.m_iFlyShowStaus = num;
    }
    //** 表现*/
    public BrickMove(basepoint: cc.Vec2,position: cc.Vec2,Rotation: number/*,m_nowBrick : cc.Node*/)
    {
        //this.m_stNode.anchorX = basepoint.x / this.m_stNode.width;
        //this.m_stNode.anchorY = basepoint.y / this.m_stNode.height;
        this.m_stNode.position = position;
        this.m_stNode.rotation = Rotation;

    }
    private OnStatusHook(): void
    {
        this.BrickMove(cc.p(BrickConfigMgr.Instance.m_iWidth / 2,BrickConfigMgr.Instance.m_iHeight - 10),cc.p(this.m_stHost.m_iX,this.m_stHost.m_iY),this.m_stHost.m_Rotation);
    }

    private OnStatusDrop(): void
    {
        this.BrickMove(cc.p(BrickConfigMgr.Instance.m_iWidth / 2,BrickConfigMgr.Instance.m_iHeight / 2),cc.p(this.m_stHost.m_iX,this.m_stHost.m_iY),this.m_stHost.m_Rotation);
    }

    private OnStatusCollision(): void
    {
        this.BrickMove(cc.p(BrickConfigMgr.Instance.m_iWidth / 2,BrickConfigMgr.Instance.m_iHeight / 2),cc.p(this.m_stHost.m_iX,this.m_stHost.m_iY),this.m_stHost.m_Rotation);
    }

    private OnStatusFallAndNewBrick(): void
    {
        this.BrickMove(cc.p(0,BrickConfigMgr.Instance.m_iHeight / 2),cc.p(this.m_stHost.m_iX,this.m_stHost.m_iY),this.m_stHost.m_Rotation);
    }

    private OnStatusFall(): void
    {
        this.BrickMove(cc.p(0,BrickConfigMgr.Instance.m_iHeight / 2),cc.p(this.m_stHost.m_iX,this.m_stHost.m_iY),this.m_stHost.m_Rotation);
    }

    private OnStatusShake(): void
    {
        this.BrickMove(cc.p(BrickConfigMgr.Instance.m_iWidth / 2,BrickConfigMgr.Instance.m_iHeight / 2),cc.p(this.m_stHost.m_iX,this.m_stHost.m_iY),this.m_stHost.m_Rotation);
        if(this.m_stkirakira != null) this.m_stkirakira.position = cc.p(this.m_stHost.m_iX,this.m_stHost.m_iY - this.m_stHost.m_iHeight / 3);
    }
    private sum: number = 0;
    Update(dt: number)
    {
        // this.m_stNode.height = BrickConfigMgr.Instance.m_iHeight;
        // this.m_stNode.width = BrickConfigMgr.Instance.m_iWidth;
        if(this.b_isLoaded == false)
        {
            return;
        }
        // console.log(this.m_stNode.height,this.m_stNode.width);
        if(this.mbIsView == false)
        {
            return;
        }
        if(this.m_stHost == null)
        {
            return;
        }
        if(this.m_stskeleton != null && this.m_stskeleton.active == true)
        {
            if(dt - this.sum >= 20) {this.m_stskeleton.destroy(); cc.log(dt); this.m_stskeleton = null;}
        }
        else
            this.sum = dt;
        if(this.m_iFlyShowStaus == 1)
        {
            if(this.m_bIsFly == false)
            {
                if(this.m_stHost.m_iBrickStatus > 4)
                {

                    let which = Math.floor(Math.random() * 10) % 2 + 1;
                    if(this.m_stHost.m_stBrickManager.GetBrickNum() < 33)
                        Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("anim/person" + which.toString() + "/skeleton" + which.toString(),ResType.Prefab),this.OnLoadEffect5.bind(this));
                    else
                    {
                        Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("anim/airman" + which.toString() + "/skeleton" + which.toString(),ResType.Prefab),this.OnLoadEffect5.bind(this));
                    }
                    this.m_bIsFly = true;
                }
            }
            else
            {
                let DestroyNow = false;
                if(this.m_stSkeletonPerson3 != null)
                {
                    this.m_iTargetTick += 1;
                    this.m_stSkeletonPerson3.setScale(cc.p(-0.25 * this.m_iTargetTick / this.m_iFlyTime,0.25 * this.m_iTargetTick / this.m_iFlyTime));
                    if(this.m_iTargetTick >= this.m_iDestoryTime)
                    {
                        this.m_stSkeletonPerson3.active = false;
                        DestroyNow = true;
                    }

                    this.m_stSkeletonPerson3.position = cc.p(this.m_stSkeletonPerson3.position.x - this.m_iPerson3Changex,this.m_stSkeletonPerson3.position.y - this.m_iPerson3Changey);

                    this.m_iPerson3Changex = (this.m_stSkeletonPerson3.position.x - this.m_stHost.m_iX) / (this.m_iFlyTime - this.m_iTargetTick);

                    this.m_iPerson3Changey = (this.m_stSkeletonPerson3.position.y - this.m_stHost.m_iY) / (this.m_iFlyTime - this.m_iTargetTick);
                }
                if(DestroyNow == true)
                {
                    if(this.m_stSkeletonPerson1 != null)
                        this.m_stSkeletonPerson1.destroy();
                    if(this.m_stSkeletonPerson2 != null)
                        this.m_stSkeletonPerson2.destroy();
                    if(this.m_stSkeletonPerson3 != null)
                        this.m_stSkeletonPerson3.destroy();
                    if(this.m_stSkeletonPerson4 != null)
                        this.m_stSkeletonPerson4.destroy();
                    this.m_iFlyShowStaus = -1;
                }
            }
        }
        if(this.m_iFlyShowStaus == 2)
        {
            if(this.m_bIsFly == false)
            {
                if(this.m_stHost.m_iBrickStatus > 4)
                {
                    let which = Math.floor(Math.random() * 10) % 2 + 1;
                    if(this.m_stHost.m_stBrickManager.GetBrickNum() < 33)
                        Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("anim/person" + which.toString() + "/skeleton" + which.toString(),ResType.Prefab),this.OnLoadEffect4.bind(this));
                    else
                    {
                        Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("anim/airman" + which.toString() + "/skeleton" + which.toString(),ResType.Prefab),this.OnLoadEffect4.bind(this));
                    }
                    which = Math.floor(Math.random() * 10) % 2 + 1;
                    if(this.m_stHost.m_stBrickManager.GetBrickNum() < 33)
                        Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("anim/person" + which.toString() + "/skeleton" + which.toString(),ResType.Prefab),this.OnLoadEffect5.bind(this));
                    else
                    {
                        Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("anim/airman" + which.toString() + "/skeleton" + which.toString(),ResType.Prefab),this.OnLoadEffect5.bind(this));
                    }
                    this.m_bIsFly = true;
                }
            }
            else
            {
                let DestroyNow = false;
                if(this.m_stSkeletonPerson2 != null && this.m_stSkeletonPerson3 != null)
                {
                    this.m_iTargetTick += 1;

                    this.m_stSkeletonPerson2.setScale(cc.p(0.25 * this.m_iTargetTick / this.m_iFlyTime,0.25 * this.m_iTargetTick / this.m_iFlyTime));
                    this.m_stSkeletonPerson3.setScale(cc.p(-0.25 * this.m_iTargetTick / this.m_iFlyTime,0.25 * this.m_iTargetTick / this.m_iFlyTime));
                    if(this.m_iTargetTick >= this.m_iDestoryTime)
                    {
                        this.m_stSkeletonPerson2.active = false;
                        this.m_stSkeletonPerson3.active = false;
                        DestroyNow = true;
                    }
                    this.m_stSkeletonPerson2.position = cc.p(this.m_stSkeletonPerson2.position.x + this.m_iPerson2Changex,this.m_stSkeletonPerson2.position.y - this.m_iPerson2Changey);

                    this.m_stSkeletonPerson3.position = cc.p(this.m_stSkeletonPerson3.position.x - this.m_iPerson3Changex,this.m_stSkeletonPerson3.position.y - this.m_iPerson3Changey);

                    this.m_iPerson2Changex = (this.m_stHost.m_iX - this.m_stSkeletonPerson2.position.x) / (this.m_iFlyTime - this.m_iTargetTick);


                    this.m_iPerson2Changey = (this.m_stSkeletonPerson2.position.y - this.m_stHost.m_iY) / (this.m_iFlyTime - this.m_iTargetTick);

                    this.m_iPerson3Changex = (this.m_stSkeletonPerson3.position.x - this.m_stHost.m_iX) / (this.m_iFlyTime - this.m_iTargetTick);


                    this.m_iPerson3Changey = (this.m_stSkeletonPerson3.position.y - this.m_stHost.m_iY) / (this.m_iFlyTime - this.m_iTargetTick);

                }
                if(DestroyNow == true)
                {
                    if(this.m_stSkeletonPerson1 != null)
                        this.m_stSkeletonPerson1.destroy();
                    if(this.m_stSkeletonPerson2 != null)
                        this.m_stSkeletonPerson2.destroy();
                    if(this.m_stSkeletonPerson3 != null)
                        this.m_stSkeletonPerson3.destroy();
                    if(this.m_stSkeletonPerson4 != null)
                        this.m_stSkeletonPerson4.destroy();
                    this.m_iFlyShowStaus = -1;
                }
            }
        }
        if(this.m_iFlyShowStaus == 3)
        {
            if(this.m_bIsFly == false)
            {
                if(this.m_stHost.m_iBrickStatus > 4)
                {

                    if(this.m_stHost.m_stBrickManager.GetBrickNum() < 33)
                    {
                        let which = Math.floor(Math.random() * 10) % 2 + 1;
                        Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("anim/person" + which.toString() + "/skeleton" + which.toString(),ResType.Prefab),this.OnLoadEffect3.bind(this));
                        which = Math.floor(Math.random() * 10) % 2 + 1;
                        Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("anim/person" + which.toString() + "/skeleton" + which.toString(),ResType.Prefab),this.OnLoadEffect4.bind(this));
                        which = Math.floor(Math.random() * 10) % 2 + 1;
                        Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("anim/person" + which.toString() + "/skeleton" + which.toString(),ResType.Prefab),this.OnLoadEffect5.bind(this));
                        which = Math.floor(Math.random() * 10) % 2 + 1;
                        Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("anim/person" + which.toString() + "/skeleton" + which.toString(),ResType.Prefab),this.OnLoadEffect6.bind(this));
                    } else
                    {
                        let which = Math.floor(Math.random() * 10) % 2 + 1;
                        Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("anim/airman" + which.toString() + "/skeleton" + which.toString(),ResType.Prefab),this.OnLoadEffect3.bind(this));
                        which = Math.floor(Math.random() * 10) % 2 + 1;
                        Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("anim/airman" + which.toString() + "/skeleton" + which.toString(),ResType.Prefab),this.OnLoadEffect4.bind(this));
                        which = Math.floor(Math.random() * 10) % 2 + 1;
                        Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("anim/airman" + which.toString() + "/skeleton" + which.toString(),ResType.Prefab),this.OnLoadEffect5.bind(this));
                        which = Math.floor(Math.random() * 10) % 2 + 1;
                        Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("anim/airman" + which.toString() + "/skeleton" + which.toString(),ResType.Prefab),this.OnLoadEffect6.bind(this));
                    }
                    this.m_bIsFly = true;
                }
            }
            else
            {
                let DestroyNow = false;
                if(this.m_stSkeletonPerson1 != null && this.m_stSkeletonPerson2 != null && this.m_stSkeletonPerson3 != null && this.m_stSkeletonPerson4 != null)
                {
                    this.m_iTargetTick += 1;
                    this.m_stSkeletonPerson1.setScale(cc.p(0.25 * this.m_iTargetTick / this.m_iFlyTime,0.25 * this.m_iTargetTick / this.m_iFlyTime));
                    this.m_stSkeletonPerson3.setScale(cc.p(-0.25 * this.m_iTargetTick / this.m_iFlyTime,0.25 * this.m_iTargetTick / this.m_iFlyTime));
                    this.m_stSkeletonPerson2.setScale(cc.p(0.25 * this.m_iTargetTick / this.m_iFlyTime,0.25 * this.m_iTargetTick / this.m_iFlyTime));
                    this.m_stSkeletonPerson4.setScale(cc.p(-0.25 * this.m_iTargetTick / this.m_iFlyTime,0.25 * this.m_iTargetTick / this.m_iFlyTime));
                    if(this.m_iTargetTick >= this.m_iDestoryTime)
                    {
                        this.m_stSkeletonPerson1.active = false;
                        this.m_stSkeletonPerson2.active = false;
                        this.m_stSkeletonPerson3.active = false;
                        this.m_stSkeletonPerson4.active = false;
                        DestroyNow = true;
                    }
                    this.m_stSkeletonPerson1.position = cc.p(this.m_stSkeletonPerson1.position.x + this.m_iPerson1Changex,this.m_stSkeletonPerson1.position.y - this.m_iPerson1Changey);
                    this.m_stSkeletonPerson2.position = cc.p(this.m_stSkeletonPerson2.position.x + this.m_iPerson2Changex,this.m_stSkeletonPerson2.position.y - this.m_iPerson2Changey);

                    this.m_stSkeletonPerson3.position = cc.p(this.m_stSkeletonPerson3.position.x - this.m_iPerson3Changex,this.m_stSkeletonPerson3.position.y - this.m_iPerson3Changey);
                    this.m_stSkeletonPerson4.position = cc.p(this.m_stSkeletonPerson4.position.x - this.m_iPerson4Changex,this.m_stSkeletonPerson4.position.y - this.m_iPerson4Changey);

                    this.m_iPerson1Changex = (this.m_stHost.m_iX - this.m_stSkeletonPerson1.position.x) / (this.m_iFlyTime - this.m_iTargetTick);
                    this.m_iPerson2Changex = (this.m_stHost.m_iX - this.m_stSkeletonPerson2.position.x) / (this.m_iFlyTime - this.m_iTargetTick);

                    this.m_iPerson1Changey = (this.m_stSkeletonPerson1.position.y - this.m_stHost.m_iY) / (this.m_iFlyTime - this.m_iTargetTick);
                    this.m_iPerson2Changey = (this.m_stSkeletonPerson2.position.y - this.m_stHost.m_iY) / (this.m_iFlyTime - this.m_iTargetTick);

                    this.m_iPerson3Changex = (this.m_stSkeletonPerson3.position.x - this.m_stHost.m_iX) / (this.m_iFlyTime - this.m_iTargetTick);
                    this.m_iPerson4Changex = (this.m_stSkeletonPerson4.position.x - this.m_stHost.m_iX) / (this.m_iFlyTime - this.m_iTargetTick);

                    this.m_iPerson3Changey = (this.m_stSkeletonPerson3.position.y - this.m_stHost.m_iY) / (this.m_iFlyTime - this.m_iTargetTick);
                    this.m_iPerson4Changey = (this.m_stSkeletonPerson4.position.y - this.m_stHost.m_iY) / (this.m_iFlyTime - this.m_iTargetTick);
                }
                if(DestroyNow == true)
                {
                    if(this.m_stSkeletonPerson1 != null)
                        this.m_stSkeletonPerson1.destroy();
                    if(this.m_stSkeletonPerson2 != null)
                        this.m_stSkeletonPerson2.destroy();
                    if(this.m_stSkeletonPerson3 != null)
                        this.m_stSkeletonPerson3.destroy();
                    if(this.m_stSkeletonPerson4 != null)
                        this.m_stSkeletonPerson4.destroy();
                    this.m_iFlyShowStaus = -1;
                }
            }
        }

        switch(this.m_stHost.m_iBrickStatus)
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