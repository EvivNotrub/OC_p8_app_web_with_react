import { Link } from 'react-router-dom';
import logo from '../../logo.svg'
import './home.scss';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/apartment/10" className='home__appCard'> Titre de la Location</Link>
      </header>
    </div>
  );
}

export default Home;
