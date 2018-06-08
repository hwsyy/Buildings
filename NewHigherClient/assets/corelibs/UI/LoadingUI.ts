import {ResType,EventType,SceneType} from "../../corelibs/CoreDefine";
import Core from "../../corelibs/Core";
import CoreConfig from "../../corelibs/CoreConfig";
import SceneMgr from "../scene/SceneMgr";
import {loadingText} from "../../script/test/loadingText";

export default class LoadingUI
{
    private m_bInit: boolean;
    private m_stLoadingNode: cc.Node;
    //文字存储
    private m_stLoadText: cc.Label;
    private m_stMentionText: cc.Label;
    //进度条存储
    private m_nodeProgressBar: cc.Node;
    private m_stProgressBar: cc.ProgressBar;
    private m_hadleBar: cc.Node;
    public static URL: string = "prefabs/LoadingUI";

    private m_bIsHide: boolean;
    public constructor()
    {
        this.m_bInit = false;
        console.log("======================constructor:");
    }

    private InitView(thisAPI: Function,callback?: Function): void
    {

        console.log("======================InitView:");
        this.m_stLoadingNode.height = CoreConfig.GAME_HEIGHT;
        this.m_stLoadingNode.width = CoreConfig.GAME_WIDTH;
        cc.game.addPersistRootNode(this.m_stLoadingNode);
        this.m_stLoadingNode.x = CoreConfig.GAME_WIDTH / 2;
        this.m_stLoadingNode.y = CoreConfig.GAME_HEIGHT / 2;
        this.m_stLoadText = this.m_stLoadingNode.getChildByName("LoadingText").getComponent(cc.Label);
        this.m_stMentionText = this.m_stLoadingNode.getChildByName("MentionText").getComponent(cc.Label);
        this.m_stProgressBar = this.m_stLoadingNode.getChildByName("ProgressBar").getComponent(cc.ProgressBar);

        this.m_hadleBar = this.m_stLoadingNode.getChildByName("hadleBar");
        this.m_nodeProgressBar = this.m_stLoadingNode.getChildByName("ProgressBar");
        this.m_stLoadingNode.active = !this.m_bIsHide;

        this.m_stProgressBar.progress = 0.01;
        let num = (this.m_nodeProgressBar.x + this.m_stProgressBar.progress * 400) >> 0;
        this.m_hadleBar.setPositionX(num);
        this.OnLoadProgress([0 / 1]);
        if(callback && !this.m_bIsHide)
        {
            thisAPI(callback);
        }
    }
    private OnLoadProgress(progress: Array<number>): void
    {
        console.log("======================OnLoadProgress:");
        let that = this;
        let iProgress: number = progress[0];
        let iTotal: number = progress[1];
        if(iTotal == 0 || isNaN(iTotal))
        {
            return;
        }
        this.m_stLoadText.node.cleanup();
        this.m_stLoadText.node.runAction(cc.sequence(cc.callFunc(function()
        {
            that.m_stLoadText.string = "正在加载：" + "(" + iProgress.toString() + "/" + iTotal.toString() + ")";
            console.log("======================加载中:" + iProgress,iTotal);
            if(iTotal != 0 && iProgress >= iTotal)
            {
                console.log("======================加载完成!");
                that.m_stLoadText.node.stopAllActions();
                this.Hide();
            }

            // add
            that.m_stProgressBar.progress = (iProgress / iTotal);
            let num = (that.m_nodeProgressBar.x + that.m_stProgressBar.progress * 400) >> 0;
            that.m_hadleBar.setPositionX(num);
        },this),cc.delayTime(0.5)).repeatForever());
    }

    public Show(callback?: Function): void
    {
        this.m_bIsHide = false;
        Core.EventMgr.BindEvent(EventType.LoadSceneOver,function()
        {
            setTimeout(() =>
            {
                that.Hide();
            },500);

        },this)
        let that = this;
        if(!this.m_bInit)
        {
            cc.loader.loadRes(LoadingUI.URL,function(err,prefab)
            {
                if(err)
                {
                    cc.error("LoadingUI failed.");
                    return;
                }
                that.m_stLoadingNode = cc.instantiate(prefab);
                that.m_bInit = true;
                that.InitView(that.Show.bind(that),callback);
            });
            return;
        }
        this.m_stLoadingNode.active = true;
        callback();
        Core.EventMgr.BindEvent(EventType.LoadProgress,this.OnLoadProgress,this);
    }
    public Hide(): void
    {
        if(this.m_bInit)
        {
            this.m_stLoadingNode.active = false
        }
        Core.EventMgr.UnBindTarget(this);
        this.m_bIsHide = true;
        cc.log("Hide")
    }

    public LoadScene(callback: Function): void
    {
        let self = this;
        //加载进度0/1
        this.Show(function()
        {
            self.m_stLoadText.string = "正在加载：场景";
            self.OnLoadProgress([0,1]);
            setTimeout(() =>
            {
                callback();
            },500);
        });

    }
}