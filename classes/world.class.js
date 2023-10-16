class World {
    level = level1;
    hero = new Hero();
    boss = new Boss();
    //opponent = new Opponents();
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    introDone = false;
    colidingOpponent;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        this.checkCollisions();

        //console.log(this.keyboard);
    }

    setWorld() {
        this.hero.world = this; // muss testen ob ich hier nicht einfach this.world statt this.hero.world schreiben kann
        this.boss.world2 = this;
        //this.opponent.world3 = this;
    }


    checkCollisions() {
        setInterval(() => {
            this.level.activeOpponent.forEach((opponent) => {
                let heroCloseToOpptonent = false;
                const opponentName = Object.getPrototypeOf(opponent).constructor.name;
                if (opponent.x - (this.hero.x + this.hero.width) < 100) {
                    heroCloseToOpptonent = true;
                } else {
                    heroCloseToOpptonent = false;
                }
                /* if (this.hero.isColliding(opponent)) {
                    //console.log('kollision with hero: ', opponent);
                } */
                if (opponent instanceof PufferFish && heroCloseToOpptonent) {
                   // console.log('Hero is near PufferFish:', opponentName);
                    this.collidingOpponent = opponentName;
                    opponent.moveTowardsHero(this.hero);
                    heroCloseToOpptonent = false
                    // Do something when the hero is near the pufferfish
                }
                if (opponent instanceof JellyFish && heroCloseToOpptonent) {
                    //console.log('Hero is near JellyFish:', opponentName);
                    this.collidingOpponent = opponentName;
                    heroCloseToOpptonent = false
                    //opponent.moveTowardsHero(this.hero);
                    // Do something when the hero is near the pufferfish
                }

            });
        }, 500)
    }

    draw() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // clears canvas
        this.ctx.translate(this.camera_x, 0);
        this.drawMultObj(this.level.oceanBackground);

        this.drawMultObj(this.level.activeOpponent);
        this.drawMultObj(this.level.coins);
        this.drawMultObj(this.level.poison);
        this.drawImg(this.hero);
        this.drawImg(this.boss);
        this.ctx.translate(-this.camera_x, 0);
        let self = this;  // Alternative zu this.draw.bind(this);
        requestAnimationFrame(function () { // requestAnimationFrame calls function draw() in sync with the refresh rate of the browser. 
            self.draw();  // self is neccessary to bind the correct this (from World) to the draw
        });
    }


    drawMultObj(objectsToDraw) {
        objectsToDraw.forEach(o => {
            this.drawImg(o);
        });
    }

    drawImg(objektToDraw) {
        if (this instanceof Hero) { debugger; }
        if (objektToDraw.otherDirection) this.flipImg(objektToDraw);
        try {
            objektToDraw.draw(this.ctx);
            if (this.keyboard.debug) objektToDraw.drawHitBox(this.ctx);
            //console.log('debugMode: ',this.keyboard.debug);
        } catch (e) {
            console.warn('Error loading image ', e);
            console.warn('Could not load image ', this.img.scr);
        }
        if (objektToDraw.otherDirection) this.flipImgBack(objektToDraw);
    }

    flipImg(objektToDraw) {
        this.ctx.save();  // saves the original object
        this.ctx.translate(objektToDraw.width, 0); // moves the object with objectwidth to avoid image jump
        this.ctx.scale(-1, 1); // flips the image
        objektToDraw.x = objektToDraw.x * -1; // set object on the mirrored coordinate
    }

    flipImgBack(objektToDraw) {
        objektToDraw.x = objektToDraw.x * -1 // set object on the mirrored coordinate
        this.ctx.restore() // restores the objekt 
    }
}

