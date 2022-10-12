import React from 'react';
import './styles.css';
import { useEffect } from 'react';
import { useState } from 'react';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/config';
import { collection, query, where,  getDocs } from "firebase/firestore";
import {Loader} from '../../components/Loader/Loader';

const ItemListContainer = ({greeting}) => {


  const [productos, setProductos] = useState([])
  const [Loading, setLoading] = useState ();

  const {categoryId}= useParams();




  useEffect(()=> {
    
    (async ()=> {

        try {
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
                // doc.data() is never undefined for query doc snapshots
                
                productosFirebase.push({id: doc.id, ...doc.data()});
              });
              
              setProductos(productosFirebase);        
              
                } catch (error) {
               
                }
                setLoading(false);
              })()

          }, [categoryId, Loading])


  return (
    
    <div className='titulo'>
      
      {productos.length!== 0 ? <ItemList products={productos}/> : <Loader/>}


    
      
{/*        <ItemList products={productos}/>
 */}
    </div>
  )
}

export default ItemListContainer;

