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
    /*
    const inputs2 = document.getElementsByClassName('form-control');
    for (let i = 0; i < inputs2.length; i++) {
        console.log(inputs2[i]);
    }
    */
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
    if (name && lastName && email && birthDate && street && streetNumber && dni && city && state) {
        myData.innerHTML = formData;
    } else {
        myData.innerHTML = '';
    } 
    return;
    /*
    const target = event.target;
    const name = target.name.value;
    const lastName = target.lastName.value;
    const email = target.email.value;
    const birthDate = target.birthDate.value;
    const street = target.street.value;
    const streetNumber = target.streetNumber.value;
    const dni = target.dni.value;
    const flat = target.flat.value;
    const floor = target.floor.value;
    const city = target.city.value;
    const state = target.state.value;
    if (!name || !lastName || !email || !birthDate || !street || !streetNumber || !dni || !city || !state) {
        alert('No se han completado todos los campos requeridos. Los datos requeridos están indicados con *');
    }
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
    
    // Si todo va bien en las validaciones
    const myData = document.getElementById('my-data');
    const formData = 
        `<h4>Nombre: ${name}</h4> 
         <h4>Apellido: ${lastName}</h4>
         <h4>E-mail: ${email}</h4>
         <h4>Fecha de nacimiento: ${birthDate}</h4>
         <h4>Calle: ${street} &nbsp - &nbsp N°: ${streetNumber}</h4>
         <h4>DNI N°: ${dni}</h4>
         <h4>Departamento: ${flat} &nbsp - &nbsp Piso: ${floor}</h4>
         <h4>Ciudad: ${city}</h4>
         <h4>Provincia: ${state}</h4>`;
    if (name && lastName && email && birthDate && street && streetNumber && dni && city && state) {
        myData.innerHTML = formData;
    } else {
        myData.innerHTML = '';
    } 
    */
};
/*const borrarFormulario = () => {
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
}; */
const borrarFormulario = () => {
    document.getElementById('myForm').reset();
};