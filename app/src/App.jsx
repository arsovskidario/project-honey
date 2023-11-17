import Header from './components/header/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import MainPage from './components/main-page/MainPage'
import HoneyPage from './components/honey-page/HoneyPage'
function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/honey" element={<HoneyPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
