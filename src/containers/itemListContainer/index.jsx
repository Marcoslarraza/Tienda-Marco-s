import React from 'react';
import './styles.scss';

const itemListContainer = ({ greeting }) => {
  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  )
}

export default itemListContainer;