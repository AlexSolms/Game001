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

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }
    /**
     * this function loads all images to the image cache with purpose of use the animation of the object
     * 
     * @param {Array} imgArr - [img1png, img2.png....]
     */
    loadImages(imgArr) {
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
    animate(imgJson) {
        
        setInterval(() => {
            this.currentImage === imgJson.length ? this.currentImage = 0 : '';
            let path = imgJson[this.currentImage];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 140);
    }

    /**
 * This funktion moves the hero depending on the given parameter
 * 
 * @param {string} direction - direction
 * @param {string} axis - if up/ down or left/right
 * @param {number} multiplier - provides the move direction
*/
    move(direction, axis, multiplier) {
        if (this.world.keyboard.left) {
            this.otherDirection = true;
        } else {
            this.otherDirection = false;
        }
        // both if are necessary for keeping the hero within the canvas
        if ((this.x >= Math.abs(this.speed * multiplier) || direction !== this.world.keyboard.left) && (this.x < this.world.level.levelEnd_x || direction !== this.world.keyboard.right)) {
            if ((this.y >= -this.world.hero.height / 2.2 || direction !== this.world.keyboard.up) && (this.y <= this.world.hero.height * 1.13 || direction !== this.world.keyboard.down)) {
                direction ? this[axis] += this.speed * multiplier : '';
            }
        }
    }
}
