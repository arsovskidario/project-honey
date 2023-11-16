import Header from './components/header/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import MainPage from './components/main-page/MainPage'
function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
