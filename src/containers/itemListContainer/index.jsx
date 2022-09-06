import React from 'react';
import './styles.css';
import { products } from '../../data/products';
import { useEffect } from 'react';
import { useState } from 'react';
import ItemList from '../../components/ItemList';


const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([])

  //La promise se ejecuta una única vez cuando se monta el componente
  useEffect(()=> {
    
    (async ()=> {
    const obtenerProductos = new Promise ((accept, reject)=> {
        setTimeout(()=> {
          accept(products)
        }, 3000);
      })
      

        try {
          const productos = await obtenerProductos;
          setProductos(productos);
        } catch (error) {
          console.log(error);
        }

      })()

  }, [])
  
  //IFE (funcion autoinvocada)

  

  console.log(productos);

  return (
    <div className='titulo'>
       <ItemList products={productos}/>
      
    </div>
  )
}

export default ItemListContainer;