class PoisonBottle extends MovableObject {
    width = 30;
    height = 30;
    poisonBottle = [
        './images/4. Marcadores/Posión/Dark - Left.png',
        './images/4. Marcadores/Posión/Dark - Right.png'
    ]
    
    constructor(i){
        super().loadImage(this.poisonBottle[i]); //
    }
}