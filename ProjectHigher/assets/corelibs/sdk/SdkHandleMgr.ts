import ISdkHandle from "../interface/sdk/ISdkHandle";
import ISdkCallback from "../interface/sdk/ISdkCallback";
import {SdkType,AuthType,VibrateType,MessageType} from "./SdkType";
import SdkConfig from "./SdkConfig";
import WanbaSdkHandle from "./wanba/WanbaSdkHandle";
import WxSdkHandle from "./wxgame/WxSdkHandle";
import {ShareAppMsg,LaunchQuery,UserInfo,KVData,RankConfig,CanvasConfig} from "./wxgame/SdkObject";

export default class SdkHandleMgr
{
    private m_sLoginCode: string;

    private m_stSdkHandle: WxSdkHandle;

    public constructor()
    {
        this.m_stSdkHandle = new WxSdkHandle();
    }

    public Init(): void
    {
        this.m_stSdkHandle.Init();
    }

    public Login(): void
    {
        this.m_stSdkHandle.Login();
    }

    public Share(appMsg: ShareAppMsg): void
    {
        this.m_stSdkHandle.Share(appMsg);
    }

    public Pay(price: number): void
    {
        this.m_stSdkHandle.Pay(price);
    }

    public GetRankWidht(): number
    {
        return this.m_stSdkHandle.GetShareCanvasWidth();
    }

    public GetRankHeight(): number
    {
        return this.m_stSdkHandle.GetShareCanvasHegith();
    }

    public UploadDataToCloud(sKey: string,sValue: string): void
    {
        let stKVData: KVData = new KVData(sKey,sValue);
        this.m_stSdkHandle.UploadDataToCloud([stKVData]);
    }

    public UploadDataListToCloud(KVList: Array<KVData>): void
    {
        this.m_stSdkHandle.UploadDataToCloud(KVList);
    }

    public RemoveDataFromCloud(key: string): void
    {
        this.m_stSdkHandle.RemoveDataFromCloud([key]);
    }

    public RemoveDataListFromCloud(keyList: Array<string>): void
    {
        this.m_stSdkHandle.RemoveDataFromCloud(keyList);
    }

    public SetRankConfig(rankConfig: RankConfig): void
    {
        this.m_stSdkHandle.SetShareCanvasSize(rankConfig.m_iScoreBeginX + 200,
            rankConfig.m_iAvatarBeginY + (rankConfig.m_iAvatarInterval) * (rankConfig.m_iMaxNum - 1));
        this.m_stSdkHandle.PostOpenMessage(MessageType.SetRankConfig,rankConfig);
    }

    public ShowFriendRank(): void
    {
        this.m_stSdkHandle.PostOpenMessage(MessageType.ShowFriendRank,null);
    }

    public ShowGroupRank(shareTicket: string): void
    {
        this.m_stSdkHandle.PostOpenMessage(MessageType.ShowGroupRank,shareTicket);
    }

    public RankNextPage(): void
    {
        this.m_stSdkHandle.PostOpenMessage(MessageType.NextPage,null);
    }

    public RankPrePage(): void
    {
        this.m_stSdkHandle.PostOpenMessage(MessageType.PrePage,null);
    }

    public GetRankTexture(texture: cc.Texture2D): void
    {
        texture.initWithElement(this.m_stSdkHandle.GetShareCanvas());
        texture.handleLoadedTexture();
    }

    public Vibrate(vbType: VibrateType,callback?: ISdkCallback): void
    {
        this.m_stSdkHandle.Vibrate(vbType,callback);
    }

    public GetUserInfo(): void
    {
        this.m_stSdkHandle.GetAuthorize(AuthType.USER_INFO);
        this.m_stSdkHandle.GetUserInfo(false);
    }

    /**自定义生成截图 */
    public CreatCustomCapture(canvasConfig: CanvasConfig): void
    {
        this.m_stSdkHandle.CreatCustomCapture(canvasConfig);

    }

    /**截图 */
    public Capture(x: number,y: number,width: number,height: number): void
    {
        this.m_stSdkHandle.Capture(x,y,width,height);
    }

    public GetLaunchQuery(): LaunchQuery
    {
        return this.m_stSdkHandle.GetLaunchQuery();
    }

}