function setup() {
  createCanvas(800, 600);
}

function draw() {
  background("lightblue");
  noStroke();

  // Zon
  fill("orange");
  ellipse(200, 50, 90, 90);

   fill("yellow");
  ellipse(200, 50, 70, 70);

  // Wolk1
  fill(210, 210, 210);
  ellipse(201, 90, 60, 60);
  ellipse(246, 85, 65, 65);
  ellipse(291, 90, 60, 60);

  fill("white");
  ellipse(200, 100, 60, 60);
  ellipse(245, 95, 65, 65);
  ellipse(290, 100, 60, 60);

  // Wolk2
  fill(210, 210, 210);
  ellipse(241, 130, 60, 60);
  ellipse(286, 125, 65, 65);
  ellipse(331, 130, 60, 60);

  fill("white");
  ellipse(240, 140, 60, 60);
  ellipse(285, 135, 65, 65);
  ellipse(330, 140, 60, 60);

  // Wolk3
  fill(210, 210, 210);
  ellipse(551, 200, 60, 60);
  ellipse(596, 195, 65, 65);
  ellipse(641, 200, 60, 60);

  fill("white");
  ellipse(550, 210, 60, 60);
  ellipse(595, 205, 65, 65);
  ellipse(640, 210, 60, 60);

  // Berg1
  stroke(1)
  fill(160, 160, 160);
  triangle(800, 500, 500, 500, 650, 350);
  
  // Berg2 
  fill(140, 140, 140);
  
}
