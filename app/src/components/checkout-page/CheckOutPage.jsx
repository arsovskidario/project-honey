import { useContext } from "react"
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext"

export default function CheckOutPage() {

    const {cart} = useContext(ShoppingCartContext);
    return <main>
        <h1>Checkout</h1>
        <section id="cart" className="flex flex-col">
            <ul>
                {cart.map(item =>
                    <li key={item._id}>{item.name}-{item.orderQuantity}</li>)}
            </ul>
        </section>
    </main>
}