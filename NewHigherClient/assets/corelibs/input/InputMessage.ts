export default class InputMessage
{
    private m_iInputUserId: number;
    private m_iKeyType: number;
    private m_iKeyValue: number;
    public get InputUserId(): number
    {
        return this.m_iInputUserId;
    }
    public set InputUserId(id: number)
    {
        this.m_iInputUserId = id;
    }
    public get KeyType(): number
    {
        return this.m_iKeyType;
    }
    public set KeyType(type: number)
    {
        this.m_iKeyType = type;
    }
    public get KeyValue(): number
    {
        return this.m_iKeyValue;
    }
    public set KeyValue(value: number)
    {
        this.m_iKeyValue = value;
    }
}