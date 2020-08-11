//const Header = React.createElement('header', null, 'Soy el header');
const Main = React.createElement('main', null, 'Soy el contenido principal');
const Footer = React.createElement('footer', null, 'Soy el footer');
//const App = React.createElement('div', null, [Header, Main, Footer]);

const Header = <header id="esto-es-un-id">Soy el header</header>;

class App extends React.Component {
    render() {
        return React.createElement('div', {id: this.props.id}, [Header, Main, Footer]);
    }
}


ReactDOM.render(
    React.createElement(App, {id: 'esto-es-un-id'}),
    document.getElementById('app')
);