import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Menu, Image} from 'semantic-ui-react'
import DropDownMenu from './DropDownMenu.js'
import Logo from '../images/ABS-Black-NoBackground.png'

const navStyles = {
  padding: '1rem',
}

class Navbar extends React.Component {
  state = {
    width: window.screen.width
  }
  
  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  
  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.screen.width });
  };
  
  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
  
    if (isMobile)
    return (
      <DropDownMenu/>
    )
    else
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
            <Menu.Menu position="right" style={navStyles}>
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
            <Link to='/Products'>
             <Menu.Item
              name='Products'
              id='Products'
              as='h4'
              active={this.props.location.pathname === '/Products'}
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