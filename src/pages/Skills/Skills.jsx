import React from 'react'
import SectionText from '../../components/SectionText/SectionText'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { useContext } from 'react';
import PortfolioContext from '../../context/PortfolioContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Skills.css'

import DownloadCv from './DownloadCV';

function Skills() {

    const {skills} = useContext(PortfolioContext)

  return (
    <div className='skills' id='Skills'>
        <div className="skills-holder">
            <SectionTitle text='Skills' />
            <div className="about-skills">
                <div className="technologies">
                    <SectionText text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'} />
                    <div className="technologies-container">
                        {
                            skills.map(skill => (
                                <div className="tech" key={skill.id}>
                                    <div className="tech-heading">
                                    <FontAwesomeIcon
                                        icon={skill.techIcon}
                                        className='tech-icon'
                                    />
                                        <h2>{skill.techSubject}</h2>
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