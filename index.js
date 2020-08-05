/*const URL = 'https://jsonplaceholder.typicode.com/comments';
const APP = document.getElementById('app');
const error = 'Error en tu solicitud.'

const getComments = () => {
    const comments = fetch(URL);
    comments
    .then(reply => {
        reply.json()
        .then(data => {
            data.forEach(item => {
                createComment(item);
            });
        })
        .catch(error =>{
            console.log('Error -->', error);
        })
    })
    .catch(error => {
        console.log('Error -->', error);
    });
};
const createComment = item => {
    const { postId, id, name, email, body } = item; 
    const contenedor = document.createElement('div'); 
    contenedor.className = 'col-6'
    const container = document.createElement('div'); 
    container.className = 'card m-3 border bg-light'
    const myId = document.createElement('h5');
    myId.className = 'text-primary p-2'
    myId.innerText = id; 
    const tittle = document.createElement('h1');
    tittle.className = 'card-title pl-5'
    tittle.innerText = name;
    const emails = document.createElement('h3');
    emails.className = 'text-primary card-subtitle pl-5'
    emails.innerText = email;
    const bodys = document.createElement('div');
    bodys.className = 'card-body pl-5'
    bodys.innerText = body;
    container.appendChild(myId);
    container.appendChild(tittle);
    container.appendChild(emails);
    container.appendChild(bodys);
    contenedor.appendChild(container);
    APP.appendChild(contenedor);
}; */

/*const mentor = {
    name: 'Fernando',
    lastname: 'Viscarra',
    fn: () => {
        console.log(this);
    },
    fn1: function() {
        console.log(this.name);
    }
};

console.log(this);
mentor.fn();
mentor.fn1();

////////////

const decirNombre = function(obj) {
    obj.hablar = function() {
        console.log(this.name);
    }
}

const Eduardo = {
    name: 'Eduardo',
    age: 40,
};

const Matias = {
    name: 'Maias',
    age: 35,
};

decirNombre(Eduardo);
decirNombre(Matias);

Eduardo.hablar();
Matias.hablar(); 
*/

class Auto {
    constructor(modelo,marca) {
        this.modelo = modelo;
        this.marca = marca;
        this.status = 'apagado...';
        this.velocidad = 0;
    }
    verPropiedades() {
        console.log(this.modelo, this.marca, this.status);
    }
    arrancar() {
        this.status = 'encendido';
        this.status = 1; 
    }
    frenar() {
        
    }
    acelerar() {
        this.velocidad = this.velocidad + 1;
    }
};

const FordKa = new Auto('Ka', 'Ford');
const AudiA1 = new Auto('A1', 'Audi');

FordKa.verPropiedades();
AudiA1.verPropiedades();