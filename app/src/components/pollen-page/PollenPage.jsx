

import Banner from "../banner/Banner";
import ProductList from "../product/list/ProductList";

export default function PollenPage() {

    return (
        <main>
            <Banner
                bannerUrl={'/src/assets/honey-comb.png'}
                bannerName={'Pollen'}
            />
            
          <ProductList productName='pollen'/>

        </main>
    );
}