
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(242, 111, 238);

  

  vragenScherm();
  
}

function vragenScherm() {
strokeWeight(3);
stroke(105, 22, 103);
  // antwoorden balken
  for (let i = 0; i < 2; i++) {
    fill(250, 224, 252);
    rect(1 + i * 400, 300, 400, 150);
    rect(1 + i * 400, 450, 400, 150);
  }

  // vraag balk
  fill(251, 237, 252);
  rect(0, 100, 800, 50);


  // hover linksboven vakje
  if (mouseX >= 0 && mouseX <= 400 && mouseY >= 300 && mouseY <= 450) {
    fill(249, 195, 252);
    rect(1, 300, 400, 150);
  }

  // hover rechtsboven vakje
  if (mouseX >= 0 && mouseX <= 400 && mouseY >= 450 && mouseY <= 600) {
    fill(249, 195, 252);
    rect(1, 450, 399, 150);
  }

  // hover linksonder vakje
  if (mouseX >= 400 && mouseX <= 800 && mouseY >= 300 && mouseY <= 450) {
    fill(249, 195, 252);
    rect(401, 300, 799, 150);
  }

  // hover rechtsonder vakje
  if (mouseX >= 400 && mouseX <= 800 && mouseY >= 450 && mouseY <= 600) {
    fill(249, 195, 252);
    rect(401, 450, 799, 150);
  }
}

