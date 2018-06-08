/** 
 * 砖块配置
*/

export default class BrickConfigMgr
{
    //[x: string]: any;
    public static readonly Instance: BrickConfigMgr = new BrickConfigMgr();

    private constructor() {}


    public LoadJson(): void
    {
        cc.loader.loadRes("conf/BrickConfigMgr",cc.TextAsset,function(err,res)
        {
            if(!err)
            {

                console.log(res);
                this.m_iHeight = res.m_iHeight;//砖块的高度
                this.m_iWidth = res.m_iWidth;//砖块的宽度

                //**底层楼体左右摇晃的最大角度 */
                this.m_iDownedBrickLeftmax = res.m_iDownedBrickLeftmax * Math.PI / 180;

                //**底层楼体摇晃角频率 */
                this.m_iDownedBrickFrequency = res.m_iDownedBrickFrequency;

                //**底层楼体摇晃的原点 */
                this.m_iDownedBrickBasePointX = res.m_iDownedBrickBasePointX;
                this.m_iDownedBrickBasePointY = res.m_iDownedBrickBasePointY;

                //* 需要更新的砖块默认数值*/
                this.m_iNeedUpdateBrickNUM = res.m_iNeedUpdateBrickNUM;

                //** 下落偏移速度X */
                this.m_iDownSpeedX = res.m_iDownSpeedX;

                //** 下落偏移速度Y */
                this.m_iDownSpeedY = res.m_iDownSpeedY;

                //** 跌落偏移速度X */
                this.m_iFallSpeedX = res.m_iFallSpeedX;

                //** 跌落偏移速度Y */
                this.m_iFallSpeedY = res.m_iFallSpeedY;
            }
            else
            {
                cc.log(err);
            }
        }.bind(this));
    }


    // public m_iHeight: number = data.m_iHeight;//砖块的高度
    // public m_iWidth: number = data.m_iWidth;//砖块的宽度

    // //**底层楼体左右摇晃的最大角度 */
    // public m_iDownedBrickLeftmax: number = data.m_iDownedBrickLeftmax * Math.PI / 180;

    // //**底层楼体摇晃速度 */
    // public m_iDownedBrickSpeed: number = data.m_iDownedBrickSpeed * Math.PI / 180;

    // //**底层楼体摇晃的原点 */
    // public m_iDownedBrickBasePointX: number = data.m_iDownedBrickBasePointX;
    // public m_iDownedBrickBasePointY: number = data.m_iDownedBrickBasePointY;

    // //* 需要更新的砖块默认数值*/
    // public m_iNeedUpdateBrickNUM: number = data.m_iNeedUpdateBrickNUM;


    // public m_iHeight: number = 100;//砖块的高度
    // public m_iWidth: number = 100;//砖块的宽度

    // //**底层楼体左右摇晃的最大角度 */
    // public m_iDownedBrickLeftmax: number = 2 * Math.PI / 180;

    // //**底层楼体摇晃速度 */
    // public m_iDownedBrickSpeed: number = 0.04 * Math.PI / 180;

    // //**底层楼体摇晃的原点 */
    // public m_iDownedBrickBasePointX: number = 480;
    // public m_iDownedBrickBasePointY: number = -100;

    // //* 需要更新的砖块默认数值*/
    // public m_iNeedUpdateBrickNUM: number = 4;

    public m_iHeight: number = 0;//砖块的高度
    public m_iWidth: number = 0;//砖块的宽度

    //**底层楼体左右摇晃的最大角度 */
    public m_iDownedBrickLeftmax: number = 0 * Math.PI / 180;

    //**底层楼体摇晃角频率 */
    public m_iDownedBrickFrequency: number = 0;

    //**底层楼体摇晃的原点 */
    public m_iDownedBrickBasePointX: number = 0;
    public m_iDownedBrickBasePointY: number = 0;

    //* 需要更新的砖块默认数值*/
    public m_iNeedUpdateBrickNUM: number = 0;

    //** 下落偏移速度X */
    public m_iDownSpeedX: number = 0;

    //** 下落偏移速度Y */
    public m_iDownSpeedY: number = 0;

    //** 跌落偏移速度X */
    public m_iFallSpeedX: number = 0;

    //** 跌落偏移速度Y */
    public m_iFallSpeedY: number = 0;

    //** 钩子上的砖块的摆动角度 */
    public m_iBrickAngleOffset = 0.5;


}


