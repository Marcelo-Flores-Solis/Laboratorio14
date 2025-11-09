// Paso 7: 


function gradosARadianes(grados) {
    return grados * (Math.PI / 180);
}
function radianesAGrados(radianes) {
    return radianes * (180 / Math.PI);
}
function seno(radianes) {
    return Math.sin(radianes);
}
function coseno(radianes) {
    return Math.cos(radianes);
}

let grados = Number(prompt("Ingrese los grados a convertir:"));
console.log("Grados usados:", grados);

let radianes = gradosARadianes(grados);
console.log("Radianes:", radianes);
console.log("Seno:", seno(radianes));
console.log("Coseno:", coseno(radianes));

let radianesInput = Number(prompt("Ingrese los radianes a convertir:"));
console.log("Radianes usados:", radianesInput);

let gradosConvertidos = radianesAGrados(radianesInput);
console.log("Grados:", gradosConvertidos);