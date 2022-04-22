import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TopBar from './components/TopBar/TopBar';

import './App.css';
import LineDivider from '../src/components/LineDivider/LineDivider'
import Navbar from './components/Navbar/Navbar';
import Hero from './pages/Hero/Hero';
import Portfolio from './pages/Portfolio/Portfolio';

import { PortfolioProvider } from './context/PortfolioContext';
import Skills from './pages/Skills/Skills';
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <PortfolioProvider>
      {/* <Routes>
        <Route path='/' element={<Explore />} />      
      </Routes> */}
  
      <Router>
        <TopBar />
        <Hero />
        <LineDivider />
        <Portfolio />
        <LineDivider />
        <Skills/>
        <LineDivider />
        <Contact />
        <Footer />
        <Navbar />
      </Router>
    </PortfolioProvider>
  );
}

export default App;
