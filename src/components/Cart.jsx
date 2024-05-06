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
     const { clear, Items } = useContext(CartContext);

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
                alert("Su orden: " + id + " se completo correctamente!");
            }
        })
        .finally(() =>{
         clear(),
         setValues(initialValues)
        }); 
    };
    
    return (
    <Container className="mt-4">
        <h1>Productos</h1>
        {Items.map(i => {
        return(
        <ul key={i.title}>
            <li>Prod: {i.title}</li>
            <li>Cant: {i.quantity}</li>
            <li>$ {i.price}</li>
        </ul>
            );
    })}
    <div>Total: ${total()} </div>
    {Items?.length > 0 &&
    <form>
        <label>Nombre</label>
        <input
         type="text" 
         value={values.name} 
         name="name" 
         onChange={handleChange}
         />
        <label>Telefono</label>
        <input type="text"
        value={values.phone} 
        name="phone" 
        onChange={handleChange} 
        />
        <label>Email</label>
        <input type="email" 
        value={values.email} 
        name="email" 
        onChange={handleChange} 
        /><button type="button" onClick={handleSubmit}>Enviar</button>
    </form>
}
    </Container>     //seguir viendo la clase firebase 2 por 1:48:53
    );
};