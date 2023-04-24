
const myCanvas = document.getElementById('my-canvas');

const ctx = myCanvas.getContext('2d');

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
    recursive(startX, startY, counter);
    ctx.translate(xValue, xValue)
    ctx.rotate(Math.PI);
    recursive(startX, startY, counter);
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

function recursive1(startX, startY, counter) {
    ctx.translate(startX, startY);
    ctx.rotate(Math.PI);
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

