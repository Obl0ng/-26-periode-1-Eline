let turns = 0;

let color1 = "blue";
let color2 = "red";

let linksBoven = 0;
let middenBoven = 0;
let rechtsBoven = 0;

let linksMidden = 0;
let middenMidden = 0;
let rechtsMidden = 0;

let linksOnder = 0;
let middenOnder = 0;
let rechtsOnder = 0;

let winningB = false;
let winningR = false;


function mousePressed() {
  if (mouseButton == LEFT) {
    // beurten + vakjes + mousepotion
    if (mouseX >= 105 && mouseX <= 165 && mouseY >= 105 && mouseY <= 165 && linksBoven == 0) {
      turns = (turns + 1) % 2;
      linksBoven = turns + 1;
    }
    if (mouseX >= 170 && mouseX <= 230 && mouseY >= 105 && mouseY <= 165 && middenBoven == 0) {
      turns = (turns + 1) % 2;
      middenBoven = turns + 1;
    }
    if (mouseX >= 235 && mouseX <= 295 && mouseY >= 105 && mouseY <= 165 && rechtsBoven == 0) {
      turns = (turns + 1) % 2;
      rechtsBoven = turns + 1;
    }
    if (mouseX >= 105 && mouseX <= 165 && mouseY >= 170 && mouseY <= 230 && linksMidden == 0) {
      turns = (turns + 1) % 2;
      linksMidden = turns + 1;
    }
    if (mouseX >= 170 && mouseX <= 230 && mouseY >= 170 && mouseY <= 230 && middenMidden == 0) {
      turns = (turns + 1) % 2;
      middenMidden = turns + 1;
    }
    if (mouseX >= 235 && mouseX <= 295 && mouseY >= 170 && mouseY <= 230 && rechtsMidden == 0) {
      turns = (turns + 1) % 2;
      rechtsMidden = turns + 1;
    }
    if (mouseX >= 105 && mouseX <= 165 && mouseY >= 235 && mouseY <= 295 && linksOnder == 0) {
      turns = (turns + 1) % 2;
      linksOnder = turns + 1;
    }
    if (mouseX >= 170 && mouseX <= 230 && mouseY >= 235 && mouseY <= 295 && middenOnder == 0) {
      turns = (turns + 1) % 2;
      middenOnder = turns + 1;
    }
    if (mouseX >= 235 && mouseX <= 295 && mouseY >= 235 && mouseY <= 295 && rechtsOnder == 0) {
      turns = (turns + 1) % 2;
      rechtsOnder = turns + 1;
    }
    winB()
    winR()
  }
}
// speler blauw
function winB() {
  if (winningB === false) {
    if (linksBoven == middenBoven && middenBoven == rechtsBoven && linksBoven == 1) {
      winningB = true
    }
    if (linksMidden == middenMidden && middenMidden == rechtsMidden && linksMidden == 1) {
      winningB = true
    }
    if (linksOnder == middenOnder && middenOnder == rechtsOnder && linksOnder == 1) {
      winningB = true
    }
    if (linksBoven == linksMidden && linksMidden == linksOnder && linksBoven == 1) {
      winningB = true
    }
    if (middenBoven == middenMidden && middenMidden == middenOnder && middenBoven == 1) {
      winningB = true
    }
    if (rechtsBoven == rechtsMidden && rechtsMidden == rechtsOnder && rechtsBoven == 1) {
      winningB = true
    }
    if (linksBoven == middenMidden && middenMidden == rechtsOnder && linksBoven == 1) {
      winningB = true
    }
    if (rechtsBoven == middenMidden && middenMidden == linksOnder && rechtsBoven == 1) {
      winningB = true
    }
  }
}
// speler rood
function winR() {
  if (winningR === false) {
    if (linksBoven == middenBoven && middenBoven == rechtsBoven && linksBoven == 2) {
      winningR = true
    }
    if (linksMidden == middenMidden && middenMidden == rechtsMidden && linksMidden == 2) {
      winningR = true
    }
    if (linksOnder == middenOnder && middenOnder == rechtsOnder && linksOnder == 2) {
      winningR = true
    }
    if (linksBoven == linksMidden && linksMidden == linksOnder && linksBoven == 2) {
      winningR = true
    }
    if (middenBoven == middenMidden && middenMidden == middenOnder && middenBoven == 2) {
      winningR = true
    }
    if (rechtsBoven == rechtsMidden && rechtsMidden == rechtsOnder && rechtsBoven == 2) {
      winningR = true
    }
    if (linksBoven == middenMidden && middenMidden == rechtsOnder && linksBoven == 2) {
      winningR = true
    }
    if (rechtsBoven == middenMidden && middenMidden == linksOnder && rechtsBoven == 2) {
      winningR = true
    }
  }
}

