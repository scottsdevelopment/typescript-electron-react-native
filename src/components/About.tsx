
import React from 'react';

import {
  Text,
  View,
  Image,
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
import { styles } from '../styles/Stylesheet';

export class About extends React.Component {

  render() {

    return (
      <View>
        <View style={styles.centerAlign}>
          <Image
            style={styles.iconImage}
            source={TypescriptLogo}
          />
          <Image
            style={styles.iconImage}
            source={TypeOrmLogo}
          />
          <Image
            style={styles.iconImage}
            source={ReactLogo}
          />
          <Image
            style={styles.iconImage}
            source={ElectronLogo}
          />
          <Image
            style={styles.iconImage}
            source={WebpackLogo}
          />
        </View>
        <Text style={styles.titleText}>
          Typescript, TypeOrm, React Native, Electron, &amp; Webpack
        </Text>
        <Text style={styles.baseText}>This is a sample cross-platform application using TypeScript, TypeOrm, React Native, Electron, and Webpack. The goal is to provide one codebase that runs across as many devices and environments as possible. Using TypeOrm we can quickly create a database and entity objects that can persist across a local database, this allows for rapid prototyping using a built-in CRUD view based off the entities reflective type data.</Text>
        <Text style={styles.titleText}>Core Functionality</Text>
        <View
          style={styles.leftAlign}
        >
          <TouchableOpacity 
            style={styles.exampleButton}
            onPress={() => {SendNotification({
              title: "Notification Example",
              message: "This is a sample notification."
            })}}
          >
            <Text>Create Notification Example</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.titleText}>
          Donate
        </Text>
        <Text style={styles.baseText}>
          Test. If you like what you see or had success with this project, please feel free to drop a donation by clicking on the button below.
        </Text>
        <View style={styles.centerAlign}>
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

export default About;
