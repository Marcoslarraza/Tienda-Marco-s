import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          PizzaUy
        </p>
        <p>El mejor lugar, las mejores pizzas de la región</p>
        <a
          className="App-link"
          href="https://instagram.com/marcoslarraza/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visita nuestro sitio 
        </a>
      </header>
    </div>
  );
}

export default App;
