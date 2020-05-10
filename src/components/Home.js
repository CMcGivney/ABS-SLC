import React from 'react'
import {Header, Button} from 'semantic-ui-react'
import Twitter from './Twitter.js'

function alertBox(){
   alert('You are leaving the SLC ABS Seafood page, prices and availability may vary.\n Please contact your regional sales representative for current pricing')

}
const Home = () => (
 <>
  <div className="titleBox">
   <div className="title">
    <Header.Content className="mainHeader" as="h1" style={{margin: "0 0 0 0"}}>ABS Seafood</Header.Content>
    <Header.Content as="h2" className="motto" style={{margin: ".4em 0 0 0"}}>Salt Lake City, Utah</Header.Content>
   </div>
  </div>
  <div className="homeContentGrid ">
     <div className='about'>
      <Header.Content as="h3" >Mission Statement or List of Services?</Header.Content>
      <Header.Content as="p">Do we want to link to the ABS Market?</Header.Content>
      <Button
      onClick={() => alertBox()}
      href="https://www.absseafood.com/shop"
      >ABS SF Market</Button>
      <Header.Content as="p">Prices and availability may change. Contact your regional sales representative</Header.Content>
     </div>
     <div className='col-2'>
     <Header.Content as="h3" >List of Accomplishments and/or Reviews? </Header.Content>
      </div>
      <div className='col-3'>
      <Twitter/>
     </div>
   </div>
  
</>
)



export default Home;