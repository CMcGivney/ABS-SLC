import React from 'react'
import { TwitterTimelineEmbed, TwitterFollowButton, } from 'react-twitter-embed';
import {Container} from 'semantic-ui-react'

const Twitter = () => (
  <Container style={{margin: "0 1em 0 1em"}}>
     <TwitterFollowButton
       screenName={'ABSSeafoodSF'}
     />
     <TwitterTimelineEmbed
        sourceType="profile"
        screenName="ABSSeafoodSF"
        options={{height: "38em", width: "30em"}}
        sameSite='none'
     />
  </Container>
)

export default Twitter