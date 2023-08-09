export class Cuenta {
    private saldo: number;
    private numConsignaciones: number = 0;
    private numRetiros: number = 0;
    private  tasaAnual: number;
    private comisionMensual : number = 0;

    constructor(saldoInicial: number, tasaAnual: number) {
        this.saldo = saldoInicial;
        this.tasaAnual = tasaAnual;
    }
    consignar(cantidad: number): void {
        this.saldo += cantidad;
        this.numConsignaciones++;
    }
    retirar(cantidad: number): void {
        
        if (cantidad <= this.saldo) {           
        this.saldo -= cantidad;
             this.numRetiros++;
        } 
        else {console.log("Saldo insuficiente para el retiro.");
     }
    }
    private calcularInteresMensual(): number {
        return (this.saldo * this.tasaAnual) / 12 / 100;
    }
    calcularComisionMensual(): void {
        this.saldo -= this.comisionMensual;
    }
    extractoMensual(): void {
        this.calcularComisionMensual();
        const interes = this.calcularInteresMensual();
        this.saldo += interes;
        console.log("Extracto mensual:");
        this.imprimir();
    }
    imprimir(): void {
        console.log("Saldo:", this.saldo);
        console.log("Número de consignaciones:", this.numConsignaciones);
        console.log("Número de retiros:", this.numRetiros);
        console.log("Tasa anual:", this.tasaAnual);
        console.log("Comisión mensual:", this.comisionMensual);
    }
}
