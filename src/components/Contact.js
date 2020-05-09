import React from 'react'
import {Header,} from 'semantic-ui-react'
import ContactForm from './ContactForm.js'
import NavBar from '../components/NavBar'

const Contact = () => (
  <>
  <NavBar/>
   <div className='contactTitle'>
    <Header.Content as="h1" className="contactHead">Lets Connect</Header.Content>
    <Header.Content as="h4" className="contactMeta">*contact us for current pricing</Header.Content>
   </div>
   <div className="contactContainer">
    <div className="contactForm">
     <ContactForm/>
    </div>
   </div>
  </>
)

export default Contact;