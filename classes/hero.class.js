class Hero extends MovableObject {
    width = 300;
    height = 250;
    y = 80;
    x = 0;
    savedX = this.x;

    action = 'idle'; // wird in der neuen Logic nicht mehr benötigt
    //heroAction = 'idle';

    world;
    //target;
    opponent = { id: -1, distance: 0, name: '', objPos: 0 };

    //Neustart: Definiere neue Varbiablen
    deathFlag = false;
    hurtFlag = false;
    hurtImgCount = 0; // für die hurt animation
    deathcounter = 0;
    attackFlag = false; // True wenn SPACE gedrückt wurde
    attackImgCount = 0; // für die attack animation

    newAttackFlag = true; // Wird auf False gesetzt, sobald die runningAttack auf true gesetzt wird
    runningAttack = false; // Wird auf true gesetzt, sobald die Attacke ausgeführt wird, damit die 8 Bilder ablaufen können
    swimFlag = false; // True wenn eine der Richtungstasten gedrückt wird
    longIdle = false; // True wenn aktuelle Zeit - idleTime >= 5000 ist
    idleTime = new Date().getTime();
    imgIdleCount = 0;








    heroIdle = [
        './images/1.Sharkie/1.IDLE/1.png',
        './images/1.Sharkie/1.IDLE/2.png',
        './images/1.Sharkie/1.IDLE/3.png',
        './images/1.Sharkie/1.IDLE/4.png',
        './images/1.Sharkie/1.IDLE/5.png',
        './images/1.Sharkie/1.IDLE/6.png',
        './images/1.Sharkie/1.IDLE/7.png',
        './images/1.Sharkie/1.IDLE/8.png',
        './images/1.Sharkie/1.IDLE/9.png',
        './images/1.Sharkie/1.IDLE/10.png',
        './images/1.Sharkie/1.IDLE/11.png',
        './images/1.Sharkie/1.IDLE/12.png',
        './images/1.Sharkie/1.IDLE/13.png',
        './images/1.Sharkie/1.IDLE/14.png',
        './images/1.Sharkie/1.IDLE/15.png',
        './images/1.Sharkie/1.IDLE/16.png',
        './images/1.Sharkie/1.IDLE/17.png',
        './images/1.Sharkie/1.IDLE/18.png'
    ]

    heroLongIdle1 = [
        './images/1.Sharkie/2.Long_IDLE/I1.png',
        './images/1.Sharkie/2.Long_IDLE/I2.png',
        './images/1.Sharkie/2.Long_IDLE/I3.png',
        './images/1.Sharkie/2.Long_IDLE/I4.png',
        './images/1.Sharkie/2.Long_IDLE/I5.png',
        './images/1.Sharkie/2.Long_IDLE/I6.png',
        './images/1.Sharkie/2.Long_IDLE/I7.png',
        './images/1.Sharkie/2.Long_IDLE/I8.png',
        './images/1.Sharkie/2.Long_IDLE/I9.png'
    ]
    heroLongIdle2 = [
        './images/1.Sharkie/2.Long_IDLE/I10.png',
        './images/1.Sharkie/2.Long_IDLE/I11.png',
        './images/1.Sharkie/2.Long_IDLE/I12.png',
        './images/1.Sharkie/2.Long_IDLE/I13.png',
        './images/1.Sharkie/2.Long_IDLE/I14.png',
        './images/1.Sharkie/2.Long_IDLE/I10.png',
        './images/1.Sharkie/2.Long_IDLE/I10.png',
        './images/1.Sharkie/2.Long_IDLE/I10.png',
        './images/1.Sharkie/2.Long_IDLE/I10.png',
        './images/1.Sharkie/2.Long_IDLE/I10.png',
        './images/1.Sharkie/2.Long_IDLE/I10.png',
        './images/1.Sharkie/2.Long_IDLE/I10.png'
    ]


    heroSwim = [
        './images/1.Sharkie/3.Swim/1.png',
        './images/1.Sharkie/3.Swim/2.png',
        './images/1.Sharkie/3.Swim/3.png',
        './images/1.Sharkie/3.Swim/5.png',
        './images/1.Sharkie/3.Swim/6.png'
    ]

    heroAttack = {
        bubbleTrapWhale: [
            './images/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
            './images/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
            './images/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
            './images/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
            './images/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
            './images/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
            './images/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
            './images/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png'
        ],
        bubbleTrapNormal: [
            './images/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
            './images/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
            './images/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
            './images/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
            './images/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
            './images/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
            './images/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
            './images/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png'
        ],
        finSlap: [
            './images/1.Sharkie/4.Attack/Fin slap/1.png',
            './images/1.Sharkie/4.Attack/Fin slap/2.png',
            './images/1.Sharkie/4.Attack/Fin slap/3.png',
            './images/1.Sharkie/4.Attack/Fin slap/4.png',
            './images/1.Sharkie/4.Attack/Fin slap/5.png',
            './images/1.Sharkie/4.Attack/Fin slap/6.png',
            './images/1.Sharkie/4.Attack/Fin slap/7.png',
            './images/1.Sharkie/4.Attack/Fin slap/8.png'
        ]
    }

    heroHurt = {
        poisened: [
            './images/1.Sharkie/5.Hurt/1.Poisoned/1.png',
            './images/1.Sharkie/5.Hurt/1.Poisoned/2.png',
            './images/1.Sharkie/5.Hurt/1.Poisoned/3.png',
            './images/1.Sharkie/5.Hurt/1.Poisoned/4.png'
        ],
        shocked: [
            './images/1.Sharkie/5.Hurt/2.Electric shock/o1.png',
            './images/1.Sharkie/5.Hurt/2.Electric shock/o2.png',
            './images/1.Sharkie/5.Hurt/2.Electric shock/o1.png',
            './images/1.Sharkie/5.Hurt/2.Electric shock/o2.png',
            './images/1.Sharkie/5.Hurt/2.Electric shock/o1.png',
            './images/1.Sharkie/5.Hurt/2.Electric shock/o2.png'
        ]
    }

    heroDead = {
        poisened: [
            './images/1.Sharkie/6.dead/1.Poisoned/1.png',
            './images/1.Sharkie/6.dead/1.Poisoned/2.png',
            './images/1.Sharkie/6.dead/1.Poisoned/3.png',
            './images/1.Sharkie/6.dead/1.Poisoned/4.png',
            './images/1.Sharkie/6.dead/1.Poisoned/5.png',
            './images/1.Sharkie/6.dead/1.Poisoned/6.png',
            './images/1.Sharkie/6.dead/1.Poisoned/7.png',
            './images/1.Sharkie/6.dead/1.Poisoned/8.png',
            './images/1.Sharkie/6.dead/1.Poisoned/9.png',
            './images/1.Sharkie/6.dead/1.Poisoned/10.png',
            './images/1.Sharkie/6.dead/1.Poisoned/11.png',
            './images/1.Sharkie/6.dead/1.Poisoned/12.png'
        ],
        shocked: [
            './images/1.Sharkie/6.dead/2.Electro_shock/3.png',
            './images/1.Sharkie/6.dead/2.Electro_shock/2.png',
            './images/1.Sharkie/6.dead/2.Electro_shock/4.png',
            './images/1.Sharkie/6.dead/2.Electro_shock/5.png',
            './images/1.Sharkie/6.dead/2.Electro_shock/8.png',
            './images/1.Sharkie/6.dead/2.Electro_shock/9.png',
            './images/1.Sharkie/6.dead/2.Electro_shock/10.png'
        ]

    }
    //currentImage = 0;

    constructor() {
        super().loadImage('./images/1.Sharkie/1.IDLE/1.png');
        super.loadImages(this.heroSwim); //located in movableObjects
        super.loadImages(this.heroIdle); //located in movableObjects
        super.loadImages(this.heroLongIdle1); //located in movableObjects
        super.loadImages(this.heroLongIdle2); //located in movableObjects
        super.loadImages(this.heroAttack.bubbleTrapWhale); //located in movableObjects
        super.loadImages(this.heroAttack.bubbleTrapNormal); //located in movableObjects
        super.loadImages(this.heroAttack.finSlap); //located in movableObjects
        super.loadImages(this.heroHurt.poisened); //located in movableObjects
        super.loadImages(this.heroHurt.shocked); //located in movableObjects
        super.loadImages(this.heroDead.poisened); //located in movableObjects 
        super.loadImages(this.heroDead.shocked); //located in movableObjects 
        this.animateHero(); //located here but move() is located in movableObjects
    }


    /**  
    * This function changes the images (source image Cache) of the object with an intervall
    */
    animateHero() {
        setInterval(() => { // Die move Funktion lasse ich erst einmal unangetastet
            this.move(this.world.keyboard.right, 'x', 30);
            this.move(this.world.keyboard.left, 'x', -30);
            this.move(this.world.keyboard.up, 'y', -30);
            this.move(this.world.keyboard.down, 'y', 30);
            this.world.camera_x = -this.x;
        }, 100 / 6);
        /*         setInterval(() => { this.normalSwimAndIdleAnimation();
                 this.attackAnimation(this.world.closestOpponent_); // muss ich hier eigentlich den closest opponent übergeben?
                 this.hurtAnimation();
                 this.deadAnimation(); 
                }, 140); */
        // Neue zentraler Intervall von dem über die funktion chkAnimation die entsprechende Animation abgespielt wird.
        setInterval(() => {
            this.chkAnimation();
            //console.log(this.idleTime); // for checks, ob idle time korreokt gesetzt
        }, 140);
    }

    /**
     * This funktion checks all flags with a priority and calls the belonging function
     */
    chkAnimation() {
        this.chkFlags();
        if (this.deathFlag) this.showDead(); // hier wird im Grunde nur ein Bild gezeigt und keine Animation 
        else if (this.hurtFlag) this.hurtFunction();
        else if (this.attackFlag) this.attackFunction();
        else if (this.swimFlag) this.swimFunction();
        else if (this.longIdle) this.longIdlefunction();  // Ich muss noch eine Möglichkeit einbauen die Flags zu setzen!
        else this.idleFunction();
    }

    /**
     * THis funktion checks and sets flags
     */
    chkFlags() {
        this.resetAllFlags();
        if (this.world.keyboard.press) {
            this.swimFlag = true;
        }

        if (!this.world.keyboard.press && new Date().getTime() - this.idleTime > 5000) {
            this.longIdle = true;
        }

        //'''''''''''''''''''''ATTACK LOGIC'''''''''''''''''''''''''''''''
        // Ich denke um die Flags für die Attacke zu setzen brauche ich eine eigene Funktion
        if (this.world.keyboard.space) {
            this.inAttackRange();
            console.log('Opponent_X: ', this.world.level.activeOpponent[this.world.clOppPosInArr].x)
            if (this.runningAttack && this.attackImgCount < 8) {
                this.attackFlag = true;
                this.attackImgCount++;
            }

        } else if (this.runningAttack && this.attackImgCount < 8) {
            this.attackFlag = true;
            this.attackImgCount++;
        }





        /*  if (this.world.keyboard.space ) {
             this.runningAttack = true; 
             //~~~~~~~~~~~~~~ chk ob bereits eine attackenroutine läuft, wenn nein start.
             if (this.newAttackFlag) {
                 this.newAttackFlag = false; // wenn 
                   // 
                 console.log('attacke start');
             }
         } */
        /*  if (this.runningAttack && this.attackImgCount < 8) {
             this.attackFlag = true;
             this.attackImgCount++;
         } */
        if (!this.world.keyboard.space && !this.runningAttack) {
            this.newAttackFlag = true; // sollte die space taste losgelassen werden kann eine neue Attacke starten wenn nicht gerade eine im Gange ist
            //console.log('neue Attacke');
        }
        if (this.attackImgCount === 8 && !this.world.keyboard.space) {
            this.runningAttack = false; // wenn die animation fertig ist ist auch die attacke fertig.
            this.attackImgCount = 0;
            this.attackFlag = false;
            console.log('attacke beendet');
        }
        //'''''''''''''''''''''ATTACK LOGIC'''''''''''''''''''''''''''''''

        // console.log("chkFlags: " , this.world.level.activeOpponent[this.world.clOppPosInArr]);
        // Die Logik hier muss die Flags wie folgt checken. 
        // Ist zum Beispiel die Hurtanimation am laufen?
        // oder ist vielleicht eine attacke am laufen
        // ist vielleicht ein Gegner in Angriffsreichweite usw.

    }

    /**
     * this funktion resets all flags, needed to avoid repetitions
     */
    resetAllFlags() {
        this.deathFlag = false;
        this.hurtFlag = false;
        this.attackFlag = false; // True wenn SPACE gedrückt wurde

        this.swimFlag = false; // True wenn eine der Richtungstasten gedrückt wird
        this.longIdle = false; // True wenn aktuelle Zeit - idleTime >= 5000 ist

    }

    idleFunction() {
        console.log('idle!!!! ');
        super.swimAnimation(this.heroIdle);
    }

    longIdlefunction() {
        if (this.imgIdleCount < 10) {
            super.swimAnimation(this.heroLongIdle1);
            this.imgIdleCount++;
        }
        if (this.imgIdleCount == 10) super.swimAnimation(this.heroLongIdle2);
    }


    swimFunction() {
        console.log('swim!!!! ');
        super.swimAnimation(this.heroSwim, 1);
        this.resetIdletime();
    }

    attackFunction() {
        console.log('attacke!!!! ');
        let targetName = '';
        if (this.runningAttack) {
            //this.action = 'attack';
            if (this.world.level.activeOpponent[this.world.clOppPosInArr] instanceof PufferFish) targetName = 'puff';
            if (this.world.level.activeOpponent[this.world.clOppPosInArr] instanceof JellyFish) targetName = 'jelly';
            if (targetName === 'puff') super.swimAnimation(this.heroAttack.finSlap);
            if (targetName === 'jelly') super.swimAnimation(this.heroAttack.bubbleTrapNormal);
            //this.action = 'idle ';  
        }
        this.resetIdletime();
    }

    hurtFunction() {
        this.resetIdletime();
    }

    resetIdletime() {
        this.imgIdleCount = 0;
        this.idleTime = new Date().getTime(); // damit longIdle gestartet werden kann 
    }
    inAttackRange() {
        let distance = 0;
        distance = this.world.level.activeOpponent[this.world.clOppPosInArr].x - this.x;
        if (distance <= this.width && distance >= 80) { // hier muss ich die Distanz anpassen, dass der Abstand stimmt 
            this.runningAttack = true;
        }
    }



    // alter Code, bleibt unveränder!
    /*     normalSwimAndIdleAnimation() {
            if (this.world.keyboard.press) {
                this.imgIdleCount = 0;
                this.action = 'swim';
                super.swimAnimation(this.heroSwim, 1);
                this.idleTime = new Date().getTime(); // das muss bei Attacke und hurt und swim mit dabei sein, dass der longidletimer zurück gesetzt wird
            }
            if (!this.world.keyboard.press && this.imgIdleCount == 0) {
                super.swimAnimation(this.heroIdle);
                this.action = 'idle';
            }
            if (!this.world.keyboard.press && new Date().getTime() - this.idleTime > 5000 && this.imgIdleCount < 10) {
                super.swimAnimation(this.heroLongIdle1);
                this.imgIdleCount++;
                this.action = 'longIdle';
            }
            if (this.imgIdleCount == 10 && this.action === 'longIdle') super.swimAnimation(this.heroLongIdle2);
        } */

    /*     attackAnimation(target) {
            //debugger;
            // console.log('in hero class:', target);
            // hier muss ich nur die Position des Opponenten im Objekt level1.activeopponent übergeben
            // Damit kann ich bestimmen, welcher Opponent es ist 
            // darauf basierend wird die Attacke ausgeführt
            if (this.world.level.activeOpponent[target.obj_pos] instanceof PufferFish) target.name = 'puff';
            if (this.world.level.activeOpponent[target.obj_pos] instanceof JellyFish) target.name = 'jelly';
            if (this.opponent.id != target.id) { // brauche ich das? Ich denke nicht!
                this.opponent = target;
                // console.log('in hero class:', this.opponent);
    
            };
            if (this.world.keyboard.space) {
                //this.world.keyboard.space = false;
                this.action = 'attack';
                if (target.name === 'puff') super.swimAnimation(this.heroAttack.finSlap);
                if (target.name === 'jelly') super.swimAnimation(this.heroAttack.bubbleTrapNormal);
                this.action = 'idle ';
                
                if (this.attackImgCount === 8) {
                    debugger;
                    this.action = 'idle';
                    this.imgIdleCount = 0;
                    this.attackImgCount++;
                }
            }
        }
     */
    /*   hurtAnimation() {
          if (this.opponent === 'pufferFish' || this.opponent === 'whal') {
              super.swimAnimation(this.heroHurt.poisened);
          }
          if (this.opponent === 'jellyFish') {
              super.swimAnimation(this.heroHurt.shocked);
          }
      }
  
      deadAnimation() {
          if (this.opponent === 'pufferFish' || this.opponent === 'whal') {
              super.swimAnimation(this.heroDead.poisened);
          }
          if (this.opponent === 'jellyFish') {
              super.swimAnimation(this.heroDead.shocked);
          }
      }
   */
    /**
     * This funktion moves the hero depending on the given parameter
     * 
     * @param {string} direction - direction
     * @param {string} axis - if up/ down or left/right
     * @param {number} multiplier - provides the move direction
    */
    move(direction, axis, multiplier) {
        if (this.world.keyboard.left) this.otherDirection = true;
        if (this.world.keyboard.right) this.otherDirection = false; //this if keeps the direction as long as right was not pushed 
        const speedMult = this.speed * multiplier;
        const topBorder = this.y >= -this.world.hero.height / 2.2 || direction !== this.world.keyboard.up;
        const bottomBorder = this.y <= this.world.hero.height * 1.13 || direction !== this.world.keyboard.down;
        const rightBorder = this.x < this.world.level.levelEnd_x || direction !== this.world.keyboard.right;
        const leftBorder = this.x >= (this.x > 3100 ? (3100 + Math.abs(speedMult)) : Math.abs(speedMult)) || direction !== this.world.keyboard.left; //Math.abs(speedMult) needed to keep hero.x greater then border.x
        if (topBorder && bottomBorder && rightBorder && leftBorder) {
            direction && (this[axis] += speedMult);
        }
    }
}