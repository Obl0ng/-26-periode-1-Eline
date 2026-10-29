// alle variabelen voor de afbeeldingen van de kamers en de kat
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
let hangingPlant;

// muziek, font en soundeffect
let cozyMusic;
let font;
let buttonClick;

// laat zien welke kamer of welk scherm wordt weergegeven
let rooms = 0;

// laat zien wanneer het aftellen van de hartjes voor het laatst is gestart
let lastHeart = 0;

// kamer knoppen
let feedButton;
let cleanButton;
let sleepButton;
let playButton;

// inventory knoppen
let fishInButton;
let soapInButton;
let moonInButton;
let smileyInButton;

// restartknop
let restartButton;

// de waarden van de bars
let hunger = 5;
let energie = 5;
let hygiene = 5;
let happiness = 5;
let hartjes = 5;

// de beginposities van de smileys in de minigame
let smileyX = [100, 300, 600, 400];
let smileyY = [200, 400, 300, 10];

let sleepSmiley = -1;
let smileyWeg = [false, false, false, false];


function preload() {

  // de afbeeldingen van de kamers en de kat
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
  hangingPlant = loadImage("hangingPlant.png");

  // de achtergrondmuziek, het lettertype en het klikgeluid
  cozyMusic = loadSound("cozyMusic.mp3");
  font = loadFont("Cute Cat.otf");
  buttonClick = loadSound("buttonClick.mp3"); // als je op knopje klikt hoor je een geluidje
}


function setup() {
  createCanvas(700, 600);

  // audio aanzetten
  userStartAudio();
  cozyMusic.setVolume(0.5);
  cozyMusic.loop();


  // KNOPPEN VOOR ALLE KAMERS


  feedButton = createImg("feedButton.png");
  feedButton.size(120, 70);
  feedButton.position(20, 20);
  feedButton.style('background', 'transparent');
  feedButton.mousePressed(() => {
    hungerButton(); // room gaat naar keuken
    buttonClick.play();
  });

  cleanButton = createImg("cleanButton.png");
  cleanButton.size(120, 70);
  cleanButton.position(20, 65);
  cleanButton.style('background', 'transparent');
  cleanButton.mousePressed(() => {
    cleaningButton(); // room gaat naar badkamer
    buttonClick.play();
  });

  sleepButton = createImg("sleepButton.png");
  sleepButton.size(120, 70);
  sleepButton.position(20, 110);
  sleepButton.style('background', 'transparent');
  sleepButton.mousePressed(() => {
    sleepingButton(); // room gaat naar slaapkamer
    buttonClick.play();
  });

  playButton = createImg("playButton.png");
  playButton.size(120, 70);
  playButton.position(20, 155);
  playButton.style('background', 'transparent');
  playButton.mousePressed(() => {
    happyButton(); // room gaat naar woonkamer
    buttonClick.play();
  });


  // KNOPPEN VOOR DE INVENTORY


  fishInButton = createImg("fishInbutton.png");
  fishInButton.size(120, 120);
  fishInButton.position(565, 170);
  fishInButton.style('background', 'transparent');
  fishInButton.mousePressed(() => {
    feedTheCat(); // kat krijgt eten
    buttonClick.play();
  });

  soapInButton = createImg("soapInButton.png");
  soapInButton.size(120, 120);
  soapInButton.position(565, 170);
  soapInButton.style('background', 'transparent');
  soapInButton.mousePressed(() => {
    cleanTheCat(); // kat wordt schoon gemaakt
    buttonClick.play();
  });

  moonInButton = createImg("moonInButton.png");
  moonInButton.size(120, 120);
  moonInButton.position(565, 170);
  moonInButton.style('background', 'transparent');
  moonInButton.mousePressed(() => {
    letTheCatSleep(); // kat krijgt meer energie
    buttonClick.play();
  });

  smileyInButton = createImg("smileyInButton.png");
  smileyInButton.size(120, 120);
  smileyInButton.position(565, 170);
  smileyInButton.style('background', 'transparent');
  smileyInButton.mousePressed(() => {
    goToMinigame(); // minigame wordt geopend
    buttonClick.play();
  });

  restartButton = createImg("restartButton.png");
  restartButton.size(400, 230);
  restartButton.position(140, 320);
  restartButton.style('background', 'transparent');
  restartButton.mousePressed(() => {
    opnieuwButton(); // je restart de game
    buttonClick.play();
  });


  // Controleren of er eerder opgeslagen gegevens bestaan
  let data = getItem("bars");


  if (data !== null && data !== undefined) { // als er nog geen data is wordt verkeerde data niet geopend
    hunger = data.hunger;
    energie = data.energie;
    hygiene = data.hygiene;
    happiness = data.happiness;
    hartjes = data.hartjes;
  }
}

