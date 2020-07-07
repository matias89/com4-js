const URL = 'https://www.google.com';
const edad = 9;
const esMayorDeEdad = edad >= 18; // true - false
const sum = (a, b) => {
    return a + b;
};

const person = {
    name: 'Matías',
    lastname: 'Aybar',
    age: 31,
    isStudent: false,
    email: 'matiasaybar89@gmail.com',
};

if (tieneHijos) {
    person.hijos = [{
        name: 'asdfasdasd'
    }];
}
 
person['hobbies'] = ['Fútbol', 'Voley', 'Basquet'];
person.email = 'matias.aybar@globant.com';




console.log('person >>>', person);
/*
const personas = [
    'Matias',
    'Eduardo',
    'Josefina',
    'Fernando'
];
*/

//console.log('personas >>>', personas[2]);

const persons = [
    {
        name: 'Matias',
        lastname: 'Aybar',
        email: 'matiasyabar89@gmail.com',
        hobbies: ['Fútbol', 'Voley', 'Basquet'],
        addresses: [{
            name: 'Evergreen avenue',
            number: 757
        },{
            name: 'Gral Paz',
            number: 400
        }]
    },{
        name: 'Eduardo',
        lastname: 'Romano',
        hobbies: ['Fútbol', 'Rugby', 'Basquet']
    },{
        name: 'Josefina',
        lastname: 'Coll'
    },{
        name: 'Fernanando',
        lastname: 'Vizcarra'
    }
];


for (let i = 0; i < persons.length; i++) {
    // console.log(persons[i]['lastname']);
}