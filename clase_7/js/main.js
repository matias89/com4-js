// ACCEDER Y MODIFICAR ELEMENTOS

const d = window.document.head.children[2];
//console.log(d);
//const h = window.document.body.children[0].children[0].children[1].children[0].children[2];
//h.innerText = 'Hola mundo 40';
//console.log(h.innerText);
const k = window.document.getElementById('a');
// console.log('k', k);
k.style.color = 'red';
//console.log('k', k);
//k.innerText = 'Hola mundo 50';

const l = window.document.getElementsByClassName('item');
l[1].style.backgroundColor = 'yellow';
//l[1].innerHTML = '<h1 style="color: red">Texto modificado!!!</h1>';

const t = window.document.getElementsByTagName('p');
t[2].innerText = 'Texto modificado';
// console.log('t', t[2]);

// CREAR ELEMENTOS
const app = document.getElementById('app');
const div = document.createElement('div');
div.innerText = 'Texto creado desde Javascript';
app.appendChild(div);
