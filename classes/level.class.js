class Level {
  activeOpponent;
  oceanBackground;
  levelEnd_x = 3300; //max How far hero can swim, used in class hero
  // collisionTracker = false;

  constructor(activeOpponent, oceanBackground) {
  
    // debugger;
    this.activeOpponent = activeOpponent;
    this.oceanBackground = oceanBackground;
    this.checkCollisionsUntilNoOverlap(activeOpponent);
  }

  // Funktion zur Überprüfung von Kollisionen
  checkCollisionsUntilNoOverlap(opponents) {
    let hasOverlap = true;
    while (hasOverlap) {
      hasOverlap = false;
      for (let i = 0; i < opponents.length; i++) {
        for (let j = i + 1; j < opponents.length; j++) {
          if (this.isColliding(opponents[i], opponents[j])) {
            this.adjustCollision(opponents[j]);
            hasOverlap = true;
          }
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
    obj.x = Math.floor(Math.random() * 2500) + 500;
    obj.y = Math.floor(Math.random() * 379) + 10; 
  }
}