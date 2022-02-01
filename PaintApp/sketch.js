let currentColor, red, orange, yellow, green, cyan, blue, magenta, brown, white, black;

function setup() {
  createCanvas(window.innerHeight, window.innerWidth);
  background(255);
  currentColor = 0;
  red = new colorBox(0, "red");
  orange = new colorBox(30, "orange");
  yellow = new colorBox(60, "yellow");
  green = new colorBox(90, "green");
  cyan = new colorBox(120, "cyan");
  blue = new colorBox(150, "blue");
  magenta = new colorBox(180, "magenta");
  brown = new colorBox(210, "SaddleBrown");
  white = new colorBox(240, 255);
  black = new colorBox(270, 0);
}

function draw() {

  if(mouseIsPressed) {
    if(mouseX > 51) {
      drawLine();
    }
  }
  red.paint();
  red.mousePressed();
  orange.paint();
  yellow.paint();
  green.paint();
  cyan.paint();
  blue.paint();
  magenta.paint();
  brown.paint();
  white.paint();
  black.paint();
}

class colorBox {
  constructor(y, color){
    this.x = 0;
    this.y = y;
    this.w = 30;
    this.h = 30;
    this.color = color;
  }
  paint() {
    noStroke();
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
  }

  mousePressed() {
    if(mouseIsPressed) {
      if(mouseX < 50) {
        if(mouseY > 0 && mouseY < 30) {
          currentColor = "red";
        } else if(mouseY > 30 && mouseY < 60) {
          currentColor = "orange";
        } else if(mouseY > 60 && mouseY < 90) {
          currentColor = "yellow";
        } else if(mouseY > 90 && mouseY < 120) {
          currentColor = "green";
        } else if(mouseY > 120 && mouseY < 150) {
          currentColor = "cyan";
        } else if(mouseY > 150 && mouseY < 180) {
          currentColor = "blue";
        } else if(mouseY > 180 && mouseY < 210) {
          currentColor = "magenta";
        } else if(mouseY > 210 && mouseY < 240) {
          currentColor = "SaddleBrown";
        } else if(mouseY > 240 && mouseY < 270) {
          currentColor = 255;
        } else if(mouseY > 270 && mouseY < 300) {
          currentColor = 0;
        }
      }
    }
  }
}

function drawLine() {
  stroke(currentColor);
  strokeWeight(5);
  line(pmouseX, pmouseY, mouseX, mouseY);
}