import React, { useContext } from 'react';
import './Hero.css'
// import Cookies from 'js-cookie'
import PortfolioContext from '../../context/PortfolioContext'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import SectionText from '../../components/SectionText/SectionText'
import ButtonMultyColorHref from '../../components/ButtonMultiplyColorHref/ButtonMultiplyColorHref'
import HeroAnimation from '../../components/HeroAnimation/HeroAnimation'

function Hero() {

  const {english} = useContext(PortfolioContext)

  // let cookieValue = Cookies.get('switch') // => 'value'

  return (
    <div className="hero" id='Hero'>
        <div className="hero-holder">
            <div className="hero-left-side">
                <SectionTitle text={english  ? 'Welcome!' : 'Dobro došli!'} />
                <SectionText text={english ? `In addition to the acquired knowledge on High School my knowledge and skills i was improving with books and professional internet content. I am motivated to learn and improve my skills.` : `Pored znanja stečenog na Visokoj Školi svoja znanja i veštine unapređivao sam knjigama i stručnim internet sadržajem. Motivisan sam da steknem nove veštine i da svoje znanje stalno unapređujem`  } />
                <ButtonMultyColorHref buttonHrefTo={'#Skills'} buttonText={english ? 'Detalis' : 'Detaljnije'} />
            </div>
            <div className="hero-right-side">
              <HeroAnimation className="heroAnimation" />
            </div>
        </div>
    </div>
  )
}

export default Hero