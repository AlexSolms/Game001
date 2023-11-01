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
            const heroY = hero.y + hero.height / 2; // Berücksichtige die Höhe des Helden
            const puffX = this.x - this.width / 2;
            const puffY = this.y - this.height / 2; // Berücksichtige die Höhe des Pufferfish

            const distanceX = heroX - puffX;
            let distanceY = heroY - puffY;
            //  if (distanceY === 0) debugger;

            const directionX = Math.abs(distanceX) / distanceX;
            if (distanceY === 0) distanceY = 0.25;
            const directionY = Math.abs(distanceY) / distanceY;

            // console.log(hero.x, puffX);

            // Set pufferFish on hold
            // sorgt dafür, dass ich unter dem Pufferfish durchschmimmen kann wenn die Distanz größer 200 ist
            if ((Math.abs(distanceX) <= (hero.width / 4) && Math.abs(distanceY) <= (this.height / 2)) || Math.abs(distanceX) >= 300 || Math.abs(distanceY) > 200) {
                // if(Math.abs(distanceX) <= (hero.width / 4))debugger;
                clearInterval(moveInterval);
                this.attack = true;
            } else if (directionX < 0) { // schwimmt nur wenn sich der Sharkie von links nähert
                if (this.x > Math.abs(distanceX - hero.width / 4)) this.x += directionX * this.speed; //
                if (this.y > Math.abs(distanceY - hero.height / 4)) this.y += directionY * this.speed; // Berücksichtige auch die y-Koordinate
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
