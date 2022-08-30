import React, { }  from 'react';
import './App.css'
import Navbar from './components/Navbar';
import { } from 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainers from './containers/ItemListContainer';

function App() {

  return (
    <>
    <Navbar
    />
    <ItemListContainers greeting={'Agrega tus productos al carrito'}/>
    
   </>
    
  );
}

export default App;
