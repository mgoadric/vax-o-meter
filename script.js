$( document ).ready(function() {
    console.log( "ready!" );
    draw();
});

function draw() {
  var canvas = document.getElementById('myCanvas');
  if (canvas.getContext) {
    var xc = canvas.width / 2;
    var yc = canvas.height - 10;
    console.log( "got Context!" );

    var ctx = canvas.getContext('2d');

    var pcts = [0, .1, .25, .5, .6, .7, .8, .9, 1];

    for (let i = 0; i < pcts.length - 1; i++) {

      ctx.fillStyle = "rgb(75,77,81)";
      ctx.strokeStyle = "rgb(255,255,255)";
      ctx.lineWidth = 10;

      var circle = new Path2D();
      circle.arc(xc, yc, (canvas.width - 50) / 2, Math.PI * (1 + pcts[i]), Math.PI * (1 + pcts[i + 1]));
      circle.lineTo(xc, yc);
      ctx.fill(circle);

      var divider = new Path2D();
      divider.arc(xc, yc, (canvas.width - 50) / 2, Math.PI * (1 + pcts[i+1]), Math.PI * (1 + pcts[i + 1]));
      divider.lineTo(xc, yc);
      ctx.stroke(divider);

    }

    ctx.fillStyle = "rgb(255,255,255)";
    var circle = new Path2D();
    circle.arc(xc, yc, canvas.width/ 4, Math.PI, Math.PI * 2);
    circle.lineTo(xc, yc);
    ctx.fill(circle);

  }
}
