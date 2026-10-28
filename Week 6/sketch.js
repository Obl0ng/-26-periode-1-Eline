// alle variabelen van de images
let livingRoom;
let cat;
let food;
let energy;
let hearts;
let kitchen;
let bathroom;
let bedroom;
let sadCat;
let stinkyCat;
let soap;
let smiley;

let cozyMusic;
let font;

let rooms = 0;
let lastHeart = 0;

// alle buttons
let feedButton;
let cleanButton;
let sleepButton;
let playButton;
let fishInButton;
let soapInButton;
let moonInButton;
let smileyInButton;

// de waarden van de bars
let hunger = 5;
let energie = 5;
let hygiene = 5;
let happiness = 5;
let hartjes = 5;


function preload() {
  livingRoom = loadImage("livingroom.png");
  cat = loadImage("CuteCat4.png");
  food = loadImage("catFood2.png");
  energy = loadImage("energy2.png");
  hearts = loadImage("heartBar2.png");
  kitchen = loadImage("kitchen2.png");
  bathroom = loadImage("bathroom.png");
  bedroom = loadImage("bedroom.avif");
  stinkyCat = loadImage("stinkyCat.png");
  sadCat = loadImage("sadCat.png");
  soap = loadImage("soap.png");
  smiley = loadImage("smiley.png");

  cozyMusic = loadSound("cozyMusic.mp3");
  font = loadFont("Cute Cat.otf");
}


function setup() {
  createCanvas(700, 600);

  userStartAudio();
  cozyMusic.setVolume(0.5)
  cozyMusic.loop();

  // alle buttons van de kamers
  feedButton = createImg("feedButton.png");
  feedButton.size(120, 70);
  feedButton.position(20, 20);
  feedButton.style('background', 'transparent');
  feedButton.mousePressed(hungerButton);

  cleanButton = createImg("cleanButton.png");
  cleanButton.size(120, 70);
  cleanButton.position(20, 65);
  cleanButton.style('background', 'transparent');
  cleanButton.mousePressed(cleaningButton);

  sleepButton = createImg("sleepButton.png");
  sleepButton.size(120, 70);
  sleepButton.position(20, 110);
  sleepButton.style('background', 'transparent');
  sleepButton.mousePressed(sleepingButton);

  playButton = createImg("playButton.png");
  playButton.size(120, 70);
  playButton.position(20, 155);
  playButton.style('background', 'transparent');
  playButton.mousePressed(happyButton);

  // alle inventory buttons
  fishInButton = createImg("fishInbutton.png");
  fishInButton.size(120, 120);
  fishInButton.position(565, 170);
  fishInButton.style('background', 'transparent');
  fishInButton.mousePressed(feedTheCat);

  soapInButton = createImg("soapInButton.png");
  soapInButton.size(120, 120);
  soapInButton.position(565, 170);
  soapInButton.style('background', 'transparent');
  soapInButton.mousePressed(cleanTheCat);

  moonInButton = createImg("moonInButton.png");
  moonInButton.size(120, 120);
  moonInButton.position(565, 170);
  moonInButton.style('background', 'transparent');
  moonInButton.mousePressed(letTheCatSleep);

  smileyInButton = createImg("smileyInButton.png");
  smileyInButton.size(120, 120);
  smileyInButton.position(565, 170);
  smileyInButton.style('background', 'transparent');
  smileyInButton.mousePressed(makeTheCatHappy);

  restartButton = createButton("restart");
  restartButton.size(300, 100);
  restartButton.position(180, 370);
  restartButton.style('background', 'white');
  restartButton.mousePressed(opnieuwButton);

  let data = getItem("bars");

  if (data !== null && data !== undefined) {
    hunger = data.hunger;
    energie = data.energie;
    hygiene = data.hygiene;
    happiness = data.happiness;
    hartjes = data.hartjes;
  }


}

function saveData() {
  // alle vier de waarden slaan samen op.
  storeItem("bars", {
    hunger: hunger,
    energie: energie,
    hygiene: hygiene,
    happiness: happiness,
    hartjes: hartjes
  });
}


function happyButton() {
  rooms = 4;
}

function makeTheCatHappy() {
  happiness = min(5, happiness + 2);
  saveData();
}

function happyCat() {

  background(livingRoom);

  fill(0, 0, 0, 180);
  noStroke();
  rect(550, 23, 146, 155);

  for (let i = 0; i < 5; i++) {

    if (i < hartjes) {
      image(hearts, 550 + i * 27, 20, 40, 40);
    }

    if (i < hunger) {
      image(food, 550 + i * 27, 80, 40, 40);
    }

    if (i < energie) {
      image(energy, 550 + i * 27, 50, 40, 40);
    }

    if (i < hygiene) {
      image(soap, 540 + i * 27, 100, 60, 60);
    }

    if (i < happiness) {
      image(smiley, 550 + i * 27, 140, 40, 40);
    }
  }

  if (hygiene <= 2) {
    image(stinkyCat, 240, 260, 200, 200);
  } else if (hunger <= 2) {
    image(sadCat, 240, 260, 200, 200);
  } else if (happiness <= 2) {
    image(sadCat, 240, 260, 200, 200);
  } else {
    image(cat, 240, 260, 200, 200);
  }

  fishInButton.hide();
  soapInButton.hide();
  moonInButton.hide();
  smileyInButton.show();
  restartButton.hide();
}


function hungerButton() {
  rooms = 1;
}

function feedTheCat() {
  hunger = min(5, hunger + 2);

  if (hunger > 0) {
    hartjes = min(5, hartjes + 1);
    lastHeart = 0;
  }
  saveData();
}


