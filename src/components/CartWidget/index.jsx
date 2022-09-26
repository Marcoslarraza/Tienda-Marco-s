import React from 'react';
import {HiShoppingCart} from 'react-icons/hi';
import { Shop } from '../../context/ShopProvider';
import { useContext } from 'react';
import './styles.css';



const CartWidget = () => {
  const {totalProducts}= useContext(Shop);

  return (
    <>
       <HiShoppingCart color='green' size={40}/>
      <span >{totalProducts() || ''}</span>
    </>
  )
}

export default CartWidget