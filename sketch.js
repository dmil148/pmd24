let selectedColor;
let choices;

function setup() 
{
  createCanvas(1000,1000);
  selectedColor = color('white');
  
  background(255);

  choices = [
    new Choice(0,0,color('red')),
    new Choice(0,40,color('orange')),
    new Choice(0,80,color('yellow')),
    new Choice(0,120,color('green')),
    new Choice(0,160,color('cyan')),
    new Choice(0,200,color('blue')),
    new Choice(0,240,color('magenta')),
    new Choice(0,280,color('brown')),
    new Choice(0,320,color('white')),
    new Choice(0,360,color('black')),
  ]
}

function draw() {

  for(i = 0; i < choices.length; i++)
  {
    choices[i].draw();
  }

  fill(selectedColor);
}

function mousePressed()
{
  let isInChoice = false;
  for(let i=0;i < choices.length;i++) {
    if(choices[i].contains(mouseX,mouseY)) {
      selectedColor = choices[i].fill;
      isInChoice = true;
    }
  }

  fill(selectedColor);
  console.log("selected color is " + selectedColor);
}

function mouseDragged()
{
  ellipse(mouseX, mouseY, 15);
  return false;
}

class Choice{
  constructor(x, y, fill){
    this.x = x;
    this.y = y; 
    this.fill = fill;
  }

  draw()
  {
    noStroke();
    fill(this.fill);
    square(this.x,this.y,40);
  }

  contains(x,y)
  {
    let insideX = x >= this.x && x <= this.x + 40;
    let insideY = y >= this.y && y <= this.y + 40;
    return insideX && insideY;
  }
}