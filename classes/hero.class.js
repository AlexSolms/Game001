class Hero extends MovableObject {
    width = 300;
    height = 300;
    y = 80;
    x = -50;
    world;
    heroIdle = [
        './images/1.Sharkie/1.IDLE/1.png',
        './images/1.Sharkie/1.IDLE/2.png',
        './images/1.Sharkie/1.IDLE/3.png',
        './images/1.Sharkie/1.IDLE/4.png',
        './images/1.Sharkie/1.IDLE/5.png',
        './images/1.Sharkie/1.IDLE/6.png',
        './images/1.Sharkie/1.IDLE/7.png',
        './images/1.Sharkie/1.IDLE/8.png',
        './images/1.Sharkie/1.IDLE/9.png',
        './images/1.Sharkie/1.IDLE/10.png',
        './images/1.Sharkie/1.IDLE/11.png',
        './images/1.Sharkie/1.IDLE/12.png',
        './images/1.Sharkie/1.IDLE/13.png',
        './images/1.Sharkie/1.IDLE/14.png',
        './images/1.Sharkie/1.IDLE/15.png',
        './images/1.Sharkie/1.IDLE/16.png',
        './images/1.Sharkie/1.IDLE/17.png',
        './images/1.Sharkie/1.IDLE/18.png'
    ]

    heroLongIdle = [
        './images/1.Sharkie/2.Long_IDLE/i1.png',
        './images/1.Sharkie/2.Long_IDLE/i2.png',
        './images/1.Sharkie/2.Long_IDLE/i3.png',
        './images/1.Sharkie/2.Long_IDLE/i4.png',
        './images/1.Sharkie/2.Long_IDLE/i5.png',
        './images/1.Sharkie/2.Long_IDLE/i6.png',
        './images/1.Sharkie/2.Long_IDLE/i7.png',
        './images/1.Sharkie/2.Long_IDLE/i8.png',
        './images/1.Sharkie/2.Long_IDLE/i9.png',
        './images/1.Sharkie/2.Long_IDLE/i10.png',
        './images/1.Sharkie/2.Long_IDLE/i11.png',
        './images/1.Sharkie/2.Long_IDLE/i12.png',
        './images/1.Sharkie/2.Long_IDLE/i13.png',
        './images/1.Sharkie/2.Long_IDLE/i14.png'
    ]

    heroSwim = [
        './images/1.Sharkie/3.Swim/1.png',
        './images/1.Sharkie/3.Swim/2.png',
        './images/1.Sharkie/3.Swim/3.png',
        './images/1.Sharkie/3.Swim/5.png',
        './images/1.Sharkie/3.Swim/6.png'
    ]

    heroAttack = {
        bubbleTrapWhale: [
            './images/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
            './images/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
            './images/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
            './images/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
            './images/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
            './images/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
            './images/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
            './images/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png'
        ],
        bubbleTrapNormal: [
            './images/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
            './images/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
            './images/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
            './images/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
            './images/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
            './images/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
            './images/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
            './images/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png'
        ],
        finSlap: [
            './images/1.Sharkie/4.Attack/Fin slap/1.png',
            './images/1.Sharkie/4.Attack/Fin slap/2.png',
            './images/1.Sharkie/4.Attack/Fin slap/3.png',
            './images/1.Sharkie/4.Attack/Fin slap/4.png',
            './images/1.Sharkie/4.Attack/Fin slap/5.png',
            './images/1.Sharkie/4.Attack/Fin slap/6.png',
            './images/1.Sharkie/4.Attack/Fin slap/7.png',
            './images/1.Sharkie/4.Attack/Fin slap/8.png'
        ]
    }

    heroHurt = {
        poisened: [
            './images/1.Sharkie/5.Hurt/1.Poisoned/1.png',
            './images/1.Sharkie/5.Hurt/1.Poisoned/2.png',
            './images/1.Sharkie/5.Hurt/1.Poisoned/3.png',
            './images/1.Sharkie/5.Hurt/1.Poisoned/4.png'
        ],
        shocked: [
            './images/1.Sharkie/5.Hurt/2.Electric shock/.o1.png',
            './images/1.Sharkie/5.Hurt/2.Electric shock/.o2.png',
            './images/1.Sharkie/5.Hurt/2.Electric shock/.o1.png',
            './images/1.Sharkie/5.Hurt/2.Electric shock/.o2.png',
            './images/1.Sharkie/5.Hurt/2.Electric shock/.o1.png',
            './images/1.Sharkie/5.Hurt/2.Electric shock/.o2.png'
        ]
    }

    heroDead = {
        poisened:[
            './images/1.Sharkie/6.dead/1.Poisoned/1.png',
            './images/1.Sharkie/6.dead/1.Poisoned/2.png',
            './images/1.Sharkie/6.dead/1.Poisoned/3.png',
            './images/1.Sharkie/6.dead/1.Poisoned/4.png',
            './images/1.Sharkie/6.dead/1.Poisoned/5.png',
            './images/1.Sharkie/6.dead/1.Poisoned/6.png',
            './images/1.Sharkie/6.dead/1.Poisoned/7.png',
            './images/1.Sharkie/6.dead/1.Poisoned/8.png',
            './images/1.Sharkie/6.dead/1.Poisoned/9.png',
            './images/1.Sharkie/6.dead/1.Poisoned/10.png',
            './images/1.Sharkie/6.dead/1.Poisoned/11.png',
            './images/1.Sharkie/6.dead/1.Poisoned/12.png'
        ],
        shocked:[
            './images/1.Sharkie/6.dead/2.Electro_shock/3.png',
            './images/1.Sharkie/6.dead/2.Electro_shock/2.png',
            './images/1.Sharkie/6.dead/2.Electro_shock/4.png',
            './images/1.Sharkie/6.dead/2.Electro_shock/5.png',
            './images/1.Sharkie/6.dead/2.Electro_shock/8.png',
            './images/1.Sharkie/6.dead/2.Electro_shock/9.png',
            './images/1.Sharkie/6.dead/2.Electro_shock/10.png'
        ]

    }
    currentImage = 0;

    constructor() {
        super().loadImage('./images/1.Sharkie/1.IDLE/1.png');
        super.loadImages(this.heroLongIdle); //located in movableObjects
        
        super.animate(this.heroSwim); //located in movableObjects
    }

}