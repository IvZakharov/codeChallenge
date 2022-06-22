const canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.fillStyle = '#FFF';
ctx.globalAlpha = 0.05;

for (i=0; i<6; i++) {
    ctx.beginPath();
    ctx.arc(130, 130, 35+15*i, 0, Math.PI*2, true);
    ctx.arc(130, 130, 45+15*i, 0, Math.PI*2, true);
    ctx.arc(130, 130, 55+15*i, 0, Math.PI*2, true);
    ctx.arc(130, 130, 65+15*i, 0, Math.PI*2, true);
    ctx.fill();
}

ctx.beginPath();
ctx.fillStyle = '#fff';
ctx.globalAlpha = 1;
ctx.arc(130, 130, 50, 0, Math.PI*2, true);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = '#f0f0f0';
ctx.globalAlpha = 1;
ctx.globalAlpha = 0;
ctx.arc(135, 155, 12, 0, Math.PI*2, true);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = '#f0f0f0';
ctx.globalAlpha = 1;
ctx.globalAlpha = 0;
ctx.arc(100, 120, 18, 0, Math.PI*2, true);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = '#f0f0f0';
ctx.globalAlpha = 1;
ctx.globalAlpha = 0;
ctx.arc(150, 110, 14, 0, Math.PI*2, true);
ctx.fill();