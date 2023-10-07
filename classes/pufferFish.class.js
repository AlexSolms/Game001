class PufferFish extends Opponents {
    height = 50;
    width = 80;
    attack = false;

    animatePufferfish(imgJson) {
        setInterval(() => {
            console.log(this.attack);
            if(!this.attack)super.swimAnimation(imgJson);
        }, 140);
    }

    isHeroNear(hero) {
        const distance = Math.abs((hero.x + hero.width / 2) - this.x); // verschiebe x in die Mitte vom Helden
        return distance < 300;
    }

  moveTowardsHero(hero) {
     const speed = 0.5; // Anpassen der Geschwindigkeit nach Bedarf
     const interval = 1000 / 60; // 60 FPS (Frames per Second)
     let heroX = hero.x + hero.width/2;
     const moveInterval = setInterval(() => {
         const distance = heroX- this.x;

         if (Math.abs(distance) > 300 || Math.abs(distance) <= 150) {
             clearInterval(moveInterval); // Stoppe das Interval, wenn die Distanz größer als 300 ist
             this.attack= false;
             if (Math.abs(distance) <= 150) {
                 this.attack= true;
                 this.animatePufferfish(this.puffFishBubbleMovement);
             }
         } else if (Math.abs(distance) > speed) {
             const direction = distance / Math.abs(distance); // 1 if move right, -1 if to move left
             //console.log(direction);
             this.x += direction * Math.min(speed, Math.abs(distance)); // Begrenze die Schritte auf die Geschwindigkeit
         } else {
             // Wenn die verbleibende Distanz kleiner als die Geschwindigkeit ist, bewege sich direkt zum Ziel
             this.x = heroX;
             clearInterval(moveInterval); // Stoppe das Interval, wenn das Ziel erreicht ist
             this.attack= false;
         }
     }, interval);
 } 
}
