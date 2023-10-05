class Level {
    activeOpponent;
    oceanBackground;
    levelEnd_x = 3300; //max How far hero can swim, used in class hero
    collisionTracker = false;

    constructor(activeOpponent, oceanBackground) {
       // debugger;
        this.activeOpponent = activeOpponent;
        this.oceanBackground = oceanBackground;
        this.checkCollisions(activeOpponent);
    }

     // Funktion zur Überprüfung von Kollisionen
  checkCollisions(opponents) {
    for (let i = 0; i < opponents.length; i++) {
      for (let j = i + 1; j < opponents.length; j++) {
        if (this.isColliding(opponents[i], opponents[j])) {
            
          // Wenn Kollision, setze neue Koordinaten für opponents[j]
          this.adjustCollision(opponents[j]);
        }
      }
    }
  }

  // Funktion zur Überprüfung von Kollision zwischen zwei Gegnern
  isColliding(obj1, obj2) {
    return (
      obj1.x < obj2.x + obj2.width &&
      obj1.x + obj1.width > obj2.x &&
      obj1.y < obj2.y + obj2.height &&
      obj1.y + obj1.height > obj2.y
    );
  }
  adjustCollision(obj) {
    this.collisionTracker = false;
    console.log('Kollision:', obj);
    obj.x = obj.x - obj.width;
    if(obj.y + obj.height >= 376){

      //  debugger;
    obj.y = obj.y + obj.height;
    console.log('new: ', obj);
}else{obj.y = obj.y - obj.height;
    console.log('new: ', obj);}
    // Hier kannst du deine Logik implementieren, um die Koordinaten anzupassen.
    // Zum Beispiel: obj.x = neueX; obj.y = neueY;
    // Du musst sicherstellen, dass die neuen Koordinaten nicht mit anderen Objekten kollidieren.
  }
}