window.onload = function () {
    const canvas = document.getElementById("meinCanvas");
    const ctx = canvas.getContext("2d");


    ctx.beginPath();
    ctx.arc(100, 100, 70, 0, Math.PI * 2);
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

    ctx.beginPath();
    ctx.rect(700, 350, 40, 160);
    ctx.fillStyle = "#8b4513";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(715, 310, 79, 0, Math.PI * 2);
    ctx.fillStyle = "#006400";
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(100, 100, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fillStyle="black"
    ctx.stroke();

};