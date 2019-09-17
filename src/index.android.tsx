/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './components/App';
import {name as appName} from './app.json';
require('./index.global');

AppRegistry.registerComponent(appName, () => App);


