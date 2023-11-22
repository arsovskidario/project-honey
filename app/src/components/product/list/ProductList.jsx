import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getProductsPageInfo } from "../../../services/productsService";

import ProductCard from "../card/ProductCard";

export default function ProductList({
    productName
}) {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductsPageInfo(productName).then(
            data => {
                setProducts(Object.values(data));
            }
        ).catch(error =>
            navigate(`/error?message=${error.message}`)
        )
    }, [])

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className="mt-10 text-2xl">{capitalizeFirstLetter(productName)}</h1>
            <div id={`${productName}-list`} className="w-4/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-5">
                {products.map(product =>
                    <ProductCard key={product._id} {...product}
                    />
                )}
            </div>
        </div>
    )
}