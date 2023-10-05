class Boss extends MovableObject {
    world2;
    width = 300;
    height = 400;
    y = 0;
    x = 3650;
    bossIntroDone = false;
    currentImage = 0;
    hurt = false;
    action = 'intro';
    bossLiveCounter = 20;
    idleTime; // = new Date().getTime();


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

        super().loadImage('');
        super.loadImages(this.bossIntroduce);
        super.loadImages(this.bossFloating);
        super.loadImages(this.bossAttack);
        super.loadImages(this.bossDead);
        super.loadImages(this.bossHurt);
        this.animateBoss();
    }

    animateBoss() {
        let imgCountIntro = 0;
        let imgCountAttack = 0;
        setInterval(() => {
            imgCountIntro = this.introAnimation(imgCountIntro);
            imgCountAttack = this.idleAnimation(imgCountAttack);
        }, 100);
    }

    /**
     * 
     * @param {Number} imgCount - imgCount is used to stop the intro animation after first run
     * @returns - imgCount
     */
    introAnimation(imgCount) {
        if (this.world2.hero.x > 3100 && this.action === 'intro' && imgCount < 10) {
            super.swimAnimation(this.bossIntroduce);
            if (++imgCount === 10) this.action = 'idle';
        } return imgCount;
    }

    /**
     * This function calls the boss idle animation and after a specific time the boss attack animation
     * 
     * @param {number} imgCount - imgCount is used in function attackAnimation() to reset the attack animation
     * @returns - imgCount
     */
    idleAnimation(imgCount) {
        if (this.action !== 'idle') return imgCount;
        const posititon_x = 3650;
        this.followAnimation();
        this.idleTime = this.idleTime || new Date().getTime(); //if this.idleTime == null or undefined the right one is taken 
        if (new Date().getTime() - this.idleTime > 4000) imgCount = this.attackAnimation(imgCount);
        else {
            this.x = posititon_x; // reset boss position after attack
            super.swimAnimation(this.bossFloating);
        }
        return imgCount;
    }

    /**
     * With this function the boss will follow hero with a delay 
     */
    followAnimation() {
        const delayFactor = 0.05;
        const targetY = this.world2.hero.y - 100;
        this.y += (targetY - this.y) * delayFactor;
    }

    /**
     * THis function calls the boss attack animation inklusive attack move
     * 
     * @param number imgCount  - imgCount is used in function resetAttack() to reset the attack time
     * @returns - imgCount
     */
    attackAnimation(imgCount) {
        this.action = 'attack';
        this.x -= 30;
        if (this.action === 'attack') super.swimAnimation(this.bossAttack);
        this.action = 'idle';
        this.resetAttack(++imgCount);
        return imgCount;
    }

    /**
     * This function resets the attack time
     * 
     * @param {number} attackImgCounter - used for reset the time for next attack animation
     */
    resetAttack(attackImgCounter) {
        if (attackImgCounter % this.bossAttack.length === 0) this.idleTime = new Date().getTime();
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