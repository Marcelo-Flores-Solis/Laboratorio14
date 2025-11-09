// Paso 13:

class Figura {
    constructor(nombre) {
        this.nombre = nombre;
    }
    
    area() {
        throw new Error("Metodo area() debe ser implementado por la subclase");
    }
    perimetro() {
        throw new Error("Metodo perimetro() debe ser implementado por la subclase");
    }
}

// Subclase Cuadrado
class Cuadrado extends Figura {
    constructor(lado) {
        super("Cuadrado"); 
        this.lado = lado;
    }
    area() {
        return this.lado * this.lado;
    }
    perimetro() {
        return 4 * this.lado;
    }
}

// Subclase Triangulo 
class Triangulo extends Figura {
    constructor(lado1, lado2, lado3) {
        super("Triángulo");
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }

    perimetro() {
        return this.lado1 + this.lado2 + this.lado3;
    }

    area() {
    
        const s = this.perimetro() / 2;
        return Math.sqrt(
            s *
            (s - this.lado1) *
            (s - this.lado2) *
            (s - this.lado3)
        );
    }
}


const c = new Cuadrado(5);
console.log("Cuadrado creado de lado 5:");
console.log(c.nombre + ": área =", c.area(), ", perímetro =", c.perimetro());

const t = new Triangulo(4, 3, 4);
console.log("Triángulo creado de base 4, altura 3 y lado 4:");
console.log(t.nombre + ": área =", t.area(), ", perímetro =", t.perimetro());