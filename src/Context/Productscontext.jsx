import { createContext} from "react";
import { useReducer } from "react";
import ProductReducer from '../features/products/ProductReducer';
import { All_proudct } from '../features/products/ProductReducer'
export const CartContext = createContext(null);
export function Contextprovider({children}){
    const [state , dispatch] = useReducer(
        ProductReducer,
        All_proudct
    )
    return(
    <CartContext.Provider value={{state,dispatch}} >
        {children} 
    </CartContext.Provider>
    )
}