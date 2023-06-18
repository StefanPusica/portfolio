import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import images from "../constants/images";
import { fab as brandIcons } from "@fortawesome/free-brands-svg-icons";
import { faPalette, faDatabase } from "@fortawesome/free-solid-svg-icons";

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [portfolioItems, setPortfolioItems] = useState([
    {
      id: 1,
      logo: `${images.brakumLogo}`,
      subject: "Brakum",
      aboutEng:
        "One page presentational web site. The main purpose was to bring activity and services of car-fleeting and operating leases to users. Design of the project was done in Figma. The site was made in React. Sending and receiving Email is done using the EmailJS plugin.",
      about:
        "Jednostranični prezentacioni web sajt čija je svrha približiti korisnicima delatnost i usluge car-fleeta i operativnog lizinga. Dizajn projekta rađen je u Figmi. Sajt je izrađen pomoću React-a. Slanje i primanje Emaila realizovano je pomoću dodatka EmailJS.",
      technologies: "React",
      mockup: `${images.BrakumMockup}`,
      siteUrl: "http://brakum.rs/",
      showCardDetalis: false,
    },
    {
      id: 2,
      logo: `${images.cottoLogo}`,
      subject: "Cotto",
      aboutEng:
        "One page presentational web site for restaurant in Belgrade. Design was implemented on Figma. Interaction with Email is realised by extension EmailJS, interaction with WhatsApp is realised with ReactWhatsApp.  The site was made in React. ",
      about:
        "Jednostranični prezentacioni web sajt jednog beogradskog restorana. Rađen po ugledu na figma dizajn. Zbog mnoštva detalja, interakcija sa Email-om realizovana je pomoću doadtka EmailJS, dok je interakciju sa WhatsApp-om zadužen ReactWhatsApp dodatak. Sajt je urađen pomoću React-a.",
      technologies: "React",
      mockup: `${images.CottoMockup}`,
      siteUrl: "https://gotgotit.netlify.app/",
      showCardDetalis: false,
    },
    {
      id: 3,
      logo: `${images.marasCoastLogo}`,
      subject: "Maras Coast",
      aboutEng:
        "Multipage web site with the purpose of promoting a tourist accommodation. The site was made in React.",
      about:
        "Višestranični prezentacioni sajt čija svrha promocija turističkog smeštaja. Sajt je urađen pomoću React-a.",
      technologies: "React",
      mockup: `${images.MarasMockup}`,
      siteUrl: "https://marascoast.com/",
      showCardDetalis: false,
    },
    // {
    //   id: 4,
    //   logo: `${images.tbeautyLogo}`,
    //   subject: "TBeauty",
    //   aboutEng:
    //     "Multipage web site for a beauty salon which is not fully completed. Technologies used HTML, CSS, JavaScript.",
    //   about:
    //     "Višestranični prezentacioni sajt salona lepote koji nije u potpunosti završen. Rađen je po ugledu lično kreirani dizajn u tehnologijama HTML, CSS i JavaScript.",
    //   technologies: "HTML, CSS, JavaScript",
    //   mockup: `${images.TbeautyMockup}`,
    //   siteUrl: "https://tbeauty.netlify.app/",
    //   showCardDetalis: false,
    // },
  ]);

  const [skills, setSkills] = useState([
    {
      techIcon: brandIcons.faReact,
      techSubject: "Frontend",
      techSubjectSR: "Frontend",
      techSkills: [
        "HTML",
        "CSS",
        "Sass",
        "Bootstrap",
        "Tailwind",
        "JavaScript",
        "React",
        "Wordpress",
        "Woocommerce",
        "Elementor",
      ],
    },
    {
      techIcon: faDatabase,
      techSubject: "Database",
      techSubjectSR: "Baza Podataka",
      techSkills: ["Firebase"],
    },
    {
      techIcon: faPalette,
      techSubject: "Design",
      techSubjectSR: "Dizajn",
      techSkills: ["Photoshop", "Figma"],
    },
  ]);

  const [portfolioFlagItem, setPortfolioFlagItem] = useState({
    itemReady: {},
    edit: false,
  });

  // Set item to be updated
  const showDetalis = (itemReady) => {
    setPortfolioFlagItem({
      itemReady,
      edit: true,
    });
  };

  // Close Detalis
  const closeDetalis = () => {
    setPortfolioFlagItem({
      itemReady: {},
      edit: false,
    });
  };

  // //////////////
  // Translate

  const [english, setEnglish] = useState(true);

  const setLanguange = () => {
    setEnglish(!english);
  };

  return (
    <PortfolioContext.Provider
      value={{
        portfolioItems,
        portfolioFlagItem,
        skills,
        english,
        showDetalis,
        closeDetalis,
        setLanguange,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContext;
