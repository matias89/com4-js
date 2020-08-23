/*const procesarFormulario = event => {
    event.preventDefault(); // Necesario para que el submit no recargue la página y se pierdan los datos
    const target = event.target;
    const name = target.name.value;
    const surname = target.surname.value;
    const email = target.email.value;
    const date = target.date.value;
    const dni = target.dni.value;
    const region = target.region.value;
    const city = target.city.value;
    const address = target.address.value;
    const number = target.number.value;
    const dpto = target.dpto.value;
    const floor = target.floor.value;
    if (!name || !surname || !email || !date || !dni || !region || !city || !address || !number) {
        alert('No se han completado todos los campos requeridos');
        if (!name) {
            document.getElementById('name').className = 'form-control is-invalid';
        }
        if (!surname) {
            document.getElementById('surname').className = 'form-control is-invalid';
        }
        if (!email) {
            document.getElementById('email').className = 'form-control is-invalid';
        }
        if (!date) {
            document.getElementById('date').className = 'form-control is-invalid';
        }
        if (!dni) {
            document.getElementById('dni').className = 'form-control is-invalid';
        }
        if (!region) {
            document.getElementById('region').className = 'form-control is-invalid';
        }
        if (!city) {
            document.getElementById('city').className = 'form-control is-invalid';
        }
        if (!address) {
            document.getElementById('address').className = 'form-control is-invalid';
        }
        if (!number) {
            document.getElementById('number').className = 'form-control is-invalid';
        }
    } else {
        const myData = document.getElementById('my-data');
        const formData = `
        <h4><b>Nombre:</b> ${name}</h4>
        <h4><b>Apellido:</b> ${surname}</h4>
        <h4><b>Email:</b> ${email}</h4>
        <h4><b>Fecha Nacimiento:</b> ${date}</h4>
        <h4><b>Número Documento:</b> ${dni}</h4>
        <h4><b>Provincia:</b> ${region}</h4>
        <h4><b>Ciudad:</b> ${city}</h4>
        <h4><b>Domicilio:</b> ${address}</h4>
        <h4><b>Número:</b> ${number}</h4>
        <h4><b>Dpto:</b> ${dpto}</h4>
        <h4><b>Piso:</b> ${floor}</h4>
    `;
        myData.innerHTML = formData;
    }
    // Si todo va bien en las validaciones

};*/

const procesarFormulario = event => {
    event.preventDefault(); // Necesario para que el submit no recargue la página y se pierdan los datos

    const {
        target: {
            name,
            surname,
            email,
            date,
            dni,
            region,
            city,
            address,
            number,
            dpto,
            floor
        }
    } = event;

    const inputs = document.querySelectorAll('input');
    console.log(inputs);
    let countError = 0;

    inputs.forEach(element => {
        const { required, value, id } = element;
        if (required && value === '') {
            document.getElementById(id).className = 'form-control is-invalid';
            countError++;
        }
    });

    if (countError > 0) {
        alert('No se han completado todos los campos requeridos. Los datos requeridos están indicados');
    } else {
        const myData = document.getElementById('my-data');
        const formData = `
        <h4><b>Nombre:</b> ${name.value}</h4>
        <h4><b>Apellido:</b> ${surname.value}</h4>
        <h4><b>Email:</b> ${email.value}</h4>
        <h4><b>Fecha Nacimiento:</b> ${date.value}</h4>
        <h4><b>Número Documento:</b> ${dni.value}</h4>
        <h4><b>Provincia:</b> ${region.value}</h4>
        <h4><b>Ciudad:</b> ${city.value}</h4>
        <h4><b>Domicilio:</b> ${address.value}</h4>
        <h4><b>Número:</b> ${number.value}</h4>
        <h4><b>Dpto:</b> ${dpto.value}</h4>
        <h4><b>Piso:</b> ${floor.value}</h4>
    `;
        myData.innerHTML = formData;
    }

    return;


    /*const borrarFormulario = () => {
        const name = document.getElementById('name');
        name.value = '';
        const surname = document.getElementById('surname');
        surname.value = '';
        const email = document.getElementById('email');
        email.value = '';
        const date = document.getElementById('date');
        date.value = '';
        const dni = document.getElementById('dni');
        dni.value = '';
        const region = document.getElementById('region');
        region.value = '';
        const city = document.getElementById('city');
        city.value = '';
        const address = document.getElementById('address');
        address.value = '';
        const number = document.getElementById('number');
        number.value = '';
        const dpto = document.getElementById('dpto');
        dpto.value = '';
        const floor = document.getElementById('floor');
        floor.value = '';
    };*/
};

const cambiarClase = () => {
    const inputs = document.querySelectorAll('input');
    console.log(inputs);
    inputs.forEach(element => {
        const { required, value, id } = element;
        if (required && value !== '') {
            document.getElementById(id).className = 'form-control';
        }
    });
};

const borrarFormulario = () => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(element => {
        const { value, id } = element;
        if (value !== '') {
            document.getElementById(id).value = '';
        }
    });
};