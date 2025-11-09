// Paso 10: 

function normalizarCalificaciones(arrayNotas) {
    const max = Math.max(...arrayNotas);

    if (max === 0) return arrayNotas.map(() => 0);
    return arrayNotas.map(nota => nota / max);
}

const notas = [10, 15, 13, 20, 18];
console.log("Notas originales:", notas);

const notasNormalizadas = normalizarCalificaciones(notas);
console.log("Notas normalizadas:", notasNormalizadas);