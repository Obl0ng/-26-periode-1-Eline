let kleuren = ["red", "green", "blue", "orange", "purple", "yellow"];
let bestanden = ["elephant", "giraffe", "hippo", "monkey", "panda", "parrot", "penguin", "pig", "rabbit", "snake"];
let knoppen = [];

let achtergrond = 'white';


function setup() {
  createCanvas(800, 400);

  for (let i = 0; i < kleuren.length; i++) {
    let button = createButton(kleuren[i]);
    button.position(100 + i * 100, 200);
    button.style('background', kleuren[i]);
    button.mousePressed(ButtonIsPressed);
    knoppen.push(button);
   
  }
}


function ButtonIsPressed() {
  // 'this' betekent dat de computer kijkt welk knopje het is 
  // 'html' betekent dat de computer leest wat er op het knopje staat
  // daardoor veranderd de achtergrond kleur
  achtergrond = this.html();

  if (background == button) {
    knoppen(-150);
  }
}


function draw() {
  background(achtergrond);
  
  
}
