import {
    StyleSheet
} from 'react-native';

import {spacingSize} from './Stylesheet';

export const aboutStyles = StyleSheet.create({
  iconImage: {
    width: 50, 
    height: 50,
    marginLeft: spacingSize,
    marginRight: spacingSize
  },
  donateButton: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 39, 
    width: 98,
    marginTop: spacingSize,
  }
});