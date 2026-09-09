let image1
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);

  // Nummers
  text("1.", 25, 20);
  text("2.", 25, 60);
  text("3.", 25, 120);
  text("4.", 25, 200);
  text("5.", 25, 380);
  text("6.", 250, 20);
  text("7.", 250, 120);
  text("8.", 250, 360);

  // Mijn naam
  noStroke();
  text("Eline Frinks", 40, 20);

  // de vlag
  fill(255, 0, 0);  
  rect(40, 50, 60, 20);
  fill(255, 255, 255)
  rect(40, 60, 60, 20);
  fill(0, 0, 255);
  rect(40, 70, 60, 10);
  fill(0, 0, 0);

  // Schaakbord
  stroke(1);
  fill(255, 255, 255);
  rect(40, 110, 25, 25);
  fill(0, 0, 0);
  rect(65, 110, 25, 25);
  fill(255, 255, 255);
  rect(90, 110, 25, 25);
  fill(0, 0, 0);
  rect(40, 135, 25, 25);
  fill(255, 255, 255);
  rect(65, 135, 25, 25);
  fill(0, 0, 0);
  rect(90, 135, 25, 25);
  fill(255, 255, 255);
  rect(40, 160, 25, 25);
  fill(0, 0, 0);
  rect(65, 160, 25, 25);
  fill(255, 255, 255);
  rect(90, 160, 25, 25);
  fill(0, 0, 0,);
  
  // Een huis
  fill(220, 220, 220);
  triangle(40, 280, 100, 280, 70, 230);
  fill(220, 220, 220);
  rect(40, 280, 60, 40);
  fill(0, 0, 0);

  // Verkeerslicht
  fill(0, 0, 0);
  rect(40, 390, 35, 80);
  fill(0, 0, 0);
  rect(50, 415, 15, 80);
  fill(255, 0, 0);
  ellipse(58, 406, 20, 20);
  fill("orange");
  ellipse(58, 430, 20, 20);
  fill(0, 255, 0);
  ellipse(58, 454, 20, 20);
  fill(0, 0, 0);

  // Dobbelsteen
  strokeWeight(3);
  fill(255, 255, 255);
  rect(270, 10, 70, 70, 10);
  fill(0, 0, 0);
  ellipse(285, 25, 15, 15);
  fill(0, 0, 0);
  ellipse(305, 45, 15, 15);
  fill(0, 0, 0);
  ellipse(325, 65, 15, 15);
  fill(0, 0, 0);

  // Mario met naam
  noStroke();
  text("Mario", 270, 120);

  fill("red");
  rect(300, 125, 55, 10);
  rect(290, 135, 95, 10);
  rect(290, 195, 20, 30);
  rect(280, 205, 10, 20);
  rect(270, 215, 10, 10);
  rect(290, 225, 10, 10);
  rect(320, 195, 20, 20);
  rect(340, 195, 20, 10);
  rect(350, 205, 10, 20);
  rect(360, 205, 20, 20);
  rect(380, 215, 10, 10);
  rect(360, 225, 10, 10);

  fill(255, 200, 120);
  rect(320, 145, 25, 50);
  rect(290, 155, 10, 20);
  rect(300, 175, 20, 20);
  rect(310, 155, 10, 10);
  rect(345, 165, 10, 10);
  rect(355, 155, 30, 10);
  rect(365, 165, 30, 10);
  rect(345, 185, 30, 10);
  rect(360, 235, 10, 10);
  rect(370, 225, 20, 30);
  rect(270, 225, 20, 30);
  rect(290, 235, 10, 10);

  fill("brown");
  rect(290, 145, 30, 10);
  rect(300, 155, 10, 20);
  rect(280, 155, 10, 20);
  rect(280, 175, 20, 10);
  rect(310, 165, 10, 10);

  fill("black");
  rect(345, 145, 10, 20);
  rect(355, 165, 10, 10);
  rect(345, 175, 40, 10);

  fill("blue");
  rect(310, 195, 10, 30);
  rect(310, 215, 40, 40);
  rect(340, 205, 10, 10);
  rect(350, 225, 10, 35);
  rect(340, 245, 30, 20);
  rect(290, 245, 30, 20);
  rect(300, 225, 10, 20);

  fill("yellow");
  rect(310, 225, 10, 10);
  rect(340, 225, 10, 10);

  fill("brown");
  rect(280, 265, 30, 20);
  rect(270, 275, 10, 10);
  rect(350, 265, 30, 20);
  rect(380, 275, 10, 10);

  fill("black");

  // The Knight
  text("The Knight", 270, 360);
  image(image1, 170, 290, 360, 400);
}

  function preload() {
  image1= loadImage("hollow-knight.png");
}
