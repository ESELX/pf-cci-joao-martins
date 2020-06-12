
function setup() {
  createCanvas(500, 300);
}

function draw() {

  background(250,250,250);
  colorMode(RGB, 100);

  fill(100,0,0,50);
  ellipse(250,100,130,130+mouseY/3);
  fill(0,100,0,50);
  ellipse(300,170,130+mouseX/3,130);
   fill(0,0,100,50);
  ellipse(210,170,130,130);

  toggleGraph();
}
