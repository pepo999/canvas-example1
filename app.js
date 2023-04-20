const myCanvas = document.getElementById('my-canvas');

const ctx = myCanvas.getContext('2d');

const point = {
    x: 400,
    y: 400
}

ctx.fillStyle = 'rebeccapurple';
ctx.fillRect(point.x, point.y, 1, 1)