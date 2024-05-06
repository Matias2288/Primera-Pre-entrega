import Container from 'react-bootstrap/Container';
import { useContext, useState } from 'react';
import { getFirestore, collection, addDoc, } from 'firebase/firestore';

import { CartContext } from '../contexts/CartContext';

const initialValues ={
    name: "",
    phone: "",
    email: ""
}

export const Cart = () => {
     const [ values, setValues ] = useState(initialValues)
     const { clear, Items, removeItem } = useContext(CartContext);

    const total = () =>  Items.reduce((acc, i) => acc + i.quantity * i.price, 0);

    const handleChange = (ev) => {
     setValues((prev) => {
        return{
            ...prev,
            [ev.target.name]: ev.target.value,
        };
     });
    };

    const handleSubmit = () => {
            const order = {
                buyer: values,
                 Items,
                 total: total(),
            }

        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, order).then(({ id }) => {
            if(id){
                alert("Su orden ha sido completada correctamente!! " +"Su numero de orden es: " + id );
            }
        })
        .finally(() =>{
         clear(),
         setValues(initialValues)
        }); 
    };

    const handleClear = (id) => clear(id);
    const handleRemove = (id) => removeItem(id);
    
    return (
    <Container className="mt-4">
        <h1>Productos</h1>
        {Items.map(I => {
        return(
        <ul key={I.title}>
            <li>Prod: {I.title}</li>
            <li>Cant: {I.quantity}</li>
            <li>$ {I.price}</li>
            <button className='Borrar' onClick={() => handleRemove(I.id)}>🗑️</button>
        </ul>
        
            );

    })}
    <div>Total: ${total()} </div>
    {Items?.length > 0 &&
    <button className='BotonVaciar' onClick={handleClear}>Vaciar Carrito</button>
}
    {Items?.length > 0 &&
    <form className='Form'>
        <div className='Labels'>
            <label>Nombre:</label>
            <label>Telefono:</label>
            <label>Email:</label>
        </div>
        <div className='Inputs'>
        <input 
         type="text" 
         value={values.name} 
         placeholder='Introduce tu Nombre'
         name="name" 
         onChange={handleChange}
         />
        <input type="text"
        value={values.phone}
        placeholder='Introduce tu Telefono'
        name="phone" 
        onChange={handleChange} 
        />
        <input type="email" 
        value={values.email} 
        placeholder='Introduce tu Email'
        name="email" 
        onChange={handleChange} 
        />
        </div>
       
        <button type="button" className='BotonEnviar' onClick={handleSubmit}>Enviar</button>
    </form>
}
    </Container>     //seguir viendo la clase firebase 2 por 1:48:53
    );
};