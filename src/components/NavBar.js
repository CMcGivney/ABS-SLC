import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Menu,} from 'semantic-ui-react'

class Navbar extends React.Component {
 
  render() {
    return (
      <>
       
         <Menu style={{backgroundColor: "tan"}} pointing secondary fixed="top">
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
          <Link to='/Menu'>
            <Menu.Item
              name='Menu'
              id='menu'
              active={this.props.location.pathname === '/Menu'}
            />
            </Link>
          <Link to='/Events'>
            <Menu.Item
              name='Events'
              id='events'
              active={this.props.location.pathname === '/Events'}
            />
          </Link>
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