import React from 'react';
import CartWidget from '../CartWidget';
import{Link} from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
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
              <Link to="/category/men's clothing" className="nav-link active" >Men´s Clothing</Link>
            </li> 
            <li className="nav-item">
            <Link to="/category/women's clothing" className="nav-link active" >Woman´s Clothing</Link>
            </li> 
            <li className="nav-item">
              <Link to='/category/electronics' className="nav-link active" >Electronics</Link>
            </li> 
            <li className="nav-item">
              <Link to='/category/jewelery' className="nav-link active" >Jewelery</Link>
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