class PoisonBottle extends MovableObject {
    width = 30;
    height = 30;
    poisonBottle = [
        './images/4. Marcadores/Posión/Animada/1.png',
        './images/4. Marcadores/Posión/Animada/2.png',
        './images/4. Marcadores/Posión/Animada/3.png',
        './images/4. Marcadores/Posión/Animada/4.png',
        './images/4. Marcadores/Posión/Animada/5.png',
        './images/4. Marcadores/Posión/Animada/6.png',
        './images/4. Marcadores/Posión/Animada/7.png',
        './images/4. Marcadores/Posión/Animada/8.png'
    ]

    constructor(x, y) {
        super().loadImage(this.poisonBottle[0]); //
        super.loadImages(this.poisonBottle);
        this.animatePoison(this.poisonBottle);
        this.x = x;
        this.y = y;
    }
    animatePoison(imgJson) {
        this.imgSet = imgJson;
        setInterval(() => {
            super.swimAnimation(this.imgSet);
        }, 5000/43);
    }
}