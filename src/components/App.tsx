
import React from 'react';

import {
  Text,
  ScrollView,
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
import { styles, marginSize } from '../styles/stylesheet';

import { EntityList } from './EntityList';
import { Category } from '../entities/Category';
import { Author } from '../entities/Author';
import { isElectron } from '../services/Platform';
import { ReactNativeDatabase } from '../services/ReactNativeDatabase';
// import "reflect-metadata";
// import { SequelizeDatabase } from '../services/Sequelize';
// import { ElectronDatabase } from '../services/ElectronDatabase';

class App extends React.Component<{}, {
  isLoading: boolean
}> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: true
    }
  }
  async doMore() {
    if(!isElectron()) {
      const reactNativeDb = new ReactNativeDatabase();
      await reactNativeDb.load();
    }
  }

  componentDidMount() {
    this.doMore().then(() => {
      this.setState({
        isLoading: false
      });
    });
  }

  render() {
    if (this.state.isLoading === true) {
      return <Text>Loading... ({this.state.isLoading ? 'true': 'false'})</Text>
    }
    return (
        <ScrollView style={{
          paddingLeft: marginSize,
          paddingRight: marginSize,
        }}>
          <View style={{
          paddingBottom: marginSize
          }}>
            <View style={styles.center}>
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
            <EntityList entityClass={Category}/>
            <EntityList entityClass={Author}/>
            <Text style={styles.titleText}>
              Donate
            </Text>
            <Text style={styles.baseText}>
              Test. If you like what you see or had success with this project, please feel free to drop a donation by clicking on the button below.
            </Text>
            <View style={styles.center}>
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
        </ScrollView>
    );
  }
}

export default App;
