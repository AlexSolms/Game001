class MovableObject {
    x = 0;
    y = 100;
    img;
    height;
    width;
    speed = 0.15;
    otherDirection = false;
    imageCache = {};
    currentImage = 0;

    /**
     * This function loads an image provided by path as soucre attribute to img of object
     * 
     * @param {string} path - path of image
     */
    loadImage(path) {
        //console.log('Pfad: ',path);
        this.img = new Image();
        this.img.src = path;
    }


    /**
     * this function loads all images to the image cache with purpose of use the animation of the object
     * 
     * @param {Array} imgArr - [img1png, img2.png....]
     */
    loadImages(imgArr) {
        //console.log('Array: ',imgArr);
        imgArr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    /**
     * This function changes the images (source image Cache) of the object with an intervall
     * 
     * @param {JSON} imgJson 
     */
    swimAnimation(imgJson, test) {
        if (this instanceof Hero) {
            //console.log(imgJson);
            if (test == 1) {
                // console.log(imgJson);
                //debugger;
            }
        }
        //Ich habe hier einen Fehler, der erzeuget wird wenn ich eine neue animation laden will
        // läuft die alte Animation noch
        this.currentImage >= imgJson.length ? this.currentImage = 0 : '';
        let path = imgJson[this.currentImage];
        this.img = this.imageCache[path];
        //console.log('loaded img: '.this.img);
        this.currentImage++;
    }


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    drawFrame(ctx) {
        this.drawFrameOpponents(ctx);
        this.drawFrameHero(ctx);
    }

    drawFrameOpponents(ctx){
        if (this instanceof Opponents) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'white';
            ctx.arc(this.x + this.width / 2, this.y + this.height / 2, Math.max(this.width, this.height) / 2, 0, 2 * Math.PI);
            console.log('radius: ', Math.max(this.width, this.height) / 2);
            ctx.stroke();
        }
    }
    drawFrameHero(ctx){
        if (this instanceof Hero || this instanceof Boss) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'white';
            ctx.rect(this.x +40, this.y + 100, this.width - 80, this.height - 150);
            // ich muss hier 2 rechtecke entwickeln, die an die Kontrahenten angepasst sind
            //console.log('radius: ', Math.max(this.width, this.height) / 2);
            ctx.stroke();
        }
    }


    collitionDetector(obj_1, obj_2) {
        let dx = obj_2.x - obj_1.x;
        let dy = obj_2.y - obj_1.y;
        let r1 = Math.max(this.width, this.height) / 2;
    }

}
