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
               <p style={{fontSize:"1rem"}}>Regional Sales Manager</p>
            </Header.Content>
          <h4>phone:<a className="email emailBox" href="tel:+1-858-531-6728">1-(858)-531-6728</a></h4>
           </div>
          <div className='bizAddress'>
            <Header.Content>
            <a className="email" href="https://www.google.com/maps/place/67+W+1700+S,+Salt+Lake+City,+UT+84115/@40.7335027,-111.8955317,17z/data=!3m1!4b1!4m5!3m4!1s0x8752f52d54f48d85:0xad519ab8427c7144!8m2!3d40.7335027!4d-111.893343">67 West 1700 South SLC, UT 84104</a>
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