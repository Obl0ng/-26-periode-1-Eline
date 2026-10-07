let image1
let image2
let image3
let image4
let image5
function setup() {
  createCanvas(900, 600);
}

function draw() {
  background(0);

image(image1, 0, 0, 900, 600);
image(image2, -5, 350, 100, 250);  
image(image3, 770, 230, 120, 110);
image(image4, 650, 523, 75, 75);
image(image5, 50, 29, 70, 70);


}

function preload() {
  image1 = loadImage("QuizLayout.jpg");
  image2 = loadImage("Jinx.jpg");
  image3 = loadImage("drawing1.jpg");
  image4 = loadImage("Jinx&Vi.jpg");
  image5 = loadImage("butterfly1.jpg");
}