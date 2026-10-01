let kleuren = [];

let tellersRect = [];
let tellersCircle = [];

let positieRect = [];
let positieCircle = [];


function setup() {
  createCanvas(800, 600);

  for (let i = 0; i < 6; i++) {
    kleuren.push([random(255), random(255), random(255)]);

    positieRect.push([random(0, 750), random(0, 500), 50, 50]);
    positieCircle.push([random(0, 800), random(0, 600), 50]);

    tellersRect.push(random(0, 180));
    tellersCircle.push(random(0, 180));
  }
}


function draw() {
  background(0);

  for (let i = 0; i < 6; i++) {
    fill(kleuren[i]);

    // rect teller
    tellersRect[i]--;

    if (tellersRect[i] <= 0) {
      positieRect[i][1] += 3;
    }

    // cirkel teller
    tellersCircle[i]--;

    if (tellersCircle[i] <= 0) {
      positieCircle[i][1] += 3;
    }

    // Vormen tekenen
    rect(...positieRect[i]);
    circle(...positieCircle[i]);


    // rect onder scherm
    if (positieRect[i][1] > height) {
      positieRect[i][0] = random(0, 750);
      positieRect[i][1] = random(-100, 0);

      tellersRect[i] = random(60, 180);
    }


    // cirkel onder scherm
    if (positieCircle[i][1] > height) {
      positieCircle[i][0] = random(0, 750);
      positieCircle[i][1] = random(-100, 0);

      tellersCircle[i] = random(60, 180);
    }
  }
}
