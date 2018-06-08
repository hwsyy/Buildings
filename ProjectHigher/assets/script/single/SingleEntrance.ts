import SingleApp from "./SingleApp";
import HookConfigMgr from "../hook/HookConfigMgr";
import Core from "../../corelibs/Core";
import ITick from "../../corelibs/interface/ITick";
import IUpdate from "../../corelibs/interface/IUpdate";
import Ticker from "../../corelibs/tick/Ticker";
const {ccclass,property} = cc._decorator;

@ccclass
export default class SingleEntrance extends cc.Component implements ITick,IUpdate
{

    public SingleApp: SingleApp = null;
    onLoad()
    {

    }

    start()
    {
        Core.Ticker.AddKeyTick(this);
        Core.Ticker.AddUpdate(this);
        //HookConfigMgr.Instance.LoadJson();
        this.SingleApp = new SingleApp();
        this.SingleApp.m_CanvasSize = 1;
        this.SingleApp.m_CanvasChangeX = 0;
        this.SingleApp.Name = "";
        this.SingleApp.Init();
        cc.find("Canvas").getComponent("BattleUI").SingleApp = this.SingleApp;
        Core.Ticker.Start();
    }

    Tick(tickCount: number): void
    {
        //console.log("updateing");
        if(this.SingleApp != null)
            this.SingleApp.Update(tickCount);
    }

    Update(dt: number)
    {
        if(this.SingleApp != null)
            this.SingleApp.LateUpdate(dt);
        else
        {
            console.log("Can't find the SingleApp");
        }
        // CameraControl.LateUpdate(dt);
    }
}
