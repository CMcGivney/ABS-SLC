import React from 'react'
import {Header, Card,} from 'semantic-ui-react'



const Faq = () => (
  <>
  <div className="faqContainer">
    <Header.Content as="h1" className="faqHead">Frequently Ask Questions</Header.Content>
   <Card.Group className="cardContainer" stackable>
    <Card className="faqCard">
      <Card.Header as='h2' className="cardHead">How does pick-up work?</Card.Header>
      <Card.Meta className="cardMeta">Available at ABS Seafood warehouse on Monday-Friday. Orders will be ready on the next operating day.  Pick-up hours between 10:30 am - 12:30 pm. ABS will provide ample ice but please bring your own cooler or ice chest to transport your order</Card.Meta>
    </Card>
    <Card className="faqCard">
      <Card.Header as='h2' className="cardHead">Where do you deliver?</Card.Header>
      <Card.Meta className="cardMeta">Delivery fee includes door-to-door delivery before 5 pm and a cooler box with gel ice to keep your order cold.  Your order will be delivered the next operating day. You will receive an email confirmation when your order is out for delivery </Card.Meta>
    </Card>
   </Card.Group>
   </div>
  </>
)

export default Faq;