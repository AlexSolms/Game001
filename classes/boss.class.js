class Boss extends Opponents {
    world2;
    width = 300;
    height = 400;
    y = 0;
    x = 1300;
    bossIntroDone = false;
    currentImage = 0;

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
            // console.log(this.world2.hero);
            //debugger;
            if (this.world2.hero.x > 1100) { // && !this.bossIntroDone
                //debugger;
                if (imgCount < 10) { //!this.bossIntroDone &&  //&& this.world2.hero.x > 1916 
                    this.swimAnimation(this.bossIntroduce); //located in movableObjects
                    imgCount++; //Intro should be played one time
                    //if (imgCount === 10) { this.bossIntroDone = true; }
                }
            }
        }, 140);
        setInterval(() => {
            if (imgCount === 10) {
                this.swimAnimation(this.bossFloating);
            }

        }, 140);
    }
        /**
     * This function changes the images (source image Cache) of the object with an intervall
     * 
     * @param {JSON} imgJson 
     */
        swimAnimation(imgJson) {
                this.currentImage === imgJson.length ? this.currentImage = 0 : '';
                let path = imgJson[this.currentImage];
                this.img = this.imageCache[path];
                this.currentImage++;   
        }



}