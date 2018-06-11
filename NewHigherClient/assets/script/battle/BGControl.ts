import {ConfigData} from "../common/ConfigData";
import {BattleManager} from "../manager/BattleManager";
import {CameraRollType} from "../common/GameEnum";

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
    /**上一张背景高度 */
    private lastBGHeight: number;
    /**当前所使用的节点 */
    private nodeIndex: number;
    /**上次摄像机所在Y坐标 */
    private lastCameraY: number;
    /**背景总高度 */
    private totalBGHeight: number;
    /**移动距离 */
    private moveDistance: number;

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
        this.lastBGHeight = 0;
        this.loadBgIndex = 1;
        this.nodeIndex = 0;
        this.lastCameraY = 0;
        this.totalBGHeight = 0;
        this.moveDistance = 0;
        //开始加载当前屏
        this.loadBG(() =>
        {
            // this.loadBG(this.bgNodeList[1]);//预加载下一屏地图
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
            // console.log("=========移动背景:" + this.moveDistance,this.totalBGHeight,BattleManager.getInstance().cameraCanvas.y);
            if(ConfigData.CAMERA_HEIGHT + this.moveDistance >= this.totalBGHeight)//需要加载背景图了
            {
                // console.log("=========加载背景:" + this.loadBgIndex);
                this.loadBG();
            }
        }
        else//向下
        {

        }
        this.lastCameraY = BattleManager.getInstance().cameraCanvas.y;
    }

    /**
     * 加载背景图
     */
    private loadBG(_cb?: Function): void
    {

        // if(this.loadBgIndex + 1 >= ConfigData.MAX_BG_INDEX)
        //             {
        //                 cc.textureCache.addImage(cc.url.raw("resources/texture/img/background" + this.loadBgIndex + ".jpg"),(res) =>
        //                 {
        //                     this.bg1.getComponent(cc.Sprite).spriteFrame.setTexture(res);
        //                 },this);
        //             }
        //             else
        //             {
        //                 cc.textureCache.addImage(cc.url.raw("resources/texture/img/background" + (this.loadBgIndex + 1) + ".jpg"),(res) =>
        //                 {
        //                     this.bg1.getComponent(cc.Sprite).spriteFrame.setTexture(res);
        //                     this.bg1.y = this.bg.y + (this.bg.height / 2 + this.bg1.height / 2);
        //                 },this);
        //             }
        cc.textureCache.addImage(cc.url.raw(this.BG_RES + this.loadBgIndex + ".jpg"),(res) =>
        {
            let tempIndex: number = this.nodeIndex == this.BG_COUNT ? 0 : this.nodeIndex;
            let node: cc.Node = this.bgNodeList[tempIndex];
            this.bgNodeList[this.nodeIndex].getComponent(cc.Sprite).spriteFrame.setTexture(res);
            BattleManager.getInstance().cameraCanvas.addChild(node);
            node.setLocalZOrder(0);
            if(this.lastBGHeight > 0)//说明不是第一张图片
            {
                node.y = (this.lastBGHeight / 2) + (node.height / 2);
            }
            this.lastBGHeight = node.height;
            this.totalBGHeight += this.lastBGHeight;
            if(_cb != null)
            {
                _cb();
            }
            this.loadBgIndex++;
            this.nodeIndex++;

        },this);
    }
}