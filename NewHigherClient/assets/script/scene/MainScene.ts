import {BattleManager} from "../manager/BattleManager";
const {ccclass,property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component
{

    @property(cc.AudioSource)
    public backgroundMusic: cc.AudioSource = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    onLoad(): void
    {

        BattleManager.getInstance().startGame();
    }
    start()
    {
        this.backgroundMusic.play();
    }

    // update (dt) {}
}
