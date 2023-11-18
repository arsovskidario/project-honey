import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import ProductCard from "../../product/card/ProductCard";
import { getAllProducts } from "../../../services/productsService";

export default function FeaturedProdcuts() {
    const navigate = useNavigate();
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        getAllProducts().then(
            data => {
                setFeaturedProducts(Object.values(data));

            }
        ).catch(error =>
            navigate(`/error?message=${error.message}`)
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