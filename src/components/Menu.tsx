import React from 'react';
import { View } from 'react-native';
import { Link } from './Routing/Link';
import { styles } from '../styles/Stylesheet';
export class Menu extends React.Component {
  
  routes: [
    {
      to: '/',
      label: 'Home'
    },
    {
      to: '/about',
      label: 'About'
    },
    {
      to: '/database',
      label: 'Database'
    }
  ];

  render() {
    return (
        <View style={{
          height: 50,
          ...styles.centerAlign,
          flex: 0,
          justifyContent: 'space-around',
        }}>
          <View style={{
          flex: 1,
          flexDirection: 'row',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
          <Link to={'/'}>
            Home
          </Link>
          <Link to={'/about'}>
            About
          </Link>
          <Link to={'/database'}>
            Database
          </Link>
        </View>
        </View>
    );
  }
}

export default Menu;
