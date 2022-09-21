addEventListener("DOMContentLoaded", ()=>{
// 3. Calcular la edad de una madre en el momento de dio a luz a alguno de sus hijos.
// • Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un
// depósito.
// • Q=V/t, siendo Q (caudal), V (volumen) y t (tiempo).
// • Volumen = PI *(radio^2)* H (altura del depósito)
// • El tiempo se encuentra en minutos.
// • Normalmente se mide el volumen en litros y el tiempo en segundos.


let tie= Number(prompt("Ingrese el tiempo: "));
let h= Number(prompt("Ingrese la altura: "));
let rad= Number(prompt("Ingrese el radio: "));
let vol= Math.PI * (rad**2)* h; 
let q= vol/tie; 
console.log(`El volumen es: ${vol}`);
console.log(`El Caudal es: ${q}`);
})