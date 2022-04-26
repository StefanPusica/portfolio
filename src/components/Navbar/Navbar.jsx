// import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaHome, FaProjectDiagram, FaSlidersH, FaEnvelope } from "react-icons/fa"
import './Navbar.css'
import { useContext } from 'react'
import PortfolioContext from '../../context/PortfolioContext'


function Navbar() {
    // const navigate = useNavigate()

    const {english} = useContext(PortfolioContext)

  return (
    <footer className="navbar">
        <nav className="navbar-nav">
            <ul className="navbar-list-items">
                <li className='navbar-list-item' >
                    <a href='#Hero' className="nav-link-item">
                        <FaHome fill="#0F1624" size={'1.5rem'} />
                        <span>{english ? 'Home' : 'Početna'}</span>
                    </a>
                </li>
                <li className='navbar-list-item'>
                <a href='#Portfolio' className="nav-link-item">
                    <FaProjectDiagram fill="#0F1624" size={'1.5rem'} />
                    <span>{'Portfolio'}</span>
                </a>
                </li>
                <li className='navbar-list-item'>
                <a href='#Skills' className="nav-link-item">
                    <FaSlidersH fill="#0F1624" size={'1.5rem'} />
                    <span>{english ? 'Skills' : 'Veštine'}</span>
                </a>    
                </li>
                <li className='navbar-list-item'>
                <a href='#Contact' className="nav-link-item">
                    <FaEnvelope fill="#0F1624" size={'1.5rem'} />
                    <span>{english ? 'Contact' : 'Kontakt'}</span>
                </a>
                </li>
            </ul>
        </nav>
    </footer>
  )
}

export default Navbar