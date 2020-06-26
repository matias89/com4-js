/*
const num1 = window.prompt('Ingresa un valor');
const num2 = window.prompt('Ingresa otro valor');
const sum = `La suma de ${num1} más ${num2} es igual a ${(num1) + parseInt(num2)}`;
console.log(sum);
*/
/*
const result = window.confirm('¿Realmente deseas ir al sitio de Google?');
if (result) {
    window.location.href = 'https://www.google.com';
    //console.log('Has abandonado la página');
} else {
    const el = window.document.getElementById('app');
    el.innerHTML = '<h1>No te has ido</h1>';
    //window.alert('No te has ido');
    //console.log('No te has ido :)');
}
*/
const frutas = ['Banana', 'Naranja', 'Mandarina', 'Manzana'];
//console.log(frutas[10]);

const myArray = [4, 6, 10, 0, -20, 45, 'soy un texto', false, null, undefined, [1, [true, null, [9, 1, 56]], 3]];
console.log(myArray[10][1][2][2]);