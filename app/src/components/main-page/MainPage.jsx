import './MainPage.css'
import Banner from './banner/Banner'
import FeaturedProdcuts from './featured-products/FeaturedProducts'
export default function MainPage() {
    return (
        <main>
            <Banner/>
            <FeaturedProdcuts/>
            <h1 className="text-red">Main Page</h1>
        </main>
    )
}