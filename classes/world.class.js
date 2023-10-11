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
                if (this.hero.isColliding(opponent)) {
                    //console.log('kollision with hero: ', opponent);
                }
                if (opponent instanceof PufferFish && opponent.isHeroNear(this.hero)) {
                    //  console.log('Hero is near PufferFish:', opponent);
                    opponent.moveTowardsHero(this.hero);
                    // Do something when the hero is near the pufferfish
                }

            });
        }, 500)
    }

    draw() {

       /*  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Leinwand löschen
        this.ctx.translate(this.camera_x, 0); // Kamera bewegen
    
        // Hintergrund 1 (Boden) ohne Translation zeichnen
        this.drawImg(this.level.oceanBackground[0]);
    
        // Hintergrund 2 mit langsamerer Bewegung zeichnen
        this.ctx.save();
        this.ctx.translate(this.camera_x * 0.3, 0); // Anpassen Sie den Multiplikator nach Bedarf
        this.drawImg(this.level.oceanBackground[3 ]);
        this.ctx.restore();
    
        // Hintergrund 3 mit noch langsamerer Bewegung zeichnen
        this.ctx.save();
        this.ctx.translate(this.camera_x * 0.2, 0); // Anpassen Sie den Multiplikator nach Bedarf
        //this.drawImg(this.level.oceanBackground[3]);
        this.ctx.restore();
    
        // Hintergrund 4 (nicht bewegen) zeichnen
        //this.drawImg(this.level.oceanBackground[1]);
    
        // Andere Objekte zeichnen
        this.drawMultObj(this.level.activeOpponent);
        this.drawMultObj(this.level.coins);
        this.drawMultObj(this.level.poison);
        this.drawImg(this.hero);
        this.drawImg(this.boss);
    
        this.ctx.translate(-this.camera_x, 0); // Zurücksetzen der Translation
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });

 */


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

