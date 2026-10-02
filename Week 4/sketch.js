// lege arrays
let kleuren = [];

let tellersRect = [];
let tellersCircle = [];
let tellersRuit = [];

let positionRect = [];
let positionCircle = [];
let positionRuit = [];


function setup() {
  createCanvas(800, 600);

  for (let i = 0; i < 6; i++) {
    kleuren.push([random(255), random(255), random(255)]);

    positionRect.push([random(0, 750), random(0, 500), 50, 50]);
    positionCircle.push([random(0, 800), random(0, 600), 50]);
    positionRuit.push([random(0, 800), random(0, 600), 50]);

    tellersRect.push(random(0, 180));
    tellersCircle.push(random(0, 180));
    tellersRuit.push(random(0, 180));
  }
}


function draw() {
  background(0);

  for (let i = 0; i < 6; i++) {
    fill(kleuren[i]);

    // rect teller
    tellersRect[i]--;

    if (tellersRect[i] <= 0) {
      positionRect[i][1] += 3;
    }

    // cirkel teller
    tellersCircle[i]--;

    if (tellersCircle[i] <= 0) {
      positionCircle[i][1] += 3;
    }

    // Ruit teller
    tellersRuit[i]--;

    if (tellersRuit[i] <= 0) {
      positionRuit[i][1] += 3;
    }

    // Vormen tekenen
    rect(...positionRect[i]); // 
    circle(...positionCircle[i]);


    let x = positionRuit[i][0];
    let y = positionRuit[i][1];
    let grootte = positionRuit[i][2];

    beginShape();
    vertex(x, y - grootte);
    vertex(x + grootte, y);
    vertex(x, y + grootte);
    vertex(x - grootte, y);
    endShape(CLOSE);


    // rect onder scherm
    if (positionRect[i][1] > height) {
      positionRect[i][0] = random(0, 750);
      positionRect[i][1] = random(-100, 0);

      tellersRect[i] = random(60, 180);
    }

    // cirkel onder scherm
    if (positionCircle[i][1] > height) {
      positionCircle[i][0] = random(0, 750);
      positionCircle[i][1] = random(-100, 0);

      tellersCircle[i] = random(60, 180);        
    }

    // ruit onder scherm
    if (positionRuit[i][1] > height) {
      positionRuit[i][0] = random(0, 750);
      positionRuit[i][1] = random(-100, 0);

      tellersRuit[i] = random(60, 180);
    }
  }
}
