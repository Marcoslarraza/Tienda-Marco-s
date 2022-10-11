import React, { useContext} from 'react'
import { Shop } from '../../context/ShopProvider';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'
import ordenGenerada from '../../services/generarOrden';
import { collection, addDoc, getDoc } from "firebase/firestore";
import {db} from '../../firebase/config';
import { doc, updateDoc } from "firebase/firestore";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";




const Cart = () => {

  const {cart, removeItem, clearCart, totalPrice} = useContext(Shop);
  const navigate = useNavigate();
  const Formulario = () => {        
    navigate(('/Formulario'))        
    
}


  
      if (cart.length === 0) {
        return(
          <>
          <div className="alert alert-primary" role="alert">
      No hay elementos en el carrito
      </div>
      <Link to='/' className="nav-link active" aria-current="page" >{<button className="btn btn-success" >Volver a la tienda</button>}</Link>

          </>
        );
      }
      


  const renderImage = (image) => {

        return(
          <img src={image.value} alt="cart-product" style={{height: '120px'}}></img>
        )
      }


  const renderRemoveButton = (item) => {
        const product = item.value
        return (
          <Button onClick={()=> removeItem(product)} variant="contained" color="error">
            Eliminar
          </Button>
        )
      }

      const handleBuy = async () => {
        const importeTotal = totalPrice();
        const orden = ordenGenerada("Marcos", "markkusito@gmail.com", 3234567890, cart, importeTotal);

        // Add a new document with a generated id.
      const docRef = await addDoc(collection(db, "orders"), orden);

      //Actualizamos el stock del producto
      cart.forEach(async (productoEnCarrito) => {

        //Primero accedemos a la referencia del producto
        const productRef = doc(db, "products", productoEnCarrito.id);

        //Llamamos al snapshot, llamando a firebase
        const productSnap = await getDoc(productRef);

        //En snapshot.data() nos devuelve la información del documento a actualizar
        await updateDoc(productRef, {

            stock: productSnap.data().stock - productoEnCarrito.quantity,
        });
    });

    swal(`Gracias por tu compra, Se generó una orden con el ID: ${docRef.id}, te enviaremos los datos por email`);
      //swal( `¡Muchas gracias por tu compra! Se generó la orden con el ID: ${docRef.id}` );

         } 

      
      


  const columns = [
        { field: 'image', headerName: 'Imagen', width: 250, renderCell: renderImage},
        { field: 'title', headerName: 'Producto', width: 450 },
        { field: 'quantity', headerName: 'Cantidad', width: 80 },
        {field: 'price', headerName: 'Subtotal', width: 100},
        {
          field: 'remove',
          headerName: 'Eliminar',
          renderCell: renderRemoveButton,
          width: 120,
        },
        
        
      ];

  //Vamos a asignar un array con cada fila de la tabla, utilizando el cart
  const filas = []
      cart.forEach(item => {
        filas.push({
          id: item.id,
          image: item.image,
          title: item.title, 
          quantity: item.quantity,
          remove: item,
          price: item.price * item.quantity
        
        
        })
      })

      

  return (

    
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={filas}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        rowHeight={150}
        
        
      />     
             <>
             
                <div className="alert alert-primary" role="alert">
                    
                    Resumen de Compra
                    <h3 className="cart-view-total">Total: $ { totalPrice() }</h3>
                    
                    <Button className="btn btn-info active"  onClick={Formulario}>Ir al checkout</Button>

                    <Button onClick={clearCart} className="btn btn-danger active" >Vaciar carrito</Button> 
                    
                    <Link to='/' className="nav-link active" aria-current="page" >{<button className="btn btn-success" >Volver a la tienda</button>}</Link>
                  
                    
                  </div>
                  
                  
             </>
                  
                           

    </div>
      
  );
}

export default Cart;