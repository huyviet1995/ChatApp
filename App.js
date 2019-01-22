import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import {Navigator} from './Navigator.js';
import {addNavigationHelpers,createAppContainer} from 'react-navigation';


const AppNavigator = createAppContainer(Navigator)
export default class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <AppNavigator ref={nav => {this.navigator = nav;}}>{console.log(AppNavigator)}</AppNavigator> 
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
