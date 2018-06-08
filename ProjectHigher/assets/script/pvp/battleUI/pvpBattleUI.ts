import BrickManager from "../../brick/BrickManager";
import PvpEntrance from "../PvpEntrance";
import SingleApp from "../../single/SingleApp";
import Core from "../../../corelibs/Core";
import {ResStruct} from "../../../corelibs/util/ResourcesMgr";
import {ResType} from "../../../corelibs/CoreDefine";

const {ccclass,property} = cc._decorator;

@ccclass
export default class pvpBattleUI extends cc.Component
{

    private m_btnReleaseLeft: cc.Node = null;
    private m_btnReleaseRight: cc.Node = null;
    public LeftGame: SingleApp = null;
    public RightGame: SingleApp = null;

    // 左边//该节点为空节点，含有三个按钮、楼层数、人口总数.
    private m_AllLeft: cc.Node = null;
    //这三个按钮是备用（具体功能待定）位置：右上方
    private m_btn1Left: cc.Node = null;
    private m_btn2Left: cc.Node = null;
    private m_btn3Left: cc.Node = null;
    //这个是控制完美下落时候的加分进度（即在这个进度条显示的时候，人口有加成） 位置：最上面的中间
    private m_PrefectNumLeft: number = 0;     //当前完美个数
    private m_PrefectLastNumLeft: number = 0;
    private m_PrefectLeft: cc.Node = null;    //空节点（prefeb)
    private m_LabelLeft: cc.Node = null;      //倍数显示
    private m_ProgressBarLeft: cc.Node = null; //进度条（5秒）
    //这个是每一个砖块掉落时候的人口显示   位置：左上方
    private m_OneBrickNumLeft: cc.Node = null;
    //这是总人口  位置：右下    他显示每一块砖的人口（左上方的那个数字）总和，当有完美降落的时候，他也只是显示加上（左上方的），但完美降落加成结束后，会加上加成的所有数字）
    private m_PeopleNumLeft: cc.Node = null;
    //这个是楼层高度  位置： 左下
    private m_FloorNumLeft: cc.Node = null;
    //可失败次数
    private m_DamageNumLeft: cc.Node = null;

    // 右边//该节点为空节点，含有三个按钮、楼层数、人口总数.
    private m_AllRig: cc.Node = null;
    //这三个按钮是备用（具体功能待定）位置：右上方
    private m_btn1Rig: cc.Node = null;
    private m_btn2Rig: cc.Node = null;
    private m_btn3Rig: cc.Node = null;
    //这个是控制完美下落时候的加分进度（即在这个进度条显示的时候，人口有加成） 位置：最上面的中间
    private m_PrefectNumRig: number = 0;     //当前完美个数
    private m_PrefectLastNumRig: number = 0;
    private m_PrefectRig: cc.Node = null;    //空节点（prefeb)
    private m_LabelRig: cc.Node = null;      //倍数显示
    private m_ProgressBarRig: cc.Node = null; //进度条（5秒）
    //这个是每一个砖块掉落时候的人口显示   位置：左上方
    private m_OneBrickNumRig: cc.Node = null;
    //这是总人口  位置：右下    他显示每一块砖的人口（左上方的那个数字）总和，当有完美降落的时候，他也只是显示加上（左上方的），但完美降落加成结束后，会加上加成的所有数字）
    private m_PeopleNumRig: cc.Node = null;
    //这个是楼层高度  位置： 左下
    private m_FloorNumRig: cc.Node = null;
    //可失败次数
    private m_DamageNumRig: cc.Node = null;


