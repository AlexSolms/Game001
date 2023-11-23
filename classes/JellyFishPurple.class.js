class JellyFishPurple extends JellyFish {

    jellyFishPic = {
        "jellyMovement": [
            './images/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
            './images/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
            './images/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
            './images/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png'
        ],
        "jellyPurpleDead": [
            './images/2.Enemy/2 Jelly fish/Dead/Lila/L1.png',
            './images/2.Enemy/2 Jelly fish/Dead/Lila/L2.png',
            './images/2.Enemy/2 Jelly fish/Dead/Lila/L3.png',
            './images/2.Enemy/2 Jelly fish/Dead/Lila/L4.png',
        ]
    }

    constructor() {
        super().loadImage(this.jellyFishPic.jellyMovement[1]);
        super.loadImages(this.jellyFishPic.jellyMovement);
        super.animateJellyfish(this.jellyFishPic.jellyMovement);
        console.log('JellyPruple ', this.x, this.y, this.id );
    }
}