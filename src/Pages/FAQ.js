import React, {useContext} from "react";
import { Header, Card } from "semantic-ui-react";
import {FAQContext, FAQProvider} from  "../Context/FAQContext.js"

const FaqComponent = () => {
  const {faqs} = useContext(FAQContext);
  return (
  <>
    <div className="faqContainer">
      <div className="faqHead">
        <Header.Content as="h1" className="faqHead">
          Frequently Ask Questions
        </Header.Content>
      </div>
      <Card.Group className="cardContainer" stackable>
       {faqs.map((questions, index) => (
        <Card className="faqCard" key={index}>
          <Card.Header as="h2" className="cardHead">
           {questions.question}
          </Card.Header>
          <Card.Content className="cardMeta">
           {questions.answer}
           {" "}
          </Card.Content>
        </Card>
       ))}
      </Card.Group>
    </div>
  </>
  )
};

const Faq = () => {
  return(
    <FAQProvider>
      <FaqComponent></FaqComponent>
    </FAQProvider>
  )
}

export default Faq;
