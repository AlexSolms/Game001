class MovableObject {
    x = 10;
    y = 100;
    img;
    height;
    width;
    imageCache = {};

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }
    /**
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

    moveRight() {
        console.log('Move right');
    }
    moveLeft() {

    }
    moveUp() {

    }
    moveDown() {

    }

}
