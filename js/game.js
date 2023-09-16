let canvas;
let world;



function init() {
    canvas = document.getElementById('canvas')
    world = new World(canvas);
   
    //character.src = './images/1.Sharkie/1.IDLE/1.png'
    console.log('My Char is: ', world.hero.img.src);

    
    console.log('My Char is: ', world.hero2);
   
   /*  */
}