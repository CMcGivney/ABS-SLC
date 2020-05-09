import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Menu, Image} from 'semantic-ui-react'
import Logo from '../images/ABS-Logo.png'

class Navbar extends React.Component {

 
  render() {
    return (
      <>
         <Menu secondary fixed="top">
          <Link to='/'>
            <Menu.Item
              name='Home'
              id='home'
            >
              <Image
              size='tiny' 
              src={Logo} 
            />
            </Menu.Item>
            </Link>
            <Menu.Menu position="right">
          <Link to='/'>
            <Menu.Item
              name='Home'
              id='home'
              active={this.props.location.pathname === '/'}
            />
            </Link>
          <Link to='/Contact'>
            <Menu.Item
              name='Contact'
              id='contact'
              active={this.props.location.pathname === '/Contact'}
            />
            </Link>
          <Link to='/FAQ'>
            <Menu.Item
              name='FAQ'
              id='FAQ'
              active={this.props.location.pathname === '/FAQ'}
            />
            </Link>
            </Menu.Menu>
          {/* <Link to='/Events'>
            <Menu.Item
              name='Events'
              id='events'
              active={this.props.location.pathname === '/Events'}
            />
          </Link> */}
         </Menu>
      
    </>
    )
  }
}

// const styles = {
//   active: {
//     color: 'white',
//     fontWeight: 'bold',
//     backgroundColor: '#555'
//   }
//}
export default withRouter(Navbar);