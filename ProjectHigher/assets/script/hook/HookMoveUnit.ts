import Hook from "./Hook";
import HookManager from "./HookManager";
import SingleApp from "../single/SingleApp"
/** 
 * 控制钩子的移动
*/

export default class HookMoveUnit
{

    private host: Hook = null;

    constructor(host: Hook)
    {
        this.host = host;
    }

    Update(dt: number)
    {

        this.host.m_iLastX = this.host.m_iX;
        this.host.m_iLastY = this.host.m_iY;
        this.host.m_iT += this.host.m_iSpeed;
        this.host.m_iT %= 360;
        this.host.m_iX = this.host.m_iLeftRight_a * Math.cos(Math.PI * this.host.m_iT / 180.0);
        if(this.host.m_iT <= 180)
            this.host.m_iY = this.host.m_iUp_b * Math.sin(Math.PI * this.host.m_iT / 180.0);
        else
            this.host.m_iY = this.host.m_iDown_b * Math.sin(Math.PI * this.host.m_iT / 180.0);

        this.host.m_iX = this.host.m_iX + this.host.m_stHookManager.m_iXChange;
        this.host.m_iY = this.host.m_iY + this.host.m_stHookManager.m_iYChange;

        console.log("x: ",this.host.m_iX);

    };
}
