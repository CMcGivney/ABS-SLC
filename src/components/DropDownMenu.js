import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Menu, Dropdown, Image, Container} from 'semantic-ui-react'
import Logo from '../images/ABS-White-NoBackground.png'


class DropDownMenu extends React.Component {

  
  render() {
  
    return (
      <>
      <Menu 
        compact 
        size="large" 
        pointing 
        fluid
        fixed="top"
        style={{backgroundColor: "black", boxShadow: "0 2px 2px -2px rgba(0,0,0,.2)"}}>
        <Container className="dropDown" >
           <Link to="/">
           <Menu.Item 
            style={{padding: ".5rem" }} 
            >
            <Image 
              size='tiny' 
              src={Logo} 
              style={{ padding: '0', margin: ".5em" }} />
             </Menu.Item>
             </Link>
              <Dropdown 
                pointing="right"
                icon="bars" 
                item
                style={{ margin: '0', padding: "1rem", color: "white" }} 
                scrolling
                button
                className="menuBars"
                >
                <Dropdown.Menu>
                  <Link to='/'>
                   <Dropdown.Item 
                      name='Home'
                      as='h4'
                      id='home'
                      active={this.props.location.pathname === '/'}>Home
                 </Dropdown.Item>
                 </Link>
               <Link to='/Products'>
                <Dropdown.Item 
                name='Products'
                id='Products'
                as='h4'
                active={this.props.location.pathname === '/Products'}>Products
              </Dropdown.Item>
              </Link>
              <Link to='/Contact'>
              <Dropdown.Item 
                 name='Contact'
                id='Contact'
                active={this.props.location.pathname === '/Contact'}>Contact
              </Dropdown.Item>
              </Link>
              <Link to='/FAQ'>
              <Dropdown.Item 
                   name='FAQ'
                   id='FAQ'
                   active={this.props.location.pathname === '/FAQ'}
                  //  icon="question circle"
                  >FAQ
            </Dropdown.Item>
            </Link>
          </Dropdown.Menu>
         </Dropdown>
       </Container>
      </Menu>
    </>
    )
  }
}


export default withRouter(DropDownMenu);