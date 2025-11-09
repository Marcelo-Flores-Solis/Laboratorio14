// Paso 17: 
class Cuenta {
    #saldo;
    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }
    get saldo() {
        return this.#saldo;
    }
    depositar(monto) {
        if (monto > 0) {
            this.#saldo += monto;
            return true;
        }
        return false;
    }
    retirar(monto) {
        if (monto > 0 && monto <= this.#saldo) {
            this.#saldo -= monto;
            return true;
        }
        return false;
    }
    transferir(monto, otraCuenta) {
        if (this.retirar(monto)) {
            otraCuenta.depositar(monto);
            return true;
        }
        return false;
    }
    _actualizarSaldo(nuevoSaldo) {  
        this.#saldo = nuevoSaldo;
    }
}

class CuentaAhorro extends Cuenta {
    retirar(monto) {
        return super.retirar(monto);
    }
}

class CuentaCorriente extends Cuenta {
    constructor(saldoInicial, limiteSobregiro) {
        super(saldoInicial);
        this.limiteSobregiro = limiteSobregiro;
    }
    retirar(monto) {
        // Permite sobregiro dentro de límite
        if (monto > 0 && monto <= (this.saldo + this.limiteSobregiro)) {
            this._actualizarSaldo(this.saldo - monto);
            return true;
        }
        return false;
    }
}

const ahorro = new CuentaAhorro(500);
console.log(`CuentaAhorro creada con saldo inicial: $${ahorro.saldo}`);
const corriente = new CuentaCorriente(200, 300);
console.log(`CuentaCorriente creada con saldo inicial: $${corriente.saldo} y límite de sobregiro: $${corriente.limiteSobregiro}`);

console.log("Depositar $100 en CuentaAhorro");
ahorro.depositar(100);
console.log("Saldo actual CuentaAhorro:", ahorro.saldo);

console.log("Depositar $50 en CuentaCorriente");
corriente.depositar(50);
console.log("Saldo actual CuentaCorriente:", corriente.saldo);

console.log("Intento retirar $700 de CuentaAhorro");
const resultadoAhorro = ahorro.retirar(700);
console.log(`¿Retiro exitoso? ${resultadoAhorro}. Saldo actual: $${ahorro.saldo}`);

console.log("Intento retirar $400 de CuentaCorriente");
const resultadoCorriente = corriente.retirar(400);
console.log(`¿Retiro exitoso? ${resultadoCorriente}. Saldo actual: $${corriente.saldo}`);
// Ahora saldo se actualizará a -150 correctamente

console.log("Transferir $100 de CuentaCorriente a CuentaAhorro");
const resultadoTransf = corriente.transferir(100, ahorro);
console.log(`¿Transferencia exitosa? ${resultadoTransf}`);
console.log("Saldo actual CuentaCorriente:", corriente.saldo);
console.log("Saldo actual CuentaAhorro:", ahorro.saldo);