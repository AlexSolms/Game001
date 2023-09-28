class PufferFishGreen extends PufferFish{
   
    puffFishGreenNormalMovement = [
        './images/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
    ]
    puffFishGreenBubbleMovement = [
        './images/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim1.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim2.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim3.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim4.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim5.png'
    ]
    puffFishGreenTransistion = [
        './images/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png'

    ]

    puffFishGreenDie = [
        './images/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1_1.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1_2.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1_3.png'
    ]
    //currentImage = 0;

     constructor() {
         super().loadImage(this.puffFishGreenNormalMovement[1]);
         super.loadImages(this.puffFishGreenNormalMovement);
         //super.animate(this.puffFishGreenNormalMovement);
        super.animatePufferfish(this.puffFishGreenNormalMovement);
         console.log('PuffGreen ', this.y );
     }

}