const canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


// Первый путь
ctx.beginPath();
ctx.lineWidth = 3;
ctx.strokeStyle = 'blue';
// ctx.moveTo(0, 125);
// ctx.lineTo(35, 105);
// ctx.lineTo(75, 120);
// ctx.lineTo(105, 65);
// ctx.lineTo(200, 105);
// ctx.lineTo(120, 80);
// ctx.lineTo(135, 70);
// ctx.lineTo(300, 200);
// ctx.lineTo(160, 100);
// ctx.lineTo(200, 50);
// ctx.lineTo(240, 100);
ctx.stroke();

// Второй путь
ctx.beginPath();
ctx.strokeStyle = 'green';
// ctx.moveTo(0, 60);
// ctx.lineTo(40, 90);
// ctx.lineTo(60, 120);
// ctx.lineTo(90, 85);
// ctx.lineTo(290, 35);
// ctx.lineTo(130, 125);
// ctx.lineTo(150, 90);
// ctx.lineTo(310, 205);
// ctx.lineTo(180, 120);
// ctx.lineTo(240, 140);
ctx.stroke();