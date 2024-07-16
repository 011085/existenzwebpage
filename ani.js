
let xpos = 0;
let xdire = 1;
let canvas;

let fuente;


function setup() {
    
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    fuente = loadFont('mus.ttf');

}


function windowResized() {

    resizeCanvas(windowWidth, windowHeight);
}


function draw() {

    xpos += xdire * 1;

    background(255);
    noStroke();
    fill(random(0, 200), 0, 0, 5);
    ellipse(width / 2, height / 2, 100, 100);
    stroke(20, 50);
    textSize(20);
    textFont(fuente);
    text("Click here to intro", width/2, height/2);
    stroke(200, 0, 0, 50);
    text("Welcome Existenz site", mouseX, mouseY);

    for (let i = 0; i < 10; i += 10) {

        stroke(0);
        line(0 -  xpos, height / 2 + i - xpos, width + xpos, height / 2 + i - xpos);
        line(0 -  xpos, height / 2 + i + xpos, width + xpos, height / 2 + i + xpos);
        line(width/2 + i + xpos, height / 2 , width/2 + i - xpos, height);
        line(width/2 + i + xpos, height / 2 , width/2 + i - xpos, 0);
    }



    if (xpos > 100) {
        xdire = xdire * -1;
    }


    if (xpos < -100) {
        xdire = xdire * -1;
    }
}

function mouseClicked() {
    // Verificar si el click se realizó dentro de la ellipse
    if (mouseX > 0 && mouseX < 1000 && mouseY > 0 && mouseY < 1500) {
        // Redireccionar a una página web
        window.location.href = 'home.html';
    }
}
