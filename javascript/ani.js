
let xpos = 0;
let xdire = 1;
let canvas;

let fuente;
//clase
let muchas = [];


function setup() {

    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    fuente = loadFont('mus.ttf');

    for (let i = 0; i < 100; i++) {
        muchas[i] = new Cae();
    }

}


function windowResized() {

    resizeCanvas(windowWidth, windowHeight);
}


function draw() {

   

    xpos += xdire * 1;

    background(20, 100);
    noStroke();
    fill(random(0, 200), 0, 0, 25);
    ellipse(width / 2, height / 2, 100, 100);


    for (let i = 0; i < 10; i += 10) {

        stroke(0);
        strokeWeight(2);
        line(0 - xpos, height / 2 + i - xpos, width + xpos, height / 2 + i - xpos);
        line(0 - xpos, height / 2 + i + xpos, width + xpos, height / 2 + i + xpos);
        line(width / 2 + i + xpos, height / 2, width / 2 + i - xpos, height);
        line(width / 2 + i + xpos, height / 2, width / 2 + i - xpos, 0);
    }

    stroke(20, 150);
    textSize(20);
    textFont(fuente);
    stroke(150, 150, 150, 100);
    text("Click here to intro", width / 2, height / 2);
    stroke(155, 100, 0, 20);
    text("Welcome Existenz site", width / 2 - 75, height / 2 - 25);



    if (xpos > 100) {
        xdire = xdire * -1;
    }


    if (xpos < -100) {
        xdire = xdire * -1;
    }


    for (let i = 0; i < 50; i++) {

        muchas[i].mover();
        muchas[i].mostrar();
    }
}

function mouseClicked() {
    // Verificar si el click se realizó dentro de la ellipse
    if (mouseX > 0 && mouseX < 1000 && mouseY > 0 && mouseY < 1500) {
        // Redireccionar a una página web
        window.location.href = 'home.html';
    }
}

class Cae {

    constructor() {

        this.xpos = random(width);
        this.ypos = random(-height);
        this.velo = 0;
        this.acelera = random(0.01, 0.15);
    }



    mostrar() {

        
        stroke(155, 100, 0, 70);
        text('no noise no life',this.xpos, this.ypos);
        
       
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
