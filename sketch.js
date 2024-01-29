function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES);
  pg1 = createGraphics(200, 100);
  pg2 = createGraphics(300,300);
  pg3 = createGraphics(200,100); 
  pg4 = createGraphics(200,200);
}

function draw() {
  background(200);
  pg1.background('rgb(0,255,0)');
  pg1.circle(50, 50, 75);
  pg1.square(100,10,80);
  image(pg1, 0, 0);

  pg2.background(255);
  pg2.noStroke();
  pg2.fill(255,0,0,100);
  pg2.circle(pg2.width/2,pg2.height/3,150);
  pg2.fill(0,0,255,100);
  pg2.circle(100,200,150);
  pg2.fill(0,255,0,100);
  pg2.circle(200,200,150);
  image(pg2, 0, 100);

  pg3.background(0);
  pg3.noStroke();
  pg3.fill('yellow');
  pg3.arc(50,50,75,75,-8.5,2.5);
  pg3.fill('red');
  pg3.circle(150,50,75);
  pg3.rect(112.5,45,75,45);
  pg3.fill('white');
  pg3.circle(132.5,50,25);
  pg3.circle(167.5,50,25);
  pg3.fill('blue');
  pg3.circle(132.5,50,15);
  pg3.circle(167.5,50,15);
  image(pg3, 0, 400);

  pg4.background(0,0,150);
  pg4.fill('white');
  pg4.noStroke();
  pg4.circle(pg4.height/2,pg4.height/2,100);
  pg4.fill(0,150,0);
  pg4.circle(pg4.height/2,pg4.height/2,95);
  pg4.fill(255);
  star(pg4,100,100,55,20,5);
  pg4.fill(255,0,0);
  star(pg4,100,100,45,15,5);
  image(pg4,0,500);
}


function star(context, x, y, radius1, radius2, npoints) {
  let angle = 360 / npoints;
  let halfAngle = angle / 2.0;
  context.beginShape();
  for (let a = 0; a < 360; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  context.endShape(CLOSE);
}