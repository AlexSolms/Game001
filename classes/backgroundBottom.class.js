class BackgroundBottom extends Background{
    y = 480 - this.height;
    imgBackgroundBottom = [
        './images/3. Background/Layers/2. Floor/D1.png',
        './images/3. Background/Layers/2. Floor/D2.png',
        './images/3. Background/Layers/2. Floor/D.png'
    ]
    constructor(i){
        super().loadImage(this.imgBackgroundBottom[i]); //
    }
}