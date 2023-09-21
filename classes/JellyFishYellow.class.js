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

    currentImage = 0;

    constructor() {
        super().loadImage(this.jellyYellowMovement[2]);
        super.loadImages(this.jellyYellowMovement);
        this.animate(this.jellyYellowMovement);
    }


    animate(imgJson){
        setInterval(()=>{
        this.currentImage === imgJson.length ? this.currentImage = 0 : '';
        let path = imgJson[this.currentImage]; 
        this.img = this.imageCache[path];
        this.currentImage++;
        },140);
    }
}