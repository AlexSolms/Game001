class Hero extends MovableObject {
    width = 300;
    height = 250;
    y = 80;
    x = 0;
    longIdle = false;
    idleTime = new Date().getTime();
    imgIdleCount = 0
    heroAction = 'idle';
    attackImgCount = 0;
    world;
    //target;
    opponent;

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
        setInterval(() => {
            //  console.log('hero: ', this.x);
            this.move(this.world.keyboard.right, 'x', 30);
            this.move(this.world.keyboard.left, 'x', -30);
            this.move(this.world.keyboard.up, 'y', -30);
            this.move(this.world.keyboard.down, 'y', 30);
            this.world.camera_x = -this.x;
        }, 100 / 6);
        setInterval(() => { this.normalSwimAndIdleAnimation() }, 140);
        setInterval(() => { this.attackAnimation(this.world.collidingOpponent) }, 140);
        setInterval(() => { this.hurtAnimation() }, 140);
        setInterval(() => { this.deadAnimation() }, 140);
    }

    normalSwimAndIdleAnimation() {
        if (this.world.keyboard.press) {
            this.imgIdleCount = 0;
            this.action = 'swim';
            super.swimAnimation(this.heroSwim, 1);
            this.idleTime = new Date().getTime();
        }
        (!this.world.keyboard.press && this.imgIdleCount == 0) ? super.swimAnimation(this.heroIdle) : '';
        if (!this.world.keyboard.press && new Date().getTime() - this.idleTime > 5000 && this.imgIdleCount < 10) {
            super.swimAnimation(this.heroLongIdle1);
            this.imgIdleCount++;
            this.action = 'longIdle';
        }
        (this.imgIdleCount == 10 && this.action === 'longIdle') ? super.swimAnimation(this.heroLongIdle2) : '';
    }

    attackAnimation(target) {
        if (this.action === 'swim' && this.attackImgCount == 0) {
 console.log('in hero class:', target);
            if (target === 'puff' && this.world.keyboard.space && this.attackImgCount < 8) {
                console.log('puff, ran da');
                this.action === 'puffAtt';
                super.swimAnimation(this.heroAttack.finSlap);
                this.attackImgCount++;
            }
            if (target === 'jelly' && this.world.keyboard.space && this.attackImgCount < 8) {
                console.log('jelly, ran da');
                this.action === 'jellyAtt';
                super.swimAnimation(this.heroAttack.bubbleTrapNormal);
                this.attackImgCount++;
            }
            if (target === 'wal' && this.world.keyboard.space) {
                super.swimAnimation(this.heroAttack.bubbleTrapWhale);
            }
        }
        if (this.attackImgCount == 8) {
            this.action === 'swim';
            this.attackImgCount = 0;
        }
    }

    hurtAnimation() {
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