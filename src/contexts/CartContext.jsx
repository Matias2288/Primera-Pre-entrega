import { createContext, useState } from "react"

export const CartContext = createContext();

export const Provider = ({ children }) => {
    const [Items, setItems] = useState([]);

    const clear = () => setItems([]);

    const removeItem = (id) => {
        const filtered = Items.filter((Item) => Item.id !== id)
       setItems(filtered);
    };

    const addItem = (Item, quantity) => {
       setItems([...Items, {Item, quantity}]);
    };

    console.log(Items);

    return (
    <CartContext.Provider value={{addItem,clear, Items, removeItem}}>
    {children}
    </CartContext.Provider>
    );
};


                                    // Seguir mirando el after 3 por el minuto 30:54