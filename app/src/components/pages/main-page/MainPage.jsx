import './MainPage.css'
import Banner from '../../banner/Banner'
import ProductList from '../../product/list/ProductList'
export default function MainPage() {
    return (
        <main>
            <Banner
             bannerUrl={'/src/assets/main-page-banner.jpg'}
             bannerName={'Balkan Nectar'}
             bannerDescription={'Where tradition meets the sweetness of nature.'}
             isMainPage={true}
             />
            <ProductList productName ="featured products"/>
        </main>
    )
}