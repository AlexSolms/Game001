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
   (e.code === "ArrowUp" || e.code === "KeyW") ? keyboard.up = true : '';
   (e.code == "ArrowDown" || e.code === "KeyS") ? keyboard.down = true : '';
   (e.code == "ArrowLeft" || e.code === "KeyA") ? keyboard.left = true : '';
   (e.code == "ArrowRight" || e.code === "KeyD") ? keyboard.right = true : '';
   e.code == "Space" ? keyboard.space = true : '';
   keyboard.press = true;
});

window.addEventListener("keyup", (e) => {
   (e.code === "ArrowUp" || e.code === "KeyW") ? keyboard.up = false : '';
   (e.code == "ArrowDown" || e.code === "KeyS") ? keyboard.down = false : '';
   (e.code == "ArrowLeft" || e.code === "KeyA") ? keyboard.left = false : '';
   (e.code == "ArrowRight" || e.code === "KeyD") ? keyboard.right = false : '';
   e.code == "Space" ? keyboard.space = false : '';
   keyboard.press = false;
});

