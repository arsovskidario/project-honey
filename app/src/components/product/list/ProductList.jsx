import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getAllProducts, getFeaturedProducts, getProductsPageInfo } from "../../../services/productsService";
import { ERROR_CODE } from "../../constants/constants";

import ProductCard from "../card/ProductCard";

export default function ProductList({
    productName
}) {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let data;

                if (productName === '') {
                    data = await getAllProducts();
                } else if (productName === 'featured products') {
                    data = await getFeaturedProducts();
                }
                else {
                    data = await getProductsPageInfo(productName);
                }

                setProducts(productName === 'featured products'
                    ? Object.values(data).slice(0, 3)
                    : Object.values(data));
            } catch (error) {
                navigate(`/error?message=${ERROR_CODE.SERVICE_UNAVAILABLE}`);
            }
        };

        fetchData();
    }, [])

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className="mt-10 text-2xl">{capitalizeFirstLetter(productName)}</h1>
            <div id={`${productName}-list`} className="w-3/6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-5">
                {products.map(product =>
                    <ProductCard key={product._id} {...product}
                    />
                )}
            </div>
        </div>
    )
}