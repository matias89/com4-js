const procesarFormulario = event => {
    event.preventDefault(); // Necesario para que el submit no recargue la página y se pierdan los datos
    const target = event.target;
    const email = target.email.value;
    if (!email) {
        alert('No se han completado todos los campos requeridos');
    }
    // Si todo va bien en las validaciones
    const myData = document.getElementById('my-data');
    const formData = `
        <h4>Email: ${email}</h4>
    `;
    myData.innerHTML = formData;
};

const borrarFormulario = () => {
    const email = document.getElementById('email');
    email.value = '';
};