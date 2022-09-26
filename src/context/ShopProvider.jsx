import React from 'react';
import { createContext } from "react";
import { useState } from 'react';
import { act } from 'react-dom/test-utils';



// primero debemos declarar el context

export  const Shop = createContext(null)

//paso 2: crera el provider (proveedor ) que me envolvera a la app

 
 const ShopProvider = ({children}) => {

    const [cart, setCart]= useState([])

    const addItem = (item) =>{
        const productoRepetido = isInCart(item.id)

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


        //precio total del carrito
    const totalPrice=()=>{
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0)
        
    }

        //es para saber cuantos items o productos tengo en mi carrito

    const totalProducts= (id) =>cart.reduce((acumulador, productoActual)=> acumulador + productoActual.quantity, 0);
    console.log(totalProducts);

    //Completar la lógica
    const removeItem = (itemToRemove) => {
        const filteredProducts = cart.filter(item => item !== itemToRemove);
        setCart(filteredProducts)
    }

    const clearCart = () => { setCart([]);
    //console.log(clearCart);
}



    console.log(act);
   //console.log(cart);
    
  return (
    <Shop.Provider value={{cart, addItem, removeItem, clearCart, totalPrice, totalProducts }}>

        {children}

    </Shop.Provider>
   

  )
}

export default ShopProvider;