function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);

  // 1
  for (let i = 0; i < 10; i++) {
    fill("white");
    rect(20 + i * 50, 15, 50, 50);
    fill("blue");
    rect(320, 15, 50, 50);
  }
  // 2
  for (let i = 0; i < 5; i++) {
    // 2
    fill(i * 60);
    rect(20, 105 + i * 50, 50, 50);
  }
}
