import InputMessage from './InputMessage';
import {PlayerOption,InfPlayerStepLock} from '../proto/msg';
import Core from '../Core';
import {InputConfig} from './InputConfig';


export default class InputGroup
{
    private m_arrKeyInput: Array<InputMessage>;
    private m_iKeyTickCount: number;

    public constructor()
    {
        this.m_arrKeyInput = new Array<InputMessage>();
    }

    /**
     * 增加需要发送的按键
     * @param type 按键类型
     * @param value 按键的值
     */
    public AddKey(type: number,value: number): void
    {
        let stInputMsg: InputMessage = new InputMessage();
        stInputMsg.KeyType = type;
        stInputMsg.KeyValue = value;
        this.m_arrKeyInput.push(stInputMsg);
    }
    /*
    public get KeyList(): Array<InputMessage>
    {
        return this.m_arrKeyInput;
    }
    */

    /**
     * 获取需要处理的按键的数量
     */
    public get KeyLength(): number
    {
        return this.m_arrKeyInput.length;
    }

    /**
     * 获取并弹出需要处理的按键数组的第一个按键
     */
    public ShiftInput(): InputMessage
    {
        return this.m_arrKeyInput.shift();
    }

    /**
     * 获取接收到的该按键组的所属的帧(tickCount)
     */
    public get KeyTickCount(): number
    {
        return this.m_iKeyTickCount;
    }

    public set KeyTickCount(tickCount: number)
    {
        this.m_iKeyTickCount = tickCount;
    }

    /**
     * 清除该按键组的所有按键
     */
    public ClearAllKey(): void
    {
        this.m_arrKeyInput.length = 0;
        this.m_iKeyTickCount = 0;
    }

    /**
     * 将数据转化成可发送的结构(序列化) 
     * 
     */
    public ToStream(): void
    {
        if(this.m_arrKeyInput.length <= 0)
        {
            return;
        }
        let arrOption: Array<PlayerOption> = [];
        for(let keyMsg of this.m_arrKeyInput)
        {
            let sendKey: PlayerOption = new PlayerOption();
            sendKey.uin = Core.ServerHandler.m_iUin;
            sendKey.option = (keyMsg.KeyValue << InputConfig.TYPE_DIGIT) | keyMsg.KeyType;
            arrOption.push(sendKey);
        }
        Core.ServerHandler.PlayerStepLock(arrOption);
    }



    /**
     * 接收数据并处理（反序列化）（参数未确定）
     */
    public FromStream(infPS: InfPlayerStepLock): void
    {
        //需要把this.m_iKeyCount设置好
        this.m_iKeyTickCount = infPS.step;
        for(let i = 0;i < infPS.optionList.length;i++)
        {
            let recvInputMsg: InputMessage = new InputMessage();
            recvInputMsg.InputUserId = infPS.optionList[i].uin;
            recvInputMsg.KeyValue = infPS.optionList[i].option >> InputConfig.TYPE_DIGIT;
            recvInputMsg.KeyType = (infPS.optionList[i].option & ((1 << InputConfig.TYPE_DIGIT) - 1));
            this.m_arrKeyInput.push(recvInputMsg);
        }
    }


}
