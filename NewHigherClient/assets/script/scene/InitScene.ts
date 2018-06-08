import Core from "../../corelibs/Core";
import {BattleManager} from "../manager/BattleManager";
import {UILoading} from "../ui/UILoading";
import {UIBattle} from "../ui/UIBattle";
import {UIStart} from "../ui/UIStart";
import {GameEventType} from "../common/GameEnum";
import ShareApplication from "../common/ShareApplication";
import {ResStruct} from "../../corelibs/util/ResourcesMgr";
import {ResType} from "../../corelibs/CoreDefine";
import {basename} from "path";
import {ShareAppMsg,RankConfig} from "../../corelibs/sdk/wxgame/SdkObject";
import {ImageUrlType} from "../../corelibs/sdk/SdkType";


/**
 * 游戏入口文件
 * @author zhouyulong
 * 2018年5月22日 21:10:13
 */
const {ccclass,property} = cc._decorator;

@ccclass
export default class InitScene extends cc.Component
{
    /**战斗管理器 */
    private battleManager: BattleManager;

    public shareApplication: ShareApplication = null;



    start()
    {
        // 屏蔽左下角
        cc.director.setDisplayStats(false);

        //初始化corelib
        Core.Get().Init();

        //初始化ui资源
        Core.UIMgr.Register("UILoading","prefabs/ui/UILoading",UILoading);
        Core.UIMgr.Register("UIBattle","prefabs/ui/UIBattle",UIBattle);
        Core.UIMgr.Register("UIStart","prefabs/ui/UIStart",UIStart);

        Core.EventMgr.BindEvent(GameEventType.INIT_RES_LOAD_COMPLETE,this.initResLoadHandler,this);

        //初始化战斗管理器
        let battleManager: BattleManager = new BattleManager();
        battleManager.init();
        cc.director.preloadScene('MainScene');

    }

    /**
     * 初始资源加载完成
     */
    private initResLoadHandler(): void
    {
        Core.EventMgr.UnbindEvent(GameEventType.INIT_RES_LOAD_COMPLETE,this.initResLoadHandler,this);
        Core.UIMgr.ShowUI("UIStart");
    }
}
