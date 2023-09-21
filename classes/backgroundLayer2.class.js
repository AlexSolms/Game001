class BackgroundLayer2 extends Background{
    y = 380 - this.height;
    imgBackgroundLayer2 = [
        './images/3. Background/Layers/4.Fondo 2/D1.png',
        './images/3. Background/Layers/4.Fondo 2/D2.png',
        './images/3. Background/Layers/4.Fondo 2/D.png'
    ]
    constructor(i){
        super().loadImage(this.imgBackgroundLayer2[i]); //
    }
}