let canvas;
let world;
const CANVASWIDTH = 720;
const CANVASHEIGHT = 400;
let keyboard = new Keyboard();



function init() {
    canvas = document.getElementById('canvas')
    world = new World(canvas, keyboard);
   
  
}
//console.log(keyboard);

window.addEventListener("keydown", (e) =>{
 (e.code === "ArrowUp" ||  e.code === "KeyW") ? keyboard.up = true : '';
 (e.code == "ArrowDown" ||  e.code === "KeyS") ? keyboard.down = true : '';
 (e.code == "ArrowLeft" ||  e.code === "KeyA") ? keyboard.left = true : '';
 (e.code == "ArrowRight" ||  e.code === "KeyR") ? keyboard.right = true : '';
 e.code == "Space"? keyboard.space = true : '';
//  console.log(e.code);
//  console.log(keyboard);
});
window.addEventListener("keyup", (e) =>{
    (e.code === "ArrowUp" ||  e.code === "KeyW") ? keyboard.up = false : '';
    (e.code == "ArrowDown" ||  e.code === "KeyS") ? keyboard.down = false : '';
    (e.code == "ArrowLeft" ||  e.code === "KeyA") ? keyboard.left = false : '';
    (e.code == "ArrowRight" ||  e.code === "KeyR")? keyboard.right = false : '';
    e.code == "Space"? keyboard.space = false : '';
   //  console.log(e.code);
//  console.log(keyboard);
   });

/* window.onkeydown = (ev) => {
    console.log('onkeydown: ' + ev.key);
 };
 window.onkeyup = function(ev) {
    console.log('onkeyup: ' + ev.key);
 }; */