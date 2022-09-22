import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom'


const Cart = () => {


  return (
    <div>
      <div className='boto'>
        <h1 >Carrito de compras</h1> 
      </div>
      
      <div className="container">
    <div className="row">
       
        <main id="items" className="col-sm-8 row"></main>
        
        <aside className="col-sm-8">
            <h2>Carrito</h2>
            
            <ul id="carrito" className="list-group"></ul>
            <hr/>
            
            <p className="text-right">Total: <span id="total"></span>&euro;</p>


            <button id="boton-vaciar" className="btn btn-danger">Vaciar</button>


            <br/> <br/>
            <Link to='/' className="nav-link active" aria-current="page" >{<button className="btn btn-success" >Volver a la tienda</button>}</Link>
        </aside>
    </div>
</div>


    </div>
    
  )
}

export default Cart