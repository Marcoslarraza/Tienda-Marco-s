import React from 'react';
import { createContext } from "react";
import { useState } from 'react';


// primero debemos declarar el context

export  const Shop = createContext(null)

//paso 2: crera el provider (proveedor ) que me envolvera a la app

 
const ShopProvider = ({children}) => {

    const [cart, setCart]= useState([])

    const addItem = (item) =>{
        const productoRepetido = isInCart(item.id)
        console.log(productoRepetido);

        if (productoRepetido) {

            const cartModified = cart.map(product => {
                if (product.id === item.id) {
                    product.quantity += item.quantity
                    return product
                }
                return product
            })

            
            

            setCart(cartModified)
        } else {
            const cartModificado = [...cart, item]
            setCart(cartModificado)
        }
        
    }

    const isInCart = (id) => {
        return cart.some(product=> product.id === id)
    }


    //Completar la lógica
    const removeItem = (id) => {setCart(cart.filter(product=>product.id!==id));
    console.log(removeItem);}

    const clearCart = () => setCart([]);
    console.log(clearCart);





  console.log(cart);
    
  return (
    <Shop.Provider value={{
        
        cart, 
        addItem,
        removeItem,
        clearCart
        
        }}>

        {children}

    </Shop.Provider>
   

  )
}

export default ShopProvider;