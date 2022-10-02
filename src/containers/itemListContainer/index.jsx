import React from 'react';
import './styles.css';
import { useEffect } from 'react';
import { useState } from 'react';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/config';
import { collection, query, where,  getDocs } from "firebase/firestore";



const ItemListContainer = ({greeting}) => {


  const [productos, setProductos] = useState([])

  const {categoryId}= useParams();


  useEffect(()=> {
    
    (async ()=> {
      

        try {
  
            const q = categoryId?
            query(collection(db, "products"), where ('category', '==', categoryId) )
            :
            query(collection(db, "products"));   

               // hacemos el llamado a la base de datos                     
                const querySnapshot = await getDocs(q);
                const productosFirebase = [];
              
                //obtener los datos crudos
                querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                
                productosFirebase.push({id: doc.id, ...doc.data()});
              });
              
              
              
              setProductos(productosFirebase);        

           
                
                } catch (error) {
               
                }

              })()

          }, [categoryId])
  

  

  

  


  return (
    
    <div className='titulo'>
      
       <ItemList products={productos}/>

      
    </div>
  )
}

export default ItemListContainer;