import React from 'react'
import {Header,} from 'semantic-ui-react'
import SocialFollows from './SocialFollows'


const Contact = () => (
 <>
    {/* <Header.Content as='h1' className="conHeader">The Elysian Catering Company</Header.Content> */}
      <div className="contactGrid"> 
      <div className="emailBox">
        <Header as="h3" className="contactHead">Drop Us A Email</Header>
        <a className="email" href="mailto:asuntagaribay18@gmail.com">AsuntaGaribay18@gmail.com</a>
      </div>
    
     <div className="socialFollows">
       <Header.Content as="h3" >
        Lets Connect
       </Header.Content>
      <SocialFollows/>
     </div>
     <div className='phoneNum'>
       <Header.Content as="h3" >
        Call Us
       </Header.Content>
       <Header.Content as='h4'>
        <a className="email" href="tel:+1-385-368-3525">1-(385)-368-3525</a>
       </Header.Content>
     </div>
  </div>
 </>
)

export default Contact;