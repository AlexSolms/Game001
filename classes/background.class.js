class Background extends MovableObject {
    x = 0;
    y = 0;
    height = 400;
    width = 1920;
    constructor(i, x, y, height) {
        super().loadImage(i);
        this.height = height;
        this.y = y;
        this.x = x;
    }
}