import React from 'react'
import {Header, Image,} from 'semantic-ui-react'
// import Festival from '../Images/festival.jpeg'
import Twitter from './Twitter'
// import Grams from './grams'

const Press = () => (
  <>
  <Header.Content as="h1" style={{textAlign: 'center'}}>Upcoming Events</Header.Content>
  {/* <Header.Content as="p">I can put twitter events here but styled better than the scrolling element on the home page or we can use that one here.</Header.Content> */}
  {/* <Image
  src={Festival}
  width="100%"
  
  /> */}
  <br/>
  <div className="twitter">
  <Twitter/>
  </div>
  <br/>
  {/* <div>
    <Grams/>
  </div> */}
  </>
)

export default Press;