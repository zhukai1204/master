import React from 'react';
import { StyleSheet, Image, Text, Linking, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class User extends React.Component {
  static navigationOptions = {
    title: '我的',
    tabBarIcon: ({ tintColor }) =>
      <Icon name="user" size={25} color={tintColor} />,
    headerRight: (
      <Icon.Button
        name="user"
        backgroundColor="transparent"
        underlayColor="transparent"
        activeOpacity={0.8}
      />
    )
  };

  render() {
    return (
      <View>
        <Text>User</Text>
      </View>
    );
  }
}

export default User;