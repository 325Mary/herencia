export class Cuenta {
    protected saldo: number;
    protected numConsignaciones: number = 0;
    protected numRetiros: number = 0;
    protected  tasaAnual: number;
    protected comisionMensual : number = 0;

    constructor(saldo: number, tasaAnual: number) {
        this.saldo = saldo;
        this.tasaAnual = tasaAnual;
    }
    public getSaldo():number{
        return this.saldo
    }
    public getTasaAnual():number{
        return this.tasaAnual
    }

    public setSaldo(saldo:number){
        this.saldo = saldo
    }
    public setTasaAnual(tasaAnual: number){
        this.tasaAnual = tasaAnual
    }
    public consignar(cantidad: number): void {
        this.saldo += cantidad;
        this.numConsignaciones++;
    }
    public retirar(cantidad: number): void {
        
        if (cantidad <= this.saldo) {           
        this.saldo -= cantidad;
             this.numRetiros++;
        } 
        else {console.log("Saldo insuficiente para el retiro.");
     }
    }
    public  calcularInteresMensual(): number {
        return (this.saldo * this.tasaAnual) / 12 / 100;
    }
    public calcularComisionMensual(): void {
        this.saldo -= this.comisionMensual;
    }
    public extractoMensual(): void {
        this.calcularComisionMensual();
        const interes = this.calcularInteresMensual();
        this.saldo += interes;
        console.log("Extracto mensual:");
        // this.imprimir();
    }
    // imprimir(): void {
    //     console.log("Saldo:", this.saldo);
    //     console.log("Número de consignaciones:", this.numConsignaciones);
    //     console.log("Número de retiros:", this.numRetiros);
    //     console.log("Tasa anual:", this.tasaAnual);
    //     console.log("Comisión mensual:", this.comisionMensual);
    // }
}
