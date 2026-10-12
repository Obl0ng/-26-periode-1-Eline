let image1;
let image2;

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
  feedButton.mousePressed();

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

function draw() {
  background(image1);
  image(image2, 240, 280, 200, 200);

  

  
}

function preload() {
image1 = loadImage("livingRoom.avif");
image2 = loadImage("CuteCat4.png");

}
