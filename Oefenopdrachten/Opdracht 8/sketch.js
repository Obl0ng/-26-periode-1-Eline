function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(238, 140, 255);

  for (let i = 0; i < 6; i++) {
    tekenHuis(100 + i * 100, 300);
  }

  tekenCirkel(80, 80, 50);
  tekenStraat(100, 100);

  for (let i = 0; i < 4; i++) {
    tekenVogel(450 + i * 30, 100);
    tekenVogel(450 + i * 10, 100 + i * 20);

    tekenText(200, 200);

    text(optel(9, 10), 120, 270);
    text(delen(9, 10), 220, 270);
    text(keer(9, 10), 320, 270);
    text(min(9, 10), 425, 270);
  }

}

// huis met rect, driehoek, cirkel en lijn
function tekenHuis(xPos, yPos) {
  fill(220, 220, 220);
  triangle(xPos, yPos - 20, xPos + 60, yPos - 20, xPos + 30, yPos - 70);
  rect(xPos, yPos - 20, 60, 50);
  rect(xPos + 10, yPos + 10, 10, 20);
  rect(xPos + 30, yPos + 10, 20, 15);
  circle(xPos + 17, yPos + 20, 1);
  line(xPos + 40, yPos + 10, xPos + 40, yPos + 25);
  line(xPos + 30, yPos + 18, xPos + 49, yPos + 18);
  // xPos = 100 yPos = 300

}

// zon met cirkel
function tekenCirkel(xPos, Ypos, d) {
  fill("yellow");
  circle(xPos, Ypos, d);
  // xPos = 80 yPos = 80 d = 50
}

// straat met rect
function tekenStraat(xPos, yPos) {
  fill(100, 100, 100);
  rect(xPos - 100, yPos + 231, 800, 100);

  for (let i = 0; i < 7; i++) {
    fill(230, 230, 230);
    rect(xPos - 100 + i * 120, yPos + 265, 100, 6);
  }
  // xPos = 100, yPos = 100
}

// vogel met lijntjes
function tekenVogel(xPos, yPos) {
  line(xPos + 80, yPos, xPos + 90, yPos + 5);
  line(xPos + 90, yPos + 5, xPos + 100, yPos);
  // xPos = 400 yPos = 80
}

// text
function tekenText(xPos, yPos) {
  fill("black");
  text("wow", xPos, yPos);
  // xPos = 200 yPos = 200
}

function optel(a, b) {
  textSize(15);
  return a + b;
}

function delen(a, b) {
  return a / b;
}

function keer(a, b) {
  return a * b;
}

function min(a, b) {
  return a - b;
}