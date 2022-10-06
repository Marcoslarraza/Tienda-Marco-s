import React from 'react'
import Item from '../Item'
import './style.css'

const ItemList = ({products}) => {
  return (
    <div className='contenedor'>
      <div className='contenedor'>
          {products.map(product => {
              return <Item key={product.id} product={product} className='prod'/> //agregar card de boostrap
          })}
      </div>

    </div>
  )
}

export default ItemList