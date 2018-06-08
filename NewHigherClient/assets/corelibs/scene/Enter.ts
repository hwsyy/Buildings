import Core from "../Core";
import {LinkManager} from "../manager/LinkManager";

const {ccclass} = cc._decorator;

@ccclass
export default class Enter extends cc.Component
{
    private linkManager: LinkManager;

    onLoad()
    {
        // 屏蔽左下角
        cc.director.setDisplayStats(false);
    }

    start()
    {
        // 初始化游戏核心库
        Core.Get().Init();
        this.linkManager = new LinkManager();
        Core.SdkHandleMgr.Init();
        Core.Platform.m_stPlatfrom.Login();
    }


}
