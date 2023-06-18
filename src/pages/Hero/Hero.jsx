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
          <SectionTitle text={english ? "Welcome!" : "Dobro došli!"} />
          <SectionText
            text={
              english
                ? `I am web developer with over a year of industry experience. Currently, I am employed at MTS sistemi i integracije, where I am involved in the development of one of the most popular OTT(Over-the-top media service) applications in the Balkans.`
                : `Programer sa više od godinu dana radnog iskustva. Trenutno sam zaposlen u MTS sistemi i integracije, gde radim na razvoju jedne od najpopularnijih OTT(Over-the-top media service) aplikacija na Balkanu.`
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
