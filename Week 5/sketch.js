let image1;
let image2;
let image3;
let image4;
let image5;
let image6;

let quizscherm = 0;
let button;

let correctAnswer = 0;

let questions = [
  {
    question: "Who are the two siblings?",
    answers: ["Ekko and Jinx", "Violet and Powder", "Jinx and Isha", "Jayce and Viktor"],
    correctAnswer: 1
  },
  {
    question: "Who created the magic?",
    answers: ["Jinx", "professor Heimerdinger", "Jayce", "Caitlyn"],
    correctAnswer: 2
  },
  {
    question: "What's the name of Mel's mother?", 
    answers: ["Ambessa", "Amara", "Caitlyn", "Vi"],
    correctAnswer: 0
  },

  ]



function setup() {
  createCanvas(900, 600);

  button = createButton("Start Quiz"); // maakt alle buttons aan met de kleuren array
  button.size(300, 100);
  button.position(300, 350);
  button.style('background', 'white'); // de achtergrond van de buttons komen toegevoegd
  button.mousePressed(StartButton);
  beginscherm();
  button.show();


}

function StartButton() {
  quizscherm += 1
  button.hide();
}

function preload() {
  image1 = loadImage("Jinx&Ekko.jpg");
  image2 = loadImage("QuizLayout.jpg");
  image3 = loadImage("Jinx.jpg");
  image4 = loadImage("drawing1.jpg");
  image5 = loadImage("Jinx&Vi.jpg");
  image6 = loadImage("butterfly1.jpg");

}

function draw() {
  if (quizscherm >= 1) {
    QuizLayout()
  }
}


function beginscherm() {
  background(image1);
  fill(0, 0, 0, 180);
  rect(180, 155, 520, 310, 20);
  fill(255);
  textSize(40);
  text("Arcane quiz", 330, 200);

}

function QuizLayout() {
  background(image2);
  image(image3, -5, 350, 100, 250);
  image(image4, 770, 230, 120, 110);
  image(image5, 650, 523, 75, 75);
  image(image6, 50, 29, 70, 70);


}

