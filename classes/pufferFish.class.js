class PufferFish extends Opponents{
    height = 50;
    width = 80;

    constructor() {
        super();
    }

    animatePufferfish(imgJson){
        setInterval(()=>{
            super.swimAnimation(imgJson)
        },140);
    }
}