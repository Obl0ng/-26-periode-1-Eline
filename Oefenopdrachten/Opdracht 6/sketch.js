

function setup() {
  createCanvas(380, 360);
}

function draw() {
  background(220);

  let colors = ['red', 'green', 'blue', 'purple', 'yellow'];
  let numbers = ['400', '240', '10', '490', '30', '60', '244', '500', '301', '300',];
  let numbers2 = ['3', '55', '93', '20', '102', '6'];
  let numbers3 = ['14', '22', '80', '5'];
  let total = 0;


  // nummers
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
  let lower300 = numbers.filter(num => num < 300);
  for (let i = 0; i < lower300.length; i++) {
    fill(0);
    text(lower300[i], 35, 250 + i * 10);
  }

  // 5. Meerdere arrays optellen
  for (let i = 0; i < numbers2.length; i++) {
    total += Number(numbers2[i]);
  }
  for (let i = 0; i < numbers3.length; i++) {
  total += Number(numbers3[i]);
  text(total, 135, 15);
  }























}
