import React from 'react'
import {Header,} from 'semantic-ui-react'
import ContactForm from '../components/ContactForm.js'

const Contact = () => (
  <>
   <div className='contactTitle'>
    <Header.Content as="h1" className="contactHead">Lets Connect</Header.Content>
    <Header.Content as="h4" className="contactMeta" style={{"fontStyle":"italic"}}>* contact us for current market prices *</Header.Content>
   </div>
   <div className="contactContainer">
    <div className="contactForm">
     <ContactForm/>
    </div>
   </div>
  </>
)

export default Contact;