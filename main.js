addEventListener("DOMContentLoaded", ()=>{
// 4. Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales cada uno por
// $11500. Una bomba en $1168000 y tres cajas de pernos cada uno por $87000. Después de pagar le
// sobran $91000. ¿cuánto dinero tenía?

let llaves=11500*5;
let bomba=1168000;
let cajas=87000*3;
let dinerosobrante=91000;
let din=llaves+bomba+cajas;
let dint=din+dinerosobrante;
console.log(`El precio que pago era: ${din}`);
console.log(`El dinero que tenia era: ${dint}`);
})