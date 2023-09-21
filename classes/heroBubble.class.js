class Bubble extends MovableObject {
    width = 300;
    height = 300;

    bubble=[
        './images/1.Sharkie/4.Attack/Bubble trap/Bubble.png',
        './images/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png'
    ]
    constructor(i){
        super().loadImage(this.bubble[i]); //
    }
}