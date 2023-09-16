class World {

    hero = new Hero();
    opponents = [
        new Opponents(0),
        new Opponents(1),
        new Opponents(2)
    ];
   

    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.draw();
    }

    draw(){ 
        this.ctx.drawImage(this.hero.img, 20, 200 ,200, 200);
        this.ctx.drawImage(this.opponents[0].img, 400, 200 ,200, 200);
        this.ctx.drawImage(this.opponents[1].img, 400, 0 ,200, 200);
        this.ctx.drawImage(this.opponents[2].img, 400, 100 ,200, 200);
    }
}