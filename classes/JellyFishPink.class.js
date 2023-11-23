class JellyFishPink extends JellyFish {

    jellyFishPic = {
        "jellyMovement": [
            './images/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
            './images/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
            './images/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
            './images/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png'
        ],
        "jellyDead": [
            './images/2.Enemy/2 Jelly fish/Dead/Pink/P1.png',
            './images/2.Enemy/2 Jelly fish/Dead/Pink/P2.png',
            './images/2.Enemy/2 Jelly fish/Dead/Pink/P3.png',
            './images/2.Enemy/2 Jelly fish/Dead/Pink/P4.png',
        ]
    }

     constructor() {
            super().loadImage(this.jellyFishPic.jellyMovement[1]);
            super.loadImages(this.jellyFishPic.jellyMovement);
            super.animateJellyfish(this.jellyFishPic.jellyMovement);
            console.log('JellyPink ', this.x, this.y, this.id);
        }

    }