    onLoad()
    {
        this.m_btnReleaseLeft = this.node.getChildByName("ReleaseBtnLeft");
        this.m_btnReleaseRight = this.node.getChildByName("ReleaseBtnRight");

        // cc.loader.loadRes("prefabs/PvpLeftAllButton",this.PvpOnLoadResponseL.bind(this));
        // cc.loader.loadRes("prefabs/PvpRigAllButton",this.PvpOnLoadResponseR.bind(this));
        // Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("prefabs/brick1",ResType.Prefab),this.OnLoadResponse.bind(this));
        // Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("prefabs/brick1",ResType.Prefab),this.OnLoadResponse.bind(this));

        // this.InitEvent();
        // if(this.LeftGame == null)
        //     this.LeftGame = cc.find("GameApp").getComponent(PvpEntrance).LeftGame;
        // if(this.RightGame == null)
        //     this.RightGame = cc.find("GameApp").getComponent(PvpEntrance).RightGame;
    }
    //生成左边一进去就有的UI
    public PvpOnLoadResponseL(err,prefab)
    {
        if(err)
        {
            cc.error("loading prefabs/PvpLeftAllButton failed")
            return;
        }
        this.m_AllLeft = cc.instantiate(prefab);
        cc.log(this.m_AllLeft.name);
        cc.log("生成按钮预制体");
        //把该预制体挂到canvas上
        this.node.addChild(this.m_AllLeft);
        //节点绑定
        this.m_btn1Left = this.m_AllLeft.getChildByName("ButtonOneLeft");
        this.m_btn2Left = this.m_AllLeft.getChildByName("ButtonTwoLeft");
        this.m_btn3Left = this.m_AllLeft.getChildByName("ButtonThreeLeft");
        this.m_FloorNumLeft = this.m_AllLeft.getChildByName("louLeft").getChildByName("LouLabel");    //楼层数
        this.m_PeopleNumLeft = this.m_AllLeft.getChildByName("timgLeft").getChildByName("PeopleLabel");  //人口数
        this.m_DamageNumLeft = this.m_AllLeft.getChildByName("DamageLeft");
        this.InitButtonLef();
    }
    //生成右边一进去就有的UI
    public PvpOnLoadResponseR(err,prefab)
    {
        if(err)
        {
            cc.error("loading prefabs/PvpRigAllButton failed")
            return;
        }
        this.m_AllRig = cc.instantiate(prefab);
        cc.log(this.m_AllRig.name);
        cc.log("生成按钮预制体");
        //把该预制体挂到canvas上
        this.node.addChild(this.m_AllRig);
        //节点绑定
        this.m_btn1Rig = this.m_AllRig.getChildByName("ButtonOneRig");
        this.m_btn2Rig = this.m_AllRig.getChildByName("ButtonTwoRig");
        this.m_btn3Rig = this.m_AllRig.getChildByName("ButtonThreeRig");
        this.m_FloorNumRig = this.m_AllRig.getChildByName("louRig").getChildByName("LouLabel");    //楼层数
        this.m_PeopleNumRig = this.m_AllRig.getChildByName("timgRig").getChildByName("PeopleLabel");  //人口数
        this.m_DamageNumRig = this.m_AllRig.getChildByName("DamageRig");
        this.InitButtonRig();
    }
    private InitButtonLef()
    {
        this.m_btn1Left.on("click",this.OnClickBtnOneL,this);
        this.m_btn2Left.on("click",this.OnClickBtnTwoL,this);
        this.m_btn3Left.on("click",this.OnClickBtnThreeL,this);
    }
    private InitButtonRig()
    {
        this.m_btn1Rig.on("click",this.OnClickBtnOneR,this);
        this.m_btn2Rig.on("click",this.OnClickBtnTwoR,this);
        this.m_btn3Rig.on("click",this.OnClickBtnThreeR,this);
    }
    InitEvent()
    {
        this.m_btnReleaseLeft.on("click",this.OnClickHandlerLeft,this);
        this.m_btnReleaseRight.on("click",this.OnClickHandlerRight,this);
    }

    private OnClickHandlerLeft()
    {
        this.LeftGame.m_stBrickManager.OnReleaseBtnClicked();
    }
    private OnClickHandlerRight()
    {

        this.RightGame.m_stBrickManager.OnReleaseBtnClicked();
    }
    //左边三个按钮
    //第一个按钮的表现
    private OnClickBtnOneL()
    {
        cc.log("这是左边第一个按钮");
        //我们现在假设按第一个按钮就是完美掉落，即调用PrefectDown
        this.PrefectDownL();
    }
    //第二个按钮的表现
    private OnClickBtnTwoL()
    {
        cc.log("这是左边第二个按钮");
        //测试楼层增加，失败数目
        this.DamageNumberL();
    }
    //第三个按钮的表现
    private OnClickBtnThreeL()
    {
        cc.log("这是左边第三个按钮");
        //测试砖块成功拼接，显示这个操作的分数
        this.OneBrickNumberL();

    }


    //右边三个按钮
    //第一个按钮的表现
    private OnClickBtnOneR()
    {
        cc.log("这是右边第一个按钮");
        //我们现在假设按第一个按钮就是完美掉落，即调用PrefectDown
        this.PrefectDownR();
    }
    //第二个按钮的表现
    private OnClickBtnTwoR()
    {
        cc.log("这是右边第二个按钮");
        //测试楼层增加
        this.DamageNumberR();
    }
    //第三个按钮的表现
    private OnClickBtnThreeR()
    {
        cc.log("这是右边第三个按钮");
        //测试砖块成功拼接，显示这个操作的分数
        this.OneBrickNumberR();

    }

