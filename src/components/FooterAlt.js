import React from 'react'
import {Header,} from 'semantic-ui-react'
import SocialFollow from './SocialFollows'

class Footer extends React.Component {

 
  render() {
    return (
        <>
        <div className="footerGrid">
          <div className='mainFooter'>Park City Sip & Stir
          </div>
          <div className='phoneNum'>
            <Header.Content>
              <a className="email" href="tel:+1-301-992-7829">1-(301)-992-7829</a>
            </Header.Content>
           </div>
          <div className='bizAddress'>
            <Header.Content>
            business address here
            </Header.Content>
           </div>
          <div className='emailBox'>
         
              <a className="email" href="mailto:SeanPalmer@gmail.com">SeanPalmer@gmail.com</a>
            
         </div>
          <div className='socialFollows'>
            <Header.Content>
             <SocialFollow/>
            </Header.Content>
          </div>
          <div className="poweredBy">
            <Header.Content>
              Powered by: <a className="email" href="https://chris-portfo.herokuapp.com/">84Creations</a>
             </Header.Content>
          </div>
        </div>

        </>
    )
    }
  }
    export default Footer