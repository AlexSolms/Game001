class JellyFishPink extends JellyFish{
   
    jellyPinkMovement = [
        './images/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
        './images/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
        './images/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
        './images/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png'
     ]
     jellyPinkDead = [
        './images/2.Enemy/2 Jelly fish/Dead/Pink/P1.png',
        './images/2.Enemy/2 Jelly fish/Dead/Pink/P2.png',
        './images/2.Enemy/2 Jelly fish/Dead/Pink/P3.png',
        './images/2.Enemy/2 Jelly fish/Dead/Pink/P4.png',
     ]
     currentImage = 0;

     constructor() {
         super().loadImage(this.jellyPinkMovement[0]);
         super.loadImages(this.jellyPinkMovement);
         super.animate(this.jellyPinkMovement);
         console.log('JellyPink ', this.y );
     }
 
}