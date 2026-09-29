let kleuren = [];

function setup() {
  createCanvas(380, 360);
  for (let i = 0; i < 5; i++) {
    kleuren.push([random(255), random(255), random(255)]);
  }
}

function draw() {
  background(220);

  // nummers
  textSize(10);
  fill(0);
  text("1.", 20, 15);
  text("2.", 20, 100);
  text("3.", 20, 190);
  text("4.", 20, 250);
  text("5.", 120, 15);
  text("6.", 120, 100);
  text("7.", 120, 190);
  text("8.", 120, 280);
  text("9.", 240, 15);

  // 1. 5 kleuren en woorden onder elkaar
  let colors = ['red', 'green', 'blue', 'purple', 'yellow'];
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    text(colors[i], 35, 15 + i * 10);
  }

  //2. Array aanpassen
  colors.shift();
  colors.push('red');
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    text(colors[i], 35, 100 + i * 10);
  }

  // 3. Twee kleuren verwijderen
  colors.splice(1, 2);
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    text(colors[i], 35, 190 + i * 10);
  }

  // 4. Getallen filteren
  let numbers1 = [400, 240, 10, 490, 30, 60, 244, 500, 301, 300,];
  let lower300 = numbers1.filter(num => num < 300);
  for (let i = 0; i < lower300.length; i++) {
    fill(0);
    text(lower300[i], 35, 250 + i * 10);
  }

  // 5. Meerdere arrays optellen
  let numbers2 = [3, 55, 93, 20, 102, 6];
  let numbers3 = [14, 22, 80, 5];
  let total = 0;
  for (let i = 0; i < numbers2.length; i++) {
    total += (numbers2[i]);
  }
  for (let i = 0; i < numbers3.length; i++) {
    total += (numbers3[i]);
  }
  textSize(30);
  text(total, 135, 55);

  // 6. Letters tellen
  let woord = 'Overheidsfinancieringstekort';
  let total2 = 0;
  for (let i = 0; i < woord.length; i++) {
    if (woord[i] == 'e') {
      total2 += 1;
    }
  }
  text(total2, 140, 120);

  // 7. Alfabetische volgorde
  let colors2 = ['red', 'green', 'blue', 'purple', 'yellow'];
  colors2.sort();
  for (let i = 0; i < colors2.length; i++) {
    fill(colors2[i]);
    textSize(10);
    text(colors2[i], 135, 190 + i * 10);
  }

  // 8. Random kleuren op een rij
  for (let i = 0; i < 5; i++) {
    fill(kleuren[i]);
   rect(135 + i * 30, 273, 30, 30);
  }













  }
