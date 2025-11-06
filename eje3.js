// Paso 5:

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function lanzarDado() {
    const dado = numeroAleatorio(1, 6);
    return dado; 
}

let dado1 = lanzarDado();
let dado2 = lanzarDado();
console.log(`Resultado de los dados: ${dado1} y ${dado2}`);
suma = dado1 + dado2;
console.log(`Suma de los dados: ${suma}`);