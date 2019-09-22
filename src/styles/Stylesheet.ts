import {
    StyleSheet
} from 'react-native';


export const spacingSize = 15;

export const styles = StyleSheet.create({
  padding: {
    flex: 1,
    padding: spacingSize,
  },
  centerAlign: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftAlign: {
    flex: 1,
    alignItems: 'flex-start',
  },
  menu: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50
  },
  iconImage: {
    width: 50, 
    height: 50,
    marginLeft: spacingSize,
    marginRight: spacingSize
  },
  baseText: {
    fontFamily: 'Cochin',
    fontSize: 16,
    marginTop: spacingSize,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: spacingSize,
  },
  donateButton: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 39, 
    width: 98,
    marginTop: spacingSize,
  },
  exampleButton: {
    alignItems: 'flex-start',
    height: 30,
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: '#eaeaea',
    padding: 5,
    marginTop: spacingSize,
    borderRadius: 4,
  },
  textInput: {
    borderStyle: 'solid',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    fontSize: 16,
    padding: spacingSize,
  },
  button: {
    marginTop: spacingSize,
    borderWidth: 1,
    borderColor: '#007BFF',
    backgroundColor: '#007BFF',
    padding: spacingSize,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center'
  },
});

export default { spacingSize, styles };
