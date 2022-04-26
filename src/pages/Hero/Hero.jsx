import React, { useContext } from 'react';
import './Hero.css'
import Cookies from 'js-cookie'
import PortfolioContext from '../../context/PortfolioContext'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import SectionText from '../../components/SectionText/SectionText'
import ButtonMultyColor from '../../components/ButtonMultyColor/ButtonMultyColor'
import HeroAnimation from '../../components/HeroAnimation/HeroAnimation'

function Hero() {

  const {english} = useContext(PortfolioContext)

  // let cookieValue = Cookies.get('switch') // => 'value'

  return (
    <div className="hero" id='Hero'>
        <div className="hero-holder">
            <div className="hero-left-side">
                <SectionTitle text={english  ? 'Welcome!' : 'Dobro dosli!'} />
                <SectionText text={english ? `My name is Stefan Pusica, I am 24 years old and I am from Belgrade. I'm doing with frontend development and design for the needs of the projects I have worked on.` : `Zovem se Stefan Pušica, imam 24 godine i iz Beograda sam. Bavim se Front-End developmentom i dizajnom za potrebe ličnih projekata`  } />
                <ButtonMultyColor buttonText={english ? 'Detalis' : 'Detaljnije'} />
            </div>
            <div className="hero-right-side">
              <HeroAnimation className="heroAnimation" />
            </div>
        </div>
    </div>
  )
}

export default Hero