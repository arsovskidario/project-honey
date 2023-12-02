import { useState } from "react";
import ProductList from "../../product/list/ProductList";
import ProductDetailsModal from "../product-details-page/details/modal/ProductDetailsModal";

const initialProduct = {
    name: '',
    category: '',
    price: 0,
    imgUrl: '',
    description: ''
}
export function ProductPage() {
    const [isEditAcitve, setIsEditActive] = useState(false);

    return <main className="flex flex-col items-center justify-center">
        <h1 className="mt-10 text-2xl">Products</h1>
        <div className="flex md:flex-row flex-col items-center justify-around mt-10 w-5/6 bg-productWhite">
            <ProductList productName='' />
        </div>
        <button
            onClick={() => setIsEditActive(true)}
            className="h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-600">
            Create product
        </button>

        {isEditAcitve && <ProductDetailsModal
            operationType={'create'}
            productDetails={initialProduct}
            closeHandler={() => setIsEditActive(false)} />}
    </main>
}