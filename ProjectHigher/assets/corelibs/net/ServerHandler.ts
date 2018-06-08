import NetMgr,{NetType} from "../../corelibs/net/NetMgr";
import {MsgHeader} from "../../corelibs/net/MsgHeader";
import Core from "../Core";
import {CSProtoID,ReqPlayerCreateTeam,ReqPlayerJoinTeam,ReqPlayerStartGame,InfPlayerStartGame,ReqPlayerLogin,RspPlayerLogin,ReqPlayerGameData,InfPlayerGameData,ReqPlayerGlobalData,InfPlayerGlobalData,RspPlayerTeamAction,ReqPlayerLeaveTeam,InfPlayerTeamAction,ReqPlayerStepLock,PlayerOption,InfPlayerStepLock,InfPlayerMatch,ReqPing,RspPing,ReqPlayerToGatewayMgr,RspPlayerToGatewayMgr,ReqPlayerEndGame,InfPlayerEndGame,InfPlayerMatchSuccess,ReqPlayerReady,ReqPlayerChangeSeat,ReqRemovePlayer,ReqPlayerMatch,OperationID,ReqPlayerLeaveTable} from "../proto/msg";
import CoreConfig from "../CoreConfig";
import {UserInfo} from "../sdk/wxgame/SdkObject";

export default class ServerHandler
{
    private m_pNetMgr: NetMgr;

    // 计时脚本
    private m_pComponent: cc.Component;

    //Auth
    private m_bIsAuth: boolean;


    // Gate Info
    public m_sURL: string;

    // Packge Head Info
    public m_iUin: number = 1000000 + ((Math.random() * 1000000) >> 0);
    public m_userInfo: UserInfo;
    public m_sSesskey: string = "longxianglongxianglongxiang";
    public m_iGameId: number;
    public m_iGroupId: number;
    public m_iSeqId: number;

    public constructor() 
    {
    }

    // 初始化
    public Init(): void
    {
        this.m_pComponent = Core.RootNode.addComponent(cc.Component);
        this.m_pComponent.name = "Net Tick";

        this.m_pNetMgr = Core.NetMgr;

        this.m_iGameId = CoreConfig.GAME_ID;
        this.m_iGroupId = CoreConfig.GROUP_ID;
        this.m_iSeqId = 0;
    }

    // 注册函数绑定
    public Register(): void
    {
        this.m_pNetMgr.BindMessage2Function(CSProtoID.RSP_PLAYER_TO_GATEWAYMGR,this.OnRspPlayerToGatewayMgr.bind(this));
        this.m_pNetMgr.BindMessage2Function(CSProtoID.RSP_PLAYER_LOGIN,this.OnRspPlayerLogin.bind(this));
        this.m_pNetMgr.BindMessage2Function(CSProtoID.RSP_PLAYER_TEAM_ACTION,this.OnRspPlayerTeamAction.bind(this));
        this.m_pNetMgr.BindMessage2Function(CSProtoID.INF_PLAYER_TEAM_ACTION,this.OnInfPlayerTeamAction.bind(this));
        this.m_pNetMgr.BindMessage2Function(CSProtoID.INF_PLAYER_START_GAME,this.OnInfPlayerStartGame.bind(this));
        this.m_pNetMgr.BindMessage2Function(CSProtoID.INF_PLAYER_END_GAME,this.OnInfPlayerEndGame.bind(this));
        this.m_pNetMgr.BindMessage2Function(CSProtoID.INF_PLAYER_STEP_LOCK,this.OnInfPlayerStepLock.bind(this));
        this.m_pNetMgr.BindMessage2Function(CSProtoID.INF_PLAYER_MATCH,this.OnInfPlayerMatch.bind(this));
        this.m_pNetMgr.BindMessage2Function(CSProtoID.INF_PLAYER_MATCH_SUCCESS,this.OnInfPlayerMatchSuccess.bind(this));
        this.m_pNetMgr.BindMessage2Function(CSProtoID.RSP_PING,this.OnRspPing.bind(this));
        this.m_pNetMgr.BindMessage2Function(CSProtoID.INF_PLAYER_GLOBAL_DATA,this.OnInfPlayerGlobalData.bind(this));
        this.m_pNetMgr.BindMessage2Function(CSProtoID.INF_PLAYER_GAME_DATA,this.OnInfPlayerGameData.bind(this));
    }

