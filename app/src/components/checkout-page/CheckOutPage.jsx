import { useContext, useEffect, useState } from "react"
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext"
import CheckoutItem from "./CheckoutItem";

const INITIAL_ORDER_MESSAGE = "";
export default function CheckOutPage() {
    const [errors, setErrors] = useState('');
    const { cart, cartSize, clearCart, clearItem } = useContext(ShoppingCartContext);

    const [totalPrice, setTotalPrice] = useState(0);
    const [orderMessage, setOrderMessage] = useState(INITIAL_ORDER_MESSAGE)

    useEffect(() => {
        setTotalPrice(oldPrice => cart.reduce(
            (accumulator, cartItem) => accumulator + (cartItem.orderQuantity * cartItem.price),
            0
        ))
    }, [cart])

    function cartCheckoutHandler() {
        if (localStorage.getItem('accessToken') === null) {
            setErrors('You must be logged in to checkout');
            return;
        }

        console.log("sending entire cart to BE");
        console.log("order preference", orderMessage)
        console.log({ cart, orderMessage });
        clearCart();
        setOrderMessage(INITIAL_ORDER_MESSAGE)
    }

    function updateOrderMessageHandler(e) {
        setOrderMessage(
            e.target.value
        )
    }

    return <main>
        <section id="cart" className="flex flex-col bg-productWhite mt-10">

            {errors.length !== 0
                && <div className=" w-1/2 self-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <span className="block sm:inline">{errors}</span>
                    <span
                        className="absolute top-0 bottom-0 right-0 px-4 py-3">
                        <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                    </span>
                </div>
            }

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

        {cartSize !== 0 &&
            <section id="order-preference" className="mt-10 ml-4 mr-4">
                <label htmlFor="message" className="block mb-2 text-xl font-medium text-gray-90">Order preference</label>
                <textarea id="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm bg-productWhite rounded-lg border border-gray-300 "
                    placeholder="Write your preferences here..."
                    value={orderMessage}
                    onChange={updateOrderMessageHandler}
                >
                </textarea>

            </section>
        }

    </main>
}