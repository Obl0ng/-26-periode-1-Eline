function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0);

  for (let i = 0; i < 10; i++) {
    strokeWeight(1);
    fill(250);
    circle(480, 220, 250 - i * 25);
  }
}