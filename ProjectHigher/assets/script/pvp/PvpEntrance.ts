import SingleApp from "../single/SingleApp";
import pvpBattleUI from "./battleUI/pvpBattleUI";

const {ccclass,property} = cc._decorator;

@ccclass
export default class PvpEntrance extends cc.Component
{
    //public static readonly Instance: PvpEntrance = new PvpEntrance();
    public LeftGame: SingleApp = null;
    public RightGame: SingleApp = null;
    onLoad()
    {
        this.LeftGame = new SingleApp();
        this.LeftGame.m_CanvasSize = 0.5;
        this.LeftGame.m_CanvasChangeX = -333.5;
        this.LeftGame.Name = "Left";
        this.LeftGame.Init();
        this.RightGame = new SingleApp();
        this.RightGame.m_CanvasSize = 0.5;
        this.RightGame.m_CanvasChangeX = 333.5;
        this.RightGame.Name = "Right";
        this.RightGame.Init();

        if(cc.find("Canvas").getComponent("pvpBattleUI").LeftGame == null)
            cc.find("Canvas").getComponent("pvpBattleUI").LeftGame = this.LeftGame;
        if(cc.find("Canvas").getComponent("pvpBattleUI").RightGame == null)
            cc.find("Canvas").getComponent("pvpBattleUI").RightGame = this.RightGame;


    }

    update(dt: number)
    {
        if(this.LeftGame != null)
            this.LeftGame.Update(dt);
        if(this.RightGame != null)
            this.RightGame.Update(dt);
    }

    lateUpdate(dt: number)
    {
        if(this.LeftGame != null)
            this.LeftGame.LateUpdate(dt);
        if(this.RightGame != null)
            this.RightGame.LateUpdate(dt);
        // CameraControl.LateUpdate(dt);
    }
}
