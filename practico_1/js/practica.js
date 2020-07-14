const enviar = event => {
    event.preventDefault();
};


const arr = ['Elemento A', 'Elemento B', 'Elemento C', 'Elemento Z'];

for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}

arr.forEach((item, asdasdasd) => {
    // console.log(item, asdasdasd);
});



//////////////////////////////

const miFuncion = (param) => {
    return param('miFuncion', 100);
};

const miParametro = (t, num) => {
    return 'Hola, soy una función ' + t + num;
};

const r = miFuncion(miParametro);

// console.log('Soy R >>>', r);

const i = document.querySelectorAll('input');
i[1].value = 'TEST';
console.log('Element >>>', i);


