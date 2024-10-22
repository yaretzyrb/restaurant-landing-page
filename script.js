let x = 0;
let array = ['linear-gradient(to right,#2c1a0a,rgba(255, 255, 255, 0)), url("./img/fondo2.jpg")', 'linear-gradient(to right,#2c1a0a,rgba(255, 255, 255, 0)), url("./img/fondo3.jpg")', 'linear-gradient(to right,#2c1a0a,rgba(255, 255, 255, 0)), url("./img/fondo4.jpg")', 'linear-gradient(to right,#2c1a0a,rgba(255, 255, 255, 0)), url("./img/fondo5.jpg")', 'linear-gradient(to right,#2c1a0a,rgba(255, 255, 255, 0)), url("./img/fondo1.jpg")']

function temporizador() {
    setTimeout(() => cambiarFondo(x), 10000);
}

function cambiarFondo(numero) {
    document.getElementById("background").style.background = array[numero];
    console.log(array[numero]);
    x++;
    if (x == 4) {
        x = 1;
    }
    temporizador();
}