    private Emit(iMessageID: number,msg: any): void
    {
        Core.EventMgr.Emit(iMessageID,msg);
    }

    // int32 to string for ip
    public NumberToIp(iIp: number): string
    {
        let sIp: string = "";
        if(iIp <= 0)
        {
            iIp = iIp >>> 0;
        }
        for(let i: number = 3;i >= 0;i--)
        {
            let ip: number = (iIp << (8 * i)) >>> 24;
            sIp += ip.toString();
            if(i != 0)
            {
                sIp += ".";
            }
        }
        return sIp;
    }

    // req gateway manager
    public ReqGatewayMgr(): void
    {
        if(Core.NetMgr.m_iCurrentNetType == NetType.GateMgr)
        {
            let req: ReqPlayerToGatewayMgr = ReqPlayerToGatewayMgr.create();
            let buff: Uint8Array = ReqPlayerToGatewayMgr.encode(req).finish();
            Core.NetMgr.sendBody(buff,CSProtoID.REQ_PLAYER_TO_GATEWAYMGR);
            this.m_pComponent.scheduleOnce(this.ReqGatewayMgr.bind(this),5);
        }
    }
    private OnRspPlayerToGatewayMgr(msgHeader: MsgHeader): void
    {
        let body: Uint8Array = msgHeader.m_stBody;
        let rsp: RspPlayerToGatewayMgr = RspPlayerToGatewayMgr.decode(body);
        cc.log("Gateway url:",rsp.url);
        Core.ServerHandler.m_sURL = rsp.url;
        // connet to gateway
        Core.NetMgr.Connect(Core.ServerHandler.m_sURL,NetType.Gate);
    }


    // 玩家登录
    public Login(): void
    {
        let req: ReqPlayerLogin = ReqPlayerLogin.create();
        let buff: Uint8Array = ReqPlayerLogin.encode(req).finish();
        Core.NetMgr.sendBody(buff,CSProtoID.REQ_PLAYER_LOGIN);
    }
    private OnRspPlayerLogin(msgHeader: MsgHeader): void
    {
        let body: Uint8Array = msgHeader.m_stBody;
        let rsp: RspPlayerLogin = RspPlayerLogin.decode(body);
        this.Emit(msgHeader.m_iMessageID,rsp);
        this.m_pComponent.schedule(this.HeartBeat,10);
    }

    // 心跳
    public HeartBeat(): void
    {
        if(Core.NetMgr.m_iCurrentNetType == NetType.Gate)
        {
            let buff: Uint8Array = new Uint8Array(0);
            Core.NetMgr.sendBody(buff,CSProtoID.REQ_HEARTBEAT);
        }
    }

    // 创建队伍
    public CreateTeam(tSize: number): void
    {
        let req: ReqPlayerCreateTeam = ReqPlayerCreateTeam.create();
        req.teamSize = tSize;
        let buff: Uint8Array = ReqPlayerCreateTeam.encode(req).finish();
        Core.NetMgr.sendBody(buff,CSProtoID.REQ_PLAYER_CREATE_TEAM);
    }

    // 加入队伍 & 离开队伍
    public JoinTeam(iTeamId: number): void
    {
        let req: ReqPlayerJoinTeam = ReqPlayerJoinTeam.create();
        req.teamID = iTeamId;
        let buff: Uint8Array = ReqPlayerJoinTeam.encode(req).finish();
        Core.NetMgr.sendBody(buff,CSProtoID.REQ_PLAYER_JOIN_TEAM);
    }
    public LeaveTeam(iTeamId: number): void
    {
        let req: ReqPlayerLeaveTeam = ReqPlayerLeaveTeam.create();
        req.teamID = iTeamId;
        let buff: Uint8Array = ReqPlayerLeaveTeam.encode(req).finish();
        Core.NetMgr.sendBody(buff,CSProtoID.REQ_PLAYER_LEAVE_TEAM);
    }

