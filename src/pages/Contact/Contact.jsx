import { useState, useContext  } from 'react';
import emailjs from  'emailjs-com'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { toast } from 'react-toastify'
import ButtonMultyColor from '../../components/ButtonMultyColor/ButtonMultyColor';

import './Contact.css'
import PortfolioContext from '../../context/PortfolioContext';

function Contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const {english} = useContext(PortfolioContext)


  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_fuea566', 'template_a3aj4lm', e.target, 'uZbu_lErRf4nDiUmS')
      .then((result) => {
          toast.success('Vaša poruka je uspešno poslata!')
          setName('')
          setEmail('')
          setSubject('')
          setMessage('')
          
      }, (error) => {
        console.log("error", error)
        toast.error('Došlo je do greške, molimo pokušajte ponovo')
      });
      e.target.reset()
  }

  

  return (
    <div className='contact' id='Contact'>
        <div className="contact-holder">
            <SectionTitle text={english ? 'Contact' : 'Kontakt'} />
            <form onSubmit={sendEmail}>
                <input type='text' name='name' placeholder={english ? 'Name' : 'Ime'} required />
                <input type='email' name='email' placeholder={'Email'} required  />
                <input type='text' name='subject' placeholder={english ? 'Subject' : 'Naslov'} required />
                <textarea type='text' placeholder={english ? 'Message' : 'Tekst Poruke'} name='message' required />
                <ButtonMultyColor buttonType={'submit'} buttonText={english ? 'Send' : 'Pošalji'} className='contact-button'></ButtonMultyColor>
            </form> 
        </div>
    </div>
  )
}

export default Contact