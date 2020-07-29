//'use strict';
const mentor = {
    name: 'Fernando',
    lastname: 'Viscarra',
    fn: () => {
        console.log('2', this);
    },
    fn1: function() {
        console.log('3', this);
    }
};

//console.log('1', this);
//mentor.fn();
//mentor.fn1();

//////////

const decirNombre = function(obj) {
    obj.hablar = function() {
        console.log(this.nombre);
    }
};

const Eduardo = {
    nombre: 'Eduardo',
    edad: 40,
};


const Matias = {
    nombre: 'Matías',
    edad: 35,
};

decirNombre(Eduardo);
decirNombre(Matias);

Eduardo.hablar();
Matias.hablar();

const miEdad = function() {
    console.log(this.edad);
};

const yo = {
    edad: 50,
};

miEdad();
window.edad = 30;
miEdad();

