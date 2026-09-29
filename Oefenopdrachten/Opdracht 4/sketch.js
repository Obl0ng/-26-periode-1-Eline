let number = 0;
let light = 0;

let score = 0;

let Xball = 250;
let Yball = 100;

function keyPressed() {
  if (keyCode == ENTER) {
    light = light + 1;
    if (light > 2)
      light = 0;
  }
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  textSize(10);
  // Blokje
  if (keyIsPressed === true) {
    if (keyCode === 66) { // B
      fill("white");
      rect(20, 20, 60, 60);
    }
  }

  // Nummers
  fill("black");
  text("1.", 10, 15);
  text("2.", 10, 100);
  text("3.", 10, 230);
  text("4.", 200, 15);

  // Verkeerslicht
  fill(70, 70, 70);
  rect(35, 300, 5, 80, 10);
  rect(20, 240, 33, 80);

  // Rood
  if (light == 0) {
    fill(225, 0, 0);
  }
  else {
    fill(90, 0, 0);
  }
  circle(37, 253, 23, 23);

  // Oranje
  if (light == 2) {
    fill(255, 100, 0);
  }
  else {
    fill(170, 100, 0);
  }
  circle(37, 279, 23, 23);

  // Groen
  if (light == 1) {
    fill(0, 255, 0);
  }
  else {
    fill(0, 55, 0);
  }
  circle(37, 305, 23, 23);


  // teller
  score = score + 1;
  fill(0);
  text(score, 70, 140);
  if (keyIsDown(32)) {
    score = 0
  }
  if (score >= 500) {
    score = 0
  }

  // 8ball, W = 87, A = 65, S = 83, D = 68
  noStroke();
  fill(0, 8, 9);
  circle(Xball, Yball, 120);

  // 8B
  fill(243, 247, 248);
  circle(Xball, Yball, 58);
  fill(0, 8, 9);
  textAlign(CENTER, CENTER);
  textSize(42);
  textStyle(BOLD);
  text('8', Xball, Yball + 1);

  if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
    Yball = Yball - 2
  }
  if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
    Yball = Yball + 2
  }
  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
    Xball = Xball - 2
  }
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    Xball = Xball + 2
  }
  if (Xball >= 500) {
    Xball = -100;
  }
  if (Xball <= -100) {
    Xball = 500;
  }
  if (Yball >= 500) {
    Yball = -60;
  }
  if (Yball <= -60) {
    Yball = 500;
  }
  
}
