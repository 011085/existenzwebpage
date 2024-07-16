

let muchas = [];

function setup() {

    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');

    for (let i = 0; i<100; i++) {

        muchas[i] = new Cae();
    }

}


function windowResized() {

    resizeCanvas(windowWidth, windowHeight);
}


function draw() {

    background(255);

    for (let i = 0; i<100; i++) {

        muchas[i].mover;
        muchas[i].mostrar;
    }

    noStroke();
    fill (255, 0, 0, 50);
        ellipse (mouseX, mouseY , 20, 20);


}


class Cae {

    constructu() {

        this.xpos = random(width);
        this.ypos = random(-height);
        this.acelera = random (0.1, 0.6);
        this.velo = 0
        
    }

    mostrar() {

        stroke(255, 10);
        
        circle (this.xpos, this.ypos, 70);
    }

mover() {

    this.velo += this.acelera;
    this.ypos += this.velo;

    if (this.ypos>height) {

        this.ypos = 0;
        this.acelera = 0;
        this.xpos = random(width);
    }

    
}


}