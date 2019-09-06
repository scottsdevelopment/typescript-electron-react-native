import React from 'react';
import { View, Image } from 'react-native';
import logo from '../images/icon.menu.png';

class Nav extends React.Component {
  render() {
    return (
      <View>
          <Image
          style={{width: 50, height: 50}}
          source={logo}
        />
      </View>
    );
  }
}

export default Nav;
