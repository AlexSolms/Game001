class PufferFishPink extends PufferFish{
    pufferFishImgSet = {   
    "puffFishNormalMovement" : [
        './images/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png'
    ],
    "puffFishBubbleMovement" : [
        './images/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim1.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim2.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim3.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim4.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim5.png'
    ],
    "puffFishTransistion" : [
        './images/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition1.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition2.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition3.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition4.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition5.png'

    ],

    "puffFishDie" : [
        './images/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2_1.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2_2.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2_3.png'
    ]
}
    //currentImage = 0;

    constructor() {
        super();
        super.loadImage(this.pufferFishImgSet.puffFishNormalMovement[1]);
        super.loadImages(this.pufferFishImgSet.puffFishNormalMovement);
        super.loadImages(this.pufferFishImgSet.puffFishBubbleMovement);
        
       super.animatePufferfish(this.pufferFishImgSet);
        console.log('PuffPink ', this.x, this.y, this.id );
    }

}