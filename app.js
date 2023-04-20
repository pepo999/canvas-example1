
const myCanvas = document.getElementById('my-canvas');

const ctx = myCanvas.getContext('2d');

// for (let i = 0; i < 100; i++) {
//     const originX = Math.random() * 600;
//     const originy = Math.random() * 600;
//     const width = Math.random() * 100;
//     const height = Math.random() * 100;
//     ctx.fillStyle = Math.round(Math.random() * 15)
//     ctx.strokeRect(originX, originy, width, height);
// }

let maxIterationsInput = document.getElementById('iteration-input')
const iterations = maxIterationsInput.value;

let r = 190;
let g = 1;
let b = 190;


function generate() {
    ctx.fillRect(0, 0, 1000, 1000);
    ctx.fillStyle = 'rgb(0, 0, 0)';
    let startX = 400;
    let startY = 400;
    let counter = 1;
    ctx.strokeStyle = `rgb(${r},${g},${b})`;
    ctx.beginPath();
    ctx.moveTo(400, 800);
    ctx.lineTo(startX, startY);
    ctx.stroke();
    // recursiveRight(startX, startY, counter);
    // recursiveLeft(startX, startY, counter);
    recursive(startX, startY, counter)
}

function recursive(startx, starty, counter) {
    console.log('startX = ' + startx + ' , startY = ' + starty + ' and counter = ' + counter)
    if(counter * counter >= iterations) {
        return;
    }
    ctx.strokeStyle = `rgb(${r},${g},${b})`
    ctx.beginPath();
    ctx.moveTo(startx, starty);
    let newStartXl = startx - (starty / 2);
    let newStartYl = starty / 2;
    ctx.lineTo(newStartXl, newStartYl);
    ctx.stroke();
    ctx.moveTo(startx, starty);
    let newStartXr = startx + (starty / 2);
    let newStartYr = starty / 2;
    ctx.lineTo(newStartXr, newStartYr);
    ctx.stroke();
    recursive(newStartXr, newStartYr, counter + 1);
    recursive(newStartXl, newStartYl, counter + 1);
}

// function recursiveLeft(startx, starty, counter) {
//     console.log('startXL = ' + startx + ' , startyL = ' + starty + ' and counterL = ' + counter)
//     if ((counter * counter) >= iterations) {
//         return;
//     }
//     ctx.beginPath();
//     ctx.moveTo(startx, starty);
//     let newStartX = startx - (starty / 2);
//     let newStartY = starty / 2;
//     ctx.lineTo(newStartX, newStartY);
//     ctx.stroke();
//     recursiveLeft(newStartY, newStartY, counter + 1);
//     recursiveRight(newStartX, newStartY, counter + 1);

// }

// function recursiveRight(startx, starty, counter) {
//     console.log('startXR = ' + startx + ' , startyR = ' + starty + ' and counterR = ' + counter)
//     if ((counter * counter) >= iterations) {
//         return;
//     }
//     ctx.strokeStyle = `rgb(${r},${g},${b})`
//     ctx.beginPath();
//     ctx.moveTo(startx, starty);
//     let newStartX = startx + (starty / 2);
//     let newStartY = starty / 2;
//     ctx.lineTo(newStartX, newStartY);
//     ctx.stroke();
//     recursiveLeft(newStartX, newStartY, counter + 1);
//     recursiveRight(newStartX, newStartY, counter + 1);
// }

