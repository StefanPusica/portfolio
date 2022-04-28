import './ButtonMultyColor.css'

function ButtonMultyColor({buttonText, buttonType}) {
  return (
    <button className='ButtonMultyColor' type={buttonType}>{buttonText}</button>
  )
}

export default ButtonMultyColor