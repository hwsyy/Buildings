import {ResType,EventType,SceneType} from "../CoreDefine";
import Core from "../Core";
import LoadingUI from "../UI/LoadingUI";
import {ResStruct} from "../util/ResourcesMgr";

export default class SceneMgr
{
    private m_arrLoadList: Map<string,Array<ResStruct>>;
    private m_sLastScene: string;
    private m_sCurrentScene: string;
    public constructor()
    {
        this.m_arrLoadList = new Map<string,Array<ResStruct>>();
        Core.EventMgr.BindEvent(EventType.LoadSceneOver,this.OnLoadSceneCompleted,this);
    }

    public SwitchScene(sceneName: string,callBack?: Function): void
    {
        if(sceneName == this.m_sCurrentScene)
        {
            cc.log("场景已加载，无需重复加载,scene name:",sceneName);
            return;
        }
        Core.LoadingUI.LoadScene(function()
        {
            Core.ResourcesMgr.LoadScene(sceneName,callBack);
        });
    }

    /**
     * 返回上一个场景
     */
    private GetLastScene(): string
    {
        return this.m_sLastScene;
    }


    /**
     * 当前场景
     */
    public GetCurrentScene(): string
    {
        return this.m_sCurrentScene;
    }

    // 场景切换完成
    private OnLoadSceneCompleted(scene: SceneType): void
    {
        this.m_sLastScene = this.m_sCurrentScene;
        this.m_sCurrentScene = scene;
        cc.log(this.m_sCurrentScene,'scene loaded!');
    }
}   