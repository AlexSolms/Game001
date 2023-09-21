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
    animate(imgJson){
        setInterval(()=>{
        this.currentImage === imgJson.length ? this.currentImage = 0 : '';
        let path = imgJson[this.currentImage]; 
        this.img = this.imageCache[path];
        this.currentImage++;
        },140);
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
