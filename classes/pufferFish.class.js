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
            const heroX = hero.x + hero.width;
            const heroY = hero.y + hero.height; // Berücksichtige die Höhe des Helden
            const puffX = this.x + this.width;
            const puffY = this.y + this.height; // Berücksichtige die Höhe des Pufferfish
    
            const distanceX = heroX - puffX;
            const distanceY = heroY - puffY;
    
            const directionX = distanceX / Math.abs(distanceX);
            const directionY = distanceY / Math.abs(distanceY);
    
           // console.log(hero.x, puffX);
    
            // Set pufferFish on hold
            if (Math.abs(distanceX) <= 2 || Math.abs(distanceX) >= 300 || Math.abs(distanceY) > 200) {
                clearInterval(moveInterval);
            } else {
                this.x += directionX * this.speed;
                this.y += directionY * this.speed; // Berücksichtige auch die y-Koordinate
            }
    
            if (Math.abs(distanceX - this.width) <= 150 && Math.abs(distanceY) <= 200) {
                this.attack = true;
                this.speed = 0.1;
            } else if (Math.abs(distanceX) >= 300 || Math.abs(distanceY) > 200) {
                this.attack = false;
            }            
            
        }, 100 / 6);
    }

    isHeroNear(hero) {
        const distance = Math.abs((hero.x + hero.width / 2) - this.x); // verschiebe x in die Mitte vom Helden
        return distance < 300;
    }
}
