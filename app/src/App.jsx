import { Routes, Route } from 'react-router-dom'

import { AuthProvider } from './contexts/AuthContext'
import { ShoppingCartProvider } from './contexts/ShoppingCartContext'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import MainPage from './components/pages/main-page/MainPage'
import HoneyPage from './components/pages/honey-page/HoneyPage'
import PollenPage from './components/pages/pollen-page/PollenPage'
import GiftPage from './components/pages/gift-page/GiftPage'
import ProductDetailsPage from './components/pages/product-details-page/ProductDetailsPage'
import CheckOutPage from './components/pages/checkout-page/CheckOutPage'
import LoginPage from './components/user-panel/LoginPage'
import RegisterPage from './components/user-panel/RegisterPage'
import ErrorPage from './components/errors/ErrorPage'
import ErrorBoundary from './components/errors/ErrorBoundary'

function App() {

  return (
    <ErrorBoundary>
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
            <Route path="/error" element={<ErrorPage />} />
          </Routes>

          <Footer />
        </ShoppingCartProvider>
      </AuthProvider>
    </ErrorBoundary>
  )
}

export default App
