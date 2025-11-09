// Paso 7: 

function gradosARadianes(grados) {
    let radianes = grados * (Math.PI / 180);
    console.log(grados + " grados = " + radianes + " radianes");
    console.log("Seno:", Math.sin(radianes));
    console.log("Coseno:", Math.cos(radianes));
}

function radianesAGrados(radianes) {
    let grados = radianes * (180 / Math.PI);
    console.log(radianes + " radianes = " + grados + " grados");
}

let grados = Number(prompt("Ingrese los grados a convertir:"));
gradosARadianes(grados);

let radianes = Number(prompt("Ingrese los radianes a convertir:"));
radianesAGrados(radianes);