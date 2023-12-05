import { useContext, useEffect, useState } from "react"

import ShoppingCartContext from "../../../contexts/ShoppingCartContext"
import AuthContext from "../../../contexts/AuthContext";

import CheckoutItem from "./CheckoutItem";
import { createOrder } from "../../../services/orderService";
import { useNavigate } from "react-router-dom";
import { ERROR_CODE } from "../../constants/constants";

const INITIAL_ORDER_MESSAGE = "";
export default function CheckOutPage() {
    const navigate = useNavigate();

    const [errors, setErrors] = useState('');
    const [succPurchase, setSuccPurchase] = useState('');

    const { cart, cartSize, clearCart, clearItem } = useContext(ShoppingCartContext);
    const { username, accessToken } = useContext(AuthContext);

    const [totalPrice, setTotalPrice] = useState(0);
    const [orderMessage, setOrderMessage] = useState(INITIAL_ORDER_MESSAGE)

    useEffect(() => {
        setTotalPrice(oldPrice => cart.reduce(
            (accumulator, cartItem) => accumulator + (cartItem.orderQuantity * cartItem.price),
            0
        ))
    }, [cart])

    useEffect(() =>
        setSuccPurchase('')
        , [errors])

    async function cartCheckoutHandler() {
        if (!username || username.trim() === '') {
            setErrors('You must be logged in to checkout');
            return;
        }

        if (cartSize === 0) {
            setErrors('Shopping cart is empty!')
            return;
        }

        const items = cart.map(({ _id, name, orderQuantity, price }) => ({ _id, name, orderQuantity, price }));
        const order = { username, items, orderMessage, totalPrice: totalPrice.toFixed(2) };
        console.log('Sending order: ' + JSON.stringify(order));

        try {
            const response = await createOrder(order, accessToken);
            console.log(response);
            setSuccPurchase("Order complete!");
            setOrderMessage(INITIAL_ORDER_MESSAGE);
        } catch (error) {
            console.log(error);
            navigate(`/error?message=${ERROR_CODE.SERVICE_UNAVAILABLE}`);
        } finally{
            clearCart();
        }

    }

    function updateOrderMessageHandler(e) {
        setOrderMessage(
            e.target.value
        )
    }

    return <main className="h-screen">
        <section id="cart" className="flex flex-col bg-productWhite mt-10">

            {errors.length !== 0
                && (<div className=" w-1/2 self-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <span className="block sm:inline">{errors}</span>
                </div>)
            }

            {succPurchase.length !== 0
                && (<div className=" w-1/2 self-center bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                    <span className="block sm:inline">{succPurchase}</span>
                </div>)
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