    /**准备或取消准备 */
    public ChangeReady(readyType: OperationID): void
    {
        let req: ReqPlayerReady = ReqPlayerReady.create();
        req.operation = readyType;
        let buff: Uint8Array = ReqPlayerReady.encode(req).finish();
        Core.NetMgr.sendBody(buff,CSProtoID.REQ_PLAYER_READY);
    }

    /**换位置 */
    public ChangeSeat(SeatId: number): void
    {
        let req: ReqPlayerChangeSeat = ReqPlayerChangeSeat.create();
        req.targetSeat = SeatId;
        let buff: Uint8Array = ReqPlayerChangeSeat.encode(req).finish();
        Core.NetMgr.sendBody(buff,CSProtoID.REQ_PLAYER_CHANGE_SEAT);
    }

    /**踢人 */
    public RemovePlayer(targetSeatId: number): void
    {
        let req: ReqRemovePlayer = ReqRemovePlayer.create();
        req.targetSeat = targetSeatId;
        let buff: Uint8Array = ReqRemovePlayer.encode(req).finish();
        Core.NetMgr.sendBody(buff,CSProtoID.REQ_REMOVE_PLAYER);
    }

    private OnRspPlayerTeamAction(msgHeader: MsgHeader): void
    {
        let body: Uint8Array = msgHeader.m_stBody;
        let rsp: RspPlayerTeamAction = RspPlayerTeamAction.decode(body);
        this.Emit(msgHeader.m_iMessageID,rsp);
    }
    private OnInfPlayerTeamAction(msgHeader: MsgHeader): void
    {
        let body: Uint8Array = msgHeader.m_stBody;
        let inf: InfPlayerTeamAction = InfPlayerTeamAction.decode(body);
        this.Emit(msgHeader.m_iMessageID,inf);
    }

    // 开始游戏
    public StartGame(): void
    {
        let req: ReqPlayerStartGame = ReqPlayerStartGame.create();
        let buff: Uint8Array = ReqPlayerStartGame.encode(req).finish();
        Core.NetMgr.sendBody(buff,CSProtoID.REQ_PLAYER_START_GAME);
    }
    private OnInfPlayerStartGame(msgHeader: MsgHeader): void
    {
        let body: Uint8Array = msgHeader.m_stBody;
        let inf: InfPlayerStartGame = InfPlayerStartGame.decode(body);
        this.Emit(msgHeader.m_iMessageID,inf);
    }

    // 游戏结束
    public EndGame(iRank: number): void
    {
        let req: ReqPlayerEndGame = ReqPlayerEndGame.create();
        req.rank = iRank;
        let buff: Uint8Array = ReqPlayerEndGame.encode(req).finish();
        Core.NetMgr.sendBody(buff,CSProtoID.REQ_PLAYER_END_GAME);
    }
    private OnInfPlayerEndGame(msgHeader: MsgHeader): void
    {
        let body: Uint8Array = msgHeader.m_stBody;
        let inf: InfPlayerEndGame = InfPlayerEndGame.decode(body);
        this.Emit(msgHeader.m_iMessageID,inf);
    }

