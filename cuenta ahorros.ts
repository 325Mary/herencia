import { Cuenta } from "./cuenta";
export class CuentaDeAhorros extends Cuenta {
    protected cuentaActiva: boolean;
    constructor(saldo: number, tasaAnual: number) {

        super(saldo, tasaAnual);
        this.cuentaActiva = saldo >= 10000;
    }
    consignar(cantidad: number): void {
        if (this.cuentaActiva) {
            super.consignar(cantidad);
        } else {
            console.log("Cuenta de ahorros inactiva. No se puede consignar.");
        }
    }
    
    retirar(cantidad: number): void {
        if (this.cuentaActiva) {


            super.retirar(cantidad);
        } else {
            console.log("Cuenta de ahorros inactiva. No se puede retirar.");
        }
    }
    extractoMensual(): void {
        if (this.numRetiros > 4) {
            this.comisionMensual += (this.numRetiros - 4) * 1000;
        }

        super.extractoMensual();

        this.cuentaActiva = this.saldo >= 10000;
    }
    imprimir(): void {
        console.log("Cuenta activa:", this.cuentaActiva);
        console.log("Número de transacciones:", this.numConsignaciones + this.numRetiros);
        console.log("Saldo:", this.saldo);
        console.log("Comisión Mensual:", this.comisionMensual);
    }
}

