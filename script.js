let canvas = document.getElementById('sandbox'),
	context = canvas.getContext("2d"),
	square, circle;

square = new Path2D();
square.moveTo(50, 50);
square.lineTo(250,50);
square.lineTo(250,250);
square.lineTo(50,250);
square.lineTo(50,50);
context.stroke(square);

circle = new Path2D();
circle.arc(150, 150, 100, Math.PI/2, 3*Math.PI/2);
context.fill(circle);

