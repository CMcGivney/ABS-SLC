import React from 'react'
import {Header, Card,} from 'semantic-ui-react'



const Faq = () => (
  <>
  <div className="faqContainer">
    <Header.Content as="h1" className="faqHead">Frequently Ask Questions</Header.Content>
   <Card.Group className="cardContainer" stackable>
    <Card className="faqCard">
      <Card.Header as='h2' className="cardHead">How does pick-up work?</Card.Header>
      <Card.Meta className="cardMeta">Pick up days are Tuesday and Friday. Place orders with sales representative via email 2 days prior to pickup. Ex. Order Sunday, pick up Tuesday, order Wednesday, pickup Friday. Come to ABS Seafood SLC warehouse after pre arranging pickup time. We will provide ample ice packs, but please bring your own cooler or ice chest to transport your product.</Card.Meta>
    </Card>
    <Card className="faqCard">
      <Card.Header as='h2' className="cardHead">Where do you deliver?</Card.Header>
      <Card.Meta className="cardMeta">Delivery fee ($15) includes door-to-door delivery before 5pm with product packed in gel ice to keep seafood cold. Your order will be delivered Tuesday or Friday depending on which option you prefer. You will receive a text or email when your order is en route.</Card.Meta>
    </Card>
   </Card.Group>
   </div>
  </>
)

export default Faq;