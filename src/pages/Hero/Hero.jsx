import './Hero.css'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import SectionText from '../../components/SectionText/SectionText'
import ButtonMultyColor from '../../components/ButtonMultyColor/ButtonMultyColor'
import HeroAnimation from '../../components/HeroAnimation/HeroAnimation'

function Hero() {
  return (
    <div className="hero" id='Hero'>
        <div className="hero-holder">
            <div className="hero-left-side">
                <SectionTitle text={`Welcome to my Web site`} />
                <SectionText text={'My name is Stefan Pusica, I am 24 years old and I am from Belgrade. I deal with frontend development and design for the needs of the projects I have worked on.'} />
                <ButtonMultyColor buttonText={'Detalis'} />
            </div>
            <div className="hero-right-side">
              <HeroAnimation className="heroAnimation" />
            </div>
        </div>
    </div>
  )
}

export default Hero