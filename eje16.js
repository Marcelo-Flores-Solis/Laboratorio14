// Paso 18 :
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Carrito {
    constructor() {
        this.productos = [];
    }
    agregarProducto(producto) {
        if (producto instanceof Producto) {
            this.productos.push(producto);
            console.log(`Producto agregado: ${producto.nombre} - $${producto.precio.toFixed(2)}`);
            return true;
        }
        console.log("Solo se pueden agregar productos");
        return false;
    }
    calcularTotal() {
        const total = this.productos.reduce((suma, prod) => suma + prod.precio, 0);
        console.log(`Total calculado: $${total.toFixed(2)}`);
        return total;
    }
    mostrarResumen() {
        console.log("==================================");
        if (this.productos.length === 0) {
            console.log("El carrito está vacío.");
        } else {
            console.log("Resumen del carrito:");
            this.productos.forEach((prod, idx) => {
                console.log(` ${idx + 1}. Producto: ${prod.nombre} | Precio: $${prod.precio.toFixed(2)}`);
            });
            const total = this.calcularTotal();
            console.log("----------------------------------");
            console.log(`Cantidad de producos: ${this.productos.length}`);
            console.log(`Total a pagar: $${total.toFixed(2)}`);
        }
        console.log("================");
    }
}


const carrito = new Carrito();
const p1 = new Producto("Teclado", 120.99);
const p2 = new Producto("Mouse", 75.5);
const p3 = new Producto("Monitor", 320);

carrito.agregarProducto(p1);
carrito.agregarProducto(p2);
carrito.agregarProducto(p3);
carrito.mostrarResumen();
