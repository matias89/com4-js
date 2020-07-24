const URL = 'https://jsonplaceholder.typicode.com/comments';
const APP = document.getElementById('app');
const error = 'Ha ocurrido un error en tu solicitud.'

const getComments = () => {
    const comments = window.fetch(URL);
    comments
    .then(answer => {
        answer.json()
        .then(data => {
            data.forEach(item => {
                createComment(item);
            });
        })
        .catch(error =>{
            console.log('Error >>>', error);
        })
    })
    .catch(error => {
        console.log('Error >>>', error);
    });
    // then y catch
    // en el then hacer el .json()
    // Recibir los datos y recorrerlos con forEach
    /*
    myVar.forEach(item => {
        // Aquí ejecutar el método createComment y pasarle por parametro 'item',
        // que es la info que reciben de 'https://jsonplaceholder.typicode.com/comments',
        // Si entran a esa URL van a ver que 'item' tiene las siguientes propiedades: postId, name, email y body.
    });
    */
};

const createComment = item => {
    const { postId, name, email, body, id } = item; // Item contiene la info recibida de la URL.
    const container = document.createElement('article'); // recordar article es como un div, pero semántico :)
    container.className = 'card-body m-3 border border-dark bg-secondary text-white text-center rounded-lg'
    const myId = document.createElement('h6');
    myId.className = 'text-left'
    myId.innerText = id; // aqui he creado id, deberian crear los otros, usando <p>, <h3>, o lo que quieran
    // Crear los demas elementos para title, email y body.
    // hacer los appendChild correspondientes
    const tittle = document.createElement ('h4');
    tittle.className = 'text-uppercase text-white'
    tittle.innerText = name;
    const emails = document.createElement ('h6');
    emails.className = 'text-white'
    emails.innerText = email;
    const bodys = document.createElement ('p');
    bodys.className = 'text-left text-white font-italic'
    bodys.innerText = body;
    container.appendChild(myId);
    container.appendChild(tittle);
    container.appendChild(emails);
    container.appendChild(bodys);
    APP.appendChild(container);
};