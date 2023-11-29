import Banner from "../../banner/Banner";
import ProductList from "../../product/list/ProductList";

export default function GiftPage() {

    return (
        <main>
            <Banner
                bannerUrl={'/src/assets/honey-comb.png'}
                bannerName={'Gifts'}
            />

          <ProductList productName='gifts'/>

        </main>
    );
}