import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { ShoppingCartContext } from './contexts/ShoppingCartContext'

import Header from './components/header/Header'
import Footer from './components/Footer'
import MainPage from './components/main-page/MainPage'
import HoneyPage from './components/honey-page/HoneyPage'
import ProductDetailsPage from './components/product-details-page/ProductDetailsPage'

const initialCart = JSON.parse(localStorage.getItem('cart') || '[]');
function App() {
  const [cart, setCart] = useState(initialCart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addCartItems = (items) => setCart(state => [...state, items]);
  const cartContext = {
    cart,
    addCartItems
  }

  return (
    <ShoppingCartContext.Provider value={cartContext}>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/honey" element={<HoneyPage />} />
        <Route path="/product-details/:productId" element={<ProductDetailsPage />} />
      </Routes>

      <Footer />
    </ShoppingCartContext.Provider>
  )
}

export default App
