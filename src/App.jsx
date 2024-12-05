import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GoToTopButton from './Components/GoToTop'
import Footer from './Components/Footer/Footer'
import Index from './Views/Index'
import MenuPage from './Views/Menu'
import Location from './Views/Location'
import AboutUs from './Views/AboutUs'
import ErrorPage from './Views/ErrorPage'
import NavHeader from './Components/Navbar/NavHeader'
import ComingSoon from './Components/Modals/ComingSoon'

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Closes Modal when overlay is clicked
  const handleOverlayClick = (e) => {
      // Only close if the overlay (not the modal content) is clicked
      if (e.target.className === 'modal_overlay') {
          setIsModalOpen(false);
      }
  };

  // This function opens the modal
  const handleOpenModal = () => {
      setIsModalOpen(true);
  };

  // Closes the modal when the close button is clicked
  const handleCloseModal = () => {
      setIsModalOpen(false);
  };

  return (

    <>
      <BrowserRouter>
        <NavHeader handleOpenModal={handleOpenModal} />
        <Routes>
          <Route exact path="/" element={<Index handleOpenModal={handleOpenModal} />} />
          <Route path="/menu" element={<MenuPage handleOpenModal={handleOpenModal}  />} />
          <Route path="/location" element={<Location />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/:bad/*" element={<ErrorPage />} />
        </Routes>
        <GoToTopButton />
        <ComingSoon handleCloseModal={handleCloseModal} handleOverlayClick={handleOverlayClick} isModalOpen={isModalOpen} />
        <Footer handleOpenModal={handleOpenModal} />
      </BrowserRouter>
    </>
  )
}

export default App
