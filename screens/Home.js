import React, {Component} from 'react';
import {View, Text, Platform, TouchableOpacity, StyleSheet} from 'react-native';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
        <TouchableOpacity style = {styles.container}>
          <Text> Please say something here! </Text>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})