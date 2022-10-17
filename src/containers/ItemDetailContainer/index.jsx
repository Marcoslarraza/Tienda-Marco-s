import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import ItemDetail from "../../components/ItemDetail";

import { doc, getDoc } from "firebase/firestore";
import { getFirestore } from 'firebase/firestore';



const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({})

  

  const {productId}= useParams();

  //Gestiona la obtención de la data del detalle
  useEffect(()=> {

    
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'products', productId );
        getDoc(queryDoc)
            .then(res=>setProductDetail({id: res.id, ...res.data()}))
      
      

  }, [productId])

  return     <ItemDetail product={productDetail}/> ;
              

  

  
};

export default ItemDetailContainer;