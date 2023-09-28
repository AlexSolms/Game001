class JellyFishYellow extends JellyFish {


  
    jellyYellowMovement = [
        './images/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
        './images/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
        './images/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
        './images/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png',
    ]
    jellyYellowDead = [
        './images/2.Enemy/2 Jelly fish/Dead/Yellow/y1.png',
        './images/2.Enemy/2 Jelly fish/Dead/Yellow/y2.png',
        './images/2.Enemy/2 Jelly fish/Dead/Yellow/y3.png',
        './images/2.Enemy/2 Jelly fish/Dead/Yellow/y4.png'
    ]

    //currentImage = 0;

    constructor() {
        super().loadImage(this.jellyYellowMovement[2]);
        super.loadImages(this.jellyYellowMovement);
        //super.animate(this.jellyYellowMovement);
       super.animateJellyfish(this.jellyYellowMovement);
        console.log('JellyYellow ', this.y );

    }

}