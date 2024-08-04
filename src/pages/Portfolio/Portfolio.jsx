import React, { useContext} from 'react';
import PortfolioContext from '../../context/PortfolioContext'
import './Portfolio.css'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import SectionText from '../../components/SectionText/SectionText';
import Subtitle from '../../components/Subtitle/Subtitle'
import { FaTimes } from "react-icons/fa";
import { HiX } from "react-icons/hi";
// import images from '../../constants/images'
// import ButtonMultyColor from '../../components/ButtonMultyColor/ButtonMultyColor';
import ButtonVisitSite from '../../components/ButtonVisitSite/ButtonVisitSite';
import images from "../../constants/images";


function Portfolio() {
  const {portfolioItems, showDetalis, portfolioFlagItem, closeDetalis} = useContext(PortfolioContext)

  // useEffect(() => {
  //   if (portfolioFlagItem.edit === true) {}
  // }, [portfolioFlagItem])

  const {english} = useContext(PortfolioContext)

  return (
    <div className="portfolio" id='Portfolio'>
        <div className="portfolio-holder">
            <SectionTitle text={`Portfolio`} />
            <Subtitle text={"Web site development"} />
            <div className='portfolio-projects'>
                {
                    portfolioItems.map((item => (
                        <ul key={item.id}>
                            <li className='portfolio-card' onClick={() => showDetalis(item)}>
                                <img src={item.logo} alt='logo' />
                            </li>

                            {
                                portfolioFlagItem.edit && (
                                    <div className='portfolio-card-detalis'>
                        
                                        {/* <div className='triangle'>
                                            <FaSortUp fill='#3C4E8C' size={'5rem'} className='card-triangle-icon' />
                                        </div> */}
                                        <div className="portfolio-card-detalis-left-side">
                                            <img src={portfolioFlagItem.itemReady.mockup} alt="mockup" />
                                        </div>
                                        <div className="portfolio-card-detalis-right-side">
                                            <h2 className='portfolio-card-title'>{portfolioFlagItem.itemReady.subject}</h2>
                                            <p className='portfolio-card-text'>{
                                                english ? portfolioFlagItem.itemReady.aboutEng : portfolioFlagItem.itemReady.about
                                            }</p>
                                            <h3 className='portfolio-card-technologies-title'>{english ? 'Technologies' : 'Tehnologije'}</h3>
                                            <p className='technologies-list'>{portfolioFlagItem.itemReady.technologies}</p>
                                            <div className="portfolio-card-detalis-right-side-button">
                                                <ButtonVisitSite linkTo={portfolioFlagItem.itemReady.siteUrl} buttonText={english ? 'Visit Site' : 'Poseti Sajt'} />
                                            </div>
                                        </div>
                                        
                                        <div className="card-close">
                                            <HiX fill='#D1DFED' size={'2rem'} className='card-close-icon' onClick={() => closeDetalis([])} />
                                        </div>
                                    </div>
                                    
                                ) 
                            }
                        </ul>
                    )))
                }
            </div>
            <Subtitle text={`Software development for Streaming/OTT platfrom`} />
            <div className='portfolio-ott'>
                <div className='portfolio-ott-left'>
                    <img src={images.moveLogo}></img>
                    <SectionText
                        text={
                            english ? `Over the past two years, I have dedicated my expertise to frontend development for Over-The-Top (OTT) applications, creating seamless and engaging user experiences. My journey has involved designing intuitive interfaces, implementing robust functionalities, and ensuring compatibility across various devices (ATV, Tizen, webOS, vidaa, Roku).`
                            : `Tokom protekle dve godine, posvetio sam svoje znanje razvoju frontenda za Over-The-Top (OTT) aplikacije, stvarajući besprekorno i privlačno korisničko iskustvo. Moje putovanje uključivalo je dizajniranje intuitivnih interfejsa, implementaciju robusnih funkcionalnosti i obezbeđivanje kompatibilnosti sa različitim uređajima (ATV, Tizen, webOS, vidaa, Roku).`
                        }
                    />
                    <SectionText
                        text={
                            english ? `I have focused on performance optimization and integrating advanced features to enhance user experience. By combining technical proficiency with a keen eye for design, I strive to make high-quality content accessible and enjoyable for audiences worldwide.`
                            : `Fokusirao sam se na optimizaciju performansi i integraciju naprednih funkcija kako bih unapredio doživljaj korisnika. Kombinujući tehničku stručnost sa oštrim okom za dizajn, težim da učinim visokokvalitetni sadržaj dostupnim i prijatnim za publiku širom sveta.`
                        }
                    />
                </div>
                <div className='portfolio-ott-right'>
                    {/* <img src={images.movePlatfrom} alt="" /> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio