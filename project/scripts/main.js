

let airplane;



function preload() { 
    // ship = loadImage("../assets/img-materia/nave.jpg");
}

function setup() {
 
  createCanvas(400, 400);

  airplane = new Airplane();
  
  //   Plane.saidHello();
}

function draw() {
  background(220);
  airplane.moveTo();
  airplane.onDrawPlane();
}

function keyPressed() {
  //print(keyCode);
  if (keyCode == 90) {
    balas.push(new Bala(x, y, 2.5, dir, 1.5));
  }
  if (keyCode == 37) {
    izq = true;
  }
  if (keyCode == 38) {
    ade = true;
  }
  if (keyCode == 39) {
    der = true;
  }
  if (keyCode == 40) {
    atr = true;
  }
  if (keyCode == 17) {
    strafe = true;
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
