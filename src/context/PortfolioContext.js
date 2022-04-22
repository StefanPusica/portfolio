import { createContext, useState } from 'react'
import axios from 'axios'
import fileDownload from '../assets/cv/CV.pdf'
import images from '../constants/images'
import { fab as brandIcons } from '@fortawesome/free-brands-svg-icons';
import { faPalette, faDatabase } from "@fortawesome/free-solid-svg-icons";

const PortfolioContext = createContext()

export const PortfolioProvider = ({children}) => {
    const [portfolioItems, setPortfolioItems] = useState([
        {
            id: 1,
            logo: `${images.brakumLogo}`,
            subject: 'Brakum',
            about: 'Onepage presentation web site, which the main purpose bring it closer to users activity and services car-fleeting and operating leases.First, the design of the project was done in Figma, after which project development could begin.',
            technologies: 'React',
            mockup: `${images.BrakumMockup}`,
            showCardDetalis: false
        },
        {
            id: 2,
            logo: `${images.cottoLogo}`,
            subject: 'Cotto',
            about: 'Onapage presentation web site one Belgrade restaurant. Made in the image of Figma design. Because a lot of detalis the project is dominated by CSS. Interaction with Email is realised by extension EmailJS, interaction with WhatsApp is realised with ReactWhatsApp',
            technologies: 'React',
            mockup: `${images.CottoMockup}`,
            showCardDetalis: false
        },
        {
            id: 3,
            logo: `${images.marasCoastLogo}`,
            subject: 'Maras Coast',
            about: 'The project made in the image of already done Photoshop design. Multipage web site which the main purpose promotion tourist destination.',
            technologies: 'React',
            mockup: `${images.MarasMockup}`,
            showCardDetalis: false
        },
        {
            id: 4,
            logo: `${images.tbeautyLogo}`,
            subject: 'TBeauty',
            about: 'Multipage web site beautz salon which is not fully completed. The project made in image on self create design in technologies HTML, CSS and JavaScript.',
            technologies: 'HTML, CSS, JavaScript',
            mockup: `${images.TbeautyMockup}`,
            showCardDetalis: false
        }
    ])

    const [skills, setSkills] = useState([
        {
            techIcon: brandIcons.faReact,
            techSubject: 'Frontend',
            techSkills: [
                'HTML',
                'CSS',
                'Sass',
                'JavaScript',
                'React'
            ]  
        },
        {
            techIcon: faDatabase,
            techSubject: 'Database',
            techSkills: [
                'Firebase',
                'MongoDB'
            ]  
        },
        {
            techIcon: faPalette,
            techSubject: 'Design',
            techSkills: [
                'Photoshop',
                'Figma',
            ]  
        }
    ])

    const [portfolioFlagItem, setPortfolioFlagItem] = useState({
        itemReady: {},
        edit: false
    })

    // Set item to be updated
    const showDetalis = (itemReady) => {
        setPortfolioFlagItem({
            itemReady,
            edit: true
        })
    }

    // Close Detalis
    const closeDetalis = () => {
        setPortfolioFlagItem({
            itemReady: {},
            edit: false
        })
    }


    return <PortfolioContext.Provider value={{
        portfolioItems,
        portfolioFlagItem,
        skills,
        showDetalis,
        closeDetalis
        
    }}>
        {children}
    </PortfolioContext.Provider>
}

export default PortfolioContext;