// restart button
function keyPressed() {
  if (keyCode == 32) {
    linksBoven = 0;
    linksMidden = 0;
    linksOnder = 0;
    middenBoven = 0;
    middenMidden = 0;
    middenOnder = 0;
    rechtsBoven = 0;
    rechtsMidden = 0;
    rechtsOnder = 0;
    winningR = false;
    winningB = false;
  }
}


function setup() {
  createCanvas(400, 400);
  Crystal = loadFont("CrystalUniverse-Oblique.ttf")
}

function draw() {
  console.log(winningB);
  // Achtergrond die veranderd
  if (turns == 0) {
    background("red");
  }
  else if (turns == 1) {
    background("blue");
  }

  // Text
  if (turns == 0) {
    fill("black");
    textSize(30);
    textFont(Crystal);
    text("red's turn", 75, 70);
  }
  if (turns == 1) {
    fill("black");
    textSize(30);
    textFont(Crystal);
    text("blue's turn", 75, 70);
  }

  // achtergrond veranderd als iemand wint
  if (winningB === true) {
    background("blue")
  }
  if (winningR === true) {
    background("red")
  }

  // Zwarte rechthoek
  fill(0, 0, 0);
  rect(100, 100, 200, 200, 10);


  // Linksboven
  if (linksBoven == 0) {
    fill(200, 200, 200);
  }
  else if (linksBoven == 1) {
    fill("blue");
  }
  else if (linksBoven == 2) {
    fill("red");
  }
  rect(105, 105, 60, 60, 10);


  // Middenboven
  if (middenBoven == 0) {
    fill(200, 200, 200);
  }
  else if (middenBoven == 1) {
    fill("blue");
  }
  else if (middenBoven == 2) {
    fill("red");
  }
  rect(170, 105, 60, 60, 10);


  // Rechtsboven
  if (rechtsBoven == 0) {
    fill(200, 200, 200);
  }
  else if (rechtsBoven == 1) {
    fill("blue");
  }
  else if (rechtsBoven == 2) {
    fill("red");
  }
  rect(235, 105, 60, 60, 10);


  // Linksmidden
  if (linksMidden == 0) {
    fill(200, 200, 200);
  }
  else if (linksMidden == 1) {
    fill("blue");
  }
  else if (linksMidden == 2) {
    fill("red");
  }
  rect(105, 170, 60, 60, 10);


  // Middenmidden
  if (middenMidden == 0) {
    fill(200, 200, 200);
  }
  else if (middenMidden == 1) {
    fill("blue");
  }
  else if (middenMidden == 2) {
    fill("red");
  }
  rect(170, 170, 60, 60, 10);


  // Rechtsmidden
  if (rechtsMidden == 0) {
    fill(200, 200, 200);
  }
  else if (rechtsMidden == 1) {
    fill("blue");
  }
  else if (rechtsMidden == 2) {
    fill("red");
  }
  rect(235, 170, 60, 60, 10);


  // Linksonder
  if (linksOnder == 0) {
    fill(200, 200, 200);
  }
  else if (linksOnder == 1) {
    fill("blue");
  }
  else if (linksOnder == 2) {
    fill("red");
  }
  rect(105, 235, 60, 60, 10);


  // Middenonder
  if (middenOnder == 0) {
    fill(200, 200, 200);
  }
  else if (middenOnder == 1) {
    fill("blue");
  }
  else if (middenOnder == 2) {
    fill("red");
  }
  rect(170, 235, 60, 60, 10);


  // Rechtsonder
  if (rechtsOnder == 0) {
    fill(200, 200, 200);
  }
  else if (rechtsOnder == 1) {
    fill("blue");
  }
  else if (rechtsOnder == 2) {
    fill("red");
  }
  rect(235, 235, 60, 60, 10);

  // als blauw wint
  if (winningB === true) {
    fill("lightgreen");
    stroke(6);
    fill("green");
    textSize(20);
    textFont(Crystal);
    text("BLUE WINS!", 60, 200);
    noStroke();
    fill("black");
    textSize(10);
    text("press space to restart", 105, 350);
  }

  // als rood wint
  if (winningR === true) {
    fill("lightgreen");
    stroke(6);
    fill("green");
    textSize(20);
    textFont(Crystal);
    text("RED WINS!", 80, 200);
    noStroke();
    fill("black");
    textSize(10);
    text("press space to restart", 105, 350);
  }
}
