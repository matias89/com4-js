window.addEventListener('load', function() {
    const torneo = {
        name: 'Rock & Goal',
        description: 'Torneo amateur fútbol 5 en cesped sintético',
        address: 'Av. Roca 1500, Tafí Viejo',
        award: 'Juego de camisetas para el equipo, y $5000',
        teams: [{
            name: 'AFC',
            captain: 'Matias Gelsi',
            players: [{
                name: 'Pablo Cesca',
                number: '1',
                position: 'Arquero',
                altura: '1.80'
            }, {
                name: 'Rodrigo García',
                number: '2',
                position: 'Defensor',
                altura: '1.73'
            }, {
                name: 'Gonzalo García',
                number: '6',
                position: 'Defensor',
                altura: '1.76'
            }, {
                name: 'Aldo Farias',
                number: '10',
                position: 'Delantero',
                altura: '1.70'
            }, {
                name: 'Johan Amaya',
                number: '9',
                position: 'Delantero',
                altura: '1.90'
            }]
        }, {
            name: 'La Murga',
            captain: 'Antonio Rodriguez',
            players: [{
                name: 'Mario Zanotta',
                number: '1',
                position: 'Arquero',
                altura: '1.95'
            }, {
                name: 'Pablo Montero',
                number: '3',
                position: 'Defensor',
                altura: '1.80'
            }, {
                name: 'Agunstín Lapena',
                number: '5',
                position: 'Defensor',
                altura: '1.88'
            }, {
                name: 'Javier Flores',
                number: '7',
                position: 'Delantero',
                altura: '1.91'
            }, {
                name: 'Carlos Correa',
                number: '11',
                position: 'Delantero',
                altura: '1.83'
            }]
        }, {
            name: 'Metele Puro',
            captain: 'Leonel Ruiz',
            players: [{
                name: 'Juan Sandoval',
                number: '12',
                position: 'Arquero',
                altura: '1.75'
            }, {
                name: 'Rodrigo Leguizamón',
                number: '13',
                position: 'Defensor',
                altura: '1.81'
            }, {
                name: 'Víctor Vargas',
                number: '19',
                position: 'Defensor',
                altura: '1.80'
            }, {
                name: 'Blas Galda',
                number: '26',
                position: 'Delantero',
                altura: '1.79'
            }, {
                name: 'Laureano Cazorla',
                number: '17',
                position: 'Delantero',
                altura: '1.97'
            }]
        }]
    }

    const app = document.getElementById('app');

    const secction1 = document.createElement('section');
    secction1.className = 'jumbotron border border-primary';
    const title = document.createElement('h1');
    title.innerText = torneo.name;
    const description = document.createElement('p');
    description.innerText = `${torneo.description}. Lugar de realización: ${torneo.address}`;
    const hr = document.createElement('hr');
    const winner = document.createElement('h3');
    winner.innerText = 'Premio al Ganador';
    const award = document.createElement('p');
    award.innerText = torneo.award;

    secction1.appendChild(title);
    secction1.appendChild(description);
    secction1.appendChild(hr);
    secction1.appendChild(winner);
    secction1.appendChild(award);

    app.appendChild(secction1);

    const teams = torneo.teams;

    const r1 = document.createElement('div');
    r1.className = 'row p-4';

    for (let i = 0; i < teams.length; i++) {
        const players = teams[i].players;
        const c1 = document.createElement('div');
        const title1 = document.createElement('h3');
        const p1 = document.createElement('p');
        const btn1 = document.createElement('button');
        btn1.innerText = 'Ver jugadores';
        btn1.type = 'button';
        btn1.className = 'btn btn-primary btn-sm mb-4';
        title1.innerText = `Nombre de Equipo: ${teams[i].name}`;
        p1.innerText = `Capitán: ${teams[i].captain}`;
        c1.className = 'col-md-4 card';
        c1.appendChild(title1);
        c1.appendChild(p1);
        c1.appendChild(btn1);
        const p2 = document.createElement('ol');
        const p3 = document.createElement('h3');
        p2.appendChild(p3);
        p3.innerText = 'Listado de Jugadores';
        for (let j = 0; j < players.length; j++) {
            const p4 = document.createElement('li');
            p4.innerText = players[j].name;
            p2.appendChild(p4);
        }
        c1.appendChild(p2);
        r1.appendChild(c1);
    }
    app.appendChild(r1);
});