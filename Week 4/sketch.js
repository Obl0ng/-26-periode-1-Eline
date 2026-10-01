// lege arrays
let kleuren = [];
let tellers = [];

let positieRect = [];
let positieCircle = [];


function setup() {
  createCanvas(800, 600);

  // Random kleuren, positieRect en teller
  for (let i = 0; i < 6; i++) {
    kleuren.push([random(255), random(255), random(255)]);
    positieRect.push([random(0, 750), random(0, 500), 50, 50]);
    positieCircle.push([random(0, 800), random(0, 600), 50]);
    tellers.push(random(0, 180));
  }
}

function draw() {
  background(0);

  for (let i = 0; i < 6; i++) {
    fill(kleuren[i]);

    // Teller aftellen
    tellers[i] = tellers[i] - 1;
    if (tellers[i] <= 0) {
      positieRect[i][1] += 3;
      positieCircle[i][1] += 3;
    }
    // de vormen
    rect(...positieRect[i]); // '...' haalt de 4 waarde uit de array waardoor ze oprecht komen.
    circle(...positieCircle[i]);

    // Als een rect onder het scherm is
    if (positieRect[i][1] > height) {  // [0] = x-pos [1] = y-poss
      positieRect[i][0] = random(0, 750);
      positieRect[i][1] = random(-100, 0);
      tellers[i] = random(60, 180);
    }

    // Als een cirkel onder het scherm is
    if (positieCircle[i][1] > height) {  // [0] = x-pos [1] = y-pos
      positieCircle[i][0] = random(0, 750);
      positieCircle[i][1] = random(-100, 0);
      
    }
  }
}


