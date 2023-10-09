class PufferFish extends Opponents {
    height = 50;
    width = 80;
    attack = false;
    imgSet;
    speed = 0.25;

    animatePufferfish(imgJson) {
        this.imgSet = imgJson;
        setInterval(() => {
            const movement = this.attack ? this.imgSet.puffFishBubbleMovement : this.imgSet.puffFishNormalMovement;
            super.swimAnimation(movement);
            /* if (!this.attack) super.swimAnimation(this.imgSet.puffFishNormalMovement);
            else super.swimAnimation(this.imgSet.puffFishBubbleMovement); */
        }, 140);
    }

    moveTowardsHero(hero) {
        const moveInterval = setInterval(() => {
            const heroX = hero.x + hero.width / 2;
            const distance = heroX - this.x;

            if (Math.abs(distance) <= 150) {
                this.attack = true;
                this.speed = 0.1;
            } else if (Math.abs(distance) >= 300) {
                this.attack = false;
            }

            const direction = distance / Math.abs(distance);
            if(Math.abs(distance)>2) this.x += direction * this.speed;

             if (Math.abs(distance) <= 2 || Math.abs(distance) >= 300) {
                //this.x += direction * speed;
                 clearInterval(moveInterval);
             }
        }, 100/6);
    }

    isHeroNear(hero) {
        const distance = Math.abs((hero.x + hero.width / 2) - this.x); // verschiebe x in die Mitte vom Helden
        return distance < 300;
    }
}
