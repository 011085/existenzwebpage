
let canvas;
let muchas = [];

function setup() {


    canvas = createCanvas(windowWidth, windowHeight * 2);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');

    for (let i = 0; i < 100; i++) {
        muchas[i] = new Cae();
    }

}



function windowResized() {

    resizeCanvas(windowWidth, windowHeight * 2);
}




function draw() {

    background(255, 10);

    for (let i = 0; i < 50; i++) {

        muchas[i].mover();
        muchas[i].mostrar();
    }


}


class Cae {

    constructor() {

        this.xpos = random(width);
        this.ypos = random(-height);
        this.velo = 0;
        this.acelera = random(0.01, 0.05);
    }



    mostrar() {

        
        fill(0, 10);
        ellipse(this.xpos, this.ypos, 3, 3);
    }

    mover() {

        this.velo += this.acelera;
        this.ypos += this.velo;

        if (this.ypos > height) {

            this.ypos = 0;
            this.acelera = 0;
            this.xpos = random(width);
        }
    }
}
