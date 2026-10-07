let achtergrond = background(255);

function setup() {
  createCanvas(900, 600);

  let button = createButton("start"); // maakt alle buttons aan met de kleuren array
  button.position(300, 300, 100, 100);
  button.style('background', 'white'); // de achtergrond van de buttons komen toegevoegd
  button.mousePressed(ButtonStartPressed);

}

function ButtonStartPressed() {

  achtergrond = background(0);


  if (ButtonStartPressed == true) {
    button.hide(); // dan gaat de knop met de kleur waar je op klikt weg
  }
  else button.show(); // als je dan op een andere knop klikt komt de knop terug

}

function draw() {
  background(achtergrond);




}




