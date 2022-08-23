import './App.css'
import Navbar from './components/Navbar';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  let baner= "Las mejores promos de la región";
  return (
    <>
        <Navbar />
    <div className="App">

      

      <h1 className='texto'>PizzaUy  {baner}</h1>
      <br/>
      <input placeholder='Encontrá lo que buscas'/>
    </div>
    </>
  );
}

export default App;
