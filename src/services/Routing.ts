import { Platform } from 'react-native'

let Router = null;

if (Platform.OS === 'web') {
  Router = require('react-router-dom').BrowserRouter
} else {
  Router = require('react-router-native').NativeRouter
}

export default Router;