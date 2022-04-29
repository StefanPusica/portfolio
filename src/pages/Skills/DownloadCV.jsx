import React, { Component, useContext } from 'react';
import PortfolioContext from '../../context/PortfolioContext';
import pdf from '../../assets/cv/PusicaStefan.pdf';
import { FaFileDownload } from "react-icons/fa";

import './DownloadCV.css'

function DownloadCv() {

    const {english} = useContext(PortfolioContext)

    return (
        <div className = "downCV">
          <a className='downloadBtn' href = {pdf} target = "_blank" download>
            {english ? 'Download Resume' : 'Preuzmi CV'}
            <FaFileDownload size={'2rem'} />
          </a>
        </div>
    );

  
}

export default DownloadCv;