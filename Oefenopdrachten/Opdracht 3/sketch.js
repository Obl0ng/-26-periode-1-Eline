
function keyPressed() {
  if (keyCode === ENTER) { 
    Score = random(0, 100);
 }
}

let Score = 0;

function setup() {
  createCanvas(400, 200);

Score = random(0, 100);
}

function draw() {
  background(220);

if (Score > 90){
  fill("green");
  text("uitstekend!", 100, 100);
} else if (Score > 70 && Score <= 89){
  fill("yellow");
  text("goed gedaan!", 100, 100);
} else if (Score > 50 && Score <= 69){
  fill("orange");
  text("Voldoende.", 100, 100);
} else if (Score < 49){
  fill("red");
  text("Onvoldoende.", 100, 100);
}
}
