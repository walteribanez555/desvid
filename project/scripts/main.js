

let airplane;



function preload() { 
    ship = loadImage("../assets/images/nave_2.jpg");
}

function setup() {
    imageMode(CENTER);
    airplane = new Airplane();
    createCanvas(400, 400);
  
  //   Plane.saidHello();
}

function draw() {
  background(255);
  airplane.moveTo();
  airplane.drawPlane();
}

function keyPressed() {
  //print(keyCode);
  if (keyCode == 90) {
    balas.push(new Bala(x, y, 2.5, dir, 1.5));
  }
  if (keyCode == 37) {
    airplane.izq = true;
  }
  if (keyCode == 38) {
    airplane.ade = true;
  }
  if (keyCode == 39) {
    airplane.der = true;
  }
  if (keyCode == 40) {
    airplane.atr = true;
  }
  if (keyCode == 17) {
    airplane.strafe = true;
  }
}
function keyReleased() {

  if (keyCode == 37) {
    airplane.izq = false;
  }
  if (keyCode == 38) {
    airplane.ade = false;
  }
  if (keyCode == 39) {
    airplane.der = false;
  }
  if (keyCode == 40) {
    airplane.atr = false;
  }
  if (keyCode == 17) {
    airplane.strafe = false;
  }
}
