import React from 'react'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';







const Item = ({product}) => {
  return (

      <div className='card '  id='produ'>

          <img src={product.image}  alt="imagen" className="card-img-top"/>
          <h5 className="card-title">{product.title}</h5>
          <h6> Precio $ {product.price}</h6>
          

          

      </div>
  
    
  )
}

export default Item