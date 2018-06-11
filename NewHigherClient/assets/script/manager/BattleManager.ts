import Core from "../../corelibs/Core";
import {GameStateType,GameEventType,CameraRollType} from "../common/GameEnum";
import {ResStruct} from "../../corelibs/util/ResourcesMgr";
import {ResType} from "../../corelibs/CoreDefine";
import {Hook} from "../battle/Hook/Hook";
import {Brick} from "../battle/Brick";
import {ConfigData} from "../common/ConfigData";
import {BGControl} from "../battle/BGControl";
import MainScene from "../scene/MainScene";

/**
 * 战斗管理器
 * @author zhouyulong
 * 2018年5月23日 19:52:23
 */
export class BattleManager
{
    /**单例 */
    private static instance: BattleManager;
    /**当前游戏状态 */
    private state: number;
    /**计时器ID */
    private intervalID: number;
    /**主舞台组件 */
    private mainComponent: cc.Component;
    /**资源返回数组*/
    public arrResData: Array<ResStruct>;
    /**镜头容器 */
    public cameraCanvas: cc.Node;
    /**钩子大类 */
    private hook: Hook;
    /**砖块 */
    private brick: Brick;
    /**是否移动镜头 */
    public isMoveCamera: boolean;
    /** 镜头移动方向 */
    public moveDirection: CameraRollType;
    /**摄像机移动次数 */
    private cameraMoveCount: number;
    /**摄像机移动距离 */
    private cameraMoveDist: number;
    /**背景管理器 */
    private bgControl: BGControl;

    public static getInstance(): BattleManager
    {
        return BattleManager.instance;
    }

    constructor()
    {
        BattleManager.instance = this;
        this.cameraCanvas = new cc.Node();
        this.hook = new Hook();
        this.brick = new Brick();
        this.bgControl = new BGControl();
    }

    /**
     * 初始化
     */
    public init(): void
    {
        let arrResStruct: Array<ResStruct> = new Array<ResStruct>();
        arrResStruct.push(ResStruct.CreateRes("prefabs/Hook",ResType.Prefab));
        arrResStruct.push(ResStruct.CreateRes("prefabs/HP",ResType.Prefab));
        arrResStruct.push(ResStruct.CreateRes("prefabs/PerfectEffect",ResType.Prefab));
        arrResStruct.push(ResStruct.CreateRes("prefabs/brick1",ResType.Prefab));
        arrResStruct.push(ResStruct.CreateRes("prefabs/brick2",ResType.Prefab));
        arrResStruct.push(ResStruct.CreateRes("prefabs/brick3",ResType.Prefab));
        arrResStruct.push(ResStruct.CreateRes("prefabs/brick4",ResType.Prefab));
        arrResStruct.push(ResStruct.CreateRes("prefabs/brick5",ResType.Prefab));
        arrResStruct.push(ResStruct.CreateRes("prefabs/brick6",ResType.Prefab));

        Core.ResourcesMgr.LoadResArray(arrResStruct,function(arrResData: Array<ResStruct>)
        {
            this.arrResData = arrResData;
            Core.UIRoot.Normal.addChild(this.cameraCanvas);
            this.hook.init();
            this.brick.init();
            this.bgControl.init();
            Core.EventMgr.Emit(GameEventType.INIT_RES_LOAD_COMPLETE,null);
        }.bind(this));
    }

    /**
     * 启动游戏
     */
    public startGame(): void
    {
        this.state = GameStateType.GAMING;
        Core.UIMgr.ShowUI("UIBattle");
        this.hook.show();
        this.bgControl.startGame();
        this.brick.startGame();
        this.mainComponent = cc.find("Canvas").getComponent(cc.Canvas);
        this.mainComponent.schedule(this.update.bind(this),0.017,cc.macro.REPEAT_FOREVER);
        this.isMoveCamera = false;
        this.cameraMoveDist = 0;
        this.cameraMoveCount = 0;
    }

    /**
     * 结束游戏
     */
    public endGame(): void
    {
        this.state = GameStateType.NOGAMING;
        this.mainComponent.unschedule(this.update);
        this.hook.hide();
        Core.UIMgr.CloseUI("UIBattle");
    }

    /**
     * 移动镜头开始
     */
    public moveCameraStart(direction: CameraRollType): void
    {
        this.isMoveCamera = true;
        this.moveDirection = direction;
    }

    /**
     * 移动镜头结束
     */
    public moveCameraEnd(): void
    {
        this.cameraMoveCount = 0;
        this.isMoveCamera = false;
        this.moveDirection = CameraRollType.NONE;
        this.cameraMoveDist = Math.abs(this.cameraCanvas.y) - this.cameraMoveDist;
    }

    /**
     * 点击舞台
     */
    public clickStage(): void
    {
        if(this.brick.isFalling == true || this.isMoveCamera == true)
        {
            return;
        }
        this.brick.putBrick();
    }

    /**
     * 帧刷新
     */
    private update(dt: number)
    {
        if(this.isMoveCamera == true)//镜头移动
        {
            let speed: number = 0;
            if(this.moveDirection == CameraRollType.UP)
            {
                speed = ConfigData.CAMERA_MOVE_SPEED;
            } else if(this.moveDirection == CameraRollType.DOWN)
            {
                speed = - ConfigData.CAMERA_MOVE_SPEED;
            }
            if(this.cameraMoveCount < ConfigData.CAMERA_MOVE_COUNT)
            {
                this.cameraCanvas.y -= speed;
                this.cameraMoveCount++;
                this.bgControl.scrollBack(CameraRollType.UP);//背景滚动 
            }
            else
            {
                this.moveCameraEnd();
            }
        }
        this.hook.update(dt);
        let pos: cc.Vec2 = this.hook.hook.convertToWorldSpaceAR(this.hook.hook.position);
        let pos2: cc.Vec2 = cc.p(pos.x / 2,pos.y / 2 - this.cameraCanvas.y);
        this.brick.update(pos2);
    }
}