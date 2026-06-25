window.onload = function () {
    const canvas = document.getElementById("meinCanvas");
    const ctx = canvas.getContext("2d");


    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "lightblue";
    ctx.rect(300, 300, 200, 200);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(300, 300);
    ctx.lineTo(400, 200);
    ctx.lineTo(500, 300);
    ctx.closePath();
    ctx.fillStyle = "red";
    ctx.fill();

    ctx.beginPath();
    ctx.rect(375, 400, 50, 100);
    ctx.fillStyle = "black";
    ctx.fill();

   
};