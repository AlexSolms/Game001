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
    swimAnimation(imgJson) {
        this.currentImage === imgJson.length ? this.currentImage = 0 : '';
        let path = imgJson[this.currentImage];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    
}
