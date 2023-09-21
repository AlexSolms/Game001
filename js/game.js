let canvas;
let world;
const CANVASWIDTH = 720;
const CANVASHEIGHT = 400;



function init() {
    canvas = document.getElementById('canvas')
    world = new World(canvas);
   
   
}