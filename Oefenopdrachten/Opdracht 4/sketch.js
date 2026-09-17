let teller = 0;
let light = 0;

function keyPressed() {
  if (keyCode === SPACE) {
  }
}


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

}