    // 匹配
    public Match(iType: number): void
    {
        let req: ReqPlayerMatch = ReqPlayerMatch.create();
        req.operation = OperationID.ENTRY_MATCH;
        req.type = iType;
        let buff: Uint8Array = ReqPlayerMatch.encode(req).finish();
        Core.NetMgr.sendBody(buff,CSProtoID.REQ_PLAYER_MATCH);
    }
    public CancelMatch(iType: number): void
    {
        let req: ReqPlayerMatch = ReqPlayerMatch.create();
        req.operation = OperationID.CANCEL_MATCH;
        req.type = iType;
        let buff: Uint8Array = ReqPlayerMatch.encode(req).finish();
        Core.NetMgr.sendBody(buff,CSProtoID.REQ_PLAYER_MATCH);
    }
    private OnInfPlayerMatch(msgHeader: MsgHeader): void
    {
        let body: Uint8Array = msgHeader.m_stBody;
        let inf: InfPlayerMatch = InfPlayerMatch.decode(body);
        this.Emit(msgHeader.m_iMessageID,inf);
    }
    private OnInfPlayerMatchSuccess(msgHeader: MsgHeader): void
    {
        let body: Uint8Array = msgHeader.m_stBody;
        let inf: InfPlayerMatchSuccess = InfPlayerMatchSuccess.decode(body);
        this.Emit(msgHeader.m_iMessageID,inf);
    }

    //离开
    public LeaveTable(): void
    {
        let req: ReqPlayerLeaveTable = ReqPlayerLeaveTable.create();
        let buff: Uint8Array = ReqPlayerLeaveTable.encode(req).finish();
        Core.NetMgr.sendBody(buff,CSProtoID.REQ_LEAVE_TABLE);
    }

    // 玩家游戏内操作：通用协议，里面分子协议
    public PlayerGameData(iSubMsgId: number,subMsg: Uint8Array): void
    {
        Core.NetMgr.sendBody(subMsg,CSProtoID.REQ_PLAYER_GAME_DATA,iSubMsgId);
    }
    public OnInfPlayerGameData(msgHeader: MsgHeader): void
    {
        this.Emit(msgHeader.m_iSubMessageID,msgHeader.m_stBody);
    }

    // 玩家游戏外的操作：通用协议，里面分子协议
    public PlayerGlobalData(iSubMsgId: number,subMsg: Uint8Array): void
    {
        Core.NetMgr.sendBody(subMsg,CSProtoID.REQ_PLAYER_GLOBAL_DATA,iSubMsgId);
    }
    public OnInfPlayerGlobalData(msgHeader: MsgHeader): void
    {
        this.Emit(msgHeader.m_iSubMessageID,msgHeader.m_stBody);
    }

    // 玩家帧同步操作
    public PlayerStepLock(arrOption: Array<PlayerOption>): void
    {
        let req: ReqPlayerStepLock = ReqPlayerStepLock.create();
        req.optionList = arrOption;
        let buff: Uint8Array = ReqPlayerStepLock.encode(req).finish();
        Core.NetMgr.sendBody(buff,CSProtoID.REQ_PLAYER_STEP_LOCK);
        // this.PlayerGameData(CSProtoID.REQ_PLAYER_STEP_LOCK,buff);
    }
    private OnInfPlayerStepLock(msgHeader: MsgHeader): void
    {
        let body: Uint8Array = msgHeader.m_stBody;
        let inf: InfPlayerStepLock = InfPlayerStepLock.decode(body)
        this.Emit(msgHeader.m_iMessageID,inf);
    }

    // ping
    public Ping(): void
    {
        let req: ReqPing = ReqPing.create();
        req.timestamp = (new Date()).getTime();
        let buff: Uint8Array = ReqPing.encode(req).finish();
        Core.NetMgr.sendBody(buff,CSProtoID.REQ_PING);
    }
    private OnRspPing(msgHeader: MsgHeader): void
    {
        let body: Uint8Array = msgHeader.m_stBody;
        let rsp: RspPing = RspPing.decode(body);
        Core.Log("----ping: " + Math.abs((new Date()).getTime() - Number(rsp.timestamp)) + " ms");
        this.Emit(msgHeader.m_iMessageID,rsp);
    }

    public get IsAuth(): boolean {return this.m_bIsAuth;}
    public set IsAuth(value: boolean) {this.m_bIsAuth;}

    //public get NetMgr(): NetMgr {return this.m_pNetMgr;}
}