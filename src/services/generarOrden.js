//Función auxiliar para generar la orden.
const ordenGenerada = (nombre, email, telefono, cart, totalPrice) => {
    return {
        buyer: {
            nombre: nombre,
            email: email,
            telefono: telefono,
        },
        items: cart
        ,
        total: totalPrice,
        createdAt: new Date().toLocaleString()
    }
}

export default ordenGenerada;