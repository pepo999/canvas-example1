
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

let inputX;
let xValue;
let maxIterationsInput;
let iterations;
let r = 190;
let g = 0;
let b = 190;

function generate() {
    inputX = document.getElementById('x-input');
    xValue = inputX.value;
    maxIterationsInput = document.getElementById('iteration-input');
    iterations = maxIterationsInput.value;
    myCanvas.width = xValue;
    myCanvas.height = xValue;
    ctx.fillStyle = `rgb(0, 0, 0)`;
    ctx.fillRect(0, 0, xValue, xValue);
    let startX = xValue / 2;
    let startY = xValue / 2;
    let counter = 1;
    ctx.strokeStyle = `rgb(${r},${g},${b})`;
    ctx.beginPath();
    ctx.moveTo(xValue / 2, xValue);
    ctx.lineTo(startX, startY);
    ctx.stroke();
    recursive(startX, startY, counter)
}

function recursive(startX, startY, counter) {
    console.log('startX = ' + startX + ' , startY = ' + startY + ' and counter = ' + counter)
    if (counter * counter >= iterations) {
        return;
    }
    ctx.strokeStyle = `rgb(${r},${g},${b})`
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    let newStartXl = startX - (startY / 2);
    let newStartYl = startY / 2;
    ctx.lineTo(newStartXl, newStartYl);
    ctx.stroke();
    ctx.moveTo(startX, startY);
    let newStartXr = startX + (startY / 2);
    let newStartYr = startY / 2;
    ctx.lineTo(newStartXr, newStartYr);
    ctx.stroke();
    counter++;
    recursive(newStartXr, newStartYr, counter);
    recursive(newStartXl, newStartYl, counter);
}

// function recursive(startX, startY, counter) {
//     console.log('startX = ' + startX + ' , startY = ' + startY + ' and counter = ' + counter)
//     if (counter * counter >= iterations) {
//         return;
//     }
//     ctx.strokeStyle = `rgb(${r},${g},${b})`
//     ctx.beginPath();
//     ctx.moveTo(startX, startY);
//     let newStartXlUp = startX - (startY / 2);
//     let newStartYlUp = startY / 2;
//     ctx.lineTo(newStartXlUp, newStartYlUp);
//     ctx.stroke();
//     ctx.moveTo(startX, startY);
//     let newStartXrUp = startX + (startY / 2);
//     let newStartYrUp = startY / 2;
//     ctx.lineTo(newStartXrUp, newStartYrUp);
//     ctx.stroke();
//     ctx.moveTo(startX, startY);
//     let newStartXlDown = startY /2;
//     let newStartYlDown = startX + (startY / 2);
//     ctx.lineTo(newStartXlDown, newStartYlDown);
//     ctx.stroke();
//     ctx.moveTo(startX, startY);
//     let newStartXrDown = startY /2;
//     let newStartYrDown = startX + (startY / 2);
//     ctx.lineTo(newStartXrDown, newStartYrDown);
//     ctx.stroke();
//     counter++;
//     recursive(newStartXrUp, newStartYrUp, counter);
//     recursive(newStartXlUp, newStartYlUp, counter);
//     recursive(newStartXrDown, newStartYrDown, counter);
//     recursive(newStartXlDown, newStartYlDown, counter);
// }