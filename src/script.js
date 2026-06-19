window.onload = function () {
    const canvas = document.getElementById("meinCanvas"); //Das <canvas>-Element bietet eine Zeichenfläche.
    const ctx = canvas.getContext("2d"); //Im JavaScript wird das 2D-Zeichenkontextobjekt (ctx) verwendet, um Grafiken zu zeichnen.

    // Roter ausgefüllter Kreis
    ctx.beginPath();
    ctx.arc(100, 100, 100, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
    ctx.fillStyle = "yellow";
    ctx.fill();

    // Blaues nicht ausgefülltes Rechteck
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 10;
    ctx.rect(200, 70, 120, 80); // x, y, width, height
    ctx.stroke();


};