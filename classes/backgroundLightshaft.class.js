class BackgroundLightshaft extends Background{
    imgBackgroundLightshaft = [
        './images/3. Background/Light/1.png',
        './images/3. Background/Light/2.png',
        './images/3. Background/Light/full.png'
    ]
    constructor(i){
        super().loadImage(this.imgBackgroundLightshaft[i]);
    }
}