class MovableObject{
    x = 20;
    y = 200;
    img;
    height;
    width;
    differentOp = [
        './images/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
        './images/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png',
        './images/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'
     ]
    loadImage(path) {
        this.img = new Image();
    /*     this.img.onload = () => { // Once the image is loaded, you can draw it on the canvas.
           world.draw(); // Redraw the canvas after the image is loaded.
        }; */
        this.img.src = path;
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
