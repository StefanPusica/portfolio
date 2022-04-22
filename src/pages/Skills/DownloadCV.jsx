import React, { Component } from 'react';
import pdf from '../../assets/cv/CV.pdf';
import { FaFileDownload } from "react-icons/fa";

import './DownloadCV.css'

class DownloadCv extends Component {

  render() {

    return (
        <div className = "downCV">
          <a className='downloadBtn' href = {pdf} target = "_blank" download>
            Download Resume
            <FaFileDownload size={'2rem'} />
          </a>
        </div>
    );

  }
}

export default DownloadCv;