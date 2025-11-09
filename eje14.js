// Paso 16: 

class Empleado {
    constructor(nombre, sueldoBase) {
        this.nombre = nombre;
        this.sueldoBase = sueldoBase;
    }
    calcularSueldo() {
        return this.sueldoBase;
    }
    getBono() {
        return 0;
    }
}

class Programador extends Empleado {
    constructor(nombre, sueldoBase, lenguaje) {
        super(nombre, sueldoBase);
        this.lenguaje = lenguaje;
    }
    calcularSueldo() {
        return this.sueldoBase * 1.10;
    }
    getBono() {
        return 10;
    }
}

class ProgramadorSenior extends Programador {
    constructor(nombre, sueldoBase, lenguaje) {
        super(nombre, sueldoBase, lenguaje);
    }
    calcularSueldo() {
        return this.sueldoBase * 1.25;
    }
    getBono() {
        return 25;
    }
}

// Ejemplo
const lista = [
    new Empleado("Pablo", 2000),
    new Programador("Jack", 2500, "JavaScript"),
    new ProgramadorSenior("Mayra", 3000, "Python")
];

lista.forEach(e => {
    console.log(`Nombre: ${e.nombre}`);
    console.log(`Sueldo base: ${e.sueldoBase}`);
    if (e.lenguaje) console.log(`Lenguaje: ${e.lenguaje}`);
    console.log(`Bono aplicado: ${e.getBono()}%`);
    console.log(`Sueldo calculado: ${e.calcularSueldo()}`);
    console.log('----------------------------');
});