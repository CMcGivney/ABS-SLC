import React from 'react'
import {Header, Image} from 'semantic-ui-react'
import Tuna from '../images/tunaOcean.jpg'
import Slab from '../images/TunaSlab.jpeg'
import Twitter from './Twitter.js'


const Home = () => (
 <>
  <div className="titleBox">
   <div className="title">
    <Header.Content className="mainHeader" as="h1" style={{margin: "0 0 0 0"}}>ABS Seafood</Header.Content>
    <Header.Content as="h2" className="motto" style={{margin: ".4em 0 0 0"}}>Salt Lake City, Utah</Header.Content>
   </div>
  </div>
  <div className="homeContentGrid ">
     <div className='missionStatement'>
      <Header.Content as="h2" style={{padding: "1rem"}} >"Bringing the quality that is expected in the finest restaurants in the Bay Area, here to Utah."</Header.Content>
      <Header.Content as="h4">~ABS Seafood Salt Lake City Promise~</Header.Content>
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
        <Header.Content as="h3" style={{padding: "1rem"}}>Our seafood are sourced from the best locations around the globe. We also take the extra steps in making sure our suppliers are within our standards in terms of handling and sustainability.</Header.Content>
       </div>
      </div>
      <div className='homeContent'>
       <div className="mainText">
        <Header.Content as="h1" style={{textAlign: 'center'}}>High Standard Processing</Header.Content>
        <Header.Content as="h3" style={{padding: "1rem"}}>Fishes are processed with the highest standards. Our team is trained to handle seafood properly and are dedicated in maintaining quality so you can enjoy seafood at its finest.</Header.Content>
       </div>
       <div className='mainImage-1'>
        <Image
         fluid
         src={Slab}
         />
       </div>
      </div>
   </div>
  
</>
)



export default Home;