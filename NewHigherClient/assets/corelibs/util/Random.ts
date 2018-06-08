export default class Random
{
    private static m_arrNumbers;
    private m_iCurrentIndex: number = 0;
    private static m_pInstance: Random = new Random();
    private m_iSeedNumber: number;
    private m_iLength: number;
    constructor()
    {

    }
    public Get(): Random
    {
        return Random.m_pInstance;
    }
    public Init(iSeede: number = 19,iLength: number = 1000): void
    {
        cc.log("random.Init");
        Random.m_arrNumbers = new Array<number>(iLength);
        this.m_iSeedNumber = iSeede;
        this.m_iLength = iLength;
        let arrTemp = new Array<number>(iLength);
        while(iLength--)
        {
            arrTemp[iLength] = iLength;
        }
        iLength = this.m_iLength;
        while(iLength--)
        {
            let len = arrTemp.length;
            let num: number = this.SeedeRandom(len);
            let ret = arrTemp[num];
            arrTemp[num] = arrTemp[len - 1];
            arrTemp.length = len - 1;
            Random.m_arrNumbers[iLength] = ret;
        }
        // cc.log("arr:",Random.m_arrNumbers);
    }

    public SetSeedIndex(index: number): void
    {
        this.m_iCurrentIndex = index;
    }


    public GetRandom(): number
    {
        return this.GetRandomByIndex(this.m_iCurrentIndex++);
    }

    public GetLength(): number
    {
        return this.m_iLength;
    }

    public GetRandomByIndex(index: number): number
    {
        return Random.m_arrNumbers[index];
    }

    private SeedeRandom(max: number): number
    {
        max = max || 1;
        this.m_iSeedNumber = (this.m_iSeedNumber * 9301 + 49297) % 233280;
        let rnd = this.m_iSeedNumber / 233280.0;
        return (rnd * max) >> 0;
    }
}
