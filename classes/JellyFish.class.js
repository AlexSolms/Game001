class JellyFish extends Opponents {
    height = 100;
    width = 100;
    up = true;

    animateJellyfish(imgJson) {
        setInterval(() => {
            super.swimAnimation(imgJson)
            this.Jellymove();
        }, 125);
    }

    Jellymove() {
        if (this.y > 8 && this.up) this.y -= 15;
        else {
            if (this.y + this.height < 470) {
                this.up = false;
                this.y += 15
            } else this.up = true;
        }
    }
}