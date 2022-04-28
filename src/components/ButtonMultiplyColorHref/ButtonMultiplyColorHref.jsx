import './ButtonMultiplyColorHref.css'

function ButtonMultiplyColorHref({buttonText, buttonHrefTo}) {
  return (
    <a className='ButtonMultiplyColorHref' href={buttonHrefTo}>{buttonText}</a>
  )
}

export default ButtonMultiplyColorHref