    //左边的
    //楼层数
    private FloorNumberL()
    {
        //this.m_FloorNum.getComponent(cc.Label).string = BrickManager.Instance.GetBrickNum().toString();
    }
    //人口数
    private PeopleNumberL(ll: string)
    {
        this.m_PeopleNumLeft.getComponent(cc.Label).string = "左总";
    }
    //失败数
    private DamageNumberL()
    {
        this.m_DamageNumLeft.getComponent(cc.ProgressBar).totalLength -= 30;
        if(this.m_DamageNumLeft.getComponent(cc.ProgressBar).totalLength === 0)
            console.log("游戏结束");
    }

    //单个箱子降落获得的分数
    private OneBrickNumberL()
    {
        //如果当前是第一块就生成预设体
        cc.loader.loadRes("prefabs/OneBrickNumLeft",this.OnloadOneBrickL.bind(this));
        //否则就直接计算分数
    }
    public OnloadOneBrickL(err,prefab)
    {
        if(err)
        {
            cc.error("loading prefabs/OneBrickNumLeft failed")
            return;
        }
        this.m_OneBrickNumLeft = cc.instantiate(prefab);
        cc.log("生成单个砖块分数预制体");
        //把该预制体挂到canvas上
        this.node.addChild(this.m_OneBrickNumLeft);
        this.m_OneBrickNumLeft.getComponent(cc.Label).string = "左单";
        this.PeopleNumberL("ad");
    }


    // 右边的
    //楼层数
    private FloorNumberR()
    {
        //this.m_FloorNum.getComponent(cc.Label).string = BrickManager.Instance.GetBrickNum().toString();
    }
    //人口数
    private PeopleNumberR(ll: string)
    {
        this.m_PeopleNumRig.getComponent(cc.Label).string = "右总";
    }
    //失败数
    private DamageNumberR()
    {
        this.m_DamageNumRig.getComponent(cc.ProgressBar).totalLength -= 30;
        if(this.m_DamageNumRig.getComponent(cc.ProgressBar).totalLength === 0)
            console.log("游戏结束");
    }

    //单个箱子降落获得的分数
    private OneBrickNumberR()
    {
        //如果当前是第一块就生成预设体
        cc.loader.loadRes("prefabs/OneBrickNumRig",this.OnloadOneBrickR.bind(this));
        //否则就直接计算分数
    }
    public OnloadOneBrickR(err,prefab)
    {
        if(err)
        {
            cc.error("loading prefabs/OneBrickNum failed")
            return;
        }
        this.m_OneBrickNumRig = cc.instantiate(prefab);
        cc.log("生成单个砖块分数预制体");
        //把该预制体挂到canvas上
        this.node.addChild(this.m_OneBrickNumRig);
        this.m_OneBrickNumRig.getComponent(cc.Label).string = "右单";
        this.PeopleNumberR("sa");
    }


    //左边完美降落
    //完美降落
    private PrefectDownL()
    {
        console.log(this.m_PrefectNumLeft);
        if(this.m_PrefectNumLeft === 0)
        {//当前为开始完美降落的加分阶段,生成预制体
            console.log(this.m_PrefectNumLeft);
            cc.loader.loadRes("prefabs/PerfectDownLeft",this.OnLoadPrefectDownL.bind(this));
        }
        else
        {//再次完美降落，只需要改变后面的label里的值即可
            this.m_PrefectNumLeft++;
        }
    }
    //生成进度条
    public OnLoadPrefectDownL(err,prefab)
    {
        if(err)
        {
            cc.error("loading prefabs/PerfectDownLeft failed")
            return;
        }
        this.m_PrefectLeft = cc.instantiate(prefab);
        cc.log("生成左边进度条预制体");
        //把该预制体挂到canvas上
        this.node.addChild(this.m_PrefectLeft);
        //节点绑定
        this.m_ProgressBarLeft = this.m_PrefectLeft.getChildByName("NewProgressBarLeft");  //进度条
        this.m_LabelLeft = this.m_PrefectLeft.getChildByName("NewLabelLeft");              //label
        let Max: number = this.m_ProgressBarLeft.getComponent(cc.ProgressBar).totalLength;
        console.log(this.m_ProgressBarLeft.getComponent(cc.ProgressBar).totalLength);
        this.m_ProgressBarLeft.getComponent(cc.ProgressBar).totalLength = 200;
        this.m_PrefectNumLeft = 1;
    }

