window.onload = function () {
    const canvas = document.getElementById("meinCanvas");
    const ctx = canvas.getContext("2d");


    ctx.beginPath();
    ctx.arc(100, 100, 70, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "lightblue";
    ctx.rect(-300, 300, 1300, 300);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(300, 300);
    ctx.lineTo(400, 200);
    ctx.lineTo(500, 300);
    ctx.closePath();
    ctx.fillStyle = "red";
    ctx.fill();

    ctx.beginPath();
    ctx.rect(367, 400, 100, 200);
    ctx.fillStyle = "red";
    ctx.fill();

    ctx.beginPath();
    ctx.rect(700, 350, 40, 160);
    ctx.fillStyle = "#8b4513";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(715, 310, 79, 0, Math.PI * 2);
    ctx.fillStyle = "#006400";
    ctx.fill();


};