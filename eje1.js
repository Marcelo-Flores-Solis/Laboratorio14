// Paso3 :
function redondearPrecio(precio) {
    console.log(`Precio original: ${precio}`);
    console.log(`Redondeo hacia abajo: ${Math.floor(precio)}`);
    console.log(`Redondeo hacia arriba: ${Math.ceil(precio)}`);
    console.log(`Redondeo normal: ${Math.round(precio)}`);
    console.log("------------------------------");
}

redondearPrecio(12.49);
redondearPrecio(12.5);