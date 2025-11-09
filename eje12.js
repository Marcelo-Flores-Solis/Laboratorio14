//Paso 14: 

class Usuario {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }

    mostrarInfo() {
        return `Nombre: ${this.nombre}, Email: ${this.email}`;
    }
}

// Subclase Cliente
class Cliente extends Usuario {
    constructor(nombre, email, nivelFidelidad) {
        super(nombre, email);
        this.nivelFidelidad = nivelFidelidad; 
    }

    mostrarInfo() {
        return `${super.mostrarInfo()}, Nivel de fidelidad: ${this.nivelFidelidad}`;
    }
}

// Subclase Administrador
class Administrador extends Usuario {
    constructor(nombre, email, permisos) {
        super(nombre, email);
        this.permisos = permisos; 
    }

    mostrarInfo() {
        return `${super.mostrarInfo()}, Permisos: ${this.permisos.join(", ")}`;
    }
}


const cliente = new Cliente("Ana", "ana@email.com", 4);
console.log(cliente.mostrarInfo());

const admin = new Administrador("Luis", "luis@email.com", ["crear", "editar", "eliminar"]);
console.log(admin.mostrarInfo());
