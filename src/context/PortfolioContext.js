import { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
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
            aboutEng: 'Onepage presentation web site, which the main purpose bring it closer to users activity and services car-fleeting and operating leases.First, the design of the project was done in Figma, after which project development could begin. Sending and receiving Email is done using the EmailJS plugin ',
            about: 'Jednostranični prezentacioni web sajt čija je glavna svrha približiti korisnicima delatnost i usluge car-fleeta i operativnog lizinga. Prvo je urađen dizajn celokupnog projekta u Figmi, nakon čeka je izrada projekta mogla početi. Slanje i primanje Emaila realizovano je pomoću dodatka EmailJS.',
            technologies: 'React',
            mockup: `${images.BrakumMockup}`,
            siteUrl: 'http://brakum.rs/',
            showCardDetalis: false
        },
        {
            id: 2,
            logo: `${images.cottoLogo}`,
            subject: 'Cotto',
            aboutEng: 'Onapage presentation web site one Belgrade restaurant. Made in the image of Figma design. Because a lot of detalis the project is dominated by CSS. Interaction with Email is realised by extension EmailJS, interaction with WhatsApp is realised with ReactWhatsApp',
            about: 'Jednostranični prezentacioni web sajt jednog beogradskog restorana. Rađen po ugledu na figma dizajn. Zbog mnoštva detalja, projektom obiluje CSS. Interakcija sa Email-om realizovana je pomoću doadtka EmailJS, dok je interakciju sa WhatsApp-om zadužen ReactWhatsApp dodatak.',
            technologies: 'React',
            mockup: `${images.CottoMockup}`,
            siteUrl: 'https://cotto-update.netlify.app/',
            showCardDetalis: false
        },
        {
            id: 3,
            logo: `${images.marasCoastLogo}`,
            subject: 'Maras Coast',
            aboutEng: 'The project made in the image of already done Photoshop design. Multipage web site which the main purpose promotion tourist destination.',
            about: 'React projekat rađen po ugledu na već gotov Photoshop dizajn. Višestranični prezentacioni sajt čija je glavna svrha promocija turističke destinacije.',
            technologies: 'React',
            mockup: `${images.MarasMockup}`,
            siteUrl: 'https://marascoast.com/',
            showCardDetalis: false
        },
        {
            id: 4,
            logo: `${images.tbeautyLogo}`,
            subject: 'TBeauty',
            aboutEng: 'Multipage web site beautz salon which is not fully completed. The project made in image on self create design in technologies HTML, CSS and JavaScript.',
            about: 'Višestranični prezentacioni sajt salona lepote koji nije u potpunosti završen. Rađen je po ugledu lično kreirani dizajn ali u tehnologijama HTML, CSS i JavaScript. ',
            technologies: 'HTML, CSS, JavaScript',
            mockup: `${images.TbeautyMockup}`,
            siteUrl: 'https://tamara-beauty-update.netlify.app/index.html',
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

    // //////////////
    // Translate

    const [english, setEnglish] = useState(true)

    const setLanguange = () => {
        setEnglish(!english)
    }


    return <PortfolioContext.Provider value={{
        portfolioItems,
        portfolioFlagItem,
        skills,
        english,
        showDetalis,
        closeDetalis,
        setLanguange
        
    }}>
        {children}
    </PortfolioContext.Provider>
}

export default PortfolioContext;