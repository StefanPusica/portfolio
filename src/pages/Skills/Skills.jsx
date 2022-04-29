import React from 'react'
import SectionText from '../../components/SectionText/SectionText'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { useContext } from 'react';
import PortfolioContext from '../../context/PortfolioContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Skills.css'

import DownloadCv from './DownloadCV';

function Skills() {
    
    const {skills, english} = useContext(PortfolioContext)

  return (
    <div className='skills' id='Skills'>
        <div className="skills-holder">
            <SectionTitle text={english ? 'Skills' : 'Veštine'} />
            <div className="about-skills">
                <div className="technologies">
                    <SectionText text= {english ? 'My previous learning chapter and working on projects is based on Frontend technologies. In addition, in the near future, I would like to take a peek into the world of Backend.' : 'Moja dosadašnja oblast učenja i rad na projektima bazira se na Frontend tehnologijama. Pored toga, u bliskoj budućnosti voleo bih zaviriti i u svet Backenda.'} />
                    <div className="technologies-container">
                        {
                            skills.map(skill => (
                                <div className="tech" key={skill.id}>
                                    <div className="tech-heading">
                                    <FontAwesomeIcon
                                        icon={skill.techIcon}
                                        className='tech-icon'
                                    />
                                        <h2>{ english ? skill.techSubject : skill.techSubjectSR}</h2>
                                    </div>    
                                    <ul className='tech-list'>
                                        {
                                            skill.techSkills.map((item, index) => (    
                                                <li className='tech-list-item' key={index}>{item}</li>                                            
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>

                </div>
                <div className="resume-holder">
                    <DownloadCv />
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Skills