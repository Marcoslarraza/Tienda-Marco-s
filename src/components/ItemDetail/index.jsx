import React, {useContext, useState} from 'react'
import ItemCount from '../ItemCount'
import './styles.css'
import { useNavigate } from 'react-router-dom';

import { Shop } from '../../context/ShopProvider';



const ItemDetail = ({product}) => {


  const [qty, setQty]= useState(0);
  const navigate= useNavigate();

  const {addItem}= useContext(Shop);

  const addCart= (quantity)=>{
    setQty(quantity);


    

  }
  const handleFinish = () => {
    const productToSave = {...product, quantity: qty};
    addItem(productToSave);
    navigate('/cart');


  }
  console.log(qty);

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
           {!qty ? ( <ItemCount stock={13} initial={1} onAdd={addCart}/> ):
           ( <button  className='btn-success btn-outline-dark btn-lg ' onClick={handleFinish}>Finalizar compra</button>)}
            
        </div>
    </div>
  )
}

export default ItemDetail