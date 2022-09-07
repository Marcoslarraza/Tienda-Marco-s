import React from 'react'
import ItemCount from '../ItemCount'
import './styles.css'

const ItemDetail = ({product}) => {
  return (
    <div id='cuerpo'>
        <img src={product.image} alt="product-detail" width={250}/>

        <div className='detalle'>

            <h2>{product.title}</h2>
            <h5>{product.description}</h5>
            <br />
            <h2> $ {product.price}</h2>
            <h6>{product.category}</h6>
            <h4>{product.count}</h4>
            <br /> <br /><br />
            <ItemCount/>
            
        </div>
    </div>
  )
}

export default ItemDetail