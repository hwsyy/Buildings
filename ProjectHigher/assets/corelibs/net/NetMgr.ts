import {CodeEngine} from "../util/CodeEngine";
import {MsgHeader} from "./MsgHeader";
import Core from "../Core";
import {CSProtoID} from "../proto/msg";
import {LogLevel} from "../log/Log";
import CoreConfig from "../CoreConfig";

export default class NetMgr
{
    private m_stWebSoket: WebSocket = null;
    private reconnectTimer: number = null;
    private reconnectTimes: number = 0;
    private m_mapFnCallback: Map<number,Function>;
    private m_stMsgHeader: MsgHeader;

    public m_iCurrentNetType: NetType;

    private m_fnConnected: Function;

    public constructor()
    {
        this.m_mapFnCallback = new Map<number,Function>();
        this.m_stMsgHeader = null;
        this.m_iCurrentNetType = NetType.Null;
    }

    private RegiesterEvent(): void
    {
    }

    public Connect(url: string,netType: NetType,callback?: Function): void
    {
        cc.log("Connect url:",url);
        if(url == "")
        {
            Core.Log("please input server ip and port in url !!!!",LogLevel.Warning);
            return;
        }
        let that = this;
        if(this.m_stWebSoket)
        {
            this.m_stWebSoket.onclose = function()
            {
                that.m_stWebSoket = null;
                that.m_stMsgHeader = null;
                that.Connect(url,netType,callback);
            };
            this.m_stWebSoket.close();
            return;
        }
        if(!url)
        {
            return;
        }
        this.m_iCurrentNetType = netType;
        this.m_stWebSoket = new WebSocket(url);
        Core.Log("try connect to " + this.m_stWebSoket.url);
        this.m_stWebSoket.binaryType = 'arraybuffer';
        switch(this.m_stWebSoket.readyState)
        {
            case WebSocket.CONNECTING:
                Core.Log("net connecting.");
                break;
            case WebSocket.OPEN:
                Core.Log("net connected.");
                break;
            case WebSocket.CLOSING:
                Core.Log("net closing");
                break;
            case WebSocket.CLOSED:
                Core.Log("net closed");
                break;
        }
        this.m_fnConnected = callback;
        this.m_stWebSoket.onopen = this.onOpen.bind(this);
        this.m_stWebSoket.onerror = this.onError.bind(this);
        this.m_stWebSoket.onclose = this.onClose.bind(this);
        this.m_stWebSoket.onmessage = this.onMessage.bind(this);
    }

    private send(message: ArrayBuffer): void
    {
        if(!this.m_stWebSoket || this.m_stWebSoket.readyState != WebSocket.OPEN)
        {
            Core.Log("send message Error! Host: " + Core.ServerHandler.m_sURL,LogLevel.Error);
            return;
        }
        this.m_stWebSoket.send(message);
        // Core.Log("Send MsgLen = " + message.byteLength);
    }

    public sendBody(msgBody: Uint8Array,iMessageID: number,iSubMessageID?: number): void
    {
        if(!this.m_stMsgHeader) this.m_stMsgHeader = new MsgHeader();
        this.m_stMsgHeader.m_iMessageID = iMessageID;
        if(!iSubMessageID)
        {
            this.m_stMsgHeader.m_iSubMessageID = 0;
        }
        else
        {
            this.m_stMsgHeader.m_iSubMessageID = iSubMessageID;
        }
        this.send(this.m_stMsgHeader.Encode(msgBody));
        Core.Log("--send msgID:" + iMessageID);
    }

    private onOpen(): void
    {
        Core.Log("net connect success.");

        switch(this.m_iCurrentNetType)
        {
            case NetType.Auth:
                break;
            case NetType.GateMgr:
                // 请求网关 ip、port
                Core.ServerHandler.ReqGatewayMgr();
                break;
            case NetType.Gate:
                // 跳转游戏主场景

                cc.log("enter Main scene");
                cc.director.loadScene(CoreConfig.GAME_SCENE);
                break;
        }
        if(this.m_fnConnected != null)
        {
            this.m_fnConnected();
        }
    }

    private onClose(): void
    {
        this.m_stWebSoket = null;
        this.m_stMsgHeader = null;
        this.Connect(CoreConfig.PHP_URL,NetType.GateMgr);
    }

    private onError(): void
    {
        Core.Log("net connect error.");
    }

    private onMessage(event: MessageEvent): void
    {
        let bysData: Uint8Array = new Uint8Array(event.data);
        Core.Log("Received MsgLen = " + bysData.byteLength);
        if(bysData.byteLength == 0)
        {
            throw new Error("数据为空！");
        }
        this.m_stMsgHeader.Decode(bysData);
        Core.Log("--received msgID: " + this.m_stMsgHeader.m_iMessageID);
        // if(this.m_stMsgHeader.m_iMessageID == CSProtoID.INF_PLAYER_GAME_DATA
        //     || this.m_stMsgHeader.m_iMessageID == CSProtoID.INF_PLAYER_GLOBAL_DATA)
        // {
        //     this.m_stMsgHeader.m_iMessageID = this.m_stMsgHeader.m_iSubMessageID;
        // }
        let fnCallback: Function = this.m_mapFnCallback.get(this.m_stMsgHeader.m_iMessageID);
        if(fnCallback)
        {
            fnCallback(this.m_stMsgHeader);
        }
    }

    public BindMessage2Function(iMessageID: number,FnCallback: Function): void
    {
        let callback: Function = this.m_mapFnCallback.get(iMessageID);
        if(callback)
        {
            Core.Log("重复注册！MessageID:" + iMessageID.toString());
        }
        else
        {
            this.m_mapFnCallback.set(iMessageID,FnCallback);
        }
    }

}

export enum NetType
{
    Null = 0,
    Auth = 1,
    GateMgr = 2,
    Gate = 3,
}