class BackgroundLayer1 extends Background{
    imgBackgroundLayer1 = [
        './images/3. Background/Layers/3.Fondo 1/D1.png',
        './images/3. Background/Layers/3.Fondo 1/D2.png',
        // './images/3. Background/Layers/3.Fondo 1/D.png'
    ]
    constructor(){
        super().loadImage('./images/3. Background/Layers/3.Fondo 1/D.png'); //this.imgBackgroundLayer1[0]
    }
}