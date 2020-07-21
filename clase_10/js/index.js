const calculator = (() => {

    const PI = 3.1415;

    const sum = (a, b) => {
        return a + b;
    };

    const diff = (a, b) => {
        return a - b;
    };

    const miFuncionPrivada = () => {
        return 'Hola, soy privada';
    };

    const miFuncionPublica = () => {
        return miFuncionPrivada();
    };
    
    return {
        sum: sum,
        diff: diff,
        miFuncionPublica: miFuncionPublica,
        PI: PI
    };
})();


const suma = calculator.sum(5, 4);
const resta = calculator.diff(5, 4);
const suma1 = calculator.sum(50, 412);


//console.log('Suma >>>', suma);
//console.log('Suma1 >>>', suma1);
//console.log('Resta >>>', resta);

const t = calculator.miFuncionPublica();
//console.log('t >>>', t);
//console.log(calculator.PI);


const Auto = (() => {

    const _velocidadMaxima = 100;

    const _mostrarAviso = (mensaje) => {
        alert(mensaje);
    }

    const accelerate = (velocidad) => {
        if (velocidad >= _velocidadMaxima) {
            _mostrarAviso(`Debes bajar la velocidad. El máximo permitido es ${velocidadMaxima}`);
            bajarVelocidad(_velocidadMaxima);
        }
    };

    const abrirAirbag = () => {

    };

    const bajarVelocidad = velocidad => {
        console.log(`Baja la velocidad a ${velocidad}`);
    };

    const brake = () => {
        console.log('Auto frenando ...');
    };

    const arrancar = () => {
        console.log('Arrancando ...');
    }

    const apagar = () => {
        console.log('Apagado.');
    };
    return {
        arrancar,
        frenar: brake,
        acelerar: accelerate,
        apagar,
    }
})();

Auto.arrancar();
Auto.acelerar(90);
Auto.frenar();
Auto.apagar();


// Desctructuring 

const alumno = {
    name: 'Fernando',
    lastname: 'Vizcarra',
    email: 'fernandito@gmail.com',
    hobbies: ['Fútbol', 'Fumar', 'Bailar']
};

const { name, hobbies } = alumno;

console.log(alumno.name);
console.log(alumno['name']);
console.log(name);
console.log(alumno.hobbies[0]);
console.log(hobbies[0]);

const frutas = ['Naranja', 'Mandarina', 'Pera'];
const [naranja, m, y, u] = frutas;
//const naranja = frutas[0];
console.log('Frutas >>>', u);


const book = ['asdasdasdasdsad asdasd asdsa dasd asd asd as dasd adasd', 'asdasdasdasdsad asdasd asdsa dasd asd asd as dasd adasd'];
const [text1, text2] = book;

let e;
console.log(e);


const th = {
    event: {
        target: {
            n: {
                value: 'Matias'
            },
            lastname: {
                value: 'Aybar'
            }
        }
    }
};

const { event: { target: { n: { value }, lastname: { value } } } } = th; // ERROR!!!

console.log('>>>>>>>>>>>>>', value, value);






