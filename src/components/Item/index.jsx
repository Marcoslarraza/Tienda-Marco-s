
import React from 'react'
import './styles.css'






const Item = ({product}) => {
  return (
    
    <div className='flex'>

    


    <div className='card '  id='produ'>
    <img src={product.image} width={250} alt="imagen"/>
    <h3>{product.title}</h3>
    <h4> Precio $ {product.price}</h4>
    

    

    </div>
    
    </div>
    
  )
}

export default Item