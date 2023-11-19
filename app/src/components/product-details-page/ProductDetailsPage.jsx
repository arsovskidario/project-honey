import { useParams } from "react-router-dom";
import ProductDetails from "../product/details/ProductDetails";

export default function ProductDetailsPage() {
    const { productId } = useParams();
    //TODO: Probably have to fetch element here instead of in details
    return (
        <main>
            <h1>Breadtrails</h1>
            <ProductDetails _id={productId} />
        </main>
    )
}