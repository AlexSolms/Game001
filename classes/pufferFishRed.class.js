class PufferFishRed extends PufferFish{

    puffFishRedNormalMovement = [
        './images/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png'
    ]
    puffFishRedBubbleMovement = [
        './images/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim1.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim2.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim3.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim4.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim5.png'
    ]
    puffFishRedTransistion = [
        './images/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition1.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition2.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition3.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition4.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition5.png'

    ]

    puffFishRedDie = [
        './images/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3_1.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3_2.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3_3.png'
    ]
    currentImage = 0;

    constructor() {
        //debugger;
        super().loadImage(this.puffFishRedBubbleMovement[1]);
        super.loadImages(this.puffFishRedBubbleMovement);
        super.animate(this.puffFishRedBubbleMovement);
        console.log('PuffRed ', this.y );
    }

}