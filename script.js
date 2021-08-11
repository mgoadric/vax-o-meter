$( document ).ready(function() {
    console.log( "ready!" );
    draw();
});

function draw() {
  var canvas = document.getElementById('myCanvas');
  var heightRatio = 0.5;
  canvas.height = canvas.width * heightRatio;

  if (canvas.getContext) {
    var r = 233;
    var g = 107;
    var b = 16;
    var xc = canvas.width / 2;
    var yc = canvas.height - 10;
    console.log( "got Context!" );

    var ctx = canvas.getContext('2d');

    var pcts = [0, .1, .25, .5, .6, .7, .8, .9, 1];

    var rad = (canvas.width - 50) / 2;

    for (let i = 0; i < pcts.length - 1; i++) {

      ctx.fillStyle = "rgb(" + pcts[i+1] * r + ", " + pcts[i+1] * g + ", " + pcts[i+1] * b + ")";

      var pie = new Path2D();
      pie.arc(xc, yc, rad, Math.PI * (1 + pcts[i]), Math.PI * (1 + pcts[i + 1]));
      pie.lineTo(xc, yc);
      ctx.fill(pie);

    }
    for (let i = 1; i < pcts.length - 1; i++) {

      ctx.strokeStyle = "rgb(0,0,0)";
      ctx.lineWidth = 4;
      var divider = new Path2D();
      divider.arc(xc, yc, rad, Math.PI * (1 + pcts[i]), Math.PI * (1 + pcts[i]));
      divider.lineTo(xc, yc);
      ctx.stroke(divider);

      const x = xc + (rad / 1.18) * Math.cos(Math.PI * (1 + pcts[i]));
      const y = yc + (rad / 1.18) * Math.sin(Math.PI * (1 + pcts[i]));
      console.log( x + ", " + y );

      ctx.fillStyle = "rgb(" + pcts[i] * r + ", " + pcts[i] * g + ", " + pcts[i] * b + ")";
      //ctx.fillStyle = "rgb(0,0,0)";

      var circle = new Path2D();
      circle.arc(x, y, 30, 0, 2 * Math.PI);
      ctx.fill(circle);

      ctx.fillStyle = "rgb(255,255,255)";
      ctx.font = "24px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = 'middle';
      ctx.fillText((100 * pcts[i]) + "%", x, y);

    }


    ctx.fillStyle = "rgb(255,255,255)";
    var circle = new Path2D();
    circle.arc(xc, yc, canvas.width / 3, Math.PI, Math.PI * 2);
    //circle.lineTo(xc, yc);
    ctx.fill(circle);
    ctx.stroke(circle);

    var stupct = 0.84;

    ctx.fillStyle = "rgb(" + stupct * r + ", " + stupct * g + ", " + stupct * b + ")";
    var circle = new Path2D();
    circle.arc(xc, yc, canvas.width / 3.5, Math.PI, Math.PI * 2);
    circle.lineTo(xc, yc);
    ctx.fill(circle);

    const sx = xc + canvas.width / 3.1 * Math.cos(Math.PI * (1 + stupct));
    const sy = yc + canvas.width / 3.1 * Math.sin(Math.PI * (1 + stupct));
    const sxleft = xc + canvas.width / 3.5 * Math.cos(Math.PI * (1 + stupct - 0.05));
    const syleft = yc + canvas.width / 3.5 * Math.sin(Math.PI * (1 + stupct - 0.05));
    const sxright = xc + canvas.width / 3.5 * Math.cos(Math.PI * (1 + stupct + 0.05));
    const syright = yc + canvas.width / 3.5 * Math.sin(Math.PI * (1 + stupct + 0.05));
    console.log( sx + ", " + sy );

    var triangle = new Path2D();
    triangle.moveTo(sxleft, syleft);
    triangle.lineTo(sx, sy);
    triangle.lineTo(sxright, syright);
    ctx.fill(triangle);

    ctx.fillStyle = "rgb(255,255,255)";
    var circle = new Path2D();
    circle.arc(xc, yc, canvas.width / 4, Math.PI, Math.PI * 2);
    circle.lineTo(xc, yc);
    ctx.fill(circle);

    var facpct = 0.88;

    ctx.fillStyle = "rgb(" + facpct * r + ", " + facpct * g + ", " + facpct * b + ")";
    var circle = new Path2D();
    circle.arc(xc, yc, canvas.width / 5, Math.PI, Math.PI * 2);
    circle.lineTo(xc, yc);
    ctx.fill(circle);

    const fx = xc + canvas.width / 4.2 * Math.cos(Math.PI * (1 + facpct));
    const fy = yc + canvas.width / 4.2 * Math.sin(Math.PI * (1 + facpct));
    const fxleft = xc + canvas.width / 5 * Math.cos(Math.PI * (1 + facpct - 0.07));
    const fyleft = yc + canvas.width / 5 * Math.sin(Math.PI * (1 + facpct - 0.07));
    const fxright = xc + canvas.width / 5 * Math.cos(Math.PI * (1 + facpct + 0.07));
    const fyright = yc + canvas.width / 5 * Math.sin(Math.PI * (1 + facpct + 0.07));
    console.log( fx + ", " + fy );

    var triangle2 = new Path2D();
    triangle2.moveTo(fxleft, fyleft);
    triangle2.lineTo(fx, fy);
    triangle2.lineTo(fxright, fyright);
    ctx.fill(triangle2);


    ctx.fillStyle = "rgb(255,255,255)";
    var circle = new Path2D();
    circle.arc(xc, yc, canvas.width / 6, Math.PI, Math.PI * 2);
    circle.lineTo(xc, yc);
    ctx.fill(circle);

    ctx.fillStyle = "rgb(0,0,0)";
    ctx.font = "50px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Hendrix", 500, 410);
    ctx.fillText("Vax-o-meter", 500, 470);
  }
}
