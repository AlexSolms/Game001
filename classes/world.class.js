class World {
    level = level1;
    hero = new Hero();
    boss = new Boss();
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    introDone = false;
    collidingOpponent = { name: '', id: '' };
    clOppPosInArr = 0; // position of opponent in opponent array, wihi is the closets to hero


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        this.defenseOfPufferfish();
        this.checkCollisions();
    }

    setWorld() {
        this.hero.world = this; // muss testen ob ich hier nicht einfach this.world statt this.hero.world schreiben kann
        this.boss.world2 = this;
    }


    getClosestOpponent() {
        let heroXposition = this.hero.x + this.hero.width / 2;
        let distanceToHero = 20000;//um es zu initialisieren mit einem Wert, indem es keine Gegner mehr gibt
        for (let i = 0; i < this.level.activeOpponent.length; i++) {
            let distanz = this.level.activeOpponent[i].x - heroXposition;
            if (distanz > 0) {
                if (distanz < distanceToHero) {
                    distanceToHero = distanz;
                    this.clOppPosInArr = i; // hier wird die Position im Array des Opponenten geliefert, der am nächsten zum Helden ist
                }
            }
        }
    }

    /**
     * this function starts the movement of a pufferfish if Sharky is close to it
     */
    defenseOfPufferfish() {
        setInterval(() => {
            this.level.activeOpponent.forEach((opponent) => {if (opponent instanceof PufferFish) opponent.moveTowardsHero(this.hero);});
        }, 140)
    }


    checkCollisions() {
        setInterval(() => {
            this.getClosestOpponent(); //gibt die Position im OpponentenArray des zum Helden nächsten Opponenten wieder
            
        }, 140)
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
        //if (objektToDraw instanceof Hero) { debugger; }
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

