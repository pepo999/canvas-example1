const myCanvas = document.getElementById('my-canvas');

const ctx = myCanvas.getContext('2d');

const inputX = document.getElementById('x-input');
const inputY = document.getElementById('y-input');
const inputSpeed = document.getElementById('speed-input')
let ctxX = inputX.value;
let ctxY = inputX.value;
let speed = inputSpeed.value/50;
myCanvas.width = ctxX;
myCanvas.height = ctxY;

let r = 130;
let g = 110;
let b = 120;

ctx.filter = "blur(1.5px)";


function walk(point, interval) {
    for (let i = 0; i < 1000; i++) {  
        setInterval(() => {
            if(point.x > ctxX) {point.x = 0}
            if(point.y > ctxY) {point.y = 0}
            if(point.x < 0) {point.x += ctxX-1}
            if(point.y < 0) {point.y += ctxY-1}
    
            r = r + Math.random() - Math.random();
            g = g + Math.random() - Math.random();
            b = b + Math.random() - Math.random();
            ctx.fillStyle = `rgb(${r},${g},${b},1)`;
            ctx.fillRect(point.x, point.y, (Math.random()) + 2, (Math.random()) + 2);
            point.x = point.x + (Math.random() - Math.random())* (speed);
            point.y = point.y + (Math.random() - Math.random())* (speed); 
        }, interval);
    }
}

const point1 = new Point()
const point2 = new Point()
const point3 = new Point()
const point4 = new Point()

// darken(1)
// walk(point1, 25)
let blur = 0;

function darken(interval){
    setInterval(() => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; 
        ctx.fillRect(0, 0, ctxX, ctxY);
    }, interval);
}