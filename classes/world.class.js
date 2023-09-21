class World {
OPPONENTS=[JellyFishGreen, JellyFishYellow, JellyFishPink, JellyFishPurple, PufferFishGreen, PufferFishPink, PufferFishRed];
    hero = new Hero();
    
    activeOpponent = [
        new this.OPPONENTS[Math.floor(Math.random() * this.OPPONENTS.length)](),
        new this.OPPONENTS[Math.floor(Math.random() * this.OPPONENTS.length)](),
        new this.OPPONENTS[Math.floor(Math.random() * this.OPPONENTS.length)]()
     ]; //fügt einen random opponent ein  
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
        this.activeOpponent.forEach(opponent => { 
            this.drawImg(opponent);
        });
      
        this.drawImg(this.hero);
        

        let self = this;  // Alternative zu this.draw.bind(this);
        requestAnimationFrame(function () { // requestAnimationFrame calls function draw() in sync with the refresh rate of the browser. 
            self.draw();  // self is neccessary to bind the correct this (from World) to the draw
        });
    }


    drawImg(objektToDraw) {
        this.ctx.drawImage(objektToDraw.img, objektToDraw.x, objektToDraw.y, objektToDraw.width, objektToDraw.height);
    }
}

