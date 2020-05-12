import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Menu, Image} from 'semantic-ui-react'
import Logo from '../images/ABS-SEAFOOD-SLC-logo.jpg'

class Navbar extends React.Component {

 
  render() {
    return (
      <>
         <Menu secondary fixed='top'>
          <Link to='/'>
            <Menu.Item
              name='Home'
              id='home'
             >
              <Image
              size='tiny' 
              src={Logo} 
              alt="ABS Seafood Logo"
             />
            </Menu.Item>
          </Link>
            <Menu.Menu position="right">
             <Link to='/'>
              <Menu.Item
               name='Home'
               as='h4'
               id='home'
               active={this.props.location.pathname === '/'}
               />
             </Link>
            <Link to='/Contact'>
             <Menu.Item
              name='Contact'
              id='contact'
              as='h4'
              active={this.props.location.pathname === '/Contact'}
             />
            </Link>
            <Link to='/Inventory'>
             <Menu.Item
              name='Inventory'
              id='Inventory'
              as='h4'
              active={this.props.location.pathname === '/Inventory'}
             />
            </Link>
            <Link to='/FAQ'>
             <Menu.Item
              name='FAQ'
              id='FAQ'
              as='h4'
              active={this.props.location.pathname === '/FAQ'}
              />
            </Link>
          </Menu.Menu>
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