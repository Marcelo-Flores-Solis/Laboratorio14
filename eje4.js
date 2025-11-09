// Paso 6: 

function cuadrado(num) {
    return Math.pow(num, 2);
}
function cubo(num) {
    return Math.pow(num, 3);
}
function raizCuadrada(num) {
    return Math.sqrt(num);
}

let numero = Number(prompt("Ingrese un número:"));
console.log("Número:", numero);
console.log("Cuadrado:", cuadrado(numero));
console.log("Cubo:", cubo(numero));
console.log("Raíz cuadrada:", raizCuadrada(numero));