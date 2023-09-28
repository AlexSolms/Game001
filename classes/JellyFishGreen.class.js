class JellyFishGreen extends JellyFish{
    
    jellyGreenMovement = [
        './images/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png',
        './images/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png',
        './images/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png',
        './images/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png'
     ]
     jellyGreenDead = [
        './images/2.Enemy/2 Jelly fish/Dead/green/g1.png',
        './images/2.Enemy/2 Jelly fish/Dead/green/g2.png',
        './images/2.Enemy/2 Jelly fish/Dead/green/g3.png',
        './images/2.Enemy/2 Jelly fish/Dead/green/g4.png',
     ]
     //currentImage = 0;

     constructor() {
         super().loadImage(this.jellyGreenMovement[1]);
         super.loadImages(this.jellyGreenMovement);
         //super.animate(this.jellyGreenMovement);
         super.animateJellyfish(this.jellyGreenMovement);
         console.log('JellyGreen ', this.y );
     }

}