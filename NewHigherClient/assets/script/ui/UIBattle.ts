import BaseUI from "../../corelibs/uiframe/BaseUI";
import {UIType,UIShowMode} from "../../corelibs/uiframe/UIMgr";
import {ConfigData} from "../common/ConfigData";
import {BattleManager} from "../manager/BattleManager";
import Core from "../../corelibs/Core";
import {GameEventType} from "../common/GameEnum";
import {PlayerData} from "../common/PlayerData";

/**
 * 战斗ui
 * @author zhouyulong
 * 2018年5月23日 17:38:41
 */
export class UIBattle extends BaseUI
{
    /** HP起始位置X坐标 */
    private readonly HP_STARTX: number = -300;
    /** HP起始位置Y坐标 */
    private readonly HP_STARTY: number = -500;
    /** hp高度 */
    private readonly HP_SPACEY: number = 70;
    /**hp资源 */
    private readonly HP_RES: string = "prefabs/HP";
    /**生命值对象列表 */
    private hpList: Array<cc.Node>;
    /**层数 */
    private lab_floor: cc.Label
    /**人口 */
    private lab_population: cc.Label;

    constructor()
    {
        super(UIType.Normal,UIShowMode.Normal);
    }

    public Init(): void
    {
        super.Init();

        this.lab_floor = this.UINode.getChildByName("lab_floor").getComponent(cc.Label);
        this.lab_population = this.UINode.getChildByName("lab_population").getComponent(cc.Label);

        this.hpList = new Array<cc.Node>();
        for(let a: number = 0;a < BattleManager.getInstance().arrResData.length;a++)
        {
            if(BattleManager.getInstance().arrResData[a].m_sUrl == this.HP_RES)
            {
                for(let b: number = 0;b < ConfigData.HP_COUNT;b++)
                {
                    this.hpList.push(cc.instantiate((Core.ResourcesMgr.getRes(BattleManager.getInstance().arrResData[a].m_iResType,
                        BattleManager.getInstance().arrResData[a].m_sUrl) as cc.Prefab).data));
                }
                break;
            }
        }
        //绑定时间
        Core.EventMgr.BindEvent(GameEventType.UPDATE_FLOOR,this.updateFloorHandler,this);
        Core.EventMgr.BindEvent(GameEventType.UPDATE_POPULATION,this.updatePopulationHandler,this);
        Core.EventMgr.BindEvent(GameEventType.UPDATE_HP,this.updateHPHandler,this);
    }

    public Display(): void
    {
        super.Display();
        for(let a: number = 0;a < this.hpList.length;a++)
        {
            let hp: cc.Node = this.hpList[a];
            hp.x = this.HP_STARTX;
            hp.y = this.HP_STARTY + (a * this.HP_SPACEY);
            Core.UIRoot.addChild(hp);
        }

        this.UINode.on(cc.Node.EventType.TOUCH_END,this.clickStageHandler,this);
    }

    public Hiding(): void
    {
        this.UINode.off(cc.Node.EventType.TOUCH_END,this.clickStageHandler,this);
    }

    /**
     * 点击舞台
     */
    private clickStageHandler(): void
    {
        BattleManager.getInstance().clickStage();
    }

    /**
     * 更新楼层 
     */
    private updateFloorHandler(): void
    {
        this.lab_floor.string = PlayerData.floor + "";
    }

    /**
     * 更新人口 
     */
    private updatePopulationHandler(): void
    {
        this.lab_population.string = PlayerData.population + "";
    }
    private updateHPHandler(): void
    {
        let hp: cc.Node = this.hpList.pop();
        if(hp.parent != null)
        {
            hp.parent.removeChild(hp);
        }
        if(this.hpList.length < 1)
        {
            BattleManager.getInstance().endGame();
        }
    }
}