import './MainPage.css'
import Banner from '../../banner/Banner'
import ProductList from '../../product/list/ProductList'
import NewsLetter from './newsletter/Newsletter'
import ProductDiscovery from './discovery/ProductDiscovery'

export default function MainPage() {
    return (
        <main>
            <Banner
                bannerUrl={'/src/assets/main-page-banner.jpg'}
                bannerName={'Balkan Nectar'}
                bannerDescription={'Where tradition meets the sweetness of nature.'}
                isMainPage={true}
            />

            <ProductDiscovery />

            <ProductList productName="featured products" />

            <NewsLetter />
        </main>
    )
}