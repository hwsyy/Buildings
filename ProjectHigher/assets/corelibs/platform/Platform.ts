import Core from "../Core";
import {EventID} from "../CoreDefine";
import {HttpReqLogin,HttpRspLogin} from "../net/HttpMsg";
import {LoginMsg,UserInfo} from "../sdk/wxgame/SdkObject";
import CoreConfig from "../CoreConfig";
import {NetType} from "../net/NetMgr";

/**
 * 平台相关协议
 * 以及涉及到的登陆连接
 */
export class Platform
{
    private m_stPlatfrom: BasePlatfrom;
    constructor()
    {
        this.Init();
    }
    private Init(): void
    {
        if(cc.sys.platform == cc.sys.WECHAT_GAME)
        {

            this.m_stPlatfrom = new WechatGamePlatfrom();
        }
        else
        {
            this.m_stPlatfrom = new H5BrowserPlatfrom();
        }

        this.m_stPlatfrom.Init();

    }
}

abstract class BasePlatfrom
{
    public abstract Init(): void;
    // protected abstract Login(): void;
    // /**连接认证 */
    // public abstract ConnectAuth(): void;
    // /**链接网关 */
    // public abstract ConnectGateway(): void;
    // /**断线重连 */
    // public abstract Reconnection(): void;
}

class WechatGamePlatfrom extends BasePlatfrom
{
    constructor()
    {
        super();
    }
    public Init(): void
    {
        Core.EventMgr.BindEvent(EventID.SdkEvent.CB_SUCCESS_LOGIN,this.OnSdkLoginSuccess,this);
        Core.EventMgr.BindEvent(EventID.SdkEvent.CB_SUCCESS_USER_INFO,this.OnSdkGetUserInfoSuccess,this);
        Core.EventMgr.BindEvent(EventID.HttpEvent.RSP_LOGIN,this.OnAuthLoginSuccess,this);

        this.Login();
    }

    public Login(): void
    {
        Core.SdkHandleMgr.Login();
        this.RequestAuthInfo();
    }

    /**
     * 请求认证信息
     */
    public RequestAuthInfo(): void
    {
        Core.SdkHandleMgr.GetUserInfo();
    }


    private OnSdkLoginSuccess(rsp: LoginMsg): void
    {
        let stHttpLogin: HttpReqLogin = new HttpReqLogin();
        stHttpLogin.code = rsp.m_sCode;
        Core.HttpHandler.Login(stHttpLogin);
        if(Core.ServerHandler.m_userInfo)
        {
            Core.HttpHandler.SaveUserInfo(Core.ServerHandler.m_userInfo,Core.ServerHandler.m_iUin);
        }
    }


    private OnSdkGetUserInfoSuccess(rsp: UserInfo)
    {
        Core.ServerHandler.m_userInfo = rsp;
        if(Core.ServerHandler.IsAuth)
        {
            Core.HttpHandler.SaveUserInfo(rsp,Core.ServerHandler.m_iUin);
        }
    }

    private OnAuthLoginSuccess(rsp: HttpRspLogin): void
    {
        cc.log("OnAuthLoginSuccess！");
        console.log(rsp);
        if(rsp.retCode == 0)
        {
            Core.ServerHandler.m_iUin = parseInt(rsp.uid);
            Core.ServerHandler.m_sURL = rsp.gateway_ip;
            // CoreConfig.GATE_WAY_IP = rsp.gateway_ip;
            // CoreConfig.GATE_PORT = rsp.gateway_port;
            Core.ServerHandler.IsAuth = true;
            this.OnAuthSuccess();
        }
    }


    private OnAuthSuccess(): void
    {
        Core.EventMgr.UnBindTarget(this);
        if(CoreConfig.IS_ONLY_CLIENT)
        {
            cc.director.loadScene(CoreConfig.GAME_SCENE);
        }
        else
        {
            //Core.ServerHandler.NetMgr.connect(Core.ServerHandler.m_sMgrIP,Core.ServerHandler.m_iMgrPort,NetType.GateMgr);
            Core.NetMgr.Connect(Core.ServerHandler.m_sURL,NetType.Gate);
        }
    }
}


/**
 * H5浏览器
 * 正常的流程应该是
 * 1、通过sdk等获取openid
 * 2、通过openid获取网关链接
 */
class H5BrowserPlatfrom extends BasePlatfrom
{
    public Init(): void
    {
        this.Login();
    }

    public Login(): void
    {
        Core.NetMgr.Connect("wss://h5game.123u.com/ws/gw1/",NetType.Gate);
    }

    /**
     * 请求认证信息
     */
    public RequestAuthInfo(): void
    {

    }

    /**
     * 连接认证
     */
    public ConnectAuth(): void
    {

    }

    /**
     * 连接网关
     */
    public ConnectGateway(): void
    {

    }
}
