class Coins extends MovableObject {
    width = 30;
    height = 30;

    coinImgs = [
        './images/4. Marcadores/1. Coins/1.png',
        './images/4. Marcadores/1. Coins/2.png',
        './images/4. Marcadores/1. Coins/3.png',
        './images/4. Marcadores/1. Coins/4.png'
    ]

    constructor(x, y) {
        super().loadImage('./images/4. Marcadores/1. Coins/3.png'); //
        super.loadImages(this.coinImgs);
        this.animateCoin(this.coinImgs);
        this.x = x;
        this.y = y;
    }

    animateCoin(imgJson) {
        this.imgSet = imgJson;
        setInterval(() => {
            super.swimAnimation(this.imgSet);
        }, 5000/43);
    }
}