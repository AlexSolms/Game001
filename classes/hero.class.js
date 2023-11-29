class Hero extends MovableObject {
    width = 300;
    height = 250;
    y = 80;
    x = 0;
    savedX = this.x;
    world;
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
        setInterval(() => { this.chkAnimation(); }, 140);
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
        if (this.deathcounter === 9) this.deathFlag = true;
        this.chkHurt();
        this.chkAttackFlags();
        if (this.world.keyboard.press) this.swimFlag = true;
        if (!this.world.keyboard.press && new Date().getTime() - this.idleTime > 5000) this.longIdle = true;
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

    /**
     * this function starts the idle animation
     */
    idleFunction() { super.swimAnimation(this.heroIdle); }

    /**
     * this function starts the longIdle animation
     */
    longIdlefunction() {
        if (this.imgIdleCount < 10) {
            super.swimAnimation(this.heroLongIdle1);
            this.imgIdleCount++;
        }
        if (this.imgIdleCount == 10) super.swimAnimation(this.heroLongIdle2);
    }

    /**
     * this function starts swimanimation and calls function resetIdleTime() for reset
     */
    swimFunction() {
        super.swimAnimation(this.heroSwim, 1);
        this.resetIdletime();
    }

    /**
     * this function starts the attackanimation based on opponent
     */
    attackFunction() {
        let targetName = '';
        if (this.runningAttack) {
            if (this.world.level.activeOpponent[this.world.clOppPosInArr] instanceof PufferFish) targetName = 'puff';
            if (this.world.level.activeOpponent[this.world.clOppPosInArr] instanceof JellyFish) targetName = 'jelly';
            if (targetName === 'puff') super.swimAnimation(this.heroAttack.finSlap);
            if (targetName === 'jelly') super.swimAnimation(this.heroAttack.bubbleTrapNormal);
        }
        this.resetIdletime();
    }

    /**
     * this function checks if hero has touched opponend
     */
    chkHurt() {

    }

    /**
     * this function starts the hurt animation and calls reset for idletime
     */
    hurtFunction() {
        this.resetIdletime();
    }

    /**
     * this function resets the idleTime
     */
    resetIdletime() {
        this.imgIdleCount = 0;
        this.idleTime = new Date().getTime(); // damit longIdle gestartet werden kann 
    }

    /**
     * this function checks and calls setAttackFlag function and inAttackRange function and reset runningAttack
     */
    chkAttackFlags() {
        if (this.world.keyboard.space) {
            this.inAttackRange(); // schaltet runningAttack auf true wenn Gegner in Reichweite
            if (this.runningAttack && this.attackImgCount < 8) {
                this.setAttackFlag();
            }
        } else if (this.runningAttack && this.attackImgCount < 8) {
            this.setAttackFlag();
        } else if (this.attackImgCount === 8) { // ich muss hier nochmal drüber, die Animation wird nicht immer korrekt ausgeführt
            this.runningAttack = false;
            this.attackImgCount = 0;
        }
    }

    /**
     * this function sets the attackFlag
     */
    setAttackFlag() {
        this.attackFlag = true;
        this.attackImgCount++;
    }

    /**
     * this function sets the runninAttack flag if condition is met
     */
    inAttackRange() {
        let distance = 0;
        distance = this.world.level.activeOpponent[this.world.clOppPosInArr].x - this.x;
        if (distance <= this.width && distance >= 80) { // hier muss ich die Distanz anpassen, dass der Abstand stimmt 
            this.runningAttack = true;
        }
    }

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