function feedingCat() {

  background(kitchen);

  fill(0, 0, 0, 180);
  noStroke();
  rect(550, 23, 146, 155);

  for (let i = 0; i < 5; i++) {

    if (i < hartjes) {
      image(hearts, 550 + i * 27, 20, 40, 40);
    }

    if (i < hunger) {
      image(food, 550 + i * 27, 80, 40, 40);
    }

    if (i < energie) {
      image(energy, 550 + i * 27, 50, 40, 40);
    }

    if (i < hygiene) {
      image(soap, 540 + i * 27, 100, 60, 60);
    }

    if (i < happiness) {
      image(smiley, 550 + i * 27, 140, 40, 40);
    }
  }

  if (hygiene <= 2) {
    image(stinkyCat, 260, 380, 200, 200);
  } else if (hunger <= 2) {
    image(sadCat, 260, 380, 200, 200);
  } else if (happiness <= 2) {
    image(sadCat, 260, 380, 200, 200);
  } else {
    image(cat, 260, 380, 200, 200);
  }

  fishInButton.show();
  soapInButton.hide();
  moonInButton.hide();
  smileyInButton.hide();
  restartButton.hide();
}


function cleaningButton() {
  rooms = 2;
}

function cleanTheCat() {
  hygiene = min(5, hygiene + 2);
  saveData();
}

function cleaningCat() {

  background(bathroom);

  fill(0, 0, 0, 180);
  noStroke();
  rect(550, 23, 146, 155);

  for (let i = 0; i < 5; i++) {

    if (i < hartjes) {
      image(hearts, 550 + i * 27, 20, 40, 40);
    }

    if (i < hunger) {
      image(food, 550 + i * 27, 80, 40, 40);
    }

    if (i < energie) {
      image(energy, 550 + i * 27, 50, 40, 40);
    }

    if (i < hygiene) {
      image(soap, 540 + i * 27, 100, 60, 60);
    }

    if (i < happiness) {
      image(smiley, 550 + i * 27, 140, 40, 40);
    }
  }

  if (hygiene <= 2) {
    image(stinkyCat, 450, 250, 200, 200);
  } else if (hunger <= 2) {
    image(sadCat, 450, 250, 200, 200);
  } else if (happiness <= 2) {
    image(sadCat, 450, 250, 200, 200);
  } else {
    image(cat, 450, 250, 200, 200);
  }

  fishInButton.hide();
  soapInButton.show();
  moonInButton.hide();
  smileyInButton.hide();
  restartButton.hide();
}


function sleepingButton() {
  rooms = 3;
}

function letTheCatSleep() {
  energie = min(5, energie + 2);
  saveData();
}

function sleepingCat() {

  background(bedroom);

  fill(0, 0, 0, 180);
  noStroke();
  rect(550, 23, 146, 155);

  for (let i = 0; i < 5; i++) {

    if (i < hartjes) {
      image(hearts, 550 + i * 27, 20, 40, 40);
    }

    if (i < hunger) {
      image(food, 550 + i * 27, 80, 40, 40);
    }

    if (i < energie) {
      image(energy, 550 + i * 27, 50, 40, 40);
    }

    if (i < hygiene) {
      image(soap, 540 + i * 27, 100, 60, 60);
    }

    if (i < happiness) {
      image(smiley, 550 + i * 27, 140, 40, 40);
    }
  }

  if (hygiene <= 2) {
    image(stinkyCat, 290, 280, 200, 200);
  } else if (hunger <= 2) {
    image(sadCat, 290, 280, 200, 200);
  } else if (happiness <= 2) {
    image(sadCat, 290, 280, 200, 200);
  } else {
    image(cat, 290, 280, 200, 200);
  }

  fishInButton.hide();
  soapInButton.hide();
  moonInButton.show();
  smileyInButton.hide();
  restartButton.hide();
}

function deadCat() {

  background(227, 115, 175);

  fishInButton.hide();
  soapInButton.hide();
  moonInButton.hide();
  smileyInButton.hide();
  feedButton.hide();
  cleanButton.hide();
  sleepButton.hide();
  playButton.hide();
  restartButton.show();

}

function opnieuwButton() {
  hunger = 5;
  energie = 5;
  hygiene = 5;
  happiness = 5;
  hartjes = 5;

  rooms = 4;

  lastHeart = 0;

  clearStorage();

  feedButton.show();
  cleanButton.show();
  sleepButton.show();
  playButton.show();
  restartButton.hide();
}


function draw() {

  if (frameCount % 500 === 0) {
    hunger = max(0, hunger - 1);
    saveData();
  }

  if (frameCount % 1500 === 0) {
    energie = max(0, energie - 1);
    saveData();
  }

  if (frameCount % 900 === 0) {
    hygiene = max(0, hygiene - 1);
    saveData();
  }

  if (frameCount % 1200 === 0) {
    happiness = max(0, happiness - 1);
    saveData();
  }

  if (hunger === 0 && hartjes > 0) {
    if (lastHeart === 0) {
      lastHeart = frameCount;
    }

    if (frameCount - lastHeart >= 200) {
      hartjes = hartjes - 1;
      lastHeart = frameCount;
      saveData();
    }
  }

  // Als de kat weer eten heeft, stopt het aftellen.
  if (hunger > 0) {
    lastHeart = 0;
  }

  if (hartjes == 0) {
    rooms = 5;
  }

  if (rooms == 1) {
    feedingCat();
  } else if (rooms == 2) {
    cleaningCat();
  } else if (rooms == 3) {
    sleepingCat();
  } else if (rooms == 4) {
    happyCat();
  } else if (rooms == 5) {
    deadCat();
    fill(255);
    textSize(70);
    textFont(font);
    text("you died", 220, 250);
  } else {
    happyCat();
  }
}