import React from 'react';
import{Link} from 'react-router-dom';

import CartWidget from '../CartWidget';



const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success ">

      <div className="container-fluid">

        <Link to='/' className="navbar-brand" >Marco´s </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            
            <span className="navbar-toggler-icon"></span>

          </button>

            <div className="collapse navbar-collapse" id="navbarNav">

              <ul className="navbar-nav">

               <li className="nav-item">

                  <Link to='/' className="nav-link active" aria-current="page" >Home</Link>

              </li>

              <li className="nav-item">

                <Link to="/category/men's clothing" className="nav-link active" >Ropa de Hombre</Link>

              </li> 

              <li className="nav-item">

                <Link to="/category/women's clothing" className="nav-link active" >Ropa de Mujer</Link>

              </li> 

              <li className="nav-item">

                <Link to='/category/electronics' className="nav-link active" >Electrónica</Link>

              </li> 

              <li className="nav-item">

                <Link to='/category/jewelery' className="nav-link active" >Joyería</Link>

              </li>
            
            
          </ul>

        </div>

        <Link to='/Cart' className="nav-link active" aria-current="page" ><CartWidget /></Link>
        
         {/*despues puedo modificarlo, lo cree para que me lleve al carrito */}

      </div>
    
    </nav>
  )
}

export default Navbar



