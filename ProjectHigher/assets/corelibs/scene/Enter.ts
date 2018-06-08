import Core from "../Core";

const {ccclass} = cc._decorator;

@ccclass
export default class Enter extends cc.Component
{
    onLoad()
    {
        // 屏蔽左下角
        cc.director.setDisplayStats(false);
    }

    start()
    {
        // 初始化游戏核心库
        Core.Get().Init();
    }


}
