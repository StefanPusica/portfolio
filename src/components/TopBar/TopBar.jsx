import './TopBar.css';
import SwitchToggleButton from '../SwitchToggleButton/SwitchToggleButton';
import { FaLinkedin, FaGithub } from "react-icons/fa"

function TopBar() {
  return (
    <div className='top-bar'>
        <div className="top-bar-left">
            <div className="top-bar-linkedin">
                <FaLinkedin className='top-bar-icons' />
            </div>
            <div className="top-bar-linkedin">
              <FaGithub className='top-bar-icons' />
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