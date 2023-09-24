class World {
    OPPONENTS = [JellyFishGreen, JellyFishYellow, JellyFishPink, JellyFishPurple, PufferFishGreen, PufferFishPink, PufferFishRed];
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
    keyboard;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        //console.log(this.keyboard);
    }

    setWorld(){
        this.hero.world = this;
    
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
        if(objektToDraw.otherDirection){
            this.ctx.save();  // saves the original object
            this.ctx.translate(objektToDraw.width, 0); // moves the object with objectwidth to avoid image jump
            this.ctx.scale(-1,1); // flips the image
            objektToDraw.x = objektToDraw.x * -1; // set object on the mirrored coordinate
        }
        this.ctx.drawImage(objektToDraw.img, objektToDraw.x, objektToDraw.y, objektToDraw.width, objektToDraw.height);
        if(objektToDraw.otherDirection){ 
            objektToDraw.x = objektToDraw.x * -1 // set object on the mirrored coordinate
            this.ctx.restore() // restores the objekt 
        }
    }
}

