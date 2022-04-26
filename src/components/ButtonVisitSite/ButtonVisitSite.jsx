import React from 'react'
import './ButtonVisitSite.css'

function ButtonVisitSite({buttonText, linkTo}) {
  return (
    <a className='ButtonVisitSite' href={linkTo }>{buttonText}</a>
  )
}

export default ButtonVisitSite