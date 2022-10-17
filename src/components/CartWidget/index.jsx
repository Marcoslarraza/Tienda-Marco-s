import React from 'react';
import {HiShoppingCart} from 'react-icons/hi';
import { useContext } from 'react';

import { Shop } from '../../context/ShopProvider';




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