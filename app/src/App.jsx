import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { ShoppingCartContext } from './contexts/ShoppingCartContext'

import Header from './components/header/Header'
import Footer from './components/Footer'
import MainPage from './components/main-page/MainPage'
import HoneyPage from './components/honey-page/HoneyPage'
import ProductDetailsPage from './components/product-details-page/ProductDetailsPage'
import CheckOutPage from './components/checkout-page/CheckOutPage'

const initialCart = JSON.parse(localStorage.getItem('cart') || '[]');
const initialCartSize = JSON.parse(localStorage.getItem('cartSize') || '0');
function App() {
  const [cart, setCart] = useState(initialCart);
  const [cartSize, setCartSize] = useState(initialCartSize);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])


  useEffect(() => {
    localStorage.setItem('cartSize', JSON.stringify(cartSize))
  }, [cartSize])


  const addCartItems = (item) => {

    setCart(cart => {
      const existingItemIndex = cart.findIndex(cartItem => cartItem._id === item._id);

      if (existingItemIndex !== -1) {
        console.log('ITEMQUANTITY'+item.orderQuantity)
        const newCart = [...cart];
        console.log('EXISTINGQUANTITY'+newCart[existingItemIndex].orderQuantity)
        newCart[existingItemIndex].orderQuantity = Number(item.orderQuantity) + Number(newCart[existingItemIndex].orderQuantity);
        return newCart;
      } else {
        return [...cart, item];
      }
    })
  };

  const updateCartSize = (item) => {
    setCartSize(oldSize => oldSize + Number(item.orderQuantity));
  }

  const cartContext = {
    cart,
    cartSize,
    addCartItems,
    updateCartSize
  }

  return (
    <ShoppingCartContext.Provider value={cartContext}>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/honey" element={<HoneyPage />} />
        <Route path="/product-details/:productId" element={<ProductDetailsPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
      </Routes>

      <Footer />
    </ShoppingCartContext.Provider>
  )
}

export default App
