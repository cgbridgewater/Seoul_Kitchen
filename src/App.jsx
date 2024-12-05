// Import Styles File
import './App.css';

// Import React Router Components
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components
import GoToTopButton from './Components/GoToTop';
import Footer from './Components/Footer/Footer';
import Index from './Views/Index';
import MenuPage from './Views/Menu';
import Location from './Views/Location';
import AboutUs from './Views/AboutUs';
import ErrorPage from './Views/ErrorPage';
import NavHeader from './Components/Navbar/NavHeader';
import ComingSoon from './Components/Modals/ComingSoon';

// Import Custom Hook
import useModal from './Hooks/useModal';

function App() {

  // Deconstruct Custom Hook
  const {
    isModalOpen,
    handleOverlayClick,
    handleOpenModal,
    handleCloseModal,
  } = useModal();

  return (
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
  )
}

export default App
