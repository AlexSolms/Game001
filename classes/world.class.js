class World {

    hero = new Hero();
   
    jellyFish = new JellyFishYellow();
    oceanBackground = [
        new BackgroundOcean(2),
        new BackgroundLayer2(2),
        new BackgroundLayer1(2),
        new BackgroundBottom(2),
    ]

    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // clears canvas
        
        this.oceanBackground.forEach(element => { 
            this.drawImg(element);
        });
        this.drawImg(this.jellyFish);
        this.drawImg(this.hero);
        /* this.ctx.drawImage(this.jellyFish.img, this.jellyFish.x, this.jellyFish.y ,this.jellyFish.width, this.jellyFish.height); // in diesem Fall ist this halt world
        this.ctx.drawImage(this.hero.img, this.hero.x, this.hero.y ,this.hero.width, this.hero.height); // in diesem Fall ist this halt world
       */

        let self = this;  // Alternative zu this.draw.bind(this);
        requestAnimationFrame(function () { // requestAnimationFrame calls function draw() in sync with the refresh rate of the browser. 
            self.draw();  // self is neccessary to bind the correct this (from World) to the draw
        });
    }

    
    drawImg(objektToDraw) {
        this.ctx.drawImage(objektToDraw.img, objektToDraw.x, objektToDraw.y, objektToDraw.width, objektToDraw.height);
    }
}

