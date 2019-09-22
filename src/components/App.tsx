
import React from 'react';

import {
  Text,
  ScrollView,
  View
} from 'react-native';

import { spacingSize } from '../styles/Stylesheet';
import { isReactNative } from '../services/Platform';
import { ReactNativeDatabase } from '../services/ReactNativeDatabase';
import Routing, { Router } from '../services/Routing';
const { Route, Switch } = Routing;
import { About } from './About';

import { Menu } from './Menu'
import { EntityList } from './EntityList';
import { Note } from '../entities/Note';
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
    if(isReactNative) {
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
      <Router>
          <Menu/>
          <ScrollView style={{
            paddingLeft: spacingSize,
            paddingRight: spacingSize,
          }}>
            <View style={{
            paddingBottom: spacingSize
            }}>
 
              <Switch>
                <Route exact path="/about" component={About} />
                <Route exact path="/database" component={() => {
                  return (
                    <EntityList entityClass={Note}/>
                  );
                }}/>
              </Switch>
            </View>
          </ScrollView>
      </Router>
    );
  }
}

export default App;
