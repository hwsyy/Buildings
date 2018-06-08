import SingleApp from "../single/SingleApp";
import Core from "../../corelibs/Core"
import {ResStruct} from "../../corelibs/util/ResourcesMgr";
import {ResType} from "../../corelibs/CoreDefine";
import BrickConfigMgr from "../brick/BrickConfigMgr";

export default class BackgroundMgr
{

    //public static readonly Instance: BackgroundMgr = new BackgroundMgr();

    public host: SingleApp;

    public backGround: cc.Node = null;

    //背景的横纵比
    private m_whRatio: number = 0.57;

    private lastY: number = 1334;
    private picHeight2: number = 699;
    private picHeight3: number = 1254;
    private picHeight4: number = 1203;
    private picHeight5: number = 1464;
    private picHeight6: number = 385;

    private picNum2: number = 3;
    private picNum3: number = 1;
    private picNum4: number = 3;
    private picNum5: number = 1;


    private nowPic: number = 2;
    private nowPicNum: number = 0;

    private bIsHot1: boolean = false;
    private bIsHot2: boolean = false;
    private bIsHot3: boolean = false;
    private bIsAirPlane: boolean = false;

    private iHot1Speed: number = 1200 / 1800 / 2;//热气球速度
    private iHot2Speed: number = 1200 / 900 / 2;
    private iHot3Speed: number = 1200 / 1200 / 2;

    private iAirPlaneSpeedX: number = 1200 / 300;//飞船速度
    private iAirPlaneSpeedY: number = 1200 / 400;

    private stHot1: cc.Node = null;

    private stHot2: cc.Node = null;

    private stHot3: cc.Node = null;

    private stAirPlane: cc.Node = null;

    private stStar: cc.Node[] = [];

    private stStarNum: number = 0;


    public constructor(host: SingleApp)
    {
        this.host = host;
    }

