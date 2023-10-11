class Background extends MovableObject {
    width = 1920;
    height = 400;
    constructor(i, x, y, height, speed) {
        super().loadImage(i);
        this.height = height;
        this.y = y;  
        this.x = x;
        this.moveBackground(speed, x);
    }

    moveBackground(speed, x) {
        setInterval(() => this.x = world?.hero.x * speed + x, 100/8);
    }
}

