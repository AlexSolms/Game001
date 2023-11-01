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
    collidingOpponent={name:'',id:''};
    closestOpponent = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard ;
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

            // variablen zur Positionsbestimmung des Helden und seiner Hitbox plus seiner Angriffsrange
            const heroXposition = this.hero.x + this.hero.width/2;
            const heroYposition = this.hero.y + this.hero.height/2;
            const heroX_HitboxBorder = this.hero.width/2;
            const heroY_HitboxBorder = this.hero.height/2;
            const heroAttackRange = heroX_HitboxBorder * 1.5;
            let distanceToHero = 0;

            for (let i = 0; i < this.level.activeOpponent.length; i++) {
                const opponentXposition = this.level.activeOpponent[i].x + this.level.activeOpponent[i].width/2;
                const opponentYposition = this.level.activeOpponent[i].y + this.level.activeOpponent[i].height/2;
                // gibt mir den Gegner aus, der am nächsten ist

                 if (i === 0) {distanceToHero = Math.abs(heroXposition - opponentXposition);                    
                } else if(Math.abs(heroXposition - opponentXposition) < distanceToHero){
                    distanceToHero = Math.abs(heroXposition - opponentXposition);
                } 
                distanceToHero = Math.abs(heroXposition - opponentXposition); // Bestimmung der Position zu Sharkie
                if (distanceToHero < heroAttackRange) {
                 //   console.log(Object.getPrototypeOf(this.level.activeOpponent[i]).constructor.name);
                 //   console.log(this.level.activeOpponent[i].x);
                }
                
                
            }
            //console.log(heroXposition, heroYposition);


            this.level.activeOpponent.forEach((opponent) => {
                
                const opponentName = Object.getPrototypeOf(opponent).constructor.name;
                //console.log(this.level.activeOpponent); // alle opponenten
                //Ich muss hier eine Logic beuen, die alle x Koordinaten der Opponenten ausließt
                // sollte eine Koordinate mit der X Koordinate zu einem bestmmten Zeitpunkt machtchen
                // kann der hero in den Angriff übergehen.

                // 1. Funktion: feststellen welcher opponte gerade in der Attack range von Sharki ist
                // 2. Ermitteln ob es sich um einen Kugelfisch oder eine Qualle handelt
                // 3. auslösen des Angriffsmusters, wenn space gedrückt wurde und Sharki in Reichweite ist.
                // 4. Todesanimatition Gegner
                // 5. Drop in Bezug auf Gegner
                // 6. Sharki sammelt drop automatisch, da der Drop auf ihn zufliegt.














                this.collidingOpponent.name = opponentName; 
                this.collidingOpponent.id = opponent.id;
                if (opponent.x - (this.hero.x + this.hero.width) < 50) {
                    
                } else {
                    
                }
                /* if (this.hero.isColliding(opponent)) {
                    //console.log('kollision with hero: ', opponent);
                } */
                if (opponent instanceof PufferFish) {
                    //console.log('Hero is near PufferFish:', this.collidingOpponent);
                  
                   
                    opponent.moveTowardsHero(this.hero);
                    
                    // Do something when the hero is near the pufferfish
                }
                if (opponent instanceof JellyFish) {
                    //console.log('Hero is near JellyFish:',this.collidingOpponent);
                    
                   
                    
                    //opponent.moveTowardsHero(this.hero);
                    // Do something when the hero is near the pufferfish
                }

            });
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

