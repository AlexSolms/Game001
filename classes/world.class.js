class World {

    hero = new Hero();
   /*  opponents = [
        new Opponents(0),
        new Opponents(1),
        new Opponents(2),
        
    ]; // das opponentsarr muss mit einer funktion beladen werden das random Gegner erzeugt. vielleicht nen max von 5. */
    jellyFish = new JellyFishYellow();
    oceanBackground = [
        new BackgroundOcean(),
        new BackgroundLayer2(),
        new BackgroundLayer1(),
        new BackgroundBottom(),
    ]

    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        //this.draw = this.draw.bind(this); // Binden Sie die draw-Funktion an das aktuelle Objekt
        this.canvas = canvas;
        this.draw();
    }

    draw() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // clears canvas
        this.oceanBackground.forEach(element => {
            
            this.ctx.drawImage(element.img, element.x, element.y, element.width, element.height);
        });
       /*  let opponentsToDraw = [  //this Object could hold all active moveable Objects
            { image: this.opponents[0].img, x: 400, y: 200, width: 120, height: 120 },
            { image: this.opponents[1].img, x: 400, y: 0, width: 120, height: 120 },
            { image: this.opponents[2].img, x: 400, y: 100, width: 120, height: 120 },
        ]; */

        this.ctx.drawImage(this.jellyFish.img, this.jellyFish.x, this.jellyFish.y ,this.jellyFish.width, this.jellyFish.height); // in diesem Fall ist this halt world
        this.ctx.drawImage(this.hero.img, this.hero.x, this.hero.y ,this.hero.width, this.hero.height); // in diesem Fall ist this halt world
       
      /*   opponentsToDraw.forEach(element => {
            this.ctx.drawImage(element.image, element.x, element.y, element.width, element.height);
        });
         */

        let self = this;  // Alternative zu this.draw.bind(this);
        requestAnimationFrame(function () { // requestAnimationFrame calls function draw() in sync with the refresh rate of the browser. 
            self.draw();  // self is neccessary to bind the correct this (from World) to the draw
        });
    }
}