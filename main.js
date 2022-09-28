addEventListener("DOMContentLoaded", ()=>{
// 8. Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura. Considere que
// se cobra por m2 y realice el código que representen el algoritmo que le permita ir generando
// presupuestos para cada cliente.
let metro = Number(prompt("Ingrese los metros cuadrados que quiere pintar: "))
let preciom=50000;
let pre=metro * preciom;
console.log(`El valor que debe pagar es ${pre} `);
})