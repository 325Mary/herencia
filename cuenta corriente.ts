export class CuentaCorriente extends Cuenta {
    private sobregiro: number = 0;

    constructor(saldoInicial: number, tasaAnual: number) {
        
       
super(saldoInicial, tasaAnual);
    }   
retirar(cantidad: number): void {
        if (cantidad <= this.saldo + this.sobregiro) {
            if (cantidad > this.saldo) {
                this.sobregiro += this.saldo - cantidad;
                this.saldo = 0;
            } else {
                this.saldo -= cantidad;
            }
            this.numRetiros++;
        } 
        else {
            console.log("Saldo insuficiente (incluyendo sobregiro) para el retiro.");
        }
    }

imprimir(): void {
    console.log("Cuenta corriente:");
    super.imprimir();
    console.log("Sobregiro:", this.sobregiro);
    }
}

