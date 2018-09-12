import {msg} from './components/Entry';
import Entry from './components/Entry.hbs';
import './styles.scss';

const App = () => {
    const app = document.getElementById('app')
    app.innerHTML = Entry();
};

App()



console.log(msg)