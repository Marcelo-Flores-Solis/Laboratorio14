// Paso 11: 

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
        return this.#precio;
    }
    set precio(valor) {
        if (Number(valor) > 0) {
            this.#precio = Number(valor);
        } else {
            throw new Error("El precio debe ser mayor que 0");
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


const p = new Producto("Teclado", 120, 5);
console.log("Producto creado:", p.nombre, "Precio:", p.precio, "Stock:", p.stock);
console.log("Intentando vender 2 unidades:");
p.vender(2);
console.log("Intentando vender 4 unidades:");
p.vender(4);