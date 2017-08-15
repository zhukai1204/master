import React from 'react';
import { StyleSheet, Image, Text, Linking, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Master extends React.Component {
  static navigationOptions = {
    title: '大神',
    tabBarIcon: ({ tintColor }) =>
      <Icon name="md-information-circle" size={25} color={tintColor} />,
    headerRight: (
      <Icon.Button
        name="logo-github"
        backgroundColor="transparent"
        underlayColor="transparent"
        activeOpacity={0.8}
      />
    )
  };

  render() {
    return (
      <View>
        <text>Master</text>
      </View>
    );
  }
}

export default Master;