// variabelen
let x = 100;
let greeting = "Hello world!";
let getal1 = 10;
let getal2 = 20;
let getal3 = 30;
let Ypositite = 80;
let Ymargen = 20;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  Ypositite = 80;
  background(220);
  text(x, 20, 20);
  text(greeting, 20, 60);
  text("optellen:" + (getal1 + getal2), 20, Ypositite = Ypositite + Ymargen);
  text("aftrekken:" + (getal3 - getal2), 20, Ypositite = Ypositite + Ymargen);
  text("vermenigvuldigen:" + (getal2 * getal1), 20, Ypositite = Ypositite + Ymargen);
  text("delen:" + (getal2 / getal1), 20, Ypositite = Ypositite + Ymargen);
}
