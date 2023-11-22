import Banner from "../banner/Banner";
import ProductList from "../product/list/ProductList";

export default function GiftPage() {

    return (
        <main>
            <Banner
                bannerUrl={'/src/assets/honey-comb.png'}
                bannerName={'Gifts'}
            />

            <h1 className="text-white text-6xl main-page-header mt-10">Gifts</h1>


          <ProductList productName='gifts'/>

        </main>
    );
}