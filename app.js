const myCanvas = document.getElementById('my-canvas');

const ctx = myCanvas.getContext('2d');

const point = {
    x: 400,
    y: 400
}

let r = 120;
let g = 1;
let b = 120;

ctx.filter = "blur(1px)";

for (let i = 0; i < 1000; i++) {   
    setInterval(() => {
        if(point.x > 800) {point.x = 400}
        if(point.y > 800) {point.y = 400}
        if(point.x < 0) {point.x = 400}
        if(point.y < 0) {point.y = 400}
        r+= Math.random() - Math.random();
        g+=Math.random() - Math.random();
        b+=Math.random() - Math.random();
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillRect(point.x, point.y, 1, 1);
        point.x = point.x + 2* Math.random() - 2* Math.random();
        point.y = point.y + 2* Math.random() - 2* Math.random(); 
    }, 100);
}

// const point2 = {
//     x: 400,
//     y: 400
// }


// ctx.filter = "blur(1px)";

// for (let i = 0; i < 1000; i++) {   
//     setInterval(() => {
//         if(point2.x > 800) {point2.x = 400}
//         if(point2.y > 800) {point2.y = 400}
//         if(point2.x < 0) {point2.x = 400}
//         if(point2.y < 0) {point2.y = 400}
//         r+= Math.random() - Math.random();
//         g+=Math.random() - Math.random();
//         b+=Math.random() - Math.random();
//         ctx.fillStyle = `rgb(${r},${g},${b})`;
//         ctx.fillRect(point2.x, point2.y, 1, 1);
//         point2.x = point2.x + 2* Math.random() - 2* Math.random() - 0.5;
//         point2.y = point2.y + 2* Math.random() - 2* Math.random() - 0.5; 
//     }, 100);
// }

