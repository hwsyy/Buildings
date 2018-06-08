

export default class ShareApplication
{
    constructor() {}

    /** 画布缩放比例 */
    public m_CanvasScale: number;
    /** 画布横移像素 */
    public m_CanvasOffsetX: number;
    /** 游戏明曾标识 */
    public Name: string;
    /**
     *砖块类型
    *
    * @type {number} 取值范围是 0-3
    * @memberof ShareApplication
    */
    public m_iBrickType: number = 0;

    Init()
    {
        this.m_iBrickType = Math.floor((Math.random() * 300)) % 3 + 1;
    }

    Update(dt: number)
    {

    }

    LateUpdate(dt: number)
    {

    }
}