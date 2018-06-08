import ISdkHandle,{} from "../../interface/sdk/ISdkHandle";
import ISdkCallback from "../../interface/sdk/ISdkCallback";
import IShareAppMsg from "../../interface/sdk/IShareAppMsg";

declare var mqq;
declare var window;

export default class WanbaSdkHandle implements ISdkHandle
{
    private m_sOpenid: string;
    private m_sOpenKey: string;

    public constructor()
    {

    }

    public Init(): void
    {

    }

    private HasSdk(): boolean
    {
        return typeof (mqq) != "undefined";
    }

    public Login(sdkCallback?: ISdkCallback): void
    {
        if(this.HasSdk())
        {
            if(!sdkCallback)
            {
                sdkCallback = {};
            }
            if(window && window.getOpenKey)
            {
                let self = this;
                window.getOpenKey(function(res)
                {
                    if(res.code == 0)
                    {
                        self.m_sOpenid = res.data.openid;
                        self.m_sOpenKey = res.data.openkey;
                        if(sdkCallback.OnSuccess)
                        {
                            sdkCallback.OnSuccess();
                        }
                    }
                    else
                    {
                        if(sdkCallback.OnFail)
                        {
                            console.log("Login Error code: " + res.code);
                            sdkCallback.OnFail();
                        }
                    }
                    if(sdkCallback.OnComplete)
                    {
                        sdkCallback.OnComplete();
                    }
                });
            }
        }
    }
    public Share(appMsg: IShareAppMsg,sdkCallback?: ISdkCallback): void
    {
        if(this.HasSdk())
        {
            let stShareObj: any = [];
            appMsg.title && (stShareObj.title = appMsg.title);
            appMsg.desc && (stShareObj.desc = appMsg.desc);
            appMsg.shareType && (stShareObj.share_type = appMsg.shareType);
            appMsg.shareUrl && (stShareObj.share_url = appMsg.shareUrl);
            appMsg.imageUrl && (stShareObj.image_url = appMsg.imageUrl);
            stShareObj.back = true;
            let self = this;
            sdkCallback || (sdkCallback = {});
            mqq.ui.shareMessage(stShareObj,function(result)
            {
                self.ShareCallback(result,sdkCallback);
            })
        }
    }

    public BindOnPay(sdkCallback: ISdkCallback): void
    {
        if(this.HasSdk())
        {
            window.__paySuccess = function()
            {
                sdkCallback.OnSuccess && sdkCallback.OnSuccess();
                sdkCallback.OnComplete && sdkCallback.OnComplete();
            }
            window.__payError = function()
            {
                sdkCallback.OnFail && sdkCallback.OnFail();
                sdkCallback.OnComplete && sdkCallback.OnComplete();
            }
            window.__payClose = function()
            {
                sdkCallback.OnFail && sdkCallback.OnFail();
                sdkCallback.OnComplete && sdkCallback.OnComplete();
            }
        }
    }


    public Pay(price: number): void
    {
        if(this.HasSdk())
        {
            let stPayObj: any = [];
            stPayObj.defaultScore = price;
            stPayObj.appid = window.OPEN_DATA.appid;
            window.popPayTips(stPayObj);
        }
    }
    public Vibrate(vbType: VibrateType,sdkCallback?: ISdkCallback): void
    {

    }
    private SetDefaultShare(info: IShareAppMsg,sdkCallback?: ISdkCallback): void
    {
        if(this.HasSdk())
        {
            let self = this;
            sdkCallback || (sdkCallback = {});
            mqq.ui.setOnShareHandle(function(type)
            {
                let stDefaultShareObj: any = [];
                info.title && (stDefaultShareObj.title = info.title);
                info.desc && (stDefaultShareObj.desc = info.title);
                stDefaultShareObj.share_type = type;
                info.shareUrl && (stDefaultShareObj.share_url = info.shareUrl);
                info.imageUrl && (stDefaultShareObj.image_url = info.imageUrl);
                stDefaultShareObj.back = true;
            },function(result)
                {
                    self.ShareCallback(result,sdkCallback);
                });
        }

    }

    private ShareCallback(res: number,sdkCallback?: ISdkCallback): void
    {
        if(this.HasSdk())
        {
            if(sdkCallback)
            {
                if(res == 0)
                {
                    sdkCallback.OnSuccess && sdkCallback.OnSuccess();
                }
                else
                {
                    sdkCallback.OnFail && sdkCallback.OnFail();
                }
                sdkCallback.OnComplete && sdkCallback.OnComplete();
            }
        }
    }
}