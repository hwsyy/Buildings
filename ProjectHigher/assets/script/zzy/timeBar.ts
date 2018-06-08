import {DH_NOT_SUITABLE_GENERATOR} from "constants";
import Core from "../../corelibs/Core";
import {EventType} from "../../corelibs/CoreDefine";


const {ccclass,property} = cc._decorator;

@ccclass
export default class timeBar extends cc.Component
{
    private half_bar: cc.Node = null;
    private all_bar: cc.Node = null;
    private fangzi: cc.Node = null;
    private fangzi_label: cc.Node = null;
    public nowTime: number = 0;
    public allTime: number = 1;
    private barLen: number = 390;
    start() 
    {
        this.half_bar = this.node.getChildByName('bar_half');
        this.all_bar = this.node.getChildByName('bar_all');
        this.fangzi = this.node.getChildByName('fangzi');
        this.fangzi_label = this.node.getChildByName('fangzi_label');
        Core.EventMgr.BindEvent(EventType.LoadProgress,this.OnLoadProgress,this);
    }

    private OnLoadProgress(progress: Array<number>): void
    {
        this.nowTime = progress[0];
        this.allTime = progress[1];
    }

    update() 
    {
        let val = 1.0 * this.nowTime / this.allTime;
        if(val >= 0.96) 
        {
            this.half_bar.active = false;
            this.all_bar.active = true;
            this.all_bar.width = this.barLen * val;

        }
        else 
        {
            this.half_bar.active = true;
            this.all_bar.active = false
            this.half_bar.width = this.barLen * val;
        }

        this.fangzi.setPositionX(this.barLen * val);
        let x = Math.floor(val * 100);
        this.fangzi_label.setPositionX(this.barLen * val);
        this.fangzi_label.getComponent(cc.Label).string = x.toString() + "%";

    }
}