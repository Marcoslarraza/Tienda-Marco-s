import React, {useState, useEffect} from "react";

import './styles.css';

import swal from 'sweetalert';


export const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        if(count < stock) {
            setCount(count+1);
        } else {
            swal("No hay suficiente stock disponible");
        }
    }

    const handleDecrement = () => {
        if (count < stock){
            setCount(count-1)
        }
    }
    
    

    const addCart = () => {
        onAdd(count);
        setCount(initial);
    }

     
    useEffect(()=> {

    }, []);

    useEffect(()=> {
    }, [count]);

    return (
    <div className="btn-group" role="group" aria-label="Basic mixed styles example" id="div">
        <button type="button" className="btn btn-dark" disabled={count<=1} onClick={handleDecrement} id="boton">-</button>
        {/* Disabled hace que mi contador se desactive cuando llega a 1 para que no se agreguen numeros negativos al carrito */}


        <h2 type="button" className="btn btn-success" id="boton">{count}</h2>


        <button type="button" className="btn btn-dark"  onClick={handleAdd} id="boton">+</button> {/* lo mismo podria hacerce con el boton de incremento, pero ahi tendriamos que poner: disabled={count >=stock} o sea que cuando el numero sea mayor o igual al stock no se pueda agregar mas */}
        

        <button type="button" className="btn btn-info" id="agregaralcarrito" onClick={addCart} >Agregar al carrito</button>
    </div>
    );
};

export default ItemCount;