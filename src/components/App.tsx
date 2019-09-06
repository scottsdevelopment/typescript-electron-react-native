
import React from 'react';

import {
  Text,
  View,
  Image,
  StyleSheet,
  Linking,
  TouchableOpacity
} from 'react-native';

import TypescriptLogo from '../images/logo.typescript.png';
import ElectronLogo from '../images/logo.electron.png';
import ReactLogo from '../images/logo.react.png';
import WebpackLogo from '../images/logo.webpack.png';
import DonateButton from '../images/button.paypal.donate.png';

class App extends React.Component {
  render() {
    return (
      <View style={{
        margin: 15
      }}>
        <View style={{
          flexDirection:'row', 
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          <Image
            style={styles.logoImage}
            source={TypescriptLogo}
          />
          <Image
            style={styles.logoImage}
            source={ReactLogo}
          />
          <Image
            style={styles.logoImage}
            source={ElectronLogo}
          />
          <Image
            style={styles.logoImage}
            source={WebpackLogo}
          />
        </View>
        <Text style={styles.titleText}>
          Typescript, React Native, &amp; Electron
        </Text>
        <Text style={styles.baseText}>This is a sample cross-platform application using Typescript, React Native, Electron, and Webpack. The goal is to provide one codebase that runs across as many devices and environments as possible.</Text>
        <View
          style={styles.donateButtonView}
        >
          <TouchableOpacity 
            style={styles.donateButton}
            onPress={() => Linking.openURL('https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RB2PFBF9RTQ54&source=url')}
          >
            <Image
              style={styles.donateButton}
              source={DonateButton}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logoImage: {
    width: 50, 
    height: 50,
    marginLeft: 15,
    marginRight: 15
  },
  baseText: {
    fontFamily: 'Cochin',
    fontSize: 16
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 25
  },
  donateButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  donateButton: {
    height: 39, 
    width: 98,
  }
});
export default App;
