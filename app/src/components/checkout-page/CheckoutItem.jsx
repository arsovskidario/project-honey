export default function CheckoutItem({
    imgUrl,
    name,
    price,
    orderQuantity,
    clearItem
}) {

    return <div className="flex justify-between items-center">
        <div id="product-img" className="p-2 w-1/4">
            <img src={imgUrl} alt="product-image" />
        </div>

        <div id="product-info" className="p-2 w-1/4">
            <h1>{name}</h1>
            <h1>Price: <span className="font-bold">${price}</span></h1>
        </div>

        <div id="product-qunatity" className="p-2 w-1/4">
            <h1>Quantity: {orderQuantity}</h1>
        </div>

        <div id="product-subtotal" className="p-2 w-1/4 flex">
            <h1>Subtotal: <span className="font-bold">${(price * orderQuantity).toFixed(2)}</span> </h1>
            <button onClick={clearItem}
                className="ml-10 p-4 rounded-lg text-white bg-cfb491 hover:bg-btnHover font-medium text-sm text-center">
                Delete
            </button>
        </div>

    </div>
}