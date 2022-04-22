import SectionTitle from '../../components/SectionTitle/SectionTitle'
import './Contact.css'

function Contact() {
  return (
    <div className='contact' id='Contact'>
        <div className="contact-holder">
            <SectionTitle text={'Contact'} />
            <form>
                <input type='text' name='name' placeholder='Name' required />
                <input type='email' name='email' placeholder='Email' required  />
                <input type='text' name='subject' placeholder='Subject' required />
                <textarea type='text' placeholder='Message' name='message' required />
                <button type='submit' className='contact-button'>Send</button>
            </form> 
        </div>
    </div>
  )
}

export default Contact