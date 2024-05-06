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
        const isExist = Items.some((I) => I.id === Item.id);

        if(isExist){
            const updateItems = Items.map(I => {
                if(I.id === Item.id){
                    return {
                        ...I, 
                        quantity: I.quantity + quantity,
                    };
                }else{
                    return I;
                }
            });
            setItems(updateItems);
        }else {
            setItems([...Items, { ...Item, quantity }]);
        }      
    };

    return (
    <CartContext.Provider value={{addItem,clear, Items, removeItem}}>
    {children}
    </CartContext.Provider>
    );
};

