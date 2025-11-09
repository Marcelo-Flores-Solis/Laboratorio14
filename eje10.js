// Paso 12: 
class Producto {
    #nombre;
    #precio;
    #stock;

    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    get nombre() {
        return this.#nombre;
    }
    set nombre(valor) {
        this.#nombre = valor;
    }


    get precio() {
       
        return `$${this.#precio.toFixed(2)}`;
    }

    set precio(valor) {
        const num = Number(valor);
        if (!isNaN(num) && num > 0) {
            this.#precio = num;
        } else {
            throw new Error("El precio debe ser un número mayor que 0");
        }
    }

    get stock() {
        return this.#stock;
    }
    set stock(valor) {
        if (Number(valor) >= 0) {
            this.#stock = Number(valor);
        } else {
            throw new Error("El stock debe ser como mínimo 0");
        }
    }

    vender(cantidad) {
        if (cantidad > 0 && cantidad <= this.#stock) {
            this.#stock -= cantidad;
            console.log(`Venta realizada. Stock restante: ${this.#stock}`);
            return true;
        } else {
            console.log("No hay suficiente stock para la venta.");
            return false;
        }
    }
}


const p = new Producto("Monitor", "120.5", 10);
console.log("Producto:", p.nombre, "Precio:", p.precio, "Stock:", p.stock); // Muestra $120.50

p.precio = 80;
console.log("Nuevo precio:", p.precio); 

p.precio = "99.99";
console.log("Precio actualizado:", p.precio); 
