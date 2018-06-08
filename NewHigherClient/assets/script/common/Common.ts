import Core from "../../corelibs/Core";
import ITick from "../../corelibs/interface/ITick";
import IUpdate from "../../corelibs/interface/IUpdate";
import Ticker from "../../corelibs/tick/Ticker";
import ShareApplication from "./ShareApplication";


const {ccclass,property} = cc._decorator;

@ccclass
export default class Common extends cc.Component implements ITick,IUpdate
{
    public ShareApplication: ShareApplication = null;

    onLoad()
    {
    }

    start()
    {
        Core.Ticker.AddKeyTick(this);
        Core.Ticker.AddUpdate(this);

        this.ShareApplication = new ShareApplication();
        this.ShareApplication.m_CanvasScale = 1;
        this.ShareApplication.m_CanvasOffsetX = 0;
        this.ShareApplication.Name = "欢乐盖楼";
        this.ShareApplication.Init();
        cc.find("Canvas").getComponent("InitScene").ShareApplication = this.ShareApplication;
        Core.Ticker.Start();
    }


    Tick(tickCount: number): void
    {
        if(this.ShareApplication != null)
            this.ShareApplication.Update(tickCount);
    }

    Update(dt: number)
    {
        if(this.ShareApplication != null)
            this.ShareApplication.LateUpdate(dt);
        else
        {
            console.error("ShareApplication Not Found!");
        }
    }

}
