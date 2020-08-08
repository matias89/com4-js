const app = document.getElementById('app');
const detail = document.getElementById('detail');
const API = 'https://jsonplaceholder.typicode.com';
const traerPosts = () => {
    fetch(`${API}/posts`)
        .then(response => {
            response.json()
                .then(data => {
                    //let content = '';
                    data.forEach(item => {
                        //const { id, title, body } = item;
                        // const column = crearColumna(id, title, body);
                        crearColumna(item)
                        // content = content + column;

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
                    const { title, body } = data;
                    detail.innerHTML = crearDetalle(title, body);
                });
        });
};

const crearDetalle = (title, body) => {
    return `
    <div class="blog-post">
        <h2 class="blog-post-title">${title}</h2>
        <p class="blog-post-meta">January 1, 2014 by <a href="#">Mark</a></p>

        <p>${body}</p>
    </div>
    `;
}

const crearColumna = item => {
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
    return template; */
    const { id, title, body } = item;
    const container = document.createElement('div');
    container.className = ('col-md-6');

    const div1 = document.createElement('div');
    div1.className = ('row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative')
    
    const div2 = document.createElement('div');
    div2.className = ('col p-4 d-flex flex-column position-static')
    
    const strong = document.createElement('strong');
    strong.className = ('d-inline-block mb-2 text-primary')
    strong.innerHTML = 'world'
    div2.appendChild(strong);

    const h3 = document.createElement('h3');
    h3.className = ('mb-0')
    h3.innerHTML = acortarTexto(title, 20)
    div2.appendChild(h3);
    
    const div3 = document.createElement('div');
    div3.className = ('mb-1 text-muted')
    div3.innerHTML = 'nov 12';
    div2.appendChild(div3);

    const p = document.createElement('p');
    p.className = ('card-text mb-auto');
    p.innerHTML =acortarTexto(body,100);
    div2.appendChild(p);
    
    const a = document.createElement('a');
    a.className = ('stretched-link')
    a.href = `./detail.html#${id}`
    a.title = title
    a.innerHTML = 'continue reading';
    div2.appendChild(a);
    
    div1.appendChild(div2);
    container.appendChild(div1);
    app.appendChild(container);


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