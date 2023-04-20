const myCanvas = document.getElementById('my-canvas');

const ctx = myCanvas.getContext('2d');

function noise() {
    for (let i = 0; i < 100000; i++) {
        const originX = Math.random() * 800;
        const originy = Math.random() * 800;
        const width = Math.random() * 2;
        const height = Math.random() * 2;

        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const alpha = Math.random();

        ctx.fillStyle = `rgba(${red},${green},${blue},${alpha})`;
        ctx.fillRect(originX, originy, width, height);
    }
}
