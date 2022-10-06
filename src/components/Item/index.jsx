import React from 'react'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';






const Item = ({product}) => {

  const navigate= useNavigate();
  const handleNavigate=()=>{
      navigate(`/detail/${product.id}`)
  }



  return (

      <div className='card '  id='produ' onClick={handleNavigate}>
        
          <img src={product.image}  alt="imagen" className="card-img-top"/>
          <h5 className="card-title">{product.title}</h5>
          <h6>Stock: {product.stock}</h6>
          <h6> Precio $ {product.price}</h6>
          


      </div>
  
    
  )
}

export default Item