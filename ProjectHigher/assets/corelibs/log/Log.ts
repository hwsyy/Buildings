import Core from "../Core";
import CoreConfig from "../CoreConfig";
import DebugView from "./DebugView";

/**
 * Log
 * 日志系统
 */
export default class Log
{
    private m_stView: DebugView;
    private m_stBtn: cc.Node;

    public m_mapLogs: Map<LogLevel,Array<string>>;
    public m_arrLogDetails: Array<LogDetail>;

    public Init(): void
    {
        this.m_stBtn = Core.RootNode.getChildByName("DebugBtn");

        if(!CoreConfig.DEBUG)
        {
            Core.RootNode.getChildByName("DebugView").active = false;
            this.m_stBtn.active = false;
            return;
        }
        else
        {
            // 获取节点
            this.m_stView = new DebugView(Core.RootNode.getChildByName("DebugView"),this);
            // 绑定触摸事件
            this.m_stBtn.on(cc.Node.EventType.TOUCH_END,this.OnClickBtn.bind(this));
        }
    }

    public Log(info: string,lv?: LogLevel): void
    {
        if(!lv)
        {
            lv = LogLevel.Debug;
        }
        if(!this.m_mapLogs)
        {
            this.m_mapLogs = new Map<LogLevel,Array<string>>();
        }
        if(!this.m_arrLogDetails)
        {
            this.m_arrLogDetails = new Array<LogDetail>();
        }
        if(!this.m_mapLogs.get(lv))
        {
            this.m_mapLogs.set(lv,new Array<string>());
        }
        this.m_arrLogDetails.push(new LogDetail(info,lv));
        this.m_mapLogs.get(lv).push(info);
        if(CoreConfig.DEBUG)
        {
            this.m_stView.UpdateView(this.m_stView.m_iCurrentPage);
        }
        cc.log(info);
    }

    private OnClickBtn(): void
    {
        this.m_stView.Show();
        this.m_stView.UpdateView();
    }
}

export class LogDetail
{
    public info: string;
    public level: LogLevel;
    public constructor(info: string,lv: LogLevel)
    {
        this.info = info;
        this.level = lv;
    }
}

/**
 * 日志等级
 */
export enum LogLevel
{
    Info = 1 << 0,
    Debug = 1 << 1,
    Warning = 1 << 2,
    Origin = 1 << 3,
    Error = 1 << 4,
}