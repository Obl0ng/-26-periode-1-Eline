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

let rooms = 0;

let feedButton;
let cleanButton;
let sleepButton;
let playButton;
let fishInButton;
let soapInButton;
let moonInButton;

let hunger = 5;
let energie = 5;
let hygiene = 5;


function setup() {
  createCanvas(700, 600);

  feedButton = createImg("feedButton.png", "feed");
  feedButton.size(120, 70);
  feedButton.position(20, 20);
  feedButton.style('background', 'transparent');
  feedButton.mousePressed(hungerButton);

  cleanButton = createImg("cleanButton.png", "clean");
  cleanButton.size(120, 70);
  cleanButton.position(20, 65);
  cleanButton.style('background', 'transparent');
  cleanButton.mousePressed(cleaningButton);

  sleepButton = createImg("sleepButton.png", "sleep");
  sleepButton.size(120, 70);
  sleepButton.position(20, 110);
  sleepButton.style('background', 'transparent');
  sleepButton.mousePressed(sleepingButton);

  playButton = createImg("playButton.png", "play");
  playButton.size(120, 70);
  playButton.position(20, 155);
  playButton.style('background', 'transparent');
  playButton.mousePressed(happyButton);

  fishInButton = createImg("fishInbutton.png");
  fishInButton.size(120, 120);
  fishInButton.position(565, 150);
  fishInButton.style('background', 'transparent');
  fishInButton.mousePressed(feedTheCat);

  soapInButton = createImg("soapInButton.png");
  soapInButton.size(120, 120);
  soapInButton.position(565, 150);
  soapInButton.style('background', 'transparent');
  soapInButton.mousePressed();

  moonInButton = createImg("moonInButton.png");
  moonInButton.size(120, 120);
  moonInButton.position(565, 150);
  moonInButton.style('background', 'transparent');
  moonInButton.mousePressed(letTheCatSleep);

}


function mainRoom() {

  background(livingRoom);

  fill(0, 0, 0, 180);
  noStroke();
  rect(550, 23, 146, 100);

  for (let i = 0; i < 5; i++) {
    image(hearts, 550 + i * 27, 20, 40, 40);

    if (i < hunger) {
      image(food, 550 + i * 27, 80, 40, 40);
    }

    if (i < energie) {
      image(energy, 550 + i * 27, 50, 40, 40);
    }
  }

  if (hunger <= 2) {
    image(sadCat, 240, 260, 200, 200);
  } else if (hygiene <= 2) {
    image(stinkyCat, 240, 260, 200);
  }  else {
    image(cat, 240, 260, 200, 200);
  }
  
  fishInButton.hide();
  soapInButton.hide();
  moonInButton.hide();
}


function hungerButton() {
  rooms = 1;
}

function feedingCat() {

  background(kitchen);

  fill(0, 0, 0, 180);
  noStroke();
  rect(550, 23, 146, 100);

  for (let i = 0; i < 5; i++) {
    image(hearts, 550 + i * 27, 20, 40, 40);

    if (i < hunger) {
      image(food, 550 + i * 27, 80, 40, 40);
    }

    if (i < energie) {
      image(energy, 550 + i * 27, 50, 40, 40);
    }
  }

  if (hunger <= 2) {
    image(sadCat, 260, 380, 200, 200);
  } else {
    image(cat, 260, 380, 200, 200);
  }

  fishInButton.show();
  soapInButton.hide();
  moonInButton.hide();
}

function feedTheCat() {
  hunger = min(5, hunger + 2);
}


function cleaningButton() {
  rooms = 2;
}

function cleaningCat() {

  background(bathroom);

  fill(0, 0, 0, 180);
  noStroke();
  rect(550, 23, 146, 100);

  for (let i = 0; i < 5; i++) {
    image(hearts, 550 + i * 27, 20, 40, 40);

    if (i < hunger) {
      image(food, 550 + i * 27, 80, 40, 40);
    }

    if (i < energie) {
      image(energy, 550 + i * 27, 50, 40, 40);
    }
  }

  if (hunger <= 2) {
    image(sadCat, 450, 250, 200, 200);
  } else {
    image(cat, 450, 250, 200, 200);
  }

  fishInButton.hide();
  soapInButton.show();
  moonInButton.hide();
}


function sleepingButton() {
  rooms = 3;
}

function sleepingCat() {

  background(bedroom);

  fill(0, 0, 0, 180);
  noStroke();
  rect(550, 23, 146, 100);

  for (let i = 0; i < 5; i++) {
    image(hearts, 550 + i * 27, 20, 40, 40);

    if (i < hunger) {
      image(food, 550 + i * 27, 80, 40, 40);
    }

    if (i < energie) {
      image(energy, 550 + i * 27, 50, 40, 40);
    }
  }

  if (hunger <= 2) {
    image(sadCat, 290, 280, 200, 200);
  } else {
    image(cat, 29, 280, 200, 200);
  }

  fishInButton.hide();
  soapInButton.hide();
  moonInButton.show();
}

function letTheCatSleep() {
  energie = min(5, energie + 2);
}

function happyButton() {
  rooms = 4;
}

function happyCat() {

  background(livingRoom);

  fill(0, 0, 0, 180);
  noStroke();
  rect(550, 23, 146, 100);

  for (let i = 0; i < 5; i++) {
    image(hearts, 550 + i * 27, 20, 40, 40);

    if (i < hunger) {
      image(food, 550 + i * 27, 80, 40, 40);
    }

    if (i < energie) {
      image(energy, 550 + i * 27, 50, 40, 40);
    }
  }

  if (hunger <= 2) {
    image(sadCat, 240, 260, 200, 200);
  } else {
    image(cat, 240, 260, 200, 200);
  }

  fishInButton.hide();
  soapInButton.hide();
  moonInButton.hide();

}


function draw() {

  if (frameCount % 100 === 0) {
    hunger = max(0, hunger - 1);
  }

  if (frameCount % 300 === 0) {
    energie = max(0, energie - 1);
  }

  if (frameCount % 50 === 0) {
    hygiene = max(0, hygiene - 1);
  }

  if (rooms == 1) {
    feedingCat();
  } else if (rooms == 2) {
    cleaningCat();
  } else if (rooms == 3) {
    sleepingCat();
  } else if (rooms == 4) {
    happyCat();
  } else {
    mainRoom();
  }

}


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
}
