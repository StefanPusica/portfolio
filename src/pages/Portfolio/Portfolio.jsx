import React, { useState, useContext, useEffect } from 'react';
import PortfolioContext from '../../context/PortfolioContext'
import './Portfolio.css'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { FaSortUp, FaTimes } from "react-icons/fa";
import images from '../../constants/images'
import ButtonMultyColor from '../../components/ButtonMultyColor/ButtonMultyColor';





function Portfolio() {
  const {portfolioItems, showDetalis, portfolioFlagItem, closeDetalis} = useContext(PortfolioContext)

  // useEffect(() => {
  //   if (portfolioFlagItem.edit === true) {}
  // }, [portfolioFlagItem])

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
                                            <p className='portfolio-card-text'>{portfolioFlagItem.itemReady.about}</p>
                                            <h3 className='portfolio-card-technologies-title'>Technologies</h3>
                                            <p className='technologies-list'>{portfolioFlagItem.itemReady.technologies}</p>
                                            <div className="portfolio-card-detalis-right-side-button">
                                                <ButtonMultyColor buttonText={'Visit Site'} />
                                            </div>
                                        </div>
                                        
                                        <div className="card-close">
                                            <FaTimes fill='#D1DFED' size={'3rem'} className='card-close-icon' onClick={() => closeDetalis([])} />
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