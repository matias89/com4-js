const URL = 'https://jsonplaceholder.typicode.com/comments';
const APP = document.getElementById('app');

const getComments = () => {
    fetch(URL)
        .then(response => {
            response.json()
                .then(data =>  {
                    data.forEach(item => {
                        createComment(item);
                    });
                })
                .catch(e => {
                    console.log('Error en solicitud', e);
                });
        })
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
    container.classList.add("card");
    container.setAttribute("style", "width: 18rem;");
    const container1 = document.createElement('div');
    container1.classList.add("card-body");
    container.appendChild(container1);
    const container2 = document.createElement('h5');
    container2.classList.add("card-title");
    const container3 = document.createElement('p');
    container3.classList.add("card-text");
    const container4 = document.createElement('a');
    container4.classList.add("btn");
    container4.classList.add("btn-primary");
    container1.appendChild(container2);
    container1.appendChild(container3);
    container1.appendChild(container4);

    container2.innerText = name;
    container3.innerText = body;
    container4.innerText = id;




    //const myId = document.createElement('h5');
    //myId.innerText = id; // aqui he creado id, deberian crear los otros, usando <p>, <h3>, o lo que quieran
    // Crear los demas elementos para title, email y body.
    // hacer los appendChild correspondientes
    document.getElementById('app').appendChild(container);

    //<div class="card" style="width: 18rem;">
    //<img src="..." class="card-img-top" alt="...">
    //    <div class="card-body">
    //        <h5 class="card-title">Card title</h5>
    //        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //        <a href="#" class="btn btn-primary">Go somewhere</a>
    //    </div>
    //</div>
};