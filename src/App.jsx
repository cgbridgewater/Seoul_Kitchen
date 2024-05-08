import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './Components/Navbar/Navigation'
import GoToTopButton from './Components/GoToTop'
import Footer from './Components/Footer/Footer'
import Index from './Views/Index'
import MenuPage from './Views/Menu'
import Location from './Views/Location'
// import AboutUs from './Views/AboutUs'
import ErrorPage from './Views/ErrorPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/location" element={<Location />} />
          {/* <Route path="/aboutus" element={<AboutUs />} /> */}
          <Route path="/:bad/*" element={<ErrorPage />} />
        </Routes>
        <GoToTopButton />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
