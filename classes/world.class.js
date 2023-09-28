class World {
    level = level1;

    hero = new Hero();
    boss = new Boss();
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    introDone = false;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        //console.log(this.keyboard);
    }

    setWorld() {
        this.hero.world = this; // muss testen ob ich hier nicht einfach this.world statt this.hero.world schreiben kann
        this.boss.world2 = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // clears canvas
        this.ctx.translate(this.camera_x, 0);

        this.drawMultObj(this.level.oceanBackground);
        this.drawMultObj(this.level.activeOpponent);
        this.drawImg(this.hero);
        this.drawImg(this.boss);

        this.ctx.translate(-this.camera_x, 0);

        let self = this;  // Alternative zu this.draw.bind(this);
        requestAnimationFrame(function () { // requestAnimationFrame calls function draw() in sync with the refresh rate of the browser. 
            self.draw();  // self is neccessary to bind the correct this (from World) to the draw
        });
    }

    drawMultObj(objectsToDraw) {
        objectsToDraw.forEach(o => {
            this.drawImg(o);
        });
    }

    drawImg(objektToDraw) {
        if(this instanceof Hero){debugger;}
        if (objektToDraw.otherDirection) {
            this.ctx.save();  // saves the original object
            this.ctx.translate(objektToDraw.width, 0); // moves the object with objectwidth to avoid image jump
            this.ctx.scale(-1, 1); // flips the image
            objektToDraw.x = objektToDraw.x * -1; // set object on the mirrored coordinate
        }
        try {
            this.ctx.drawImage(objektToDraw.img, objektToDraw.x, objektToDraw.y, objektToDraw.width, objektToDraw.height);
        }catch(e){
            console.warn('Error loading image ', e);
            console.warn('Could not load image ', this.img.scr);
        }
        if (objektToDraw.otherDirection) {
            objektToDraw.x = objektToDraw.x * -1 // set object on the mirrored coordinate
            this.ctx.restore() // restores the objekt 
        }
    }
}

