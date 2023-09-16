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
        //this.draw = this.draw.bind(this); // Binden Sie die draw-Funktion an das aktuelle Objekt
        this.canvas = canvas;
        this.draw();
    }

    draw(){ 

        this.ctx.clearRect(0, 0, canvas.width, this.canvas.height); // clears canvas

        this.ctx.drawImage(this.hero.img, this.hero.x, this.hero.y ,this.hero.width, this.hero.height); // in diesem Fall ist this halt world
        this.ctx.drawImage(this.opponents[0].img, 400, 200 ,120, 120);
        this.ctx.drawImage(this.opponents[1].img, 400, 0 ,120, 120);
        this.ctx.drawImage(this.opponents[2].img, 400, 100 ,120, 120);

        let self = this;  // Alternative zu this.draw.bind(this);
        requestAnimationFrame(function () { // requestAnimationFrame calls function draw() in sync with the refresh rate of the browser. 
          self.draw();  // self is neccessary to bind the correct this (from World) to the draw
        });
    }
}