
// WHILE

let i = 0;
const frutas = ['Banana', 'Naranja', 'Manzana', 'Mandarina', 'Pera', 'Uva', 'Durazno'];
// frutas[1]
// frutas.length // 6
while(i < frutas.length) {
    const fruta = `Fruta: ${frutas[i]}`;
    // console.log(fruta);
    i = i + 1;
};

// DO WHILE

let j = 0;
do {
    //console.log('Do While', j);
    j++;
} while(j < 5);

// FOR
for (let i = 5; i < 10; i = i + 2) {
    //console.log('Número: ', i);
}

for (let i = 0; i < frutas.length; i++) {
    // console.log('F:', frutas[i]);
}

/*
let name = window.prompt('Escribe tu nombre');
while (name.length === 0) {
    window.alert('Debes indicar un nombre para continuar!');
    name = window.prompt('Escribe tu nombre');
}

console.log('name', name);

window.alert(`Hola ${name}`);
*/

// FUNCIONES

function suma(h, myParam, y) {
    const sum = h + myParam + y;
    return sum;
}
const s = suma(10, 20, 40);
const a = suma(11, 122, 70);
const b = suma(331, 452, -10);
console.log(s);
console.log(a);
console.log(b);

function _acceso(name, age) {
    if (age < 18) {
        window.alert(`Hola ${name}, eres menor de edad, no puedes ingresar`);
    } else {
        window.alert(`Bienvenido ${name}`);
    }
}

const __acceso = function (name, age) {
    if (age < 18) {
        window.alert(`Hola ${name}, eres menor de edad, no puedes ingresar`);
    } else {
        window.alert(`Bienvenido ${name}`);
    }
}

const acceso = (name, age) => {
    let message = '';
    if (age < 18) {
        message = `Hola ${name}, eres menor de edad, no puedes ingresar`;
    } else {
        message = `Bienvenido ${name}`;
    }
    return message;
}

const n = window.prompt('Ingresa tu nombre');
const e = window.prompt('Ingresa tu edad');

const g = acceso(n, e);
window.alert(g);

for (let i = 0; i < 10; i++) {
    console.log(g, i);
}


