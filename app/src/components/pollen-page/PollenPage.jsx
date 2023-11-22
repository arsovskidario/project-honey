

import Banner from "../banner/Banner";
import ProductList from "../product/list/ProductList";

export default function PollenPage() {

    return (
        <main>
            <Banner
                bannerUrl={'/src/assets/honey-comb.png'}
                bannerName={'Pollen'}
            />
            
            <h1 className="text-white text-6xl main-page-header mt-10">Pollen</h1>


          <ProductList productName='pollen'/>

        </main>
    );
}