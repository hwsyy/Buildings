import CoreConfig from "../CoreConfig";
import Log,{LogLevel,LogDetail} from "./Log";

/** 
 * DebugView
 * 用于设置DebugView以及更新DebugView视图
*/
export default class DebugView
{
    private static WHITE_COLOR: cc.Color = cc.color(255,255,255);
    private static BLUE_COLOR: cc.Color = cc.color(0,0,255);
    private static GREEN_COLOR: cc.Color = cc.color(0,255,0);
    private static RED_COLOR: cc.Color = cc.color(255,0,0);
    private static GREY_COLOR: cc.Color = cc.color(128,128,128);
    private static GGREY_COLOR: cc.Color = cc.color(96,96,96);

    private m_pLog: Log;

    private m_stNode: cc.Node;

    private m_stLogList: cc.Node;

    private m_stLog: cc.Node;

    public m_iCurrentPage: LogLevel;
    public m_iCurrentY: LogLevel;

    private m_btnInfo: cc.Node;
    private m_btnDebug: cc.Node;
    private m_btnWarning: cc.Node;
    private m_btnError: cc.Node;

    private m_btnClear: cc.Node;
    private m_btnHide: cc.Node;

    public constructor(stNode: cc.Node,log: Log)
    {
        // 绑定Log
        this.m_pLog = log;

        // 绑定节点
        this.m_stNode = stNode;

        // 设置调试视图
        this.m_stNode.width = CoreConfig.GAME_WIDTH;
        this.m_stNode.height = 0.75 * CoreConfig.GAME_HEIGHT;

        // 隐藏
        this.Hide();

        // 初始化
        this.Init();
    }

    private Init(): void
    {
        // set bar
        let bar: cc.Node = this.m_stNode.getChildByName("Bar");
        bar.scale = this.m_stNode.width / bar.width;
        bar.y = this.m_stNode.height - bar.height * bar.scale;
        this.m_btnInfo = bar.getChildByName("Info");
        this.m_btnDebug = bar.getChildByName("Debug");
        this.m_btnWarning = bar.getChildByName("Warning");
        this.m_btnError = bar.getChildByName("Error");
        this.m_btnClear = bar.getChildByName("Clear");
        this.m_btnHide = bar.getChildByName("Hide");

        // bar btn bind event
        this.m_btnInfo.on(cc.Node.EventType.TOUCH_END,this.OnClickInfo,this);
        this.m_btnDebug.on(cc.Node.EventType.TOUCH_END,this.OnClickDebug,this);
        this.m_btnWarning.on(cc.Node.EventType.TOUCH_END,this.OnClickWarning,this);
        this.m_btnError.on(cc.Node.EventType.TOUCH_END,this.OnClickError,this);
        this.m_btnClear.on(cc.Node.EventType.TOUCH_END,this.OnClickClear,this);
        this.m_btnHide.on(cc.Node.EventType.TOUCH_END,this.OnClickHide,this);

        // set window
        let win: cc.Node = this.m_stNode.getChildByName("Win");
        let view: cc.Node = win.getChildByName("View");
        view.width = win.width = this.m_stNode.width;
        view.height = win.height = this.m_stNode.height - bar.height * bar.scale;

        // set loglist
        this.m_stLogList = view.getChildByName("LogList");
        this.m_stLogList.width = view.width - 20 * 2;
        this.m_stLogList.height = 0;
        this.m_stLogList.x = 20;
        this.m_stLogList.y = 20;

        // get&set log node
        this.m_stLog = this.m_stLogList.getChildByName("Log");
        this.m_stLog.width = this.m_stLogList.width;
        if(this.m_stLog.parent)
        {
            this.m_stLog.parent.removeChild(this.m_stLog,false);
        }
    }

    public UpdateView(lv?: LogLevel): void
    {
        if(lv == undefined || lv == null)
        {
            lv = LogLevel.Info;
        }

        if(lv != this.m_iCurrentPage)
        {
            this.m_stLogList.removeAllChildren();
            this.m_iCurrentY = 0;
            if(lv == LogLevel.Info)
            {
                let showList: Array<LogDetail> = this.m_pLog.m_arrLogDetails;
                if(showList)
                {
                    for(let i: number = 0;i < showList.length;i++)
                    {
                        let log: cc.Node = cc.instantiate(this.m_stLog);
                        this.SetInfo(log,i,showList[i].info,showList[i].level);
                        this.m_stLogList.addChild(log);
                    }
                }
            }
            else
            {
                let showList: Array<string> = this.m_pLog.m_mapLogs.get(lv);
                if(showList)
                {
                    for(let i: number = 0;i < showList.length;i++)
                    {
                        let log: cc.Node = cc.instantiate(this.m_stLog);
                        this.SetInfo(log,i,showList[i],lv);
                        this.m_stLogList.addChild(log);
                    }
                }
            }
            this.m_iCurrentPage = lv;
        }
        else
        {
            if(lv == LogLevel.Info)
            {
                let showList: Array<LogDetail> = this.m_pLog.m_arrLogDetails;
                if(showList)
                {
                    for(let i: number = this.m_stLogList.childrenCount;i < showList.length;i++)
                    {
                        let log: cc.Node = cc.instantiate(this.m_stLog);
                        this.SetInfo(log,i,showList[i].info,showList[i].level);
                        this.m_stLogList.addChild(log);
                    }
                }
            }
            else
            {
                let showList: Array<string> = this.m_pLog.m_mapLogs.get(lv);
                if(showList)
                {
                    for(let i: number = this.m_stLogList.childrenCount;i < showList.length;i++)
                    {
                        let log: cc.Node = cc.instantiate(this.m_stLog);
                        this.SetInfo(log,i,showList[i],lv);
                        this.m_stLogList.addChild(log);
                    }
                }
            }
        }
    }

    private OnClickInfo(): void
    {
        this.UpdateView();
    }
    private OnClickDebug(): void
    {
        this.UpdateView(LogLevel.Debug);
    }
    private OnClickWarning(): void
    {
        this.UpdateView(LogLevel.Warning);
    }
    private OnClickError(): void
    {
        this.UpdateView(LogLevel.Error);
    }

    private OnClickClear(): void
    {
        this.m_pLog.m_mapLogs.clear();
        this.m_pLog.m_arrLogDetails.length = 0;
        this.m_stLogList.removeAllChildren();
        this.m_iCurrentY = 0;
        this.UpdateView(this.m_iCurrentPage);
    }

    private OnClickHide(): void
    {
        this.Hide();
    }

    public Show(): void
    {
        this.m_stNode.active = true;
    }

    private Hide(): void
    {
        this.m_stNode.active = false;
    }

    private SetInfo(log: cc.Node,index: number,info: string,lv: LogLevel): void
    {
        // 设置背景颜色
        let bg: cc.Node = log.getChildByName("Bg");
        bg.color = (index % 2 == 0) ? DebugView.GGREY_COLOR : DebugView.GREY_COLOR;
        bg.width = log.width;
        // 设置字体颜色
        let text: cc.Node = bg.getChildByName("Text");
        text.width = log.width;

        let label: cc.Label = text.getComponent(cc.Label);
        label.string = info;

        // 更改位置
        log.y = this.m_iCurrentY;
        this.m_iCurrentY -= text.height;
        this.m_stLogList.height = -this.m_iCurrentY;

        switch(lv)
        {
            case LogLevel.Warning:
                text.color = DebugView.GREEN_COLOR;
                break;
            case LogLevel.Error:
                text.color = DebugView.RED_COLOR;
                break;
            default:
                text.color = DebugView.WHITE_COLOR;
                break;
        }
    }
}