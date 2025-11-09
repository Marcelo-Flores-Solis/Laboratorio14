// Paso 9: 
function distanciaEntrePuntos(x1, y1, x2, y2) {
    if (x1 === undefined) x1 = Number(prompt("Ingrese x1:"));
    if (y1 === undefined) y1 = Number(prompt("Ingrese y1:"));
    if (x2 === undefined) x2 = Number(prompt("Ingrese x2:"));
    if (y2 === undefined) y2 = Number(prompt("Ingrese y2:"));

    console.log("Punto 1 usado: (", x1, ",", y1, ")");
    console.log("Punto 2 usado: (", x2, ",", y2, ")");

    let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    let distancia1AlOrigen = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    let distancia2AlOrigen = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
    let sumaDistanciasAlOrigen = distancia1AlOrigen + distancia2AlOrigen;

    console.log("Distancia entre puntos:", distancia);
    console.log("Distancia punto 1 al origen:", distancia1AlOrigen);
    console.log("Distancia punto 2 al origen:", distancia2AlOrigen);
    console.log("Suma de distancias al origen:", sumaDistanciasAlOrigen);
}


distanciaEntrePuntos();

distanciaEntrePuntos(3, 4, 7, 1);