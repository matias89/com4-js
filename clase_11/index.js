const users = document.getElementById('users');


const myUsers = [{
    name: 'Matias',
    lastname: 'Aybar'
},{
    name: 'Fernando',
    lastname: 'Viscarra'
}];

const error = 'Ha ocurrido un error en tu solicitud.';
const resultado = true;
const miPrimerPromesa = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        // resolve(myUsers);
        if (resultado) {
            resolve(myUsers);
        } else {
            reject(error);
        }
    }, 2000);
});

miPrimerPromesa
    .then(mensaje => {
        let list = '';
        mensaje.forEach(user => {
            list += `<p>${user.name} ${user.lastname}</p>`;
        });
        //users.innerHTML = list;
    })
    .catch(error => {
        //users.innerHTML = error;
    });

// FETCH
const URL = 'https://jsonplaceholder.typicode.com/posts';
const query = window.fetch(URL);
let l = '';
query
    .then(response => {
        response.json()
            .then(data =>  {
                data.forEach(post => {
                    l += `<li>${post.id}: ${post.title}</li>`;
                });
                users.innerHTML = `<ul>${l}</ul>`;
            })
            .catch(e => {
                console.log('Error en solicitud', e);
            });
    })
    .catch(error => {
        console.log('Error >>>', error);
    });