    Init()
    {
        Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("prefabs/Background",ResType.Prefab),function(res)
        {
            this.backGround = cc.instantiate(res);
            cc.find("camera").addChild(this.backGround);
            this.backGround.position = new cc.Vec2(0,0);
            this.backGround.zIndex = -1;
            /*
            var w = cc.director.getWinSize().width;
            this.backGround.setContentSize(cc.size(w,w / this.m_whRatio));
            console.log(" w : " + w);
            console.log(this.backGround.getContentSize());
            */
        }.bind(this));
    }

    AddUpPic2()
    {

        Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("prefabs/Background2",ResType.Prefab),function(res)
        {
            var node = cc.instantiate(res);
            cc.find("camera").addChild(node);
            node.position = new cc.Vec2(0,this.lastY);
            node.zIndex = -1;
            this.lastY += this.picHeight2;
        }.bind(this));

    }
    AddUpPic3()
    {

        Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("prefabs/Background3",ResType.Prefab),function(res)
        {
            var node = cc.instantiate(res);
            cc.find("camera").addChild(node);
            node.position = new cc.Vec2(0,this.lastY);
            node.zIndex = -1;
            this.lastY += this.picHeight3;
        }.bind(this));

    }

    AddUpPic4()
    {

        Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("prefabs/Background4",ResType.Prefab),function(res)
        {
            var node = cc.instantiate(res);
            cc.find("camera").addChild(node);
            node.position = new cc.Vec2(0,this.lastY);
            node.zIndex = -1;
            this.lastY += this.picHeight4;
        }.bind(this));

    }
    AddUpPic5()
    {

        Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("prefabs/Background5",ResType.Prefab),function(res)
        {
            var node = cc.instantiate(res);
            cc.find("camera").addChild(node);
            node.position = new cc.Vec2(0,this.lastY);
            node.zIndex = -1;
            this.lastY += this.picHeight5;
        }.bind(this));

    }
    AddUpPic6()
    {

        Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("prefabs/Background6",ResType.Prefab),function(res)
        {
            var node = cc.instantiate(res);
            cc.find("camera").addChild(node);
            node.position = new cc.Vec2(0,this.lastY);
            node.zIndex = -1;
            this.lastY += this.picHeight6;
        }.bind(this));

        let x = Math.floor(Math.random() * 100) % 10 + 1;
        for(let i = 1;i <= x;i++)
            Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("anim/star/skeleton1",ResType.Prefab),this.OnLoadEffectstar.bind(this));
        if(x == 5)
        {
            Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("prefabs/a-8",ResType.Prefab),this.OnLoadEffectstar1.bind(this));
        }
        if(x == 6)
        {
            Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("prefabs/a-9",ResType.Prefab),this.OnLoadEffectstar2.bind(this));
        }
        if(x == 7)
        {
            Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("prefabs/a-10",ResType.Prefab),this.OnLoadEffectstar3.bind(this));
        }
        if(x == 8)
        {
            Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("prefabs/a-11",ResType.Prefab),this.OnLoadEffectstar4.bind(this));
        }
        if(x == 9)
        {
            Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("prefabs/a-12",ResType.Prefab),this.OnLoadEffectstar5.bind(this));
        }
    }

    private OnLoadEffecthot1(prefab)
    {
        let now = this.host.m_stBrickManager.GetBrickNum();
        this.stHot1 = cc.instantiate(prefab);
        let dis1 = 300 + Math.random() * 200;
        let dis2 = -50;
        this.stHot1.setScale(cc.p(1,1));
        this.stHot1.position = new cc.Vec2(dis2,now * BrickConfigMgr.Instance.m_iHeight + dis1);
        cc.find("camera/Bricks").addChild(this.stHot1,1);

    }
    private OnLoadEffecthot2(prefab)
    {
        let now = this.host.m_stBrickManager.GetBrickNum();
        this.stHot2 = cc.instantiate(prefab);
        let dis1 = 300 + Math.random() * 200;
        let dis2 = -150;
        this.stHot2.setScale(cc.p(1,1));
        this.stHot2.position = new cc.Vec2(dis2,now * BrickConfigMgr.Instance.m_iHeight + dis1);
        cc.find("camera/Bricks").addChild(this.stHot2,1);

    }
    private OnLoadEffecthot3(prefab)
    {
        let now = this.host.m_stBrickManager.GetBrickNum();
        this.stHot3 = cc.instantiate(prefab);
        let dis1 = 300 + Math.random() * 200;
        let dis2 = -300;
        this.stHot3.setScale(cc.p(1,1));
        this.stHot3.position = new cc.Vec2(dis2,now * BrickConfigMgr.Instance.m_iHeight + dis1);
        cc.find("camera/Bricks").addChild(this.stHot3,1);
    }

    private OnLoadEffectairplane(prefab)
    {
        let now = this.host.m_stBrickManager.GetBrickNum();
        this.stAirPlane = cc.instantiate(prefab);
        let dis1 = Math.random() * 100;
        let dis2 = 1200;
        this.stAirPlane.setScale(cc.p(1,1));
        this.stAirPlane.position = new cc.Vec2(dis2,now * BrickConfigMgr.Instance.m_iHeight - dis1);
        cc.find("camera/Bricks").addChild(this.stAirPlane,1);
    }

    private OnLoadEffectstar(prefab)
    {
        if(this.stStarNum > 30)
            this.stStarNum = 0;
        console.log("star");
        let dis1 = Math.random() * 700 + 50;
        let dis2 = this.lastY + 1200 * Math.random() - 350;
        this.stStar[this.stStarNum] = cc.instantiate(prefab);
        this.stStar[this.stStarNum].position = new cc.Vec2(dis1,dis2);
        cc.find("camera/Bricks").addChild(this.stStar[this.stStarNum],1);
        this.stStarNum += 1;
    }

    private OnLoadEffectstar1(prefab)
    {
        if(this.stStarNum > 30)
            this.stStarNum = 0;
        console.log("star");
        let dis1 = Math.random() * 200 + 550;
        let dis2 = this.lastY + 300 * Math.random();
        this.stStar[this.stStarNum] = cc.instantiate(prefab);
        this.stStar[this.stStarNum].position = new cc.Vec2(dis1,dis2);
        cc.find("camera/Bricks").addChild(this.stStar[this.stStarNum],2);
        this.stStarNum += 1;
    }
    private OnLoadEffectstar2(prefab)
    {
        if(this.stStarNum > 30)
            this.stStarNum = 0;
        console.log("star");
        let dis1 = Math.random() * 200 + 50;
        let dis2 = this.lastY + 300 * Math.random();
        this.stStar[this.stStarNum] = cc.instantiate(prefab);
        this.stStar[this.stStarNum].position = new cc.Vec2(dis1,dis2);
        cc.find("camera/Bricks").addChild(this.stStar[this.stStarNum],2);
        this.stStarNum += 1;
    }
    private OnLoadEffectstar3(prefab)
    {
        if(this.stStarNum > 30)
            this.stStarNum = 0;
        console.log("star");
        let dis1 = Math.random() * 200 + 50;
        let dis2 = this.lastY + 300 * Math.random();
        this.stStar[this.stStarNum] = cc.instantiate(prefab);
        this.stStar[this.stStarNum].position = new cc.Vec2(dis1,dis2);
        cc.find("camera/Bricks").addChild(this.stStar[this.stStarNum],2);
        this.stStarNum += 1;
    }
    private OnLoadEffectstar4(prefab)
    {
        if(this.stStarNum > 30)
            this.stStarNum = 0;
        console.log("star");
        let dis1 = Math.random() * 200 + 550;
        let dis2 = this.lastY + 300 * Math.random();
        this.stStar[this.stStarNum] = cc.instantiate(prefab);
        this.stStar[this.stStarNum].position = new cc.Vec2(dis1,dis2);
        cc.find("camera/Bricks").addChild(this.stStar[this.stStarNum],2);
        this.stStarNum += 1;
    }
    private OnLoadEffectstar5(prefab)
    {
        if(this.stStarNum > 30)
            this.stStarNum = 0;
        console.log("star");
        let dis1 = Math.random() * 200 + 50;
        let dis2 = this.lastY + 300 * Math.random();
        this.stStar[this.stStarNum] = cc.instantiate(prefab);
        this.stStar[this.stStarNum].position = new cc.Vec2(dis1,dis2);
        cc.find("camera/Bricks").addChild(this.stStar[this.stStarNum],2);
        this.stStarNum += 1;
    }
    private hose: number = 0;
    Update(dt: number)
    {
        var houseNum = this.host.m_stBrickManager.GetBrickNum() - 1;
        if(houseNum % 3 == 2 && houseNum != this.hose)
        {
            if(this.nowPic == 2)
            {
                this.nowPicNum += 1;
                this.AddUpPic2();
                this.hose = houseNum;
                if(this.nowPicNum == this.picNum2)
                {
                    this.nowPicNum = 0;
                    this.nowPic = 3;
                }
            } else if(this.nowPic == 3)
            {
                this.nowPicNum += 1;
                this.AddUpPic3();
                this.hose = houseNum;
                if(this.nowPicNum == this.picNum3)
                {
                    this.nowPicNum = 0;
                    this.nowPic = 4;
                }
            } else if(this.nowPic == 4)
            {
                this.nowPicNum += 1;
                this.AddUpPic4();
                this.hose = houseNum;
                if(this.nowPicNum == this.picNum4)
                {
                    this.nowPicNum = 0;
                    this.nowPic = 5;
                }
            } else if(this.nowPic == 5)
            {
                this.nowPicNum += 1;
                this.AddUpPic5();
                this.hose = houseNum;
                if(this.nowPicNum == this.picNum5)
                {
                    this.nowPicNum = 0;
                    this.nowPic = 6;
                }
            } else if(this.nowPic == 6)
            {
                this.AddUpPic6();
                this.hose = houseNum;
            }
        }



        if(this.host.m_stBrickManager.GetBrickNum() == 36 && this.bIsAirPlane == false)
        {
            Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("anim/airplane/skeleton1",ResType.Prefab),this.OnLoadEffectairplane.bind(this));
            this.bIsAirPlane = true;
        }

        if(this.host.m_stBrickManager.GetBrickNum() == 16 && this.bIsHot1 == false && this.bIsHot2 == false && this.bIsHot3 == false)
        {
            Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("anim/hot3/skeleton3",ResType.Prefab),this.OnLoadEffecthot1.bind(this));
            Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("anim/hot1/skeleton1",ResType.Prefab),this.OnLoadEffecthot2.bind(this));
            Core.ResourcesMgr.LoadRes(ResStruct.CreateRes("anim/hot2/skeleton2",ResType.Prefab),this.OnLoadEffecthot3.bind(this));
            this.bIsHot1 = true;
            this.bIsHot2 = true;
            this.bIsHot3 = true;
        }
        if(this.bIsAirPlane == true)
        {
            if(this.stAirPlane != null)
            {
                this.stAirPlane.position = cc.p(this.stAirPlane.position.x - this.iAirPlaneSpeedX,this.stAirPlane.position.y + this.iAirPlaneSpeedY);
            }
            if(this.stAirPlane != null)
            {
                if(this.stAirPlane.position.x < -200)
                {
                    this.stAirPlane.destroy();
                    this.bIsAirPlane = false;
                }
            }
        }
        if(this.bIsHot1 == true)
        {
            if(this.stHot1 != null)
            {
                this.stHot1.position = cc.p(this.stHot1.position.x + this.iHot1Speed,this.stHot1.position.y);
            }
            if(this.stHot1 != null)
            {
                if(this.stHot1.position.x > 1200)
                {
                    this.stHot1.destroy();
                    this.bIsHot1 = false;
                }
            }
        }
        if(this.bIsHot2 == true)
        {
            if(this.stHot2 != null)
            {
                this.stHot2.position = cc.p(this.stHot2.position.x + this.iHot2Speed,this.stHot2.position.y);
            }
            if(this.stHot2 != null)
            {
                if(this.stHot2.position.x > 1200)
                {
                    this.stHot2.destroy();
                    this.bIsHot2 = false;
                }
            }
        }
        if(this.bIsHot3 == true)
        {
            if(this.stHot3 != null)
            {
                this.stHot3.position = cc.p(this.stHot3.position.x + this.iHot3Speed,this.stHot3.position.y);
            }
            if(this.stHot3 != null)
            {
                if(this.stHot3.position.x > 1200)
                {
                    this.stHot3.destroy();
                    this.bIsHot3 = false;
                }
            }
        }

    }

}
