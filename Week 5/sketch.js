let image1;
let image2;
let image3;
let image4;
let image5;
let image6;

let arcaneFont;

let soundEffect1;
let soundEffect2;

let sound1Played = false;
let sound2Played = false;

let menuScherm = 0;
let button;

let answerButtons = [];
let correctAnswer = 0;
let currentQuestion = 0;
let feedback = ""; // voor als je een antwoord goed of fout hebt

let score = 0;

let questions = [ // de vragen, antwoorden en goede antwoord
  {
    question: "1. Who are the two siblings?",
    answers: ["Ekko and Jinx", "Violet and Powder", "Jinx and Isha", "Jayce and Viktor"],
    correctAnswer: 1
  },
  {
    question: "2. Who created the magic?",
    answers: ["Jinx", "professor Heimerdinger", "Jayce", "Caitlyn"],
    correctAnswer: 2
  },
  {
    question: "3. What's the name of Mel's mother?",
    answers: ["Ambessa", "Amara", "Caitlyn", "Vi"],
    correctAnswer: 0
  },
  {
    question: "4. Who gets in a relationship?",
    answers: ["Ekko and Jinx", "Vi and Caitlyn", "Silco and Jinx", "Viktor and Jayce"],
    correctAnswer: 1
  },
  {
    question: "5. Who's Vander?",
    answers: ["the father figure of Violet and Powder", "a guy that sells objects", "a Piltover enforcer", "the father of Caitlyn"],
    correctAnswer: 0
  },
  {
    question: "6. What's Hextech?",
    answers: ["the rich city's name", "Jinx's shark gun", "the name of Vanders bar", "magic that Jayce created"],
    correctAnswer: 3
  },
  {
    question: "7. What's the name of the person who took Powder?",
    answers: ["Vi", "Jinx", "Professor Heimerdinger", "Silco"],
    correctAnswer: 3
  },
  {
    question: "8. What's the name of the drug that Silco made?",
    answers: ["Piltover", "Zaun", "Shimmer", "Sevika"],
    correctAnswer: 2
  },
  {
    question: "9. Who is Felicia?",
    answers: ["Powder and Violet's mother", "Vander's girlfriend", "Ekko's mother", "Silco's girlfriend"],
    correctAnswer: 0
  },
  {
    question: "10. Who killed Vander?",
    answers: ["Jinx", "Vander", "Silco", "Jayce"],
    correctAnswer: 1
  }

];


function setup() {
  createCanvas(900, 600);

  // start button
  button = createButton("Start Quiz");
  button.size(300, 100);
  button.position(300, 350);
  button.style('background', 'white');
  button.mousePressed(StartButton);

  menu();

  soundEffect1.setVolume(0.2);
  soundEffect2.setVolume(0.2);
}


function StartButton() {
  menuScherm += 1; // als je op start button klikt gaat de scherm naar volgende pagina
  button.hide(); // dat gaat de start button weg

  makeAnswerButton();
}


function draw() {
  if (menuScherm >= 1) {
    QuizLayout(); // als de scherm naar de volgende pagina gaat komt de quizlayout te zien
    textSize(20);
    text("score: " + score, 200, 230);

    if (!sound1Played) {
      soundEffect1.play();
      sound1Played = true;
    }

  }

  if (menuScherm >= 2) {
    nextQuestion(); // deze function zit het eind scherm. Ik weet dat de naam onlogisch is

    soundEffect1.stop();

    if (!sound2Played) {
      soundEffect2.play();
      sound2Played = true;
    }


  }
}


function menu() {
  background(image1);

  fill(0, 0, 0, 180);
  rect(180, 155, 520, 310, 20);

  fill(255);
  textSize(80);
  textFont(arcaneFont);
  text("Arcane quiz", 230, 270);
}


function QuizLayout() {
  background(image2);

  image(image3, -5, 350, 100, 250);
  image(image4, 770, 230, 120, 110);
  image(image5, 650, 523, 75, 75);
  image(image6, 50, 29, 70, 70);

  if (currentQuestion < questions.length) {
    fill(255);
    textSize(25);
    textFont(arcaneFont);
    textAlign('center');
    text(questions[currentQuestion].question, 430, 160); // de text is de vraag van current vraag
    text(feedback, 450, 305); // feedback laten zien

    fill(255);
    textSize(10);
    text("Song:  Enemy         Made by:  Imagine Dragons,  Arcane       (Arcane's theme song)", 260, 580);
  }
}


function makeAnswerButton() {
  // de 4 antwoorden ophalen
  let answers = questions[currentQuestion].answers; // de antwoorden van de current vraag van alle vragen

  for (let i = 0; i < answers.length; i++) {
    let answerButton = createButton(answers[i]); // de buttons van de 4 antwoorden array
    answerButton.size(150, 68);

    // positie van de buttons
    let x = 205 + (i % 2) * 390;
    let y = 352 + Math.floor(i / 2) * 103;

    answerButton.position(x, y);
    answerButton.style('background', 'black');
    answerButton.style('color', 'white');
    answerButton.style('border', 'none');

    // controleren welk antwoord is aangeklikt
    answerButton.mousePressed(function () { // als je op een antwoord klikt dan checkt hij of het goed of fout is
      checkAnswer(i);
    });

    answerButtons.push(answerButton);
  }
}


function checkAnswer(chosenAnswer) {
  if (chosenAnswer == questions[currentQuestion].correctAnswer) { // als het gekozen antwoord goed of fout is
    feedback = "Correct!";
    score += 1;
  } else {
    feedback = "Wrong!";
  }

  setTimeout(nextQuestion, 1000); // wacht tijd voor de volgende vraag
}


function nextQuestion() {
  currentQuestion++;

  feedback = ""; // zonder dit blijft de feedback vastlopen

  if (currentQuestion < questions.length) { // dan komen de correcte antwoorden bij de current vraag
    makeAnswerButton();
  } else {
    menuScherm += 1; // eind scherm komt
    background(image1);

    fill(0, 0, 0, 180);
    rect(354, 531, 180, 50);

    fill(255);
    textAlign('center');
    textSize(40);
    text("You finished the quiz!", 440, 200);
    text("score: " + score, 440, 570);

    // Buttons verwijderen als de quiz klaar is
    for (let a of answerButtons) { // a voor answer
      a.remove(); // answerbuttons gaan weg
    }
    answerButtons = [];
  }
}


function preload() {
  image1 = loadImage("Jinx&Ekko.jpg");
  image2 = loadImage("QuizLayout.jpg");
  image3 = loadImage("Jinx.jpg");
  image4 = loadImage("drawing1.jpg");
  image5 = loadImage("Jinx&Vi.jpg");
  image6 = loadImage("butterfly1.jpg");

  arcaneFont = loadFont("Arcane Nine.otf");

  soundEffect2 = loadSound("witchstuff.mp3");
  soundEffect1 = loadSound("enemy.mp4");
}

// geluidje toevoegen