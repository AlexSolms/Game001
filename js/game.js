let canvas;
let world;
const CANVASWIDTH = 720;
const CANVASHEIGHT = 400;



function init() {
    canvas = document.getElementById('canvas')
    world = new World(canvas);
   
    //character.src = './images/1.Sharkie/1.IDLE/1.png'
    console.log('My Char is: ', world.hero.img.src);

    
    console.log('My Char is: ', world.hero2);
   
   /* ctx.drawImage(world.opponents[1].images[1], 400, 0 ,200, 200);
   ctx.drawImage(world.opponents[2].images[2], 400, 100 ,200, 200); */
}