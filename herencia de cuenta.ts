export class CuentaDeAhorros extends cuenta {
    private cuentaActiva: boolean;
    constructor(saldoInicial: number, tasaAnual: number) {
    
    super(saldoInicial, tasaAnual);
        this.cuentaActiva = saldoInicial >= 10000;
    } 
    consignar(cantidad: number): void {
        if (this.cuentaActiva) {
            super.consignar(cantidad);
        } else {console.log("Cuenta de ahorros inactiva. No se puede consignar.");
        }  }
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
        console.log("Cuenta de ahorros:");
        super.imprimir();
        console.log("Cuenta activa:", this.cuentaActiva);
        console.log("Número de transacciones:", this.numConsignaciones + this.numRetiros);
    }
}