function saveData() {

  // allee waarden opslaan onder de naam "bars"
  storeItem("bars", {
    hunger: hunger,
    energie: energie,
    hygiene: hygiene,
    happiness: happiness,
    hartjes: hartjes
  });
}


// room gaat naar woonkamer
function happyButton() {
  rooms = 4;
}

// de woonkamer
function happyCat() {
  background(livingRoom);

  fill(0, 0, 0, 180);
  noStroke();
  rect(550, 23, 146, 155);

  // alle bars
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
    image(stinkyCat, 240, 260, 200, 200); // als hygiene lager is dan 2 kat ziet er vies uit
  } else if (hunger <= 2) {
    image(sadCat, 240, 260, 200, 200); // als hunger lager is dan 2 is kat verdrietig 
  } else if (happiness <= 2) {
    image(sadCat, 240, 260, 200, 200); // als happiness lager is dan 2 is kan verdrietig
  } else {
    image(cat, 240, 260, 200, 200);
  }


  // knoppen laten zien die gezien moeten worden
  feedButton.show();
  cleanButton.show();
  sleepButton.show();
  playButton.show();
  smileyInButton.show();

  // knoppen niet laten zien
  fishInButton.hide();
  soapInButton.hide();
  moonInButton.hide();
  restartButton.hide();
}


// room gaat naar keuken
function hungerButton() {
  rooms = 1;
}

function feedTheCat() {

  hunger = min(5, hunger + 2); // als je op knopje klikt gaat zijn hunger bar omhoog

  if (hunger > 0) { // als de hunger bar hoger dan 0 is krijgt hij ook weer een hartje 
    hartjes = min(5, hartjes + 1);
    lastHeart = 0;
  }
  saveData();
}

// keuken
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


// room gaat naar badkamer
function cleaningButton() {
  rooms = 2;
}

function cleanTheCat() {
  hygiene = min(5, hygiene + 2);
  saveData();
}

// de badkamer
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

  soapInButton.show();
  fishInButton.hide();
  moonInButton.hide();
  smileyInButton.hide();
  restartButton.hide();
}


// room gaat naar slaapkamer
function sleepingButton() {
  rooms = 3;
}

function letTheCatSleep() {
  energie = min(5, energie + 2);
  saveData();
}

// de slaapkamer
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

  moonInButton.show();
  fishInButton.hide();
  soapInButton.hide();
  smileyInButton.hide();
  restartButton.hide();
}


// room gaat naar minigame
function goToMinigame() {
  rooms = 6;
}

// de minigame
function minigame() {
  background(177, 218, 255);

  fill(0);
  circle(330, 200, 100);

  // alle smileys tekenen
  for (let i = 0; i < smileyX.length; i++) {

    // alleen smileys tekenen die nog niet in de cirkel zitten
    if (!smileyWeg[i]) {
      image(smiley, smileyX[i], smileyY[i], 70, 70);
    }
  }

  fishInButton.hide();
  soapInButton.hide();
  moonInButton.hide();
  smileyInButton.hide();

  feedButton.hide();
  cleanButton.hide();
  sleepButton.hide();
  playButton.hide();
  restartButton.hide();
}

