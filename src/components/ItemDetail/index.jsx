import React from 'react'
import ItemCount from '../ItemCount'

const ItemDetail = ({product}) => {
  return (
    <div>
        <h4>{product.title}</h4>
        <img src={product.image} alt="product-detail" width={250}/>
        <ItemCount/>
    </div>
  )
}

export default ItemDetail