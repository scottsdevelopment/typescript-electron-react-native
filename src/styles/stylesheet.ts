import {
    StyleSheet
} from 'react-native';

export const marginSize = 15;

export const styles = StyleSheet.create({
  padding: {
      flex: 1,
      padding: marginSize,
  },
  leftAlign: {
    flex: 1,
    alignItems: 'flex-start',
  },
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
  center: {
    flex: 1,
    flexDirection: 'row',
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
  },
  textInput: {
    borderStyle: 'solid',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    height: 30,
    fontSize: 15
  },
});