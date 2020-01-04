import React from 'react'
import { TwitterTimelineEmbed, TwitterFollowButton, } from 'react-twitter-embed';
import {Container} from 'semantic-ui-react'

const Twitter = () => (
  <Container>
     <TwitterFollowButton
       screenName={'billy_mallon'}
     />
     <TwitterTimelineEmbed
        sourceType="profile"
        screenName="billy_mallon"
        options={{height: "35em", width: "30em"}}
        sameSite='none'
     />
  </Container>
)

export default Twitter