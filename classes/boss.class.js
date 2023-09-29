class Boss extends Opponents {
    world2;
    width = 300;
    height = 400;
    y = 0;
    x = 1600;
    bossIntroDone = false;
    currentImage = 0;
    hurt = false;
    action = 'intro';
    bossLiveCounter = 20;
    idleTime; // = new Date().getTime();
    attackImgCounter = 0;
    
    reset = true;

    bossIntroduce = [
        './images/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        './images/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        './images/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        './images/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        './images/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        './images/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        './images/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        './images/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        './images/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        './images/2.Enemy/3 Final Enemy/1.Introduce/10.png'

    ]

    bossFloating = [
        './images/2.Enemy/3 Final Enemy/2.floating/1.png',
        './images/2.Enemy/3 Final Enemy/2.floating/2.png',
        './images/2.Enemy/3 Final Enemy/2.floating/3.png',
        './images/2.Enemy/3 Final Enemy/2.floating/4.png',
        './images/2.Enemy/3 Final Enemy/2.floating/5.png',
        './images/2.Enemy/3 Final Enemy/2.floating/6.png',
        './images/2.Enemy/3 Final Enemy/2.floating/7.png',
        './images/2.Enemy/3 Final Enemy/2.floating/8.png',
        './images/2.Enemy/3 Final Enemy/2.floating/9.png',
        './images/2.Enemy/3 Final Enemy/2.floating/10.png',
        './images/2.Enemy/3 Final Enemy/2.floating/11.png',
        './images/2.Enemy/3 Final Enemy/2.floating/12.png',
        './images/2.Enemy/3 Final Enemy/2.floating/13.png'
    ]

    bossAttack = [
        './images/2.Enemy/3 Final Enemy/Attack/1.png',
        './images/2.Enemy/3 Final Enemy/Attack/2.png',
        './images/2.Enemy/3 Final Enemy/Attack/3.png',
        './images/2.Enemy/3 Final Enemy/Attack/4.png',
        './images/2.Enemy/3 Final Enemy/Attack/5.png',
        './images/2.Enemy/3 Final Enemy/Attack/6.png'
    ]

    bossDead = [
        './images/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2.png',
        './images/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        './images/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        './images/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        './images/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        './images/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png'
    ]

    bossHurt = [
        './images/2.Enemy/3 Final Enemy/Hurt/1.png',
        './images/2.Enemy/3 Final Enemy/Hurt/2.png',
        './images/2.Enemy/3 Final Enemy/Hurt/3.png',
        './images/2.Enemy/3 Final Enemy/Hurt/4.png',
    ]
    constructor() {

        super().loadImage('./images/2.Enemy/3 Final Enemy/1.Introduce/1.png');
        super.loadImages(this.bossIntroduce); //located in movableObjects
        super.loadImages(this.bossFloating); //located in movableObjects
        super.loadImages(this.bossAttack); //located in movableObjects
        super.loadImages(this.bossDead); //located in movableObjects
        super.loadImages(this.bossHurt); //located in movableObjects
        //super.animate(this.bossIntroduce);
        this.animateBoss();

    }

    animateBoss() {
        let imgCount = 0;
        setInterval(() => {
            imgCount = this.introAnimation(imgCount);
            this.idleAnimation();
        }, 130);
        //setInterval(() => { this.idleAnimation() }, 140);
    }


    introAnimation(imgCount) {
        if (this.world2.hero.x > 1100 && this.action === 'intro' && imgCount < 10) {
            super.swimAnimation(this.bossIntroduce); //located in movableObjects
            imgCount++; //Intro should be played one time
            (imgCount === 10) ? this.action = 'idle' : '';
        } return imgCount;
    }


    idleAnimation() {
        if (this.action === 'idle') {
            !this.idleTime ? this.idleTime = new Date().getTime() : '';
            (new Date().getTime() - this.idleTime > 4000) ? this.attackAnimation() : super.swimAnimation(this.bossFloating);    
        }
    }

    attackAnimation() {    
            this.action = 'attack';
            (this.action === 'attack') ? super.swimAnimation(this.bossAttack) : '';
            this.action = 'idle';
            this.resetAttack();
    }

    resetAttack(){
        this.attackImgCounter++;
        if(this.attackImgCounter > this.bossAttack.length){
             this.idleTime = new Date().getTime();
             this.attackImgCounter = 0;
        }
    }


    hurtAnimation() {
        if (this.hurt) {
            this.action = 'hurt';
            super.swimAnimation(this.bossHurt);
            this.action = 'idle';
        }
    }

    deadAnimation() {
        if (this.bossLiveCounter === 0) {
            this.action = 'dead';
            super.swimAnimation(this.bossDead);
        }
    }
}