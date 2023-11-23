class JellyFishGreen extends JellyFish{
    
    jellyFishPic = {
    "jellyMovement" : [
        './images/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png',
        './images/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png',
        './images/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png',
        './images/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png'
     ],
     "jellyDead" : [
        './images/2.Enemy/2 Jelly fish/Dead/green/g1.png',
        './images/2.Enemy/2 Jelly fish/Dead/green/g2.png',
        './images/2.Enemy/2 Jelly fish/Dead/green/g3.png',
        './images/2.Enemy/2 Jelly fish/Dead/green/g4.png',
     ]
    }
    

     constructor() {
         super().loadImage(this.jellyFishPic.jellyMovement[1]);
         super.loadImages(this.jellyFishPic.jellyMovement);
         super.animateJellyfish(this.jellyFishPic.jellyMovement);
         console.log('JellyGreen ', this.x, this.y, this.id );
     }

     
}