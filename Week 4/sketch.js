// array aanmaken waar alle potities van alle circles in zitten
let circles = [];

function keyPressed() {
  if (keyCode == 8) {
  }
}

function setup() {
  createCanvas(800, 600);

  // alle circles maken met for loop
  for (let i = 0; i < 10; i++) {
    circles.push(random[255], random[255], random[255]);
    
  }
}

function draw() {
  background(0);

  // alle circles tekenen
  circle(circles[i], 35, 15 + i * 10);
}