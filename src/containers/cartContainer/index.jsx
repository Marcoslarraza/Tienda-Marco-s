import React, { useContext } from 'react'
import { Shop } from '../../context/ShopProvider';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'


const Cart = () => {

  

  const {cart, removeItem, clearCart, totalPrice} = useContext(Shop);
  if (cart.length === 0) {
    return(
      <>
      <div className="alert alert-primary" role="alert">
  No hay elementos en el carrito
</div>
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
    {field: 'Precio final', headerName: 'Precio total', width: 100},
    
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
              
            <Button onClick={clearCart} className="btn btn-danger" >Vaciar carrito</Button> 
            <Link to='/' className="nav-link active" aria-current="page" >{<button className="btn btn-success" >Volver a la tienda</button>}</Link>
            <Link to='/' className="nav-link active" aria-current="page" >{<button className="btn btn-info" >Terminar la compra</button>}</Link>
        

    </div>
  );
}

export default Cart;