function mousePressed() {

  // alleen reageren op muisklikken als de minigame actief is
  if (rooms != 6) return;

  // kijken of je op een smiley hebt geklikt
  for (let i = 0; i < smileyX.length; i++) {

    // smileys die al geplaatst zijn overslaan
    if (smileyWeg[i]) continue;

    // kijken of de muis op de smiley staat
    if (
      mouseX > smileyX[i] &&
      mouseX < smileyX[i] + 70 &&
      mouseY > smileyY[i] &&
      mouseY < smileyY[i] + 70
    ) {

      // kijken of de smiley wordt vastgehouden
      sleepSmiley = i;

      // stoppen met kijken of de knopje wordt vastgehouden
      break;
    }
  }
}

// wanneer de muis wordt versleept
function mouseDragged() {

  // alleen een smiley verplaatsen als er een geselecteerd is
  if (sleepSmiley != -1) {

    // de x-pos van de geselecteerde smiley aanpassen
    // door de 35 blijft de muis in het midden
    smileyX[sleepSmiley] = mouseX - 35;

    // de y-pos van de geselecteerde smiley aanpassen
    smileyY[sleepSmiley] = mouseY - 35;
  }
}

// wanneer de muisknop wordt losgelaten
function mouseReleased() {

  // stoppen als er geen smiley wordt vastgehouden
  if (sleepSmiley == -1) return;

  // het middelpunt van de geselecteerde smiley berekenen
  let x = smileyX[sleepSmiley] + 35;
  let y = smileyY[sleepSmiley] + 35;

  // kijken of de smiley in de zwarte cirkel zit
  if (dist(x, y, 330, 200) < 50) { // dist berekent de afstand tussen twee punten

    // de smiley zit in de cirkel
    smileyWeg[sleepSmiley] = true;
  }

  // de smiley wordt niet meer vastgehouden
  sleepSmiley = -1;

  // kijken of alle smileys in de cirkel zijn geplaatst
  // every controleert of alle waarden in de array true zijn
  if (smileyWeg.every(w => w)) {
    happiness = 5;
    saveData();

    // terug naar woonkamer
    rooms = 4;

    // de minigame opnieuw maken voor een volgende keer
    smileyWeg = [false, false, false, false];
    smileyX = [100, 300, 600, 400];
    smileyY = [200, 400, 300, 10];
  }
}


// als de kat dood is
function deadCat() {
  background(250, 145, 190);

  // leuke plantje
  for (let i = 0; i < 4; i++) {
    image(hangingPlant, -15 + i * 180, -10, 200, 200);
  }

  fill(255); 
  textSize(70); 
  textFont(font); 
  stroke(194, 83, 130); 
  strokeWeight(10); 
  text("YOU DIED", 200, 280);


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

  // alles terugzetten naar 5
  hunger = 5;
  energie = 5;
  hygiene = 5;
  happiness = 5;
  hartjes = 5;

  rooms = 4;

  lastHeart = 0;

  // alle data verwijderen
  clearStorage();

  feedButton.show();
  cleanButton.show();
  sleepButton.show();
  playButton.show();
  restartButton.hide();
}


function draw() {

  // iedere 500 frames neemt de honger met 1 punt af
  if (frameCount % 500 === 0) {
    hunger = max(0, hunger - 1); // max zorgt ervoor dat de waarde nooit lager dan 0 wordt
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

  // kijken of de kat geen hongerpunten en nog wel hartjes heeft
  if (hunger === 0 && hartjes > 0) {

    // het startmoment van het aftellen vastleggen
    if (lastHeart === 0) {
      lastHeart = frameCount;
    }

    // controleren of er minstens 200 frames zijn verstreken
    if (frameCount - lastHeart >= 200) {
      hartjes = hartjes - 1;

      // hett startmoment opnieuw instellen voor het volgende hartje
      lastHeart = frameCount;
      saveData();
    }
  }

  // als de kat weer eten heeft stopt het naar beneden gaan
  if (hunger > 0) {
    lastHeart = 0;
  }

  // als er geen hartjes meer zijn zie je de restart room
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
  } else if (rooms == 6) {
    minigame();
  } else {
    happyCat();
  }
}
