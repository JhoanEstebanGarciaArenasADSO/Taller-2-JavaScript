addEventListener("DOMContentLoaded", ()=>{
// 2. Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un 2% de
// descuento, realice un algoritmo que indique cuanto fue el valor a pagar por cada producto y el total
// de la compra.


let pro= Number(prompt("Ingrese el precio del producto 1: "));
let pro2= Number(prompt("Ingrese el precio del producto 2: "));
let pro3= Number(prompt("Ingrese el precio del producto 3: "));
let pro4= Number(prompt("Ingrese el precio del producto 4: "));
let pro5= Number(prompt("Ingrese el precio del producto 5: "));
let desc1= pro*0.05; 
let desc2= pro2*0.05; 
let desc3 = pro4*0.02;
let desc4 = pro5*0.02;
let val1 = pro-desc1;
let val2 = pro2-desc2;
let val3 = pro4-desc3;
let val4 = pro5-desc4;
let total= val1+val2+val3+val4+pro3;
console.log(`El valor a pagar del producto 1 es: ${val1}`);
console.log(`El valor a pagar del producto 2 es: ${val2}`);
console.log(`El valor a pagar del producto 4 es: ${val3}`);
console.log(`El valor a pagar del producto 5 es: ${val4}`);
console.log(`El total a pagar es: ${total}`);
})