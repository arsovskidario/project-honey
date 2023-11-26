import { createContext, useState, useEffect } from "react";

const ShoppingCartContext = createContext();

const initialCart = JSON.parse(localStorage.getItem('cart') || '[]');
const initialCartSize = JSON.parse(localStorage.getItem('cartSize') || '0');

export function ShoppingCartProvider({
    children
}) {
    const [cart, setCart] = useState(initialCart);
    const [cartSize, setCartSize] = useState(initialCartSize);

    useEffect(() => {
        setCartSize(oldSize => {
            return cart.reduce(
                (accumulate, cartItem) => accumulate + Number(cartItem.orderQuantity),
                0)
        });
        localStorage.setItem('cart', JSON.stringify(cart))
        localStorage.setItem('cartSize', JSON.stringify(cartSize))
    }, [cart, cartSize])


    const addCartItems = (item) => {

        setCart(cart => {
            const existingItemIndex = cart.findIndex(cartItem => cartItem._id === item._id);

            if (existingItemIndex !== -1) {
                const newCart = [...cart];
                newCart[existingItemIndex].orderQuantity = Number(item.orderQuantity) + Number(newCart[existingItemIndex].orderQuantity);
                return newCart;
            } else {
                return [...cart, item];
            }
        })
    };

    const clearItem = (item) => {

        setCart(oldCart =>
            oldCart.filter(cartItem => cartItem._id != item._id)
        )
    }

    const clearCart = () => {
        setCart(state => []);
        setCartSize(0);
    }


    const cartContext = {
        cart,
        cartSize,
        addCartItems,
        clearItem,
        clearCart
    }

    return <ShoppingCartContext.Provider value={cartContext}>
        {children}
    </ShoppingCartContext.Provider>
}

ShoppingCartContext.displayName='ShoppingCartContext';
export default ShoppingCartContext;
