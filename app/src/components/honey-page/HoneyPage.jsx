import Banner from "../banner/Banner";
import ProductList from "../product/list/ProductList";

export default function HoneyPage() {

    return (
        <main>
            <Banner
                bannerUrl={'/src/assets/honey-comb.png'}
                bannerName={'Raw Honey'}
            />

            <h1 className="text-white text-6xl main-page-header mt-10">Raw Honey</h1>


          <ProductList productName='honey'/>

        </main>
    );
}