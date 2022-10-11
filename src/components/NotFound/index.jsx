import React from 'react'
import { Link } from 'react-router-dom'


const NotFound = () => {
  return (
    
  
    
    <div>
    <h2 style={{ textAlign: 'center', margin: '9rem' }}><mark>Sorry, this page doesn´t exist</mark> <br /> <br /> 
    <Link to='/' className="nav-link active" aria-current="page" >{<button className="btn btn-success" >RETURN TO HOME</button>}</Link>

    </h2>
    
    </div>
    
    
  


  )
}

export default NotFound