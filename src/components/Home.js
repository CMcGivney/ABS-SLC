import React from 'react'
import {Header, Image, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import Tuna from '../images/tunaOcean.jpg'
import Slab from '../images/TunaSlab.jpeg'
import PhishBox from '../images/packaging-scaled.jpg'
import { Parallax,} from 'react-parallax';
import SLCMTNS from "../images/salt-lake-city2.jpg"

const insideStyles = {
   background: "#A8D6EB",
   padding: 20,
   position: "absolute",
   top: "55%",
   left: "50%",
   transform: "translate(-50%,-50%)",
   borderRadius: "50%",
   height: '20rem',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center'
 };

const Home = () => (
 <>
 
    <Parallax
      bgImage={SLCMTNS}
      bgImageAlt="SLC Mountains covered in snow"
      strength={-300}
       >
        <div className="titleBox" >
         <div style={insideStyles}>
          <Header.Content className="mainHeader" as="h1" style={{margin: "0 0 0 0"}}>ABS Seafood</Header.Content>
          <Header.Content as="h2" className="motto" style={{margin: ".4em 0 0 0"}}>Salt Lake City, Utah</Header.Content>
         </div>
        </div>
   </Parallax>

  <div className="homeContentGrid ">
     <div className='missionStatement'>
      <Header.Content as="h2" style={{padding: "1rem"}} >"Bringing the quality that is expected in the finest restaurants in the Bay Area, here to Utah."</Header.Content>
      <Header.Content as="h4">~ Our Promise & Commitment ~</Header.Content>
     </div>
      <div className='homeContent'>
       <div className='mainImage-1'>
        <Image
         fluid
         src={Tuna}
         />
       </div>
       <div className="mainText">
        <Header.Content as="h1" style={{textAlign: 'center'}}>Quality First Sourcing</Header.Content>
        <Header.Content as="h3" style={{padding: "1rem 2rem"}}>Our seafood are sourced from the best locations around the globe. We also take the extra steps in making sure our suppliers are within our standards in terms of handling and sustainability.</Header.Content>
       </div>
      </div>
      <div className='homeContent'>
       <div className="mainText">
        <Header.Content as="h1" style={{textAlign: 'center'}}>High Standard Processing</Header.Content>
        <Header.Content as="h3" style={{padding: "1rem 2rem"}}>Fishes are processed with the highest standards. Our team is trained to handle seafood properly and are dedicated in maintaining quality so you can enjoy seafood at its finest.</Header.Content>
       </div>
       <div className='mainImage-1'>
        <Image
         fluid
         src={Slab}
         />
       </div>
      </div>
       <div className="specialBanner">
        <Header.Content as="h2" className="bannerHead" >ABS Seafood SLC Specials</Header.Content>
        <Header.Content as="h4" className="bannerMeta">* Now Available Online at 
          <a
           target="_blank"
           rel="noopener noreferrer"
           href="https://comcomkitchen-ghostsushi.square.site/abs-fishbox-slc"
          > ComComKitchen.com 
          </a> *
         </Header.Content>
       </div>
      <div className='homeContent'>
       <div className='mainImage-1'>
        <Image
         fluid
         src={PhishBox}
         />
       </div>
       <div className="mainText">
        <Header.Content as="h1" >
         <a  
           target="_blank"
           rel="noopener noreferrer"
           href="https://comcomkitchen-ghostsushi.square.site/abs-fishbox-slc"
          >
           Seafood Dinner Box 
          </a>
        </Header.Content>
        <Header.Content as="h5" >2 – 6oz <a target="_blank" rel="noopener noreferrer" href="https://www.kvaroyarctic.com/salmon">Kvaroy Premium Arctic Salmon</a> (Hands down the best Salmon I have ever tasted)</Header.Content>
        <Header.Content as="h5" >2 – 6oz Southern California Halibut (Hand line-caught off the coast of Southern California and Baja Mexico)</Header.Content>
        <Header.Content as="h5" >1lbs 16/20 Shrimp (cleaned with tails on)</Header.Content>
        <Header.Content as="h5" >$52.00</Header.Content>
        <a target="_blank"
           rel="noopener noreferrer"
           href="https://comcomkitchen-ghostsushi.square.site/abs-fishbox-slc">
         <Button>Order Now</Button>
        </a>
        
       </div>
    
      </div>
   </div>
  
</>
)



export default Home;