import React from 'react'
import {Header,} from 'semantic-ui-react'
import Twitter from './Twitter.js'
//live.websites.hibu.com.

const Home = () => (
 <>
  <div className="titleBox">
   <div className="title">
    <Header.Content className="mainHeader" as="h1" style={{margin: "0 0 0 0"}}>Park City Sip & Stir</Header.Content>
    <Header.Content as="h5" className="motto" style={{margin: ".4em 0 0 0"}}>"Motto or Mission Statement"</Header.Content>
   </div>
  </div>
  <div className="homeContentGrid ">
     <div className='about'>
      <Header.Content as="h3" >Mission Statement or List of Services</Header.Content>
      <Header.Content as="p">"author of mission statement or additional content"</Header.Content>
     </div>
     <div className='col-2'>
     <Header.Content as="h3" >List of Accomplishments and/or Reviews </Header.Content>
      </div>
      <div className='col-3'>
      <Twitter/>
     </div>
   </div>
  
</>
)



export default Home;