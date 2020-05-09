import React from 'react'
import { withRouter} from 'react-router-dom'
import {Form, } from 'semantic-ui-react'
import emailjs from 'emailjs-com'
require('dotenv').config()


class ContactForm extends React.Component {
  state = {
           name: '',
           email: '',
           dates: '',
           message: '',
           numGuests: 0,
  }


  resetForm() {
    this.setState({
      name: '',
      email: '',
      dates: 'mm/dd/yyyy',
      message: '',
      numGuests: 0,
    })
    alert("Message Sent")
    this.props.history.push("/")
  }
  

 
handleChange = (e) => {
  this.setState({ [e.target.name]: e.target.value, })
}

handleSubmit = (e) => {
  e.preventDefault();
 const {name, email, dates, numGuests, message} = this.state

 let templateParams = {
  from_name: name,
  from_email: email,
  to_name: 'stanbattle@gmail.com',
  date_event: dates,
  num_guests: numGuests,
  message_html: message,
 }

 emailjs.send('stanbattle@gmail.com', "template_G85KdgEv", templateParams, "user_8MVNXasymY2fplvCKCOlQ"
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