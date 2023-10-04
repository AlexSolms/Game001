let canvas;
let world;
const CANVASWIDTH = 720;
const CANVASHEIGHT = 400;
let keyboard = new Keyboard();



function init() {
   canvas = document.getElementById('canvas')
   world = new World(canvas, keyboard);
}


window.addEventListener("keydown", (e) => {
   if(e.code === "ArrowUp" || e.code === "KeyW") keyboard.up = true;
   if(e.code == "ArrowDown" || e.code === "KeyS") keyboard.down = true;
   if(e.code == "ArrowLeft" || e.code === "KeyA") keyboard.left = true;
   if(e.code == "ArrowRight" || e.code === "KeyD") keyboard.right = true;
   if(e.code == "KeyB") keyboard.debug = !keyboard.debug;
   if(e.code == "Space") keyboard.space = true;
   (keyboard.up||keyboard.down||keyboard.left||keyboard.right) ? keyboard.press = true : keyboard.press = false;
});



window.addEventListener("keyup", (e) => {
   (e.code === "ArrowUp" || e.code === "KeyW") ? keyboard.up = false : '';
   (e.code == "ArrowDown" || e.code === "KeyS") ? keyboard.down = false : '';
   (e.code == "ArrowLeft" || e.code === "KeyA") ? keyboard.left = false : '';
   (e.code == "ArrowRight" || e.code === "KeyD") ? keyboard.right = false : '';
   e.code == "Space" ? keyboard.space = false : '';
   keyboard.press = false;
});

