import ProductList from "../../product/list/ProductList";

export function ProductPage() {
    return <main className="flex flex-col items-center justify-center">
        <h1 className="mt-10 text-2xl">Products</h1>
        <div className="flex md:flex-row flex-col items-center justify-around mt-10 w-5/6 bg-productWhite">
            <ProductList productName=''/>
        </div>
    </main>
}