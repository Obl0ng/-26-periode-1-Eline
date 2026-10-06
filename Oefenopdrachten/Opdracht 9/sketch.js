let cirkels = [];
let punten = 0;

function setup() {
  createCanvas(400, 400);

  // ballen aanmaken
  for (let i = 0; i < 50; i++) {
    let c = {
      x: random(100, 300),
      y: random(100, 300),
      radius: random(10, 30),
      kleur: ([random(255), random(255), random(255)]),
      snelheidX: random(-5, 5),
      snelheidY: random(-5, 5)
    }
    cirkels.push(c);
  }
}

function draw() {
  background(151, 188, 250);

  // score bijhouden
  fill(0);
  text("score = " + punten, 10, 10,);

  // ballen tekenen en laten bewegen
  for (let i = 0; i < cirkels.length; i++) {
    let cirkel = cirkels[i];

    fill(cirkel.kleur);
    circle(cirkel.x, cirkel.y, cirkel.radius);
    cirkel.x += cirkel.snelheidX;
    cirkel.y += cirkel.snelheidY;

    // de ballen bouncen terug als de ballen de randen aanraken
    if (cirkel.x <= 10) {
      cirkel.snelheidX *= -1;
    }
    if (cirkel.x >= 390) {
      cirkel.snelheidX *= -1;
    }
    if (cirkel.y <= 10) {
      cirkel.snelheidY *= -1;
    }
    if (cirkel.y >= 390) {
      cirkel.snelheidY *= -1;
    }
  }
}

function mousePressed() {
  // punten krijgen als je op een bal klikt
  for (let i = 0; i < cirkels.length; i++) {
    let cirkel2 = cirkels[i];
    let afstandToMuis = dist(mouseX, mouseY, cirkel2.x, cirkel2.y);
    if (afstandToMuis <= cirkel2.radius) {
      punten += 1;
      cirkels.splice(i, 1);
    }
  }
}