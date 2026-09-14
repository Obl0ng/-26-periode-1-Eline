let sunspeed = 1;
let sunx = 200;

let cloudx1 = 300;
let cloudspeed1 = 1.6;

let cloudx2 = 400;
let cloudspeed2 = 1.4;

let cloudx3 = 700;
let cloudspeed3 = 1.7;


let light = 0;
function keyPressed() {
  if (keyCode == ENTER) {
    light = light + 1;
    if (light > 2)
      light = 0;
 }

}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background("lightblue");
  noStroke();

  // Zon
  fill("orange");
  ellipse(sunx, 50, 90, 90);

  fill("yellow");
  ellipse(sunx, 50, 70, 70);
  sunx = sunx + sunspeed;

  if(sunx >= 850){
  sunx = -50;
  }

  // Wolk1
  drawwolk(cloudx1, 95);
  cloudx1 = cloudx1 - cloudspeed1

  if(cloudx1 <= -50){
  cloudx1 = 850;
  }

  // Wolk2
  drawwolk(cloudx2, 120);
  cloudx2 = cloudx2 - cloudspeed2

  if(cloudx2 <= -50){
  cloudx2 = 950;
  }

  // Wolk3
  drawwolk(cloudx3, 190);
  cloudx3 = cloudx3 - cloudspeed3

  if(cloudx3 <= -50){
  cloudx3 = 900;
  }

  // Weg
  stroke(1);
  strokeWeight(2);
  stroke(100, 100, 100);
  fill(130, 130, 130);
  rect(0, 510, 800, 100);
  fill("white");
  rect(0, 550, 100, 8, 10);
  rect(120, 550, 100, 8, 10);
  rect(240, 550, 100, 8, 10);  
  rect(360, 550, 100, 8, 10);
  rect(480, 550, 100, 8, 10); 
  rect(600, 550, 100, 8, 10); 
  rect(720, 550, 100, 8, 10); 

  // Gras
  noStroke();
  fill("green");
  rect(0, 500, 800, 10);
  
  // Berg1
  strokeWeight(1);
  stroke(0, 0, 0);
  fill(100, 100, 100);
  triangle(600, 500, 300, 500, 450, 250); 
  
  // Berg2 
  fill(130, 130, 130);
  stroke(0, 0, 0);
  triangle(900, 500, 500, 500, 680, 350);

  // Berg3
  triangle(400, 500, 150, 500, 280, 320);

  // Verkeerslicht
  noStroke();
  fill(70, 70, 70);
  rect(670, 435, 5, 80, 10);
  rect(655, 360, 33, 80);

  // Rood
  if(light == 0){
  fill(225, 0, 0);
  }
  else {
    fill(90, 0, 0);
  }
  circle(672, 375, 23, 23);

  // Oranje
if(light == 2){
  fill(255, 100, 0);
  }
  else {
    fill(170, 100, 0);
  }
  circle(672, 400, 23, 23);

  // Groen
  if(light == 1){
  fill(0, 255, 0);
  }
  else {
    fill(0, 55, 0);
  }
  circle(672, 425, 23, 23);
  
// Boom1
fill(100, 50, 40);
rect(70, 400, 10, 110, 10);
fill(0, 230, 0);
circle(75, 390, 70, 70);
fill(0, 200, 0);
circle(80, 400, 70, 70);
fill("green");
circle(70, 400, 65, 65);

//boom2
fill(100, 50, 40);
rect(200, 400, 10, 110, 10);
fill("green");
circle(200, 400, 65, 65);

//boom3
fill(100, 50, 40);
rect(300, 400, 10, 110, 10);
fill("green");
circle(300, 400, 65, 65);

//boom4
fill(100, 50, 40);
rect(500, 400, 10, 110, 10);
fill("green");
circle(500, 400, 65, 65);

//Auto1


//boom5
fill(100, 50, 40);
rect(400, 550, 10, 110, 10);
fill("green");
circle(400, 550, 65, 65);


}

// wolk
function drawwolk(xPos, yPos) {
  fill(210, 210, 210);
  ellipse(xPos - 90, yPos + 5, 60, 60);
  ellipse(xPos - 45, yPos, 65, 65);
  ellipse(xPos, yPos + 5, 60, 60);

  fill("white");
  ellipse(xPos - 91, yPos + 15, 60, 60);
  ellipse(xPos - 46, yPos + 10, 65, 65);
  ellipse(xPos - 1, yPos + 15, 60, 60);
  //xPos = 291 yPos= 85
}

