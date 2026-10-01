// array aanmaken waar alle potities van alle circles in zitten
let circles = [];
let kleuren = [];
let posities = [];

function keyPressed() {
  if (keyCode == 8) {
  }
}

function setup() {
  createCanvas(800, 600);

  // alle circles maken met for loop
  
    kleuren.push([random(255), random(255), random(255)]);
    posities.push([random(0, 800), random(0, 600), 50, 50]);

}

function draw() {
  background(0);

  // alle circles tekenen
  for (let i = 0; i < 10; i++) {
    fill(kleuren[i]);
    rect(posities[i]);
  }
}

