// Paso 15:

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

const usuarios = [
    new Cliente("Ana", "ana@email.com", 4),
    new Administrador("Luis", "luis@email.com", ["crear", "editar"]),
    new Cliente("Pedro", "pedro@email.com", 2),
    new Administrador("Sofia", "sofia@email.com", ["eliminar"])
];

usuarios.forEach(usuario => {
    console.log(usuario.mostrarInfo());
});