    //右边边完美降落
    //完美降落
    private PrefectDownR()
    {
        console.log(this.m_PrefectNumLeft);
        if(this.m_PrefectNumRig === 0)
        {//当前为开始完美降落的加分阶段,生成预制体
            console.log(this.m_PrefectNumRig);
            cc.loader.loadRes("prefabs/PerfectDownRig",this.OnLoadPrefectDownR.bind(this));
        }
        else
        {//再次完美降落，只需要改变后面的label里的值即可
            this.m_PrefectNumRig++;
        }
    }
    //生成进度条
    public OnLoadPrefectDownR(err,prefab)
    {
        if(err)
        {
            cc.error("loading prefabs/PerfectDownRig failed")
            return;
        }
        this.m_PrefectRig = cc.instantiate(prefab);
        cc.log("生成右边进度条预制体");
        //把该预制体挂到canvas上
        this.node.addChild(this.m_PrefectRig);
        //节点绑定
        this.m_ProgressBarRig = this.m_PrefectRig.getChildByName("NewProgressBarRig");  //进度条
        this.m_LabelRig = this.m_PrefectRig.getChildByName("NewLabelRig");              //label
        let Max: number = this.m_ProgressBarRig.getComponent(cc.ProgressBar).totalLength;
        console.log(this.m_ProgressBarRig.getComponent(cc.ProgressBar).totalLength);
        this.m_ProgressBarRig.getComponent(cc.ProgressBar).totalLength = 200;
        this.m_PrefectNumRig = 1;
    }



    update(dt)
    {
        this.m_FloorNumLeft.getComponent(cc.Label).string = (this.LeftGame.m_stBrickManager.GetBrickNum() - 1).toString();
        this.m_FloorNumRig.getComponent(cc.Label).string = (this.RightGame.m_stBrickManager.GetBrickNum() - 1).toString();
        if(this.m_PrefectNumLeft > 0)
        {
            //  console.log(this.m_PrefectLastNum);
            console.log(this.m_PrefectNumLeft);
            if(this.m_ProgressBarLeft.getComponent(cc.ProgressBar).totalLength === 0)
            {//进度条百分比为0,重置，并且销毁这个预设体
                this.m_PrefectNumLeft = 0;
                this.m_PrefectLastNumLeft = 0;
                this.m_PrefectLeft.destroy();
            }
            else
            {
                if(this.m_PrefectLastNumLeft != this.m_PrefectNumLeft)
                {   //代表重新开始这个加分阶段
                    this.m_PrefectLastNumLeft = this.m_PrefectNumLeft;
                    //然后根据m_prefectNumber改变label的倍数
                    let ss: string = this.m_PrefectLeft.getChildByName("NewLabelLeft").getComponent(cc.Label).string;
                    console.log(ss);
                    let sss: string = "";
                    for(let i = 0;i < ss.length;i++)
                    {
                        if(ss[i] != "*") sss += ss[i];
                        else
                        {
                            sss += ss[i]; break;
                        }
                    }
                    // console.log(sss);
                    let kk: number = this.m_PrefectNumLeft;
                    sss += kk;
                    // console.log(sss);
                    this.m_PrefectLeft.getChildByName("NewLabelLeft").getComponent(cc.Label).string = sss;
                    this.m_ProgressBarLeft.getComponent(cc.ProgressBar).totalLength = 200;
                }
                else
                {  //加分阶段不需要重新开始，执行5秒即可
                    this.m_ProgressBarLeft.getComponent(cc.ProgressBar).totalLength -= 1;
                }
            }
        }

        if(this.m_PrefectNumRig > 0)
        {
            //  console.log(this.m_PrefectLastNum);
            console.log(this.m_PrefectNumRig);
            if(this.m_ProgressBarRig.getComponent(cc.ProgressBar).totalLength === 0)
            {//进度条百分比为0,重置，并且销毁这个预设体
                this.m_PrefectNumRig = 0;
                this.m_PrefectLastNumRig = 0;
                this.m_PrefectRig.destroy();
            }
            else
            {
                if(this.m_PrefectLastNumRig != this.m_PrefectNumRig)
                {   //代表重新开始这个加分阶段
                    this.m_PrefectLastNumRig = this.m_PrefectNumRig;
                    //然后根据m_prefectNumber改变label的倍数
                    let ss: string = this.m_PrefectRig.getChildByName("NewLabelRig").getComponent(cc.Label).string;
                    console.log(ss);
                    let sss: string = "";
                    for(let i = 0;i < ss.length;i++)
                    {
                        if(ss[i] != "*") sss += ss[i];
                        else
                        {
                            sss += ss[i]; break;
                        }
                    }
                    // console.log(sss);
                    let kk: number = this.m_PrefectNumRig;

                    sss += kk;
                    // console.log(sss);
                    this.m_PrefectRig.getChildByName("NewLabelRig").getComponent(cc.Label).string = sss;
                    this.m_ProgressBarRig.getComponent(cc.ProgressBar).totalLength = 200;
                }
                else
                {  //加分阶段不需要重新开始，执行5秒即可
                    this.m_ProgressBarRig.getComponent(cc.ProgressBar).totalLength -= 1;
                }
            }
        }


    };
}
