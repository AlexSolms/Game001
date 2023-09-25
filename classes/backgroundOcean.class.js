class BackgroundOcean extends Background {
    height = 400;
    y = 0;
    imgBackgroundOcean = [
        './images/3. Background/Layers/5. Water/D1.png',
        './images/3. Background/Layers/5. Water/D2.png',
        './images/3. Background/Layers/5. Water/D.png'
    ]

    constructor(i,x) {
        super().loadImage(i);
        
        this.x = x
    }
}