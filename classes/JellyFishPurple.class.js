class JellyFishPurple extends JellyFish{
    
    jellyPurpleMovement = [
        './images/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        './images/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        './images/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        './images/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png'
     ]
     jellyPurpleDead = [
        './images/2.Enemy/2 Jelly fish/Dead/Lila/L1.png',
        './images/2.Enemy/2 Jelly fish/Dead/Lila/L2.png',
        './images/2.Enemy/2 Jelly fish/Dead/Lila/L3.png',
        './images/2.Enemy/2 Jelly fish/Dead/Lila/L4.png',
     ]
     currentImage = 0;

     constructor() {
         super().loadImage(this.jellyPurpleMovement[0]);
         super.loadImages(this.jellyPurpleMovement);
         super.animate(this.jellyPurpleMovement);
         console.log('JellyFishPurple ', this.y );

     }
}