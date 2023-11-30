import { useState, useEffect, useContext } from "react";

import ShoppingCartContext  from "../../../../../contexts/ShoppingCartContext";

export default function Buy({
    item
}) {
    const [orderQuantity, setOrderQuantity] = useState(1);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (copied) setCopied(false);
        }, 1000);
        return () => clearTimeout(timeout);
    }, [copied]);

    const copyToClipboardHanlder = () => {
        setCopied(true);
        const productUrl = window.location.href
        navigator.clipboard.writeText(productUrl);
    };

    const quantityHandler = (e) => {
        setOrderQuantity(e.target.value);
    }

    const {addCartItems} = useContext(ShoppingCartContext);

    const addItemToCartHandler = () => {
        const currItem = {...item, orderQuantity};
        addCartItems(currItem);
    }

    const options = Array.from({ length: 10 }, (_, i) => (
        <option key={i + 1} value={i + 1}>
            {i + 1}
        </option>
    ));

    return (
        <div id="product-buy" className="flex flex-col w-1/8 p-2">
            <div className="flex">
            <label htmlFor="countries" className="m-1 block mb-2 text-sm font-medium text-starsBrown">Quantity:</label>
            <select id="countries"
                value={orderQuantity}
                onChange={quantityHandler}
                className="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg">
                {options}
            </select>
            </div>

            <button onClick={addItemToCartHandler}
                className="m-1 text-white bg-cfb491 hover:bg-btnHover font-normal rounded-lg text-sm px-2.5 py-1.5 text-center overflow-clip">
                Add to cart
            </button>
            <button onClick={copyToClipboardHanlder}
                className="m-1 text-white bg-cfb491 hover:bg-btnHover font-normal rounded-lg text-sm px-5 py-2.5 text-center overflow-clip">
                {!copied
                    ? "Share"
                    : "Copied!"}
            </button>
        </div>
    );
}