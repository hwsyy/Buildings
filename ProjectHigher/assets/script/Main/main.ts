import Core from "../../corelibs/Core";
import {CSProtoID,RspPlayerLogin} from "../../corelibs/proto/msg";


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
    start()
    {
        Core.EventMgr.BindEvent(CSProtoID.RSP_PLAYER_LOGIN,this.OnLogin,this);
        this.node.getChildByName("LoginOK").getComponent(cc.Label).string = "Login ing!";
        console.log("Login ing");
        Core.ServerHandler.Login();
    }

    private OnLogin(rsp: RspPlayerLogin): void
    {
        console.log("OnLogin ing");
        if(rsp.resultID == 0)
        {
            Core.Log("----login success!");
            Core.Log("------uin = " + rsp.uin);
            this.node.getChildByName("LoginOK").getComponent(cc.Label).string = "login success!";
            cc.director.loadScene("Lobby");
        }
        else
        {
            Core.Log("----login failed");
        }
    }
}
