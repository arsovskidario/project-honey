import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getProductInfo } from "../../../services/productsService";

export default function ProductDetails({
    _id
}) {
    const navigate = useNavigate();
    const [currentProduct, setCurrentProduct] = useState({});
    const [orderQuantity, setOrderQuantity] = useState(0);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        getProductInfo(_id).then(
            data => {
                setCurrentProduct(data);
            }
        ).catch(error =>
            navigate(`/error?message=${error.message}`)
        )
    }, [])

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

    const onChangeQuantityHandler = (e) => {
        setOrderQuantity(e.target.value);
    }

    const addToCardHandler = () => {
        console.log(orderQuantity)
    }

    const items = [];

    for (let i = 1; i <= 10; i++) {
      items.push(<option key={i} value={i}>{i}</option>);
    }

    return (
        <section id={`product-${_id}`} className="bg-productWhite mt-10">
            <Link to={`/${currentProduct.category}`} className="text-starsBrown ml-4" >{`home > ${currentProduct.category}`}</Link>
            <div className="flex flex-row justify-center items-center pb-5">
                <div id="product-img" className="w-1/6 p-2">
                    <img src={currentProduct.imgUrl} />
                </div>
                <div id="product-info" className="w-1/2 p-2">
                    <h1>{currentProduct.name}</h1>
                    <div>
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            <svg className="w-4 h-4 text-starsBrown" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-starsBrown" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-starsBrown" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-starsBrown" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-starsBrown" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <span className="text-starsBrown text-xs font-semibold px-2.5 py-0.5 roundedms-3 overflow-clip">{currentProduct.rating}</span>
                        </div>
                    </div>
                    <p>{currentProduct.description}</p>
                </div>
                <div id="product-buy" className="flex flex-col w-1/8 p-2">
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-starsBrown">Quantity:</label>
                    <select id="countries"
                        onChange={onChangeQuantityHandler}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg">
                        {items}
                    </select>

                    <button onClick={addToCardHandler}
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
            </div>
        </section>
    );

}