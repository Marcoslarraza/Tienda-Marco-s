import React from 'react';
import './styles.css';
import ItemCount from '../../components/ItemCount';


const ItemListContainer = ({greeting }) => {


  const agregarAlCarrito = (cantidad) => {
    console.log(cantidad);
    console.log(`Se agregó la cantidad ${cantidad} al carrito!`);
  }
  
  return (
    <div className='titulo'>
      <h1>{greeting}</h1>
      <ItemCount initial={1} stock={10} onAdd={agregarAlCarrito}/>
    </div>
  )
}

export default ItemListContainer;