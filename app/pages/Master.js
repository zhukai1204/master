import React from 'react';
import { StyleSheet, Image, Text, Linking, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Master extends React.Component {
  static navigationOptions = {
    title: '大神',
    tabBarIcon: ({ tintColor }) =>
      <Icon name="magic" size={25} color={tintColor} />,
    headerRight: (
      <Icon.Button
        name="magic"
        backgroundColor="transparent"
        underlayColor="transparent"
        activeOpacity={0.8}
      />
    )
  };

  render() {
    return (
      <View>
        <Text>Master</Text>
      </View>
    );
  }
}

export default Master;