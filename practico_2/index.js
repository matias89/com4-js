const URL = 'https://jsonplaceholder.typicode.com/comments';
const APP = document.getElementById('app');

const getComments = () => {
    window.fetch(URL);
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
    const myId = document.createElement('h5');
    myId.innerText = id; // aqui he creado id, deberian crear los otros, usando <p>, <h3>, o lo que quieran
    // Crear los demas elementos para title, email y body.
    // hacer los appendChild correspondientes
};