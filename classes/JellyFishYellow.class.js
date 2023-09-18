class JellyFishYellow extends JellyFish {


  
    JellyYellowMovement = [
        './images/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
        './images/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
        './images/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
        './images/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png',
    ]
    JellyYellowDead = [
        './images/2.Enemy/2 Jelly fish/Dead/Yellow/y1.png',
        './images/2.Enemy/2 Jelly fish/Dead/Yellow/y2.png',
        './images/2.Enemy/2 Jelly fish/Dead/Yellow/y3.png',
        './images/2.Enemy/2 Jelly fish/Dead/Yellow/y4.png'
    ]

    constructor(){
        
        super().loadImage(this.JellyYellowMovement[2]);
        console.log(this.JellyYellowMovement[0]);
    }

}