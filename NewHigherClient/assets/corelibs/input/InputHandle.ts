import InputGroup from "./InputGroup";
import ITick from "../interface/ITick";
import IStepLockInput from "../steplock/IStepLockInput";
import InputMessage from "./InputMessage";
import {InfPlayerStepLock,CSProtoID} from "../proto/msg";
import Core from "../Core";
import CoreConfig from "../CoreConfig";
import {TickMode} from "../CoreDefine";

export default class InputHandle implements ITick
{
    private m_arrReceiveInput: Array<InputGroup>;
    private m_stSendInput: InputGroup;
    private m_vReceiveAction: Array<IStepLockInput>;
    private m_vDelayRemove: Array<IStepLockInput>;

    public constructor()
    {
        this.m_arrReceiveInput = new Array<InputGroup>();
        this.m_stSendInput = new InputGroup();
        this.m_vReceiveAction = new Array<IStepLockInput>();
        this.m_vDelayRemove = new Array<IStepLockInput>();

    }

    /**初始化 */
    public Init(): void
    {
        Core.EventMgr.UnbindEvent(CSProtoID.INF_PLAYER_STEP_LOCK,this.FromStream,this);
        Core.EventMgr.BindEvent(CSProtoID.INF_PLAYER_STEP_LOCK,this.FromStream,this);
        this.ClearInput();
        Core.Ticker.AddKeyTick(this);
    }

    /**卸载 */
    public Uninit(): void
    {
        Core.EventMgr.UnbindEvent(CSProtoID.INF_PLAYER_STEP_LOCK,this.FromStream,this);
        Core.Ticker.RemoveKeyTick(this);
        this.ClearInput();
    }

    /**
     * 清空所有残留的输入信息
     */
    public ClearInput(): void
    {
        this.m_arrReceiveInput.length = 0;
        this.m_stSendInput.ClearAllKey();
        this.m_vReceiveAction.length = 0;
        this.m_vDelayRemove.length = 0;
    }


    /**
     * 发送按键的接口
     * @param keyType 按键的类型
     * @param keyValue 按键的值
     */
    public SendKey(keyType: number,keyValue: number): void
    {
        this.m_stSendInput.AddKey(keyType,keyValue);
    }

    /**
     * 注册接收按键的回调函数
     * @param onReceiveCallback 接收按键后的回调函数/类
     */
    public Register(onReceiveCallback: IStepLockInput): void
    {
        if(this.m_vReceiveAction.indexOf(onReceiveCallback) < 0)
        {
            this.m_vReceiveAction.push(onReceiveCallback);
        }
    }


    /**
     * 注销（取消注册）指定的按键回调函数
     * @param onReceiveCallback 接收按键后的回调函数/类
     */
    public Disregister(onReceiveCallback: IStepLockInput): void
    {
        this.m_vDelayRemove.push(onReceiveCallback);
    }




    /**
     * 被Ticker调用的更新操作
     * 
     */
    public Tick(tickCount: number): void
    {
        switch(CoreConfig.TICK_MODE)
        {
            case TickMode.StepLockMode:
                //发送操作
                this.m_stSendInput.ToStream();
                //发完
                this.m_stSendInput.ClearAllKey(); //清空输入
                this.Dispatch(tickCount);
                break;
            case TickMode.StandAlone:
                this.m_stSendInput.KeyTickCount = tickCount;
                this.m_arrReceiveInput.push(this.m_stSendInput);
                this.Dispatch(tickCount);
                this.m_stSendInput.ClearAllKey();
                break;
            default:
                break;
        }
        this.DelayDisregister();

    }


    public GetName(): string
    {
        return "InputHandle";
    }

    /**
     * 调用所有按键监听函数
     * 
     */
    private Dispatch(tickCount: number): void
    {
        while(this.m_arrReceiveInput.length > 0
            && tickCount >= this.m_arrReceiveInput[0].KeyTickCount)
        {
            let stInput: InputGroup = this.m_arrReceiveInput.shift();
            while(stInput.KeyLength > 0)
            {
                let key: InputMessage = stInput.ShiftInput();
                for(let keyAct of this.m_vReceiveAction)
                {
                    if(CoreConfig.TICK_MODE != TickMode.StandAlone)
                    {
                        keyAct.OnKeyReceive(key.InputUserId,key.KeyType,key.KeyValue);
                    }
                    else
                    {
                        keyAct.OnKeyReceive(Core.ServerHandler.m_iUin,key.KeyType,key.KeyValue);
                    }
                }
            }
        }
    }


    /**
     * 清除延迟注销的监听，并清空延迟注销监听的数组
     */
    private DelayDisregister(): void
    {
        while(this.m_vDelayRemove.length > 0)
        {
            let vReceiveAct: IStepLockInput = this.m_vDelayRemove.shift();
            let iLength: number = this.m_vDelayRemove.length;
            let iIndex: number = this.m_vDelayRemove.indexOf(vReceiveAct);
            if(iIndex >= 0 && iLength > 0)
            {
                this.m_vReceiveAction[iIndex] = this.m_vReceiveAction[iLength - 1];
                --this.m_vReceiveAction.length;
            }

        }
    }

    public FromStream(infPS: InfPlayerStepLock): InputGroup
    {
        let stResult: InputGroup = new InputGroup();
        stResult.FromStream(infPS);
        this.m_arrReceiveInput.push(stResult);
        Core.Ticker.TerminalTick = infPS.step;
        return stResult;
    }
}