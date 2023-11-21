import { useParams } from "react-router-dom";
import ProductDetails from "./details/ProductDetails";
import ProductReviews from "./reviews/ProductReviews";

export default function ProductDetailsPage() {
    const { productId } = useParams();
    
    return (
        <main>
            <ProductDetails _id={productId} />
            <ProductReviews _id={productId} />
        </main>
    )
}