

import React from 'react'

const Item = ({product}) => {
  return (
    <div >
    <h1 >{product.name}</h1>
    <h2>{product.id}</h2>
    <h3>{product.precio}</h3>
    <img  width= '300px' height='300px' src="https://img.freepik.com/foto-gratis/pizza-ingredientes-mixtos-tabla-madera_114579-9317.jpg?w=2000&t=st=1662433160~exp=1662433760~hmac=eaeeef5e02c3f8eb9ffd47ba2da78569d6887f440b12d34c398dc563f0698ffe" alt="pizza" />
    </div>
  )
}

export default Item