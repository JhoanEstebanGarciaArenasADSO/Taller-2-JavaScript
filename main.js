addEventListener("DOMContentLoaded", ()=>{
// 9. Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo,
// pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron. Realice el código
// que representen el algoritmo para solucionar este problema.
// Al final debe entregar el nombre de la persona entrevistada en mayúscula sostenida y minunscula
// sostenida y la edad del entrevistado.
let name = prompt("Ingrese su nombre: ");
let añon = Number(prompt("Ingrese su año de nacimiento: "));
let añoe = 2022;
let edad= añoe - añon;
console.log(`La edad de ${name} es ${edad} `);
})