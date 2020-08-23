const app = document.getElementById('app');
const detail = document.getElementById('detail');
const API = 'https://jsonplaceholder.typicode.com';
const traerPosts = () => {
    fetch(`${API}/posts`)
        .then(response => {
            response.json()
                .then(data => {
                    let content = '';
                    data.forEach(item => {
                        /*const { id, title, body } = item;
                        const column = crearColumna(id, title, body);
                        content = content + column;*/
                        crearColumna(item);
                    });
                    //app.innerHTML = content;
                });
        });
};

const traerPost = id => {
    fetch(`${API}/posts/${id}`)
        .then(response => {
            response.json()
                .then(data => {
                    /*const { title, body } = data;
                    detail.innerHTML = crearDetalle(title, body);*/
                    crearDetalle(data);
                });
        });
};

const crearDetalle = (data) => {
    const { title, body } = data;
    const container = document.createElement('div');
    const myH2 = document.createElement('h2');
    const myP = document.createElement('p');
    const myP1 = document.createElement('p');

    myH2.innerText = title;
    myH2.className = 'blog-post-title';
    myP.innerHTML = 'August 5, 2020 by <a href="#">Rafa</a>';
    myP.className = 'blog-post-meta';
    myP1.innerText = body;

    container.appendChild(myH2);
    container.appendChild(myP);
    container.appendChild(myP1);

    detail.appendChild(container);
    /*return `
    <div class="blog-post">
        <h2 class="blog-post-title">${title}</h2>
        <p class="blog-post-meta">January 1, 2014 by <a href="#">Mark</a></p>

        <p>${body}</p>
    </div>
    `*/
    ;
}

const crearColumna = (item) => {
    const { id, title, body } = item;
    const container = document.createElement('div');
    const row = document.createElement('div');
    const caja = document.createElement('div');
    const strong = document.createElement('strong');
    const myH3 = document.createElement('h3');
    const div1_caja = document.createElement('div');
    const myP = document.createElement('p');
    const myA = document.createElement('a');
    const caja1 = document.createElement('div');
    const mySvg = document.createElement('svg');

    myA.innerText = 'Continue Reading';
    myA.className = 'stretched-link';
    myA.href = `./detail.html#${id}`;
    myA.title = title;
    myP.innerText = acortarTexto(body, 100);
    myP.className = 'card-text mb-auto p-4';
    div1_caja.innerText = '5 August';
    div1_caja.className = 'mb-1 text-muted';
    myH3.innerText = acortarTexto(title, 20);
    myH3.className = 'mb-0';
    caja.className = 'col p-4 d-flex flex-column position-static border border-success';
    row.className = 'row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative';
    container.className = 'col-md-6';

    caja.appendChild(myH3);
    caja.appendChild(div1_caja);
    caja.appendChild(myP);
    caja.appendChild(myA);
    row.appendChild(caja);
    container.appendChild(row);
    app.appendChild(container);


    /*const template = `
        <div class="col-md-6">
            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">World</strong>
                <h3 class="mb-0">${acortarTexto(title, 20)}</h3>
                <div class="mb-1 text-muted">Nov 12</div>
                <p class="card-text mb-auto">${acortarTexto(body, 100)}</p>
                <a href="./detail.html#${id}" title="${title}" class="stretched-link">Continue reading</a>
            </div>
            <div class="col-auto d-none d-lg-block">
                <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            </div>
            </div>
        </div>
    `;
    return template;*/
};

const acortarTexto = (text, limit) => {
    const total = text.length;
    if (total <= limit) {
        return text;
    } else {
        return `${text.substring(0, limit)}...`;
    }
};


const { location: { hash } } = window;
if (hash) {
    const id = hash.slice(1);
    traerPost(id);
}
if (app) {
    traerPosts();
}
/*
Objeto literal
const mentor = {
    name: 'Fernando',
    lastname: 'Viscarra',
    hobbies: ['Hola', 'Soy', 'un', 'array'],
    isBool: true,
    edad: 30,
};

JSON
{
    "name": "Fernando",
    "lastname": "Viscarra",
    "hobbies": ["Hola", "Soy"],
    "isBool": true,
    "edad":: 30
}
*/