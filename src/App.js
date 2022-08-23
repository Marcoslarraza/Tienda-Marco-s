import './App.css'
import Navbar from './components/Navbar';
// You can specify which plugins you need
import { } from 'bootstrap'; /* debí agregar eso ya que si no lo hacia, el menu desplegable no me funcionaba */
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
