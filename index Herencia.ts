import { Cuenta } from "./cuenta";
import { CuentaDeAhorros } from "./cuenta ahorros";
import { CuentaCorriente } from "./cuenta corriente";
// const miCuenta = new Cuenta(1000, 5); // Saldo : 1000, Tasa anual: 5%
// console.log("cuenta")
// miCuenta.consignar(1000);
// miCuenta.retirar(200);
// miCuenta.extractoMensual();

const cuentaAhorros = new CuentaDeAhorros(12000, 5); 
const cuentaCorriente = new CuentaCorriente(20000, 4); 

console.log("Cuenta ahorros")
cuentaAhorros.consignar(3000);
cuentaAhorros.retirar(50);
cuentaAhorros.extractoMensual();
cuentaAhorros.imprimir();

console.log("Cuenta Corriente")
cuentaCorriente.consignar(600);
cuentaCorriente.retirar(200);
cuentaCorriente.extractoMensual();
cuentaCorriente.imprimir();





