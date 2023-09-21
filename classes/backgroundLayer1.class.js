class BackgroundLayer1 extends Background {
    y = 500 - this.height;

    imgBackgroundLayer1 = [
        './images/3. Background/Layers/3.Fondo 1/D1.png',
        './images/3. Background/Layers/3.Fondo 1/D2.png',
        './images/3. Background/Layers/3.Fondo 1/D.png'
    ]
    constructor(i) {
        super().loadImage(this.imgBackgroundLayer1[i]); //
    }
}