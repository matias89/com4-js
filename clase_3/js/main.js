/*
x += y;
x = x + y;

x -= y;
x = x - y;

x *= y;
x = x * y;

x /= y;
x = x / y;
*/

let a = 4;
a = 6;
a += 10;
// console.log(a);

let b = 8;
let j = 5;
//b = b * j;
b *= j;
//console.log(b);

////////////////////////////////
// OPERADORES DE COMPARACIÓN //
////////////////////////////////

let h = 10;
let i = 10;
let r = h >= i;
//console.log(r);

/////////////////////////
// OPERADORES LÓGICOS //
////////////////////////

let a1 = true && true;
//console.log(a1);
let a2 = false && true;
// console.log(a2);

let a4 = 1 === 1;
let a5 = 2 !== 2;
let a3 = a4 || a5;
// console.log(a3);

let myVar = true;
//console.log(!myVar);

// condición ? valorA : valorB;

const t = (1 !== 1 || 2 === 2) ? 'Son valores iguales!' : 'Estos valores no son iguales';
// console.log(t);


//////////////////////
/// CONDICIONALES ///
/////////////////////
const v = 3;
/*
 if (v === 1) {
    console.log('V es igual a uno');
 } else if (v === 2) {
    console.log('V es igual a dos');
 } else if (v === 4) {
    console.log('V es igual a cuatro');
 } else {
    console.log('V no es igual a dos ni a uno.');
 }
 */

 switch(v) {
    case 1:
    case 2:
        console.log('V es igual a uno');
        break;
    case 2:
        console.log('V es igual a dos');
        break;
    case 4:
        console.log('V es igual a cuatro');
        break;
    default:
        console.log('V no es igual a dos ni a uno.');
 }

