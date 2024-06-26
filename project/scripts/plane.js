class Airplane {
  constructor() {
    //380,380,Math.PI,15,1.2)
    this.x = 380;
    this.y = 380;
    this.dir = Math.PI; // direccion
    this.rad = 15; // radio
    this.vel = 1.2; // velocidad
    this.ade = false; //adelante
    this.izq = false; //izquierda
    this.der = false; //derecha
    this.atr = false; // atras
    this.strafe = false;
  }

  moveTo() {
    if (this.der && !this.strafe) {
      this.dir = this.dir + 0.025;
    }
    if (this.izq && !this.strafe) {
      this.dir = this.dir - 0.025;
    }
    if (this.strafe && this.der) {
      this.x = this.x + this.vel * cos(this.dir + Math.PI / 2);
      this.y = this.y + this.vel * sin(this.dir + Math.PI / 2);
    }
    if (this.strafe && this.izq) {
      this.x = this.x + this.vel * cos(this.dir - Math.PI / 2);
      this.y = this.y + this.vel * sin(this.dir - Math.PI / 2);
    }
    if (this.ade) {
      this.x = this.x + this.vel * cos(this.dir);
      this.y = this.y + this.vel * sin(this.dir);
    }
    if (this.atr) {
      this.x = this.x - this.vel * cos(this.dir);
      this.y = this.y - this.vel * sin(this.dir);
    }

    //--------------
  }

  drawPlane() {
    // image(ship, this.x, this.y);
    push();
    translate(this.x, this.y);
    rotate(this.dir+ Math.PI/2);
    scale(this.rad * 0.003);
    translate(-this.x, -this.y);
    image(ship, this.x, this.y);
    pop();
  }
}
