import Banner from "../../banner/Banner";
import ProductList from "../../product/list/ProductList";

export default function HoneyPage() {

    return (
        <main>
            <Banner
                bannerUrl={'/src/assets/honey-comb.png'}
                bannerName={'Raw Honey'}
            />

          <ProductList productName='honey'/>

        </main>
    );
}