import './App.css'
import Navbar from './components/Navbar';
import { } from 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import itemListContainer from './components/itemListContainer';

function App() {

  return (
    <>
    <Navbar/>
    <itemListContainer greeting={'Hello, World'}/>
   </>
    
  );
}

export default App;
