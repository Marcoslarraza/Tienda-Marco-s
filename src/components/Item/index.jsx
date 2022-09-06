import React from 'react';
import { products } from '../../data/products';

const Item = ({products}) => {
  return (
    <h1>{products.name}</h1>
  )
}
export default Item

