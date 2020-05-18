import React from 'react'
import { withRouter} from 'react-router-dom'
import {Form, } from 'semantic-ui-react'
import emailjs from 'emailjs-com'
require('dotenv').config()


class ContactForm extends React.Component {
  state = {
           name: '',
           email: '',
           message: '',
  }


  resetForm() {
    this.setState({
      name: '',
      email: '',
      message: '',
    })
    alert("Message Sent")
    this.props.history.push("/")
  }
  

 
handleChange = (e) => {
  this.setState({ [e.target.name]: e.target.value, })
}

handleSubmit = (e) => {
  e.preventDefault();
 const {name, email, message} = this.state

 let templateParams = {
  from_name: name,
  from_email: email,
  to_name: 'Stan Battle',
  message_html: message,
 }

 emailjs.send('stanbattle15_gmail_com', "template_BP9yPyTn", templateParams, "user_JinG5bR4RRbrs0CgSIRDD"
   ).then((response) => {
   console.log('SUCCESS!', response.status, response.text);
   }, (err) => {
    console.log('FAILED...', err);
   })
 this.resetForm()
}



  render() {
   return(
   
      <Form onSubmit={this.handleSubmit}>
      {/* <Header.Content as="h3" className="">Elysian Catering</Header.Content> */}
        <Form.Group>
         <Form.Input
         placeholder= "Name"
         label="Name"
         name="name"
         onChange={this.handleChange}
         value={this.state.name}
         required
         />
         <Form.Input
         placeholder= "Email"
         label="Email"
         name="email"
         onChange={this.handleChange}
         value={this.state.email}
         required
         />
         </Form.Group>
         <Form.Group>
        {/* <Form.Input
         name="dates"
         label="Date of Event"
         type="date"
         value={this.state.date}
         onChange={this.handleChange}
         required
         >
         </Form.Input> */}
        {/* <Form.Input
         name="numGuests"
         label="Number of Guests"
         type="number"
         value={this.state.numGuests}
         onChange={this.handleChange}
         required
         >
         </Form.Input> */}
         </Form.Group>
         <Form.TextArea
         placeholder= "Message"
         label="Message"
         name="message"
         size="medium"
         onChange={this.handleChange}
         value={this.state.message}
         required
         />
         <Form.Button color="green">Submit</Form.Button>
       
      </Form>

    )
    }
  }
  

export default withRouter(ContactForm)