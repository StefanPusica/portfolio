import React, { useContext} from 'react';
import PortfolioContext from '../../context/PortfolioContext'
import './Portfolio.css'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { FaTimes } from "react-icons/fa";
import { HiX } from "react-icons/hi";
// import images from '../../constants/images'
// import ButtonMultyColor from '../../components/ButtonMultyColor/ButtonMultyColor';
import ButtonVisitSite from '../../components/ButtonVisitSite/ButtonVisitSite';


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
        </div>
    </div>
  )
}

export default Portfolio