class World {

    hero = new Hero();
    opponents = [
        new Opponents(),
        new Opponents(),
        new Opponents()
    ];

    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.draw();
    }

    draw() { 
        this.ctx.drawImage(this.hero.img, 20, 200 ,200, 200);
        this.ctx.drawImage(this.opponents[0].img, 400, 200 ,200, 200);
    }
}