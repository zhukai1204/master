import React from 'react';
import { StyleSheet, Image, Text, Linking, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Login extends React.Component {
  static navigationOptions = {
    title: '登陆'
  };

  render() {
    return (
      <View>
        <Text>登陆</Text>
      </View>
    );
  }
}

export default Login;