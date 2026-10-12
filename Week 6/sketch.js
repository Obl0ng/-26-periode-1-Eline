let livingRoom;
let cat;
let food;
let energy;
let hearts;

let rooms = 0;

let feedButton;
let cleanButton;
let sleepButton;
let playButton;

function setup() {
  createCanvas(700, 600);

  feedButton = createButton("feed");
  feedButton.size(80, 30);
  feedButton.position(20, 50);
  feedButton.style('background', 'white');
  feedButton.mousePressed(hungerButton);

  cleanButton = createButton("clean");
  cleanButton.size(80, 30);
  cleanButton.position(20, 90);
  cleanButton.style('background', 'white');
  cleanButton.mousePressed();

  sleepButton = createButton("sleep");
  sleepButton.size(80, 30);
  sleepButton.position(20, 130);
  sleepButton.style('background', 'white');
  sleepButton.mousePressed();

  playButton = createButton("play");
  playButton.size(80, 30);
  playButton.position(20, 170);
  playButton.style('background', 'white');
  playButton.mousePressed();

}

function hungerButton() {
  rooms += 1;
}

function feedingCat() {
  
  background(0);
  image(cat, 240, 280, 200, 200);

  for (let i = 0; i < 5; i++) {
    image(hearts, 550 + i * 25, 20, 35, 35);
    image(energy, 550 + i * 25, 50, 35, 35);
    image(food, 550 + i * 25, 80, 35, 35);
  }
}


function draw() {
  if (rooms >= 1) {
    feedingCat();
  }
  else {
    mainRoom();
  }

}


function mainRoom() {
  background(livingRoom);
  image(cat, 240, 280, 200, 200);

  for (let i = 0; i < 5; i++) {
    image(hearts, 550 + i * 25, 20, 35, 35);
    image(energy, 550 + i * 25, 50, 35, 35);
    image(food, 550 + i * 25, 80, 35, 35);
  }
}


function preload() {
  livingRoom = loadImage("livingRoom.avif");
  cat = loadImage("CuteCat4.png");
  food = loadImage("catFood2.png");
  energy = loadImage("energy2.png");
  hearts = loadImage("heartBar2.png");
}
