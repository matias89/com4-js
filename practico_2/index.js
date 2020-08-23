const URL = 'https://jsonplaceholder.typicode.com/comments';
const APP = document.getElementById('app');

const getComments = () => {
    let c = '';
    const query = window.fetch(URL);
    // then y catch
    // en el then hacer el .json()
    // Recibir los datos y recorrerlos con forEach
    query
        .then(response => {
            response.json()
                .then(data => {
                    data.forEach(item => {
                        createComment(item);
                    });
                })
                .catch(e => {
                    console.log('Error de Solicitud', e);
                });
        })
        .catch(error => {
            console.log('Error', error);
        });
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
    //const container = document.createElement('article'); // recordar article es como un div, pero semántico :)
    const div = document.createElement('div');
    const myId = document.createElement('h5');
    myId.innerHTML = `<b>Id:</b> ${id}`; // aqui he creado id, deberian crear los otros, usando <p>, <h3>, o lo que quieran
    // Crear los demas elementos para title, email y body.
    // hacer los appendChild correspondientes
    const myPostId = document.createElement('h5');
    myPostId.innerHTML = `<b>PostId:</b> ${postId}`;
    const myName = document.createElement('h3');
    myName.innerHTML = `<b>Nombre:</b> ${name}`;
    const myEmail = document.createElement('h3');
    myEmail.innerHTML = `<b>Email:</b> ${email}`;
    const myBody = document.createElement('p');
    myBody.innerHTML = `<b>Body:</b> ${body}`;
    myBody.className = 'p-3 mb-2 bg-success text-white';
    APP.className = 'row p-4';
    div.className = 'col-md-4 card rounded border border-primary';
    div.appendChild(myPostId);
    div.appendChild(myId);
    div.appendChild(myName);
    div.appendChild(myEmail);
    div.appendChild(myBody);
    //container.appendChild(div);
    APP.appendChild(div);
};