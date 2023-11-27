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
    collidingOpponent = { name: '', id: '' };
    closestOpponent_ = { id: 0, distance: 20000, name: '', obj_pos: 0};//Object.getPrototypeOf(this.level.activeOpponent[0]).constructor.name;
    clOppPosInArr = 0; // position of opponent in opponent array, wihi is the closets to hero

    //closestOpponent = 0;

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



    /*    getClosestOpponent() {
   // ich muss ier ein Array reingeben aus id, distanz und Name
   
           // variablen zur Positionsbestimmung des Helden und seiner Hitbox plus seiner Angriffsrange
           const heroXposition = this.hero.x + this.hero.width / 2;
           const heroYposition = this.hero.y + this.hero.height / 2;
           const heroX_HitboxBorder = this.hero.width / 2;
           const heroY_HitboxBorder = this.hero.height / 2;
           const heroAttackRange = heroX_HitboxBorder * 1.5;
           let distanceToHero = this.closestOpponent_.distance; 
           let closestOpponent = {id : 0, distance : 0};
           for (let i = 0; i < this.level.activeOpponent.length; i++) {
               // X Position des Gegners im Array, das x soll in der Mitte vom Gegner liegen
               const opponentXposition = this.level.activeOpponent[i].x; // + this.level.activeOpponent[i].width / 2;
               let distanz = opponentXposition - heroXposition;
               // gibt mir den Gegner aus, der am nächsten ist
   
              
               if (distanz < distanceToHero && distanz > 0) {
                   distanceToHero = distanz;
                   closestOpponent.id = this.level.activeOpponent[i].id;
                   closestOpponent.distance = distanz;
                   //closestOpponent = Object.getPrototypeOf(this.level.activeOpponent[i]).constructor.name;
               }
   
           }
           //debugger;
        return closestOpponent;
       }   */
    getClosestOpponent() {
        let closestOpponent = { id: 0, distance: 200000, name: '', obj_pos: 0};
        let heroXposition = this.hero.x + this.hero.width / 2;
        let distanceToHero = 20000;//um es zu initialisieren mit einem Wert, indem es keine Gegner mehr gibt
        for (let i = 0; i < this.level.activeOpponent.length; i++) {
            let distanz = this.level.activeOpponent[i].x - heroXposition;
            if (distanz > 0) {
                if (distanz < distanceToHero) {
                    distanceToHero = distanz;
                    closestOpponent.id = this.level.activeOpponent[i].id;
                    closestOpponent.distance = distanz;
                    closestOpponent.name = Object.getPrototypeOf(this.level.activeOpponent[i]).constructor.name;
                    closestOpponent.obj_pos = i;
                    this.clOppPosInArr = i;
                }
            }
        }
        return closestOpponent;
    }

    checkCollisions() {


        setInterval(() => {
            //ermittle den nächtgelegenen Gegner und gib id, distanz und Art des Gegners aus
            let closestOpponent = this.getClosestOpponent();
            if (closestOpponent.id != this.closestOpponent_.id) {
               console.log('initial opponent: ', closestOpponent);
                this.closestOpponent_ = this.getClosestOpponent();
                console.log(this.closestOpponent_);
            }
            // Ich habe jetzt die Entfernung zum Gegner und um welchen Gegner es sich handelt.
            // Jetzt soll folgendes passiere:
            // Es soll die Angriffsanimation ausgelöst werden, die auf den Gegner passt.
            // ist Gegner in Angrifsreichweite? 
            //                                 Wenn zu weit weg. Angriff verpufft
            //                                 wenn zu nah, Sharki bekommt Schaden
            //                                 Wenn in ranche, Angrif wird erfolgreich ausgeführt
  //          console.log('Blub: ',this.level.activeOpponent[this.closestOpponent_.obj_pos].x); 

            //die for schleife zum ermittel des Opponenten der in positiver x Richting dem Hero am nächsten ist lagere ich in eine Funktion aus
            // Diese liefert mir den Opponenten auf Basis der x Koordinate vom Helden

            // der nächste Schritt ist zu ermitteln um welche Art von Gegner es sich handelt.

            // dann kommt der Schritt. Ist Sharki in Angriffsreichweite, wenn ja, it der Angriff erfolgreich, wenn nein halt nicht 

            //ist der Angriff erfolgreich, muss der Gegner in die deadanimation und das entsprchende Item muss gedroppt werden
            // in dem Zusammenhang muss dann der Gegner aus dem Opponenten array entfernt werden.


            //console.log(heroXposition, heroYposition);
            // console.log(this.collidingOpponent.name, this.collidingOpponent.id);

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

