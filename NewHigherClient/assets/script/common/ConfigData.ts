/**
 * 配置数据
 * @author zhouyulong
 * 2018年5月24日 10:09:49
 */
export class ConfigData
{
    /**HP数量 */
    public static readonly HP_COUNT: number = 3;

    /**砖块种类数量 */
    public static readonly BRICK_COUNT: number = 6;

    /**完美偏移像素量（人口4） */
    public static PERFECT_OFFEST_X: number = 20;

    /** 还不错的偏移量（人口3） */
    public static GOOD_OFFSET_X: number = 30;

    /** 普通的偏移量(人口1) */
    public static NORMAL_OFFSET_X: number = 60;

    /**砖块宽度 */
    public static BRICK_WIDTH: number = 120;

    /**砖块高度 */
    public static BRICK_HEIGHT: number = 120;

    /**砖块下落速度 */
    public static BRICK_FALL_SPEED: number = 30;

    /**起始地面高度 */
    public static INIT_FLOOR_Y: number = -490;

    /**镜头移动速度 */
    public static CAMERA_MOVE_SPEED: number = 3;

    /**摄像机移动次数 */
    public static CAMERA_MOVE_COUNT: number = 40;

    /**最大背景图索引 */
    public static MAX_BG_INDEX: number = 6;

    /** 大楼晃动幅度 */
    public static BUILDING_MAX_SWING_X: number = 180;
    /** 大楼晃动速度 */
    public static BUILDING_SWING_SPEED: number = 0.5;

    /**摄像机高度 */
    // public static CAMERA_HEIGHT: number = cc.view.getVisibleSize().height;
    public static CAMERA_HEIGHT: number = 1280;
}