import React, { }  from 'react';
import './App.css'
import Navbar from './components/Navbar';
import { } from 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import itemListContainers from './containers/itemListContainer';

function App() {

  return (
    <>
    <Navbar/>
    <itemListContainers greeting={'Hello, World'}/>
   </>
    
  );
}

export default App;
