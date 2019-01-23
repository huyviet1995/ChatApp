import React, {Component} from 'react';
import {TextInput,Button,View, Text, Platform, TouchableOpacity, StyleSheet} from 'react-native';
import {Facebook} from 'expo';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }

  login = async () => {
    const app_id = "373756423441928";
    try {
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync("373756423441928", {
        permissions: ['public_profile', 'email'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }


  onPressGoto = () => {
    this.props.navigation.navigate('Chat',{
      user_name: this.state.text, 
    });
  }

  updateTextChange = (newText) => {
    this.setState({
      text: newText, 
    })
  } 

  render() {
    return (
        <View>
          <TextInput
            placeholder = {"Enter Name"}
            style = {styles.textInput}
            onChangeText = {(newText) => this.updateTextChange(newText)}
            value = {this.state.text}/>
          <Button title = {"Let's Chat"} onPress = {this.login}>Chat Screen</Button>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: "100%",
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
  }
})