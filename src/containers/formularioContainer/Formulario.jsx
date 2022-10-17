import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Formulario.css';
import {Shop} from '../../context/ShopProvider';
import swal from 'sweetalert';


import generarOrden from '../../services/generarOrden';
import { db } from '../../firebase/config';
import { collection, addDoc, getDoc ,doc, updateDoc } from "firebase/firestore";



const Formulario = () => {
   const {cart,totalPrice,clearCart} = useContext(Shop);
   const precioFinal = totalPrice();
   const navigate = useNavigate()
   
   const [datos, setDatos] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    items: cart,
    total:precioFinal
   })   

   const capturarDatos = (e) => {
    setDatos({...datos ,[e.target.name] : e.target.value})
   }  

   const guardarDatos =  async (e) => {
    e.preventDefault()
    const orden = generarOrden(datos.name, datos.email,datos.address,datos.phone,datos.items,datos.total)

    const docRef = await addDoc(collection(db, "orders"), orden)

    
    //se muestran mensajes con el numero de orden de la compra
    alert(`Muchas gracias ${datos.name}, el número de seguimiento de su compra es: ${docRef.id}`) 

    cart.forEach( async (productoOrden) => {
        const productoRef = doc(db, "products" , productoOrden.id)
        const docSnap = await getDoc(productoRef)

        await updateDoc(productoRef, {
            stock: docSnap.data().stock - productoOrden.quantity
        })
        
    });
    setDatos({})
    clearCart()

    //Se muestra mensaje informando como proseguir con el seguimiento de la compra

    swal(`Le enviaremos los datos de la compra al siguiente correo:  ${datos.email}` )
    navigate('/')
   }   


   return(
    <>
        <form onSubmit={guardarDatos}>
            <input type="text" placeholder='Nombre' name='name' onChange={capturarDatos} required/>
            <input type="email" placeholder='Direccion E-mail' name='email' onChange={capturarDatos} required/>
            <input type="text" placeholder='Domicilio de entrega' name='direccion' onChange={capturarDatos} required/>
            <input type="number" placeholder='Telefono' name='tel' onChange={capturarDatos} required/>
            <button className='btn-danger'>Finalizar compra</button>
        </form>
    </>
   )
}

export default Formulario;