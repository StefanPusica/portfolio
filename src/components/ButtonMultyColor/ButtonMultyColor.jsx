import './ButtonMultyColor.css'

function ButtonMultyColor({buttonText, buttonType}) {
  return (
    <button type={buttonType}>{buttonText}</button>
  )
}

export default ButtonMultyColor