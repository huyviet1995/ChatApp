import React, {Component} from 'react';
import {View, Text, Platform, StyleSheet} from 'react-native';

export class Chat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style = {styles.container}>
        <Text>This is the chat screen</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})