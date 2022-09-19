import React from 'react'
import './styles.css'






const Cart = () => {
  return (
    <div>
      <div className='boto'>
        <h1 >Carrito de compras</h1> 
      </div>
      
      <div className="container">
        
        <div className="row">
          
            <main id="items" className="col-sm-10 row"></main>
            
              <aside clasNames="col-sm-10">
                  <h2>Carrito</h2>
                  
                  <ul id="carrito" className="list-group"></ul>
                  <hr/>
                  
                  <p className="text-right">Total: <span id="total"></span>&euro;</p>
                  <button id="boton-vaciar" className="btn btn-danger">Vaciar</button>
              </aside>
        </div>
      </div>


    </div>
    
  )
}

export default Cart