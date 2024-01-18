
let xpos = 0;
let xdire = 0.1;
let canvas;


function setup() {
    canvas = createCanvas(150, 150);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
}


function windowResized() {

    resizeCanvas(windowWidth, windowHeight);
  }


function draw() {

    xpos += xdire * 1;


    background(255);

    fill(255, 55, 5, 150 + xpos);
    stroke(255, 0, 0);
    
    ellipse(150, 150, 100, 100);
   
    
    

    if (xpos > 10) {

        xdire = xdire * -1;


    }


    if (xpos < 0) {

        xdire = xdire * -1;
    }
}

