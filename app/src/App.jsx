import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import MainPage from './components/MainPage'
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
