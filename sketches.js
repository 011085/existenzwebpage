// Fondo ligero + partículas de movimiento

const PARTICLE_COUNT = 20;
let canvas;
let particles = [];

function setup() {
    const container = document.getElementById('sketch');
    const widthPx = container ? container.clientWidth : 400;
    const heightPx = container ? container.clientHeight : 400;

    // Render 2D para mantenerlo ligero
    canvas = createCanvas(widthPx, heightPx);
    canvas.parent('sketch');
    canvas.elt.style.position = 'absolute';
    canvas.elt.style.top = '0';
    canvas.elt.style.left = '0';
    canvas.elt.style.width = '100%';
    canvas.elt.style.height = '100%';
    canvas.elt.style.zIndex = '0';

    frameRate(15);

    initParticles();
}

function initParticles() {
    const maxRadius = min(width, height) * 0.45;
    particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        angle: random(TAU),
        radius: random(50, maxRadius),
        speed: random(0.002, 0.008),
    }));
}

function windowResized() {
    const container = document.getElementById('sketch');
    if (!container) return;

    const rect = container.getBoundingClientRect();
    resizeCanvas(Math.round(rect.width), Math.round(rect.height));
    initParticles();
}

function draw() {
    // Fondo oscuro con ‘trails’ para no necesitar un gráfico pre-renderizado
    background(0, 20);

    push();
    translate(width / 2, height / 2);
    noStroke();
    fill(0, 255, 0, 180);

    for (const p of particles) {
        p.angle += p.speed;
        const x = cos(p.angle) * p.radius;
        const y = sin(p.angle) * p.radius;
        const size = map(sin(frameCount * 0.02 + p.angle), -1, 1, 1.5, 4);
        ellipse(x, y, size, size);
    }

    pop();
}



