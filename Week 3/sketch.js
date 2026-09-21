let rectX1 = 105;
let rectY1 = 105;
let rectW = 60;
let rectH = 60;

let middenBoven = 0;

function mousePressed(){
	if (mouseButton == LEFT){

    if(mouseX >= 170 && mouseX <= 230 && mouseY >= 105 && mouseY <= 165){
        // We klikken in vakje midden boven
        middenBoven = 1;
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
  fill(200, 200, 200);
  rect(105, 105, 60, 60, 10);

  if (middenBoven == 0){
    fill("grey");
  }
  else if (middenBoven == 1){
    fill("blue");
  }
  else if (middenBoven == 2){
    fill("red");
  }

  rect(170, 105, 60, 60, 10);


  fill("grey");
  rect(235, 105, 60, 60, 10);
  rect(105, 170, 60, 60, 10);
  rect(170, 170, 60, 60, 10);
  rect(235, 170, 60, 60, 10);
  rect(105, 235, 60, 60, 10);
  rect(170, 235, 60, 60, 10);
  rect(235, 235, 60, 60, 10);




}