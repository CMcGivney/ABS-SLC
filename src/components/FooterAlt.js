import React from 'react'
import {Header,} from 'semantic-ui-react'
import SocialFollow from './SocialFollows'

class Footer extends React.Component {

 
  render() {
    return (
        <>
        <div className="footerGrid">
          <div className='mainFooter'>ABS Seafood Salt Lake City
          </div>
          <div className='phoneNum'>
            <Header.Content as="h3">
               Stan Battle
               <h5>Regional Sales Manager</h5>
            </Header.Content>
          <h4>phone:<a className="email emailBox" href="tel:+1-858-531-6728">1-(858)-531-6728</a></h4>
           </div>
          <div className='bizAddress'>
            <Header.Content>
            67 West 1700 South SLC, UT 84104
            </Header.Content>
           </div>
          <div className='emailBox'>
             <h4>email:  <a className="email" href="mailto:Stan@absseafood.com">Stan@ABSSeafood.com</a></h4>  
         </div>
          <div className='socialFollows'>
            <Header.Content>
             <SocialFollow/>
            </Header.Content>
          </div>
          {/* <div className="poweredBy">
            <Header.Content>
              Powered by: <a className="email" href="https://chris-portfo.herokuapp.com/">84Creations</a>
             </Header.Content>
          </div> */}
        </div>

        </>
    )
    }
  }
    export default Footer