// Paso4 :

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Número aleatorio entre 5 y 10:", numeroAleatorio(5, 10));