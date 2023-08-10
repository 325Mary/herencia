import { Cuenta } from "./cuenta";
export class CuentaCorriente extends Cuenta {
    protected sobregiro: number = 0;

   
constructor(saldo: number, tasaAnual: number) {
    super(saldo, tasaAnual);
    
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
    consignar(cantidad: number): void {
    
            if (this.sobregiro > 0) {
                this.saldo = cantidad - this.sobregiro;
                this.sobregiro = 0;
            } 
            else {
                super.consignar(cantidad);
            }
        }

    extractoMensual(): void {
        if (this.numRetiros > 4) {
            this.comisionMensual += (this.numRetiros - 4) * 1000;
        }

    }
imprimir(): void {
            console.log("Saldo:", this.saldo)
            console.log("Tasa Anual:", this.tasaAnual)
            console.log("Sobregiro:", this.sobregiro)
        }
    
}
