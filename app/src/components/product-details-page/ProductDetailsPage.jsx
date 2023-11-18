import { useParams } from "react-router-dom";
import ProductDetails from "../product/details/ProductDetails";

export default function ProductDetailsPage() {
    const { productId } = useParams();
    return (
        <section>
            <h1>Product details page</h1>
            <ProductDetails _id={productId} />
        </section>
    )
}