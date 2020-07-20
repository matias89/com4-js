const error = '* Dato requerido';
const errorname = document.getElementById('errorname')
const errorlastName = document.getElementById('errorlastName')
const erroremail = document.getElementById('erroremail')
const errorbirthDate = document.getElementById('errorbirthDate')
const errorstreet = document.getElementById('errorstreet')
const errorstreetNumber = document.getElementById('errorstreetNumber')
const errordni = document.getElementById('errordni')
const errorcity = document.getElementById('errorcity')
const errorstate = document.getElementById('errorstate')
function sacarError () {
    const name = document.getElementById('name')
    if (name.value !== '') {
        errorname.innerText = '';
    }
    const lastName = document.getElementById('lastName')
    if (lastName.value !== '') {
        errorlastName.innerText = '';
    }
    const email = document.getElementById('email')
    if (email.value !== '') {
        erroremail.innerText = '';
    }
    const birthDate = document.getElementById('birthDate')
    if (birthDate.value !== '') {
        errorbirthDate.innerText = '';
    }
    const street = document.getElementById('street')
    if (street.value !== '') {
        errorstreet.innerText = '';
    }
    const streetNumber = document.getElementById('streetNumber')
    if (streetNumber.value !== '') {
        errorstreetNumber.innerText = '';
    }
    const dni = document.getElementById('dni')
    if (dni.value !== '') {
        errordni.innerText = '';
    }
    const city = document.getElementById('city')
    if (city.value !== '') {
        errorcity.innerText = '';
    }
    const state = document.getElementById('state')
    if (state.value !== '') {
        errorstate.innerText = '';
    }
}
const procesarFormulario = event => {
    event.preventDefault(); // Necesario para que el submit no recargue la página y se pierdan los datos

    const {
        target: {
            name,
            lastName,
            email,
            birthDate,
            street,
            streetNumber,
            dni,
            flat,
            floor,
            city,
            state
        }
    } = event;
    const inputs = document.querySelectorAll('input');
    let countError = 0;
    inputs.forEach(element => {
        const { required, value, id } = element;
       if (required && value === '') {
           const err = document.getElementById(`error${id}`);
           err.innerText = error;
           countError++;
       }
    
    });

    if (countError > 0) {
        alert('No se han completado todos los campos requeridos. Los datos requeridos están indicados con *');
    }

    else if (countError >= 0) {
        const myData = document.getElementById('my-data');
        const formData = 
            `<h4>Nombre: ${name.value}</h4> 
             <h4>Apellido: ${lastName.value}</h4>
             <h4>E-mail: ${email.value}</h4>
             <h4>Fecha de nacimiento: ${birthDate.value}</h4>
             <h4>Calle: ${street.value} &nbsp - &nbsp N°: ${streetNumber.value}</h4>
             <h4>DNI N°: ${dni.value}</h4>
             <h4>Departamento: ${flat.value} &nbsp - &nbsp Piso: ${floor.value}</h4>
             <h4>Ciudad: ${city.value}</h4>
             <h4>Provincia: ${state.value}</h4>`;
        myData.innerHTML = formData;
       }
    return;
    if (!name) {
        errorname.innerText = error;
    }
    if (!lastName) {
        errorlastName.innerText = error;
    }
    if (!email) {
        erroremail.innerText = error;
    } 
    if (!birthDate) {
        errorbirthDate.innerText = error;
    } 
    if (!street) {
        errorstreet.innerText = error;
    }
    if (!streetNumber) {
        errorstreetNumber.innerText = error;
    } 
    if (!dni) {
        errordni.innerText = error;
    } 
    if (!city) {
        errorcity.innerText = error;
    } 
    if (!state) {
        errorstate.innerText = error;
    } 
};
const borrarFormulario = () => {
    const name = document.getElementById('name');
    name.value = '';
    errorname.innerText = '';
    const lastName = document.getElementById('lastName');
    lastName.value = '';
    errorlastName.innerText = '';
    const email = document.getElementById('email');
    email.value = '';
    erroremail.innerText = '';
    const birthDate = document.getElementById('birthDate');
    birthDate.value = '';
    errorbirthDate.innerText = '';
    const street = document.getElementById('street');
    street.value = '';
    errorstreet.innerText = '';
    const streetNumber = document.getElementById('streetNumber');
    streetNumber.value = '';
    errorstreetNumber.innerText = '';
    const dni = document.getElementById('dni');
    dni.value = '';
    errordni.innerText = '';
    const flat = document.getElementById('flat');
    flat.value = '';
    const floor = document.getElementById('floor');
    floor.value = '';
    const city = document.getElementById('city');
    city.value = '';
    errorcity.innerText = '';
    const state = document.getElementById('state');
    state.value = '';
    errorstate.innerText = '';
    const myData = document.getElementById('my-data');
    myData.innerHTML = '';
}; 
