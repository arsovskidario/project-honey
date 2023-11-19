import { useParams } from "react-router-dom";
import ProductDetails from "../product/details/ProductDetails";

export default function ProductDetailsPage() {
    const { productId } = useParams();
    //TODO: Probably have to fetch element here instead of in details
    return (
        <main>
            <ProductDetails _id={productId} />
        </main>
    )
}