let turns = 0;

let linksBoven = 0;
let middenBoven = 0;
let rechtsBoven = 0;

let linksMidden = 0;
let middenMidden = 0;
let rechtsMidden = 0;

let linksOnder = 0;
let middenOnder = 0;
let rechtsOnder = 0;

function mousePressed(){
	if (mouseButton == LEFT){
    turns = (turns + 1) % 2;
  
    if(mouseX >= 105 && mouseX <= 165 && mouseY >= 105 && mouseY <= 165 && turns == 0) {
      linksBoven = 1;
    }
    if(mouseX >= 105 && mouseX <= 165 && mouseY >= 105 && mouseY <= 165 && turns == 1 ) {
      linksBoven = 2;
    }
    if(mouseX >= 170 && mouseX <= 230 && mouseY >= 105 && mouseY <= 165 && turns == 0){
        middenBoven = 1;
    }
    if(mouseX >= 170 && mouseX <= 230 && mouseY >= 105 && mouseY <= 165 && turns == 1){
        middenBoven = 2;
    }
    if(mouseX >= 235 && mouseX <= 295 && mouseY >= 105 && mouseY <= 165 && turns == 0){
        rechtsBoven = 1;
    }
    if(mouseX >= 235 && mouseX <= 295 && mouseY >= 105 && mouseY <= 165 && turns == 1){
        rechtsBoven = 2;
    }
    if(mouseX >= 105 && mouseX <= 165 && mouseY >= 170 && mouseY <= 230 && turns == 0){
        linksMidden = 1;
    }
    if(mouseX >= 105 && mouseX <= 165 && mouseY >= 170 && mouseY <= 230 && turns == 1){
        linksMidden = 2;
    }
    if(mouseX >= 170 && mouseX <= 230 && mouseY >= 170 && mouseY <= 230 && turns == 0){
        middenMidden = 1;
    }
    if(mouseX >= 170 && mouseX <= 230 && mouseY >= 170 && mouseY <= 230 && turns == 1){
        middenMidden = 2;
    }
    if(mouseX >= 235 && mouseX <= 295 && mouseY >= 170 && mouseY <= 230 && turns == 0){
        rechtsMidden = 1;
    }
    if(mouseX >= 235 && mouseX <= 295 && mouseY >= 170 && mouseY <= 230 && turns == 1){
        rechtsMidden = 2;
    }
    if(mouseX >= 105 && mouseX <= 165 && mouseY >= 235 && mouseY <= 295 && turns == 0){
        linksOnder = 1;
    }
    if(mouseX >= 105 && mouseX <= 165 && mouseY >= 235 && mouseY <= 295 && turns == 1){
        linksOnder = 2;
    }
    if(mouseX >= 170 && mouseX <= 230 && mouseY >= 235 && mouseY <= 295 && turns == 0){
        middenOnder = 1;
    }
    if(mouseX >= 170 && mouseX <= 230 && mouseY >= 235 && mouseY <= 295 && turns == 1){
        middenOnder = 2;
    }
    if(mouseX >= 235 && mouseX <= 295 && mouseY >= 235 && mouseY <= 295 && turns == 0){
        rechtsOnder = 1;
    }
    if(mouseX >= 235 && mouseX <= 295 && mouseY >= 235 && mouseY <= 295 && turns == 1){
        rechtsOnder = 2;
    }

  }
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  fill(0, 0, 0);
  rect(100, 100, 200, 200, 10);
  
  // Linksboven
  if (linksBoven == 0){
    fill(200, 200, 200);
  }
  else if (linksBoven == 1){
    fill("blue");
  }
  else if (linksBoven == 2){
    fill("red");
  }
  rect(105, 105, 60, 60, 10);


  // Middenboven
  if (middenBoven == 0){
    fill(200, 200, 200);
  }
  else if (middenBoven == 1){
    fill("blue");
  }
  else if (middenBoven == 2){
    fill("red");
  }
  rect(170, 105, 60, 60, 10);


  // Rechtsboven
  if (rechtsBoven == 0){
    fill(200, 200, 200);
  }
  else if (rechtsBoven == 1){
    fill("blue");
  }
  else if (rechtsBoven == 2){
    fill("red");
  }
  rect(235, 105, 60, 60, 10);


  // Linksmidden
  if (linksMidden == 0){
    fill(200, 200, 200);
  }
  else if (linksMidden == 1){
    fill("blue");
  }
  else if (linksMidden == 2){
    fill("red");
  }
  rect(105, 170, 60, 60, 10);


  // Middenmidden
  if (middenMidden == 0){
    fill(200, 200, 200);
  }
  else if (middenMidden == 1){
    fill("blue");
  }
  else if (middenMidden == 2){
    fill("red");
  }
  rect(170, 170, 60, 60, 10);


  // Rechtsmidden
  if (rechtsMidden == 0){
    fill(200, 200, 200);
  }
  else if (rechtsMidden == 1){
    fill("blue");
  }
  else if (rechtsMidden == 2){
    fill("red");
  }
  rect(235, 170, 60, 60, 10);


  // Linksonder
  if (linksOnder== 0){
    fill(200, 200, 200);
  }
  else if (linksOnder == 1){
    fill("blue");
  }
  else if (linksOnder == 2){
    fill("red");
  }
  rect(105, 235, 60, 60, 10);


  // Middenonder
  if (middenOnder == 0){
    fill(200, 200, 200);
  }
  else if (middenOnder == 1){
    fill("blue");
  }
  else if (middenOnder == 2){
    fill("red");
  }
  rect(170, 235, 60, 60, 10);


  // Rechtsonder
  if (rechtsOnder == 0){
    fill(200, 200, 200);
  }
  else if (rechtsOnder == 1){
    fill("blue");
  }
  else if (rechtsOnder == 2){
    fill("red");
  }
  rect(235, 235, 60, 60, 10);


}
