import { useContext, useEffect, useState } from "react"
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext"
import CheckoutItem from "./CheckoutItem";

export default function CheckOutPage() {
    const { cart, clearCart, clearItem } = useContext(ShoppingCartContext);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setTotalPrice(oldPrice => cart.reduce(
            (accumulator, cartItem) => accumulator + (cartItem.orderQuantity * cartItem.price),
            0
        ))
    }, [cart])

    function cartCheckoutHandler() {
        console.log("sending entire cart to BE");
        console.log(cart);
        clearCart();
    }

    return <main>
        <section id="cart" className="flex flex-col bg-productWhite mt-10">
            <div id="checkout" className="flex justify-between">
                <h1 className="text-3xl ml-4">Checkout</h1>
                <div className="flex">
                    <h1 className="m-4">Total:<span className="font-bold">${totalPrice.toFixed(2)}</span></h1>
                    <button
                        onClick={cartCheckoutHandler}
                        className="mt-2 mb-2 p-2 text-white bg-cfb491 hover:bg-btnHover font-medium rounded-lg text-sm text-center overflow-clip">
                        Checkout
                    </button>
                </div>
            </div>

            <div id="cart-itemns" className="m-4 border-4 border-white">
                <ul>
                    {cart.map(item =>
                        <li key={item._id}><CheckoutItem clearItem={clearItem.bind(null, item)} {...item} /></li>)}
                </ul>
            </div>


        </section>
    </main>
}