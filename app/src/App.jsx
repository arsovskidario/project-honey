import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { ShoppingCartContext } from './contexts/ShoppingCartContext'

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
import { AuthProvider } from './contexts/AuthContext'

const initialCart = JSON.parse(localStorage.getItem('cart') || '[]');
const initialCartSize = JSON.parse(localStorage.getItem('cartSize') || '0');
function App() {
  const [cart, setCart] = useState(initialCart);
  const [cartSize, setCartSize] = useState(initialCartSize);

  useEffect(() => {
    setCartSize(oldSize => {
      return cart.reduce(
        (accumulate, cartItem) => accumulate + Number(cartItem.orderQuantity),
        0)
    });
    localStorage.setItem('cart', JSON.stringify(cart))
    localStorage.setItem('cartSize', JSON.stringify(cartSize))
  }, [cart, cartSize])


  const addCartItems = (item) => {

    setCart(cart => {
      const existingItemIndex = cart.findIndex(cartItem => cartItem._id === item._id);

      if (existingItemIndex !== -1) {
        const newCart = [...cart];
        newCart[existingItemIndex].orderQuantity = Number(item.orderQuantity) + Number(newCart[existingItemIndex].orderQuantity);
        return newCart;
      } else {
        return [...cart, item];
      }
    })
  };

  const clearItem = (item) => {

    setCart(oldCart =>
      oldCart.filter(cartItem => cartItem._id != item._id)
    )
  }

  const clearCart = () => {
    setCart(state => []);
    setCartSize(0);
  }


  const cartContext = {
    cart,
    cartSize,
    addCartItems,
    clearItem,
    clearCart
  }

  return (
    <AuthProvider>
      <ShoppingCartContext.Provider value={cartContext}>
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
        </Routes>

        <Footer />
      </ShoppingCartContext.Provider>
    </AuthProvider>
  )
}

export default App
