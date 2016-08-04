//circle function
function circle(x,y,size) {
  ellipse(x,y,size,size);
}

function setup() {
  createCanvas(600,400);
  background(0,0,255,100)
 //making the snowman
  circle(300,350,100);
  circle(300,270,70);
  circle(300,220,40);
  fill(30,80,20);
  triangle(280, 200, 306,100, 320, 200);
  fill(0,0,0);
  circle(300,290,15);
  circle(300,260,15);
}
function mousePressed(){
  noStroke();
  fill(255,255,255);
  ellipse(mouseX, mouseY, 20, 20);
}
