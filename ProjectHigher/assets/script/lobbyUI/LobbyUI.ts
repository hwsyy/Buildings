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
export default class NewClass extends cc.Component
{

    // LIFE-CYCLE CALLBACKS:


    private m_btnavater: cc.Node = null; // 头像按钮
    private m_btnfastbattle: cc.Node = null; // 快速对战按钮
    private m_btnfriendbattle: cc.Node = null; // 好友对战按钮
    private m_btnsinglegame: cc.Node = null; // 单人模式按钮
    private m_gamename: cc.Node = null;// 游戏名称
    private m_btnsetting: cc.Node = null;// 游戏设置按钮
    private m_plane: cc.Node = null;// 游戏设置平面
    private m_nowstatu: boolean;// 设置界面是否打开
    private m_btnclose: cc.Node = null; //确定按钮关闭游戏设置界面
    onLoad()
    {
        //获取Node+监听
        this.m_btnavater = this.node.getChildByName("avatarbutton");
        this.m_btnfastbattle = this.node.getChildByName("fastbattlebutton");
        this.m_btnfriendbattle = this.node.getChildByName("friendbattlebutton");
        this.m_btnsinglegame = this.node.getChildByName("singlegamebutton");
        this.m_gamename = this.node.getChildByName("gamename");
        this.m_btnsetting = this.node.getChildByName("settingbutton");
        this.m_plane = this.node.getChildByName("systemsetting");
        this.m_btnclose = this.m_plane.getChildByName("close");
        console.log(this.m_btnclose);
        this.m_btnavater.on("click",this.navaterEvent,this);
        this.m_btnfastbattle.on("click",this.fastbattleEvent,this);
        this.m_btnfriendbattle.on("click",this.friendbattleEvent,this);
        this.m_btnsinglegame.on("click",this.singlegameEvent,this);
        this.m_btnsetting.on("click",this.settingEvent,this);
        this.m_btnclose.on("click",this.closeEvent,this);


        this.m_nowstatu = false;
        this.m_plane.active = this.m_nowstatu;
        // 测试name
        this.changeGamenameEvent("helloworldxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    }
    start()
    {

    }
    changeGamenameEvent(name: string)// 修改玩家名字
    {
        console.log(this.m_gamename.name + " xxxx " + name);
        this.m_gamename.getComponent(cc.Label).string = name;
    }
    navaterEvent()
    {
        if(this.m_nowstatu) return;
        console.log("头像事件");
    }



    fastbattleEvent()
    {
        if(this.m_nowstatu) return;
        console.log("快速对战事件");
    }
    friendbattleEvent()
    {
        if(this.m_nowstatu) return;
        console.log("好友对战事件");
    }
    singlegameEvent()
    {
        if(this.m_nowstatu) return;
        console.log("单人模式事件");
    }
    settingEvent()
    {
        if(this.m_nowstatu) return;
        console.log("设置");
        this.m_nowstatu = true;
        this.m_plane.active = true;
    }
    closeEvent()
    {
        this.m_plane.active = false;
        this.m_nowstatu = false;
    }
    // update (dt) {},
}
