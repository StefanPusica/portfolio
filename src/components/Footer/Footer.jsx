import { useContext } from "react"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import PortfolioContext from "../../context/PortfolioContext"

import './Footer.css'

function Footer() {

  const {english} = useContext(PortfolioContext)

  return (
    <div className="footer">
        <div className="footer-holder">
            <div className="footer-first-row">
                <span className="footer-mail">EMAIL</span>
                <span className="footer-mail-text">pusicastefan1@gmail.com</span>
            </div>
            <div className="footer-second-row">
                <p className="copy-text">© PusicaStefan 2022. {english ? 'All rights reserved' : 'Sva prava zadržana' }</p>
                <FaLinkedin className='top-bar-icons' />
                <FaGithub className='top-bar-icons' />
            </div>
        </div>
    </div>
  )
}

export default Footer