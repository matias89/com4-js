const URL = 'https://jsonplaceholder.typicode.com/comments';
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
    const container = document.createElement('div'); 
    container.className = 'card m-3 border bg-light'
    const myId = document.createElement('h5');
    myId.className = 'text-primary p-2'
    myId.innerText = id; 
    const tittle = document.createElement ('h1');
    tittle.className = 'card-title pl-5'
    tittle.innerText = name;
    const emails = document.createElement ('h3');
    emails.className = 'text-primary card-subtitle pl-5'
    emails.innerText = email;
    const bodys = document.createElement ('div');
    bodys.className = 'card-body pl-5'
    bodys.innerText = body;
    container.appendChild(myId);
    container.appendChild(tittle);
    container.appendChild(emails);
    container.appendChild(bodys);
    APP.appendChild(container);
}; 
