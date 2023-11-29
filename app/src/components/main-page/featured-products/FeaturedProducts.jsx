import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { getFeaturedProducts } from "../../../services/productsService";
import { ERROR_CODE } from "../../constants/constants";
import ProductCard from "../../product/card/ProductCard";

export default function FeaturedProdcuts() {
    const navigate = useNavigate();
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        getFeaturedProducts().then(
            data => {
                setFeaturedProducts(Object.values(data).slice(0, 3));

            }
        ).catch(error =>
            navigate(`/error?message=${ERROR_CODE.SERVICE_UNAVAILABLE}`)
        )
    }, [])


    return (
        <section className="flex flex-col items-center">
            <h1 className="mt-10 text-2xl">Featured Products</h1>
            <div id="featured-products" className="w-full flex flex-row justify-center mt-5">
                {featuredProducts.map(product =>
                   <ProductCard key={product._id} {...product} />
                )}
            </div>
        </section>

    )
}