import Header from './components/header/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import MainPage from './components/main-page/MainPage'
import HoneyPage from './components/honey-page/HoneyPage'
import ProductDetailsPage from './components/product-details-page/ProductDetailsPage'
function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/honey" element={<HoneyPage />} />
        <Route path="/product-details/:productId" element={<ProductDetailsPage/>}/>
      </Routes>

      <Footer />
    </>
  )
}

export default App
