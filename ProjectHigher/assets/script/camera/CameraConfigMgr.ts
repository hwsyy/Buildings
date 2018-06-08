/** 
 * 相机配置
*/

export default class CameraConfigMgr
{

    public static readonly Instance: CameraConfigMgr = new CameraConfigMgr();

    private constructor() {}

    public LoadJson(): void
    {
        cc.loader.loadRes("conf/CameraConfigMgr",cc.TextAsset,function(err,res)
        {
            if(!err)
            {

                console.log(res);
                this.m_iSpeedY = res.m_iSpeedY;//相机移动速度

            }
            else
            {
                cc.log(err);
            }
        }.bind(this));
    }

    // public m_iSpeedY: number = data.m_iSpeedY;//相机移动速度

    // public m_iSpeedY: number = 2;//相机移动速度

    public m_iSpeedY: number = 0;//相机移动速度

}