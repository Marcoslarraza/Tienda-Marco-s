import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


import './styles.css';
import {Loader} from '../../components/Loader/Loader';


import ItemList from '../../components/ItemList';
import { db } from '../../firebase/config';
import { collection, query, where,  getDocs } from "firebase/firestore";



const ItemListContainer = ({greeting}) => {

  //hooks para el uso de componentes 
  const [productos, setProductos] = useState([])

  //eslint-disable-next-line
  const [Loading, setLoading] = useState ();

  const {categoryId}= useParams();




  useEffect(()=> {
    
    (async ()=> {

        try {

          //se importa un loader-component para que el usuario vea que la pag esta trabajando
          setLoading(true);
  
            const q = categoryId?
            query(collection(db, "products"), where ('category', '==', categoryId) )
            :
            query(collection(db, "products"));   

               // hacemos el llamado a la base de datos                     
                const querySnapshot = await getDocs(q);
                const productosFirebase = [];
              
                //obtener los datos crudos
                querySnapshot.forEach((doc) => {
                
                productosFirebase.push({id: doc.id, ...doc.data()});
              });
              
              setProductos(productosFirebase);        
              
                } catch (error) {
               
                }
                setLoading(false);
              })()
              
          }, [categoryId]) 

          

  return (
    
    <div className='titulo'>
      
      {productos.length!== 0 ? <ItemList products={productos}/> : <Loader/>}


    </div>
  )
}

export default ItemListContainer;

