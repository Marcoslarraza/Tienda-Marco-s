import React from 'react'

import Item from '../Item'
import './style.css'

const ItemList = ({products}) => {
  return (
    <div className='contenedor'>
      <div className='contenedor'>
          {products.map(product => {
              return <Item key={product.id} product={product} className='prod'/>  
          })}
      </div>

    </div>
  )
}

export default ItemList