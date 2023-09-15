let canvas;
let ctx;
let character = new World();

function init() {
    canvas = document.getElementById('canvas')
    let world = new World(canvas);
    ctx = canvas.getContext('2d');
    character.src = './images/1.Sharkie/1.IDLE/1.png'
    console.log('My Char is: ', world)
    
   //ctx.drawImage(character, 20, 200 ,200, 200);
}