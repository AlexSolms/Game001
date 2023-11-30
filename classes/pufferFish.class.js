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
            
        }, 140);
    }

    moveTowardsHero(hero) {
        const moveInterval = setInterval(() => {
        const heroX = hero.x + hero.width / 1.5; // verscheibe das x vor sharkie, es ist ansonsten an seinem Ende
        const heroY = hero.y + hero.height / 2; // Berücksichtige die Höhe des Helden, Verschiebung des y in die Mitte von Sharki
        const puffX = this.x - this.width / 2;
        const puffY = this.y - this.height / 2; // Berücksichtige die Höhe des Pufferfish
        const distanceX = heroX - puffX;
        let distanceY = heroY - puffY;
       
            // muss das ändern, der Pufferfish soll nur auf hero zuschwimmen, wenn er vo ihm ist, ansonsten soll er bleiben wo er ist.

        const directionX = Math.abs(distanceX) / distanceX;
        if (distanceY === 0) distanceY = 0.25;
        const directionY = Math.abs(distanceY) / distanceY;

                
                // sorgt dafür, dass ich unter dem Pufferfish durchschwimmen kann wenn die Distanz größer 200 ist
                if ((Math.abs(distanceX) <= (hero.width / 4) && Math.abs(distanceY) < (this.height / 2)) || Math.abs(distanceX) >= 300 || Math.abs(distanceY) > 200) {
                    clearInterval(moveInterval);
                    this.attack = true;
                } else if (directionX < 0) { // schwimmt nur wenn sich der Sharkie von links nähert
                    if (this.x > Math.abs(distanceX - hero.width / 4)) {
                        this.x += directionX * this.speed;
                        this.y += directionY * this.speed;
                    } 
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
