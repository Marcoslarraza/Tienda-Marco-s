import React from 'react'
import CartWidget from '../CartWidget'


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Marco´s </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">Ofertas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">Contáctanos</a>
            </li>
            
            
          </ul>
        </div>
        <CartWidget />
      </div>
    
    </nav>
  )
}

export default Navbar



//rafce(funcion flecha)