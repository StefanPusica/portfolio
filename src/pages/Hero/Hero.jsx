import React, { useContext } from "react";
import "./Hero.css";
// import Cookies from 'js-cookie'
import PortfolioContext from "../../context/PortfolioContext";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SectionText from "../../components/SectionText/SectionText";
import ButtonMultyColorHref from "../../components/ButtonMultiplyColorHref/ButtonMultiplyColorHref";
import HeroAnimation from "../../components/HeroAnimation/HeroAnimation";

function Hero() {
  const { english } = useContext(PortfolioContext);

  // let cookieValue = Cookies.get('switch') // => 'value'

  return (
    <div className="hero" id="Hero">
      <div className="hero-holder">
        <div className="hero-left-side">
          {/* <SectionTitle text={english ? "Welcome!" : "Dobro došli!"} /> */}
          <SectionText
            text={
              english
                ? ` I'm Stefan Pušica, a frontend developer with 2 years of specialized experience in OTT applications and web development. I’m specialized about building user-friendly and engaging digital solutions. Let's work together to turn your ideas into reality.`
                : `Zovem se Stefan Pušica, frontend programer sa 2 godine iskustva u razvoju OTT aplikacija i web razvoja. Specijalizovan sam za kreiranje korisnički prijatnih i privlačnih digitalnih rešenja. Hajde da zajedno pretvorimo vaše ideje u stvarnost.`
            }
          />
          <ButtonMultyColorHref
            buttonHrefTo={"#Skills"}
            buttonText={english ? "Detalis" : "Detaljnije"}
          />
        </div>
        <div className="hero-right-side">
          <HeroAnimation className="heroAnimation" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
