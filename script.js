$( document ).ready(function() {
    console.log( "ready!" );
    draw();
});

function draw() {
  var canvas = document.getElementById('myCanvas');
  if (canvas.getContext) {
    console.log( "got Context!" );

    var ctx = canvas.getContext('2d');

    var rectangle = new Path2D();
    rectangle.rect(10, 10, 50, 50);

    var circle = new Path2D();
    circle.arc(100, 35, 25, 0, 1);
    circle.lineTo(100, 35);

    ctx.stroke(rectangle);
    ctx.fill(circle);
  }
}
