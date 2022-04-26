import { useState, useEffect, useContext } from 'react'
import './SwitchToggleButton.css';
import Cookies from 'js-cookie'
import PortfolioContext from '../../context/PortfolioContext'
// import UseSetCookie from '../../hooks/UseSetCookie'
// import UseGetCookie from '../../hooks/UseGetCookie'
// import UseRemoveCookie from '../../hooks/UseRemoveCookie'

function SwitchToggleButton() {

  // Bez Coocki-a
  const {setLanguange} = useContext(PortfolioContext)

  const onChange = () => {
    setLanguange()
  }


  // Cookie
  // Cookies.set('switch', '', { expires: 7 })

  // const onChange = () => {

  //   let cookieValue = Cookies.get('switch') // => 'value'

  //   Cookies.set('switch', false, { expires: 7 })

  //   if (cookieValue === '') {
  //     Cookies.set('switch', true, { expires: 7 })
  //   } else if (cookieValue === 'true') {
  //     Cookies.set('switch', false, { expires: 7 })
  //   } else if (cookieValue === 'false') {
  //     Cookies.set('switch', true, { expires: 7 })
  //   }
  // }
  
 
  return (
    <div>
        <label className='switch'>
              <input 
                type="checkbox"
                onChange={onChange}
              />
              <span className='slider'></span>
        </label>
    </div>
  )
}

export default SwitchToggleButton