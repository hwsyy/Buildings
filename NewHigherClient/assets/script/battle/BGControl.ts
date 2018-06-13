import {ConfigData} from "../common/ConfigData";
import {BattleManager} from "../manager/BattleManager";
import {CameraRollType} from "../common/GameEnum";
import {notDeepEqual} from "assert";

/**
 * 背景控制器
 * @author zhouyulong
 * 2018年5月25日 14:56:11
 */
export class BGControl
{
    /**背景同时最大数量 */
    private readonly BG_COUNT: number = 3;
    /**钩子资源 */
    private readonly BG_RES: string = "resources/texture/img/background";
    /**背景列表 三张背景图 上 中 下 */
    private bgNodeList: Array<cc.Node>;
    /**当前加载背景索引 */
    private loadBgIndex: number;
    /**当前所使用的节点 */
    private nodeIndex: number;
    /**上次摄像机所在Y坐标 */
    private lastCameraY: number;
    /**背景总高度 */
    private totalBGHeight: number;
    /**移动距离 */
    private moveDistance: number;
    /** 正在加载背景 */
    public isBGLoading: boolean;

    constructor()
    {
        this.bgNodeList = new Array<cc.Node>();
    }

    public init(): void
    {
        for(let a: number = 0;a < this.BG_COUNT;a++)
        {
            let bg: cc.Node = new cc.Node();
            bg = new cc.Node();
            bg.addComponent(cc.Sprite);
            bg.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame();
            this.bgNodeList.push(bg);
        }
    }

    /**
     * 开始游戏
     */
    public startGame(): void
    {
        this.loadBgIndex = 1;
        this.nodeIndex = 0;
        this.lastCameraY = 0;
        this.totalBGHeight = 0;
        this.moveDistance = 0;
        this.isBGLoading = false;
        //开始加载当前屏
        this.loadBG(() =>
        {
            this.isBGLoading = false;
        });
    }

    /**
     * 结束游戏
     */
    public endGame(): void
    {
        for(let a: number = 0;a < this.bgNodeList.length;a++)
        {
            if(this.bgNodeList[a].parent != null)
            {
                this.bgNodeList[a].parent.removeChild(this.bgNodeList[a]);
            }
        }
    }

    /**
     * 滚动背景
     */
    public scrollBack(_direction: string): void
    {
        if(_direction == CameraRollType.UP)//向上
        {
            this.moveDistance += Math.abs(BattleManager.getInstance().cameraCanvas.y) - Math.abs(this.lastCameraY);
            if(ConfigData.CAMERA_HEIGHT + this.moveDistance >= this.totalBGHeight - ConfigData.BRICK_HEIGHT && this.isBGLoading == false)//需要加载背景图了
            {
                this.loadBG();
            }
        }
        else//向下
        {
            this.moveDistance -= Math.abs(BattleManager.getInstance().cameraCanvas.y) - Math.abs(this.lastCameraY);
        }
        this.lastCameraY = BattleManager.getInstance().cameraCanvas.y;
    }

    /**
     * 加载背景图
     */
    private loadBG(_cb?: Function): void
    {
        this.isBGLoading = true;
        cc.textureCache.addImage(cc.url.raw(this.BG_RES + this.loadBgIndex + ".jpg"),(res) =>
        {
            this.nodeIndex = this.nodeIndex >= this.BG_COUNT ? 0 : this.nodeIndex;
            let node: cc.Node = this.bgNodeList[this.nodeIndex];
            node.getComponent(cc.Sprite).spriteFrame.setTexture(res);
            if(node.parent == null)
            {
                BattleManager.getInstance().cameraCanvas.addChild(node);
            }
            node.setLocalZOrder(0);
            if(this.loadBgIndex == 1)//第一张图片
            {
                node.y = 0;
                this.totalBGHeight = node.height / 2;
            }
            else
            {
                node.y = this.totalBGHeight + node.height / 2;
                this.totalBGHeight += node.height;
            }
            // console.log(">>>node.y = ",node.y,"node.x",node.x,"contentsize",node.getContentSize(),"nodeIndex = ",this.nodeIndex,"bgindex",this.loadBgIndex,"height =",node.height,"total ",this.totalBGHeight);
            if(_cb != null)
            {
                _cb();
            }
            if(this.loadBgIndex < ConfigData.MAX_BG_INDEX)
            {
                this.loadBgIndex++;
            }
            this.nodeIndex++;
        },this);
    }
}