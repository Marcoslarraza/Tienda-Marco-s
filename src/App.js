import React, { }  from 'react';
import './App.css'
import Navbar from './components/Navbar';
import { } from 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainers from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from './components/NotFound';






function App() {

  return (
    <BrowserRouter>

      <Navbar/>
        
      <Routes>
          <Route path='/' element={<ItemListContainers/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainers/>}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<NotFound/>}/>
       </Routes>
      
    </BrowserRouter>
    
  );
}
  
export default App;
