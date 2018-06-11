//游戏状态
export enum GameStateType
{
    /**游戏中 */
    GAMING,
    /**暂停中 */
    PAUSE,
    /**不在游戏中 */
    NOGAMING,
}

//游戏事件
export enum GameEventType
{
    /**初始资源加载完成 */
    INIT_RES_LOAD_COMPLETE = 100,
    /**增加楼层 */
    UPDATE_FLOOR,
    /**更新人口 */
    UPDATE_POPULATION,
}

//摄像机滚动方向
export enum CameraRollType
{
    NONE = "none",
    UP = "up",
    DOWN = "down",
}

//楼层跌落状态
export enum BrickFallState
{
    PERFECT = "perfect",//人口4
    GOOD = "good",//人口3
    NORMAL = "normal",//人口1
    COLLAPSE = "collapse",//碰撞跌落
    FALLING = "falling",//自由跌落

}