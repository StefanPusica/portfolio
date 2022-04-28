import './TopBar.css';
import SwitchToggleButton from '../SwitchToggleButton/SwitchToggleButton';
import { FaLinkedin, FaGithub } from "react-icons/fa"

function TopBar() {
  return (
    <div className='top-bar'>
        <div className="top-bar-left">
            <div className="top-bar-linkedin">
              <a href='https://www.linkedin.com/in/stefan-pu%C5%A1ica-12841515b/?originalSubdomain=rs'>
                <FaLinkedin className='top-bar-icons' />
              </a>
            </div>
            <div className="top-bar-linkedin">
              <a href='https://github.com/StefanPusica'>
                <FaGithub className='top-bar-icons' />
              </a>
            </div>
        </div>
        <div className="top-bar-right">
            <span>ENG</span>
            <SwitchToggleButton />
            <span>SR</span>
        </div>
    </div>
  )
}

export default TopBar