OPC.slider("eyeRadius", 0.2, 0.01, 0.4, 0.01);
OPC.slider("eyeVariance", 0.05, 0.01, 0.4, 0.01);
OPC.slider("distribution", 1.0, 0.1, 5.0, 0.05);
OPC.slider("length", 0.1, 0.01, 0.4, 0.01);
OPC.slider("lengthEvo", 1.3, 0.8, 1.8, 0.05);
OPC.slider("speedFactor", 0.1, 0.01, 1, 0.01);
OPC.slider("respawnFactor", 0.03, 0.005, 0.1, 0.005);

var n = 200;
var vents = [];

function setup() {
	createCanvas(700, 700);
  for(let i = 0 ; i < n ; i ++) {
    vents.push(new Vent());
  }
}

function draw() {
	background(0);
  for(let i = 0 ; i < n ; i ++) {
    vents[i].show();
    vents[i].move();
  }
}

class Vent {
  
  constructor () {
		var x,y,rx,ry,a,la,s,c;
    this.initialize(); 
  }
  
  initialize() {
    var centerR = random(0, eyeVariance * width);
    var centerA = random(0, 2 * PI);
    this.x = width / 2.0 + centerR * cos(centerA);
    this.y = height / 2.0 + centerR * sin(centerA);
    
    var radiusRow = eyeRadius * width + pow(random(0, pow((width - eyeRadius * width * 2.0),distribution)), 1.0 / distribution);
    this.rx = radiusRow * random(0.8, 1.2);
    this.ry = radiusRow * random(0.8, 1.2);
    
    this.a = random(0, 2 * PI);
    
    this.la = pow(length * width,lengthEvo) / radiusRow * random(0.8, 1.2);
    
    this.c = color(random(230, 255));
    
    this.s = speedFactor * random(0.8, 1.2);
  }
  
  show() {
    
    noFill();
    stroke(this.c);
    arc(this.x, this.y, this.rx, this.ry, this.a, this.a + this.la);
    
  }
  
  move() {
    this.a += this.s;
    var r = random(0,1);
    if(r < respawnFactor) {
      this.initialize();
    }
  }
}
