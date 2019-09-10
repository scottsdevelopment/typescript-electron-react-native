
import React from 'react';

import {
  Text,
  ScrollView,
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
import TypeOrmLogo from '../images/logo.typeorm.png';
import DonateButton from '../images/button.paypal.donate.png';

import { SendNotification } from '../services/NotificationService';

class App extends React.Component {
  render() {
    return (
      <ScrollView style={{
        flex: 1,
        padding: marginSize
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
            source={TypeOrmLogo}
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
          Typescript, TypeOrm, React Native, Electron, &amp; Webpack
        </Text>
        <Text style={styles.baseText}>This is a sample cross-platform application using TypeScript, TypeOrm, React Native, Electron, and Webpack. The goal is to provide one codebase that runs across as many devices and environments as possible. Using TypeOrm we can quickly create a database and entity objects that can persist across a local database, this allows for rapid prototyping using a built-in CRUD view based off the entities reflective type data.</Text>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-start',
          }}
        >
        <Text style={styles.titleText}>Core Functionality</Text>
        <TouchableOpacity 
          style={styles.exampleButton}
          onPress={() => {SendNotification({
            title: "Notification Example",
            message: "This is a sample notification."
          })}}
        >
          <Text>Create Notification Example</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.exampleButton}
          onPress={() => {SendNotification({
            title: "Notification Example",
            message: "This is a sample notification."
          })}}
        >
          <Text>CRUD Dashboard</Text>
        </TouchableOpacity>
        </View>
        <View
          style={styles.donateButtonView}
        >
          <Text style={styles.titleText}>
          Donate
          </Text>
          <Text style={styles.baseText}>If you like what you see or had success with this project, please feel free to drop a donation by clicking on the button below.</Text>
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
      </ScrollView>
    );
  }
}

const marginSize = 15;

const styles = StyleSheet.create({
  logoImage: {
    width: 50, 
    height: 50,
    marginLeft: marginSize,
    marginRight: marginSize
  },
  baseText: {
    fontFamily: 'Cochin',
    fontSize: 16,
    marginTop: marginSize,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: marginSize,
  },
  donateButtonView: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: marginSize,
  },
  donateButton: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 39, 
    width: 98,
    marginTop: marginSize,
  },
  exampleButton: {
    alignItems: 'flex-start',
    height: 30,
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: '#eaeaea',
    padding: 5,
    marginTop: marginSize,
    borderRadius: 4,
  }
});
export default App;
