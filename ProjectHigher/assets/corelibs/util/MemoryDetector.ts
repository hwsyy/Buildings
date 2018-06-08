import Core from "../Core";

const {ccclass} = cc._decorator;
@ccclass
export default class MemoryDetector  
{
    private static m_pInstance: MemoryDetector = new MemoryDetector();

    public static Get(): MemoryDetector
    {
        return MemoryDetector.m_pInstance;
    }

    public constructor() 
    {
        this._inited = false;
    }
    public m_label: cc.Label;
    public _inited = false;
    public showMemoryStatus(): void
    {
        if(cc.sys.isNative)
        {
            return;
        }

        if(this._inited)
        {
            return;
        }

        let _memLabel = null;
        let profiler = cc.profiler;
        profiler.showStats();

        let createMemLabel = function()
        {
            _memLabel = document.createElement('div');
            profiler._fps = document.getElementById('fps');
            profiler._fps.style.height = '100px';

            let style = _memLabel.style;
            style.color = 'rgb(0, 255, 255)';
            style.font = 'bold 12px Helvetica, Arial';
            style.lineHeight = '20px;';
            style.width = '100%';
            profiler._fps.appendChild(_memLabel);
        }
        createMemLabel();

        let afterVisit = function(): void
        {
            let count = 0;
            let totalBytes = 0;
            let locTexrues = cc.textureCache.getAllTextures();

            for(let key in locTexrues)
            {
                let selTexture: any = locTexrues[key];
                count++;
                totalBytes += selTexture.getPixelWidth() * selTexture.getPixelHeight() * 4;
            }

            let locTextureColorsCache = cc.textureCache._textureColorsCache;
            for(let key in locTextureColorsCache)
            {
                let selCanvasColorsArr = locTextureColorsCache[key];
                for(let selCanvasKey in selCanvasColorsArr)
                {
                    let selCanvas = selCanvasColorsArr[selCanvasKey];
                    count++;
                    totalBytes += selCanvas.width * selCanvas.height * 4;
                }
            }
            _memLabel.innerHTML = "  Memory  " + (totalBytes / (1024.0 * 1024.0)).toFixed(2) + " M";
        }
        afterVisit();
        cc.director.on(cc.Director.EVENT_AFTER_VISIT,afterVisit);
        this._inited = true;
    }
}

