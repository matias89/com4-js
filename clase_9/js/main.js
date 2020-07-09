const imprimir = () => {
    const c = confirm('¿Realmente deseas imprimir el documento?');
    if (c) {
        window.print();
    }
};

let text = '';

const myTextElement = document.getElementById('my-text');

const escribir = (event) => {
    console.log('Hola!', event.target.value);
    text = event.target.value;
    myTextElement.innerHTML = text;
};

const mostrarValorIngresado = () => {
    alert(text);
}