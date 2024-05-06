import { useState } from "react";

export const ItemCount = ({ onAdd, stock }) => {
    const[ quantity, setQuantity ] = useState(1);
    
    const handleDecrease = () => {
        if(quantity > 1)setQuantity((prev) => prev -1);
    }
    
    const handleIncrease = () => {
        if(stock > quantity)setQuantity((prev) => prev +1);
    }

    const handleAdd = () => {
        onAdd(quantity);
        setQuantity(1);
    }
    
    return(
        <>
        <div className="Carrito">
        <button className="Resta" type="button"onClick={handleDecrease}>-</button>  
        <input className="AgregarCarrito" type="number" value={quantity} readOnly/>
        <button className="Suma" type="button"onClick={handleIncrease}>+</button> 
        </div>
        <button className="BotonAgregar" type="button" onClick={handleAdd}>Agregar al carrito</button>     
        </>


    );
    
};
