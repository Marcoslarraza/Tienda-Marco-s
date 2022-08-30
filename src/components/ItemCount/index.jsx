import React, {useState, useEffect} from "react";
import './styles.css';

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        if(count < stock) {
            setCount(count+1);
        } else {
            alert("No hay suficiente stock disponible");
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
         console.log("Se montó el ItemCount");
    }, []);

    useEffect(()=> {
        console.log("Se actualiza el estado!")
    }, [count]);

    return (
    <div className='navegacion'>
        <button className="boton" onClick={handleDecrement}>-</button>
        <h2>{count}</h2>
        <button className="boton" onClick={handleAdd}>+</button>
        <br /> <br />
        <button className="cart" onClick={addCart}>Agregar al carrito</button>
    </div>
    );
};

export default ItemCount;