import { isElectron } from './Platform';

const RouterPackage = isElectron
  ? require('react-router-dom')
  : require('react-router-native');

export const Router = isElectron
  ? RouterPackage.HashRouter
  : RouterPackage.NativeRouter;

export default RouterPackage;