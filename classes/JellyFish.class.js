class JellyFish extends Opponents {
    height = 100;
    width = 100;
    
    animateJellyfish(imgJson) {
        setInterval(() => {
            super.swimAnimation(imgJson)
        }, 140);
    }

}