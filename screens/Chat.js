import React, {Component} from 'react';
import {TouchableOpacity,View, Text, Platform, StyleSheet, Button} from 'react-native';

export class Chat extends React.Component {
  constructor(props) {
    super(props);
  }

  onPressGoto = () => {
    this.props.navigation.navigate("Home");
  }

  render() {
    const user_name = this.props.navigation.getParam("user_name","None");
    return (
      <TouchableOpacity>
        <Button title = {"Home Screen"} onPress = {this.onPressGoto}/>
        <View style = {styles.title}><Text>{user_name}</Text></View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 19,
    fontWeight: 'bold',
    alignItems: 'flex-start',
    flex: 1,
  }
})


keytool -importkeystore -srckeystore debug.keystore -destkeystore debug.keystore -deststoretype pkcs12
