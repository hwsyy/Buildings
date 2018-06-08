/** 
 * 链子钩子配置
*/

export default class HookConfigMgr
{

    public static readonly Instance: HookConfigMgr = new HookConfigMgr();

    private constructor()
    {
    }



    public LoadJson(): void
    {
        cc.loader.loadRes("conf/HookConfigMgr",cc.TextAsset,function(err,res)
        {
            if(!err)
            {

                console.log(res);
                this.m_iXZero = res.m_iXZero; //链子顶端的基准点X坐标

                this.m_iYZero = res.m_iYZero; //链子顶端的基准点Y坐标
                this.m_iUp_b = res.m_iUp_b; //上短轴
                this.m_iDown_b = res.m_iDown_b; //下短轴
                this.m_iLeftRight_a = res.m_iLeftRight_a; //长轴
                this.m_iSpeed = res.m_iSpeed; //钩子移动速度 也是在钩子上的椭圆的移动速度
                this.m_iXChange = res.m_iXChange;//椭圆中心点的X坐标
                this.m_iYChange = res.m_iYChange;//椭圆中心点的Y坐标

                console.log(this);
            }
            else
            {
                cc.log(err);
            }
        }.bind(this));
    }

    // public m_iXZero: number = data.m_iXZero; //链子顶端的基准点X坐标
    // public m_iYZero: number = data.m_iYZero; //链子顶端的基准点Y坐标

    // public m_iUp_b: number = data.m_iUp_b; //上短轴
    // public m_iDown_b: number = data.m_iDown_b; //下短轴
    // public m_iLeftRight_a: number = data.m_iLeftRight_a; //长轴
    // public m_iSpeed: number = data.m_iSpeed; //钩子移动速度 也是在钩子上的椭圆的移动速度

    // public m_iXChange: number =data.m_iXChange;//椭圆中心点的X坐标
    // public m_iYChange: number =data.m_iYChange;//椭圆中心点的Y坐标

    // public m_iXZero: number = 480; //链子顶端的基准点
    // public m_iYZero: number = 800; //链子顶端的基准点

    // public m_iUp_b: number = 50; //上短轴
    // public m_iDown_b: number = 50; //下短轴
    // public m_iLeftRight_a: number = 200; //长轴
    // public m_iSpeed: number = 1.5; //钩子移动速度 也是在钩子上的椭圆的移动速度

    // public m_iXChange: number = 450;//椭圆中心点的X坐标
    // public m_iYChange: number = 550;//椭圆中心点的Y坐标

    public m_iXZero: number = 0; //链子顶端的基准点
    public m_iYZero: number = 0; //链子顶端的基准点

    public m_iUp_b: number = 0; //上短轴
    public m_iDown_b: number = 0; //下短轴
    public m_iLeftRight_a: number = 0; //长轴
    public m_iSpeed: number = 0; //钩子移动速度 也是在钩子上的椭圆的移动速度

    public m_iXChange: number = 0;//椭圆中心点的X坐标
    public m_iYChange: number = 0;//椭圆中心点的Y坐标

}


