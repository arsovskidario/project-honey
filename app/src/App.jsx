import { Routes, Route } from 'react-router-dom'

import { AuthProvider } from './contexts/AuthContext'
import { ShoppingCartProvider } from './contexts/ShoppingCartContext'

import Header from './components/header/Header'
import Footer from './components/Footer'
import MainPage from './components/main-page/MainPage'
import HoneyPage from './components/honey-page/HoneyPage'
import ProductDetailsPage from './components/product-details-page/ProductDetailsPage'
import CheckOutPage from './components/checkout-page/CheckOutPage'
import LoginPage from './components/user-panel/LoginPage'
import PollenPage from './components/pollen-page/PollenPage'
import GiftPage from './components/gift-page/GiftPage'
import RegisterPage from './components/user-panel/RegisterPage'
import ErrorPage from './components/errors/ErrorPage'

function App() {

  return (
    <AuthProvider>
      <ShoppingCartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/honey" element={<HoneyPage />} />
          <Route path="/pollen" element={<PollenPage />} />
          <Route path="/gifts" element={<GiftPage />} />
          <Route path="/product-details/:productId" element={<ProductDetailsPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/error" element={<ErrorPage imgUrl={"/src/assets/505-icon.png"}/>} />
        </Routes>

        <Footer />
      </ShoppingCartProvider>
    </AuthProvider>
  )
}

export default App
