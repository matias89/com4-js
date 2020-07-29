class Auto {
    constructor(modelo, marca) {
        this.modelo = modelo;
        this.marca = marca;
        this.status = 'Apagado';
        this.velocidad = 0;
    }
    verPropiedades() {
        console.log(this.modelo, this.marca, this.status, this.velocidad);
    }
    arrancar() {
        this.status = 'encendido';
        this.velocidad = 1;
    }
    frenar() {

    }
    acelerar() {
        this.velocidad = this.velocidad + 1;
    }
    configurarAuto(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
};

const FordKa = new Auto('Ka', 'Ford');
const AudiA1 = new Auto('A1', 'Audi');

FordKa.verPropiedades();
AudiA1.verPropiedades();
FordKa.arrancar();
AudiA1.arrancar();
FordKa.acelerar();
FordKa.acelerar();
FordKa.acelerar();
FordKa.acelerar();
FordKa.acelerar();
console.log('-----------------------');
FordKa.verPropiedades();
AudiA1.verPropiedades();


class Calculadora {
    constructor(encendida) {
        this.encendida = encendida;
    }
    suma(a, b) {
        if (this.encendida) {
            return a + b;
        } else {
            return 'Debes prender la calculadora';
        }
    }
    resta(a, b) {
        return a - b;
    }
    division(a, b) {
        return a / b;
    }
    multiplicacion(a, b) {
        return a * b;
    }
    calculoLoco(a, b) {
        return this.suma(a, b) * this.multiplicacion(a, b);
    }
};

class CalculadoraCientifica extends Calculadora {
    raizCuadrada(n) {

    }

    raizEnesima(n, v) {

    }

    log() {

    }
}

const miCalculadora = new Calculadora(true);
const resultado = miCalculadora.suma(100, 5);
//console.log(resultado);
const r2 = miCalculadora.calculoLoco(240, 500);
console.log('r2 >>>', r2);

const cCientifica = new CalculadoraCientifica();
cCientifica.raizCuadrada(7);
cCientifica.suma(12, 6);

/////////////////////////////

class Humano {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.ojos = 2;
        this.brazos = 2;
        this.pies = 2;
        this.cabeza = 1;
    }
    saltar() {
        console.log('Saltar 2!!!');
    }
    correr() {}
    dormir() {}
    comer() {}
};

class Extraterrestre extends Humano {
 volar() {
     console.log('volar >>>', this);
     //this.saltar();
     this.teletransportarse();
 }
 teletransportarse() {
     console.log('Me estoy teletransportando');
 }
 saltar() {
    console.log('Saltar 25!!!');
 }
}

const Fernando = new Humano('Fernando', 25);
Fernando.saltar();
Fernando.correr();

const Alf = new Extraterrestre('Alf', 700);
Alf.volar();
