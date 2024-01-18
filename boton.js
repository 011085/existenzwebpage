// Obtener el botón
var botonArriba = document.getElementById("boton-arriba");

// Mostrar el botón cuando el usuario haya desplazado 20 píxeles desde la parte superior
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        botonArriba.style.display = "block";
    } else {
        botonArriba.style.display = "none";
    }
}

// Función para desplazarse hacia arriba al hacer clic en el botón
function irArriba() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}
