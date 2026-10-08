let image1;
let image2;
let image3;
let image4;
let image5;
let image6;

let quizscherm = 0;
let button;

let answerButtons = [];

let correctAnswer = 0;
let currentQuestion = 0;

let feedback = "";

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
  {
    question: "Who gets in a relationship?",
    answers: ["Ekko and Jinx", "Vi and Caitlyn", "Silco and Jinx", "Viktor and Jayce"],
    correctAnswer: 1
  },
  {
    question: "Who's Vander?",
    answers: [
      "the father figure of Violet and Powder",
      "a guy that sells objects",
      "a Piltover enforcer",
      "the father of Caitlyn"
    ],
    correctAnswer: 0
  },
  {
    question: "What's Hextech?",
    answers: [
      "the rich city's name",
      "Jinx's shark gun",
      "the name of Vanders bar",
      "magic that Jayce created"
    ],
    correctAnswer: 3
  }
];

function setup() {
  createCanvas(900, 600);

  button = createButton("Start Quiz");
  button.size(300, 100);
  button.position(300, 350);
  button.style('background', 'white');
  button.mousePressed(StartButton);

  menu();
}

function StartButton() {
  quizscherm += 1;
  button.hide();

  makeAnswerButton();
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
    QuizLayout();
  }

  if (quizscherm >= 2) {
    nextQuestion();
  }
}

function menu() {
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

  fill(255);
  textSize(25);

  if (currentQuestion < questions.length) {
    text(questions[currentQuestion].question, 300, 160);

    // Feedback laten zien
    text(feedback, 402, 305);
  }
}


function makeAnswerButton() {
  // De 4 antwoorden ophalen
  let answers = questions[currentQuestion].answers;



  for (let i = 0; i < answers.length; i++) {

    let answerButton = createButton(answers[i]);
    answerButton.size(150, 68);

    // Positie van de buttons
    let x = 205 + (i % 2) * 390;
    let y = 352 + Math.floor(i / 2) * 103;

    answerButton.position(x, y);
    answerButton.style('background', 'black');
    answerButton.style('color', 'white');
    answerButton.style('border', 'none');

    // Controleren welk antwoord is aangeklikt
    answerButton.mousePressed(function () {
      checkAnswer(i);
    });

    answerButtons.push(answerButton);
  }
}


function checkAnswer(chosenAnswer) {
  if (chosenAnswer == questions[currentQuestion].correctAnswer) {
    feedback = "Correct!";
  } else {
    feedback = "Wrong!";
  }

  // Even wachten voordat de volgende vraag komt
  setTimeout(nextQuestion, 1000);
}


function nextQuestion() {

  currentQuestion++;

  feedback = "";

  if (currentQuestion < questions.length) {
    makeAnswerButton();
  } else {
    quizscherm += 1;
    background(image1);
    text("You finished the quiz!", 330, 300);

    // Buttons verwijderen als de quiz klaar is
    for (let a of answerButtons) {
      a.remove();

    }

    answerButtons = [];
  }
}

// meer vragen maken
// comments maken
// mooier maken
// score maken
