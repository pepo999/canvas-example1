
const myCanvas = document.getElementById('my-canvas');

const ctx = myCanvas.getContext('2d');

for (let i = 0; i < 100; i++) {
    const originX = Math.random() * 600;
    const originy = Math.random() * 600;
    const width = Math.random() * 100;
    const height = Math.random() * 100;

    ctx.strokeRect(originX, originy, width, height);
}

let inputX = document.getElementById('x-input');
let x = inputX.value;
let inputY = document.getElementById('y-input');
let y = inputY.value;
let maxIterationsInput = document.getElementById('iteration-input')
const iterations = maxIterationsInput.value;
let rotation = document.getElementById('rotation-input');
let rotate = rotation.value;

let r = 80;
let g = 1;
let b = 80;


function generate() {
    ctx.fillRect(0, 0, 1000, 1000);
    ctx.fillStyle = 'rgb(0, 0, 0)';
    let startX = 500;
    let startY = 500;
    let counter = 0;
    ctx.strokeStyle = `rgb(${r},${g},${b})`;
    ctx.beginPath();
    ctx.moveTo(500, 1000);
    ctx.lineTo(startX, startY);
    ctx.stroke();
    recursiveLeft(startX, startY, counter, rotate);
    recursiveRight(startX, startY, counter, rotate);
}

function recursiveLeft(startx, starty, counter, rotate) {  
    console.log('startXL = ' + startx + ' , startyL = ' + starty + ' and counterL = ' + counter + 'and rotate ' + rotate)
    if((counter * counter) >= iterations) {
        return;
    }
    r+= counter * 5;
    g+= counter * 5;
    b+= counter * 5;
    ctx.strokeStyle = `rgb(${r},${g},${b})`
    ctx.beginPath();
    ctx.moveTo(startx, starty);
    let newStartX = startx - (starty / 2);
    let newStartY = starty / 2;
    let newRotater = Number(rotate);
    ctx.lineTo(newStartX, newStartY);
    ctx.stroke();
    recursiveLeft(newStartY, newStartY, counter + 1, newRotater);
    recursiveRight(newStartX, newStartY, counter + 1, newRotater);
 
}

function recursiveRight(startx, starty, counter, rotate) {  
    console.log('startXR = ' + startx + ' , startyR = ' + starty + ' and counterR = ' + counter + 'and rotate ' + rotate)
    if((counter * counter) >= iterations) {
        return;
    }
    r+= counter * 5;
    g+= counter * 5;
    b+= counter * 5;
    ctx.strokeStyle = `rgb(${r},${g},${b})`
    ctx.beginPath();
    ctx.moveTo(startx, starty);
    let newStartX = startx + (starty / 2);
    let newStartY = starty / 2;
    let newRotater = Number(rotate);
    ctx.lineTo(newStartX, newStartY);
    ctx.stroke();
    recursiveLeft(newStartX, newStartY, counter + 1, newRotater);
    recursiveRight(newStartX, newStartY,counter +1, newRotater);
}


// function draw() {
//         var ctx = document.getElementById('my-canvas').getContext('2d');

//         var currentPoint={x: 500, y: 300}; //start point
//         var moveDist = 300;
//         var turnAngle = 144;
//         var repetitions = 5;
//         var turnAngleRadians = turnAngle * (Math.PI/180)
//         var moveVector = {x:moveDist, y:0}; //start facing right

//         ctx.beginPath();
//         ctx.moveTo(currentPoint.x, currentPoint.y);
//         for(i=0;i<repetitions;i++){
//             moveVector = updateMV(moveVector, turnAngleRadians);
//             currentPoint.x = currentPoint.x + moveVector.x;
//             currentPoint.y = currentPoint.y + moveVector.y;
//             ctx.lineTo(currentPoint.x, currentPoint.y);
//         }
//         ctx.stroke();
//     }

// function updateMV(moveVector, turnAngleRadians){
//     var x2, y2
//     x2 =    Math.cos(turnAngleRadians) * moveVector.x - Math.sin(turnAngleRadians) * moveVector.y;
//     y2 =    Math.sin(turnAngleRadians) * moveVector.x - Math.cos(turnAngleRadians) * moveVector.y;
//     moveVector.x = x2;
//     moveVector.y = y2;
//     return moveVector
// }