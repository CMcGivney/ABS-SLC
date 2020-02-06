import React from 'react'
import {Image, Header} from "semantic-ui-react"
// import MenuImg from "../Images/Menu.jpeg"
// import Grams from './grams'

const Services = () => (
 <>
<div className="servicesGrid">
 <Header.Content as="h1" className="service-header">Services We Provide</Header.Content>
  <div className="services-col-1">
    <Header.Content as="h4">
           Wine Classes
    </Header.Content>
    <Header.Content as="h4">
           Cocktail Classes
    </Header.Content>
    <Header.Content as="h4">
           Wine & Cheese Classes
    </Header.Content>
  </div>
  <div className="services-col-2">
    <Header.Content as="h4">
          In Home Cocktail & Wine Service
    </Header.Content>
    <Header.Content as="h4">
          In Home Wine Pairing with Hidden Peak Catering
    </Header.Content>
    <Header.Content as="h4">
          In Home Cocktail & Wine Service
    </Header.Content>
  </div>
</div>
 </>
)

export default Services;