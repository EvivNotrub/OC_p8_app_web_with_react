import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home.jsx';
import Header from './components/header/Header.jsx';
import About from './pages/about/About.jsx';
import Apartment from './pages/apartment/Apartment.jsx';
import Footer from './components/footer/Footer';
import Error from './pages/error/Error.jsx';

// the basename attribute is used to deploy the app on github pages,
// for a local preview or other deployement you might want to remove it

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Router
    basename={import.meta.env.DEV ? '/' : '/OC_p8_app_web_with_react/'}
  >
    <Header/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/apartment/:apartId" element={<Apartment />}  />
    </Routes>
    <Footer/>
  </Router>
  </React.StrictMode>,
)
