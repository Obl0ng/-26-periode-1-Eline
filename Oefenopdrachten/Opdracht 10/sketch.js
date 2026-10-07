let kleuren = ["red", "green", "blue", "orange", "purple", "yellow"];
let bestanden = ["elephant", "giraffe", "hippo", "monkey", "panda", "parrot", "penguin", "pig", "rabbit", "snake"];
let knoppen = [];
let knoppen2 = [];

let afb;
let afbeelding = [];
let index;
let dierafb;

let achtergrond = 'white'; // achtergrond kleur begint met wit


function setup() {
  createCanvas(800, 400);

  for (let i = 0; i < kleuren.length; i++) {
    let button = createButton(kleuren[i]); // maakt alle buttons aan met de kleuren array
    button.position(100 + i * 100, 100);
    button.style('background', kleuren[i]); // de achtergrond van de buttons komen toegevoegd
    button.mousePressed(KleurenButtonPressed);
    knoppen.push(button); // de gemaakte button wordt gepushed met de lege knoppen array 

  }

  for (let i = 0; i < bestanden.length; i++) {	// Laad elk bestand op positie: "animals/" + bestanden[i] + ".png"
    let button2 = createButton(bestanden[i]);
    button2.position(100 + i * 100, 150);
    button2.mousePressed(DierenButtonPressed);
    knoppen2.push(button2);
  }
}

function preload() {
  for (let i = 0; i < bestanden.length; i++) {	// Laad elk bestand op positie: "animals/" + bestanden[i] + ".png"
    afb = loadImage('animals/' + bestanden[i] + '.png');
    afbeelding.push(afb);
  }
}
function KleurenButtonPressed() {
  // 'this' betekent dat de computer kijkt welk knopje het is 
  // 'html' betekent dat de computer leest wat er op het knopje staat
  // daardoor veranderd de achtergrond kleur
  achtergrond = this.html();

  for (let i = 0; i < kleuren.length; i++) {
    if (kleuren[i] == achtergrond) {
      knoppen[i].hide(); // dan gaat de knop met de kleur waar je op klikt weg
    }
    else knoppen[i].show(); // als je dan op een andere knop klikt komt de knop terug
  }
}

function DierenButtonPressed() {
  let dier = this.html();
  console.log(dier);
  index = bestanden.indexOf(dier); // dan gaat de computer kijken wat de index nummer is van de dier
  dierafb = afbeelding[index]; // dan gaat de computer van de img array

  for (let i = 0; i < bestanden.length; i++) {
    if (bestanden[i] == dier) {
      knoppen2[i].hide();
    }
    else {
      knoppen2[i].show();
    }
  }
}


function draw() {
  background(achtergrond);

  if (dierafb != null) {
    image(dierafb, 300, 200, 100, 100);
  }
}
