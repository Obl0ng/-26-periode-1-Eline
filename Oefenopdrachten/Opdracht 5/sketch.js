function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);

  // cijfers
  strokeWeight(1);
  fill("black");
  text("1.", 20, 15);
  text("2.", 20, 105);
  text("3.", 80, 105);
  text("4.", 80, 205);
  text("5.", 540, 20);
  text("6.", 350, 105);
  text("7.", 625, 105);

  // 10 blokjes op een rij
  for (let i = 0; i < 10; i++) {
    fill("white");
    if(i == 8){
      fill("blue");
    }
    rect(20 + i * 50, 20, 50, 50);
  }
  // 5 blokjes onder elkaar
  for (let i = 0; i < 5; i++) {
    fill(i * 60);
    rect(20, 110 + i * 50, 50, 50);
  }
  // 4 blokjes naast elkaar
  let offSet = 0;
  for (let i = 0; i < 4; i++) {
    fill(0, i * 100, 0);
    rect(80 + i * 25 + offSet, 110, 25 + i * 25, 50);
    offSet = offSet + i * 25;
  }
  // 4 blauwe blokjes naast elkaar
  let offSet2 = 0;
  for (let i = 0; i < 4; i++) {
    fill(0, 0, 100 / i);
    rect(80 + i * 25 + offSet2, 210, 25 + i * 25, 50 + i * 25);
    offSet2 = offSet2 + i * 25;
  }
  // 6 cirkels naast elkaar
  for (let i = 0; i < 6; i++) {
    strokeWeight(i * 2);
    fill("white");
    circle(560 + i * 40, 45, 30, 30);
  }
  // Bullseye
  let color = true;
  for (let i = 0; i < 10; i++) {
    strokeWeight(1);
    fill(color ? "red" : "white");
    circle(480, 220, 250 - i * 25);
    color = !color;
  }
  // Accordeon
  let color2 = true;
  for (let i = 0; i < 21; i++) {
    fill(color2 ? "white" : "grey");
    let breedte = i <= 10 ? 10 + i * 10 : 110 - (i - 10) * 10;
    rect(626, 115 + i * 10, breedte, 10);
    color2 = !color2;
  }
}
