import HookConfigMgr from "./hook/HookConfigMgr";
import BrickConfigMgr from "./brick/BrickConfigMgr";
import CameraConfigMgr from "./camera/CameraConfigMgr";
import {RspPlayerLogin,CSProtoID} from "../corelibs/proto/msg";
import Core from "../corelibs/Core";
import {ResStruct} from "../corelibs/util/ResourcesMgr";
import {ResType} from "../corelibs/CoreDefine";
import {log} from "util";

// Learn TypeScript:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/typescript/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

const {ccclass,property} = cc._decorator;

@ccclass
export default class GameStart extends cc.Component
{


    // LIFE-CYCLE CALLBACKS:
    onLoad()
    {
        HookConfigMgr.Instance.LoadJson();
        BrickConfigMgr.Instance.LoadJson();
        CameraConfigMgr.Instance.LoadJson();
        //this.node.getChildByName("LoginOK").getComponent(cc.Label).string = "login success!";
    }
    private m_btntosence: cc.Node = null;
    private m_stTimeBar: cc.Node = null;
    private m_mbtntoPvp: cc.Node = null;
    start()
    {
        this.m_btntosence = this.node.getChildByName("BtnToBase");
        this.m_stTimeBar = this.node.getChildByName("timeBar");
        this.m_btntosence.position = cc.p(0,-860);
        this.m_btntosence.active = false;
        this.m_btntosence.on("click",this.click1,this);

        this.LoadGameRes();

        //this.m_mbtntoPvp = this.node.getChildByName("BtnToPvp");
        //this.m_mbtntoPvp.on("click",this.click2,this);
    }
    LoadGameRes()
    {
        let arrResStruct: Array<ResStruct> = new Array<ResStruct>();
        // arrResStruct.push(ResStruct.CreateRes("prefabs/brick00",ResType.Prefab));
        // arrResStruct.push(ResStruct.CreateRes("prefabs/brick01",ResType.Prefab));
        arrResStruct.push(ResStruct.CreateRes("prefabs/brick10",ResType.Prefab));
        arrResStruct.push(ResStruct.CreateRes("prefabs/brick11",ResType.Prefab));
        arrResStruct.push(ResStruct.CreateRes("prefabs/brick20",ResType.Prefab));
        arrResStruct.push(ResStruct.CreateRes("prefabs/brick21",ResType.Prefab));
        arrResStruct.push(ResStruct.CreateRes("prefabs/brick30",ResType.Prefab));
        arrResStruct.push(ResStruct.CreateRes("prefabs/brick31",ResType.Prefab));
        arrResStruct.push(ResStruct.CreateRes("prefabs/hook2",ResType.Prefab));
        arrResStruct.push(ResStruct.CreateRes("prefabs/rope",ResType.Prefab));
        arrResStruct.push(ResStruct.CreateRes("prefabs/HangingRod",ResType.Prefab));
        arrResStruct.push(ResStruct.CreateRes("prefabs/HangingRodPos",ResType.Prefab));

        arrResStruct.push(ResStruct.CreateRes("prefabs/AllButton",ResType.Prefab));
        arrResStruct.push(ResStruct.CreateRes("prefabs/OneBrickNum",ResType.Prefab));
        arrResStruct.push(ResStruct.CreateRes("prefabs/AllScore",ResType.Prefab));
        arrResStruct.push(ResStruct.CreateRes("prefabs/HP",ResType.Prefab));
        arrResStruct.push(ResStruct.CreateRes("prefabs/PerfectDown",ResType.Prefab));
        arrResStruct.push(ResStruct.CreateRes("prefabs/JS",ResType.Prefab));
        arrResStruct.push(ResStruct.CreateRes("prefabs/OneRank",ResType.Prefab));
        arrResStruct.push(ResStruct.CreateRes("prefabs/Background6",ResType.Prefab));
        arrResStruct.push(ResStruct.CreateRes("prefabs/Background5",ResType.Prefab));
        arrResStruct.push(ResStruct.CreateRes("prefabs/Background4",ResType.Prefab));
        arrResStruct.push(ResStruct.CreateRes("prefabs/Background3",ResType.Prefab));
        arrResStruct.push(ResStruct.CreateRes("prefabs/Background2",ResType.Prefab));
        arrResStruct.push(ResStruct.CreateRes("prefabs/Background",ResType.Prefab));

        arrResStruct.push(ResStruct.CreateRes("prefabs/lou",ResType.Prefab));

        arrResStruct.push(ResStruct.CreateRes("anim/person1/skeleton1",ResType.Prefab));
        arrResStruct.push(ResStruct.CreateRes("anim/person2/skeleton2",ResType.Prefab));

        arrResStruct.push(ResStruct.CreateRes("anim/airman1/skeleton1",ResType.Prefab));
        arrResStruct.push(ResStruct.CreateRes("anim/airman2/skeleton2",ResType.Prefab));

        arrResStruct.push(ResStruct.CreateRes("anim/airplane/skeleton1",ResType.Prefab));

        arrResStruct.push(ResStruct.CreateRes("anim/hot1/skeleton1",ResType.Prefab));
        arrResStruct.push(ResStruct.CreateRes("anim/hot2/skeleton2",ResType.Prefab));

        arrResStruct.push(ResStruct.CreateRes("anim/hot3/skeleton3",ResType.Prefab));

        arrResStruct.push(ResStruct.CreateRes("anim/star/skeleton1",ResType.Prefab));

        arrResStruct.push(ResStruct.CreateRes("prefabs/kirakira",ResType.Prefab));
        arrResStruct.push(ResStruct.CreateRes("prefabs/skeleton",ResType.Prefab));

        arrResStruct.push(ResStruct.CreateRes("prefabs/a-8",ResType.Prefab));
        arrResStruct.push(ResStruct.CreateRes("prefabs/a-9",ResType.Prefab));
        arrResStruct.push(ResStruct.CreateRes("prefabs/a-10",ResType.Prefab));
        arrResStruct.push(ResStruct.CreateRes("prefabs/a-11",ResType.Prefab));
        arrResStruct.push(ResStruct.CreateRes("prefabs/a-12",ResType.Prefab));

        // Core.ResourcesMgr.AddLoadResArrayByScene(arrResStruct,"BaseGame");

        Core.ResourcesMgr.LoadResArray(arrResStruct,function()
        {

            log("prefabs ok !");
            this.m_stTimeBar.active = false;
            this.m_btntosence.active = true;
            this.m_btntosence.position = cc.p(0,-360);
        }.bind(this));

        ///Core.ResourcesMgr.L
    }
    click1()
    {
        cc.director.loadScene("BaseGame");
        // Core.ResourcesMgr.LoadScene("BaseGame",null);
    }
    // click2()
    // {
    //     console.log("kkk");
    //     cc.director.loadScene("PvpGame");
    // }

    // update (dt) {},
}
