import React from 'react';
import { StyleSheet, Image, Text, Linking, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Find extends React.Component {
  static navigationOptions = {
    title: '发现',
    tabBarIcon: ({ tintColor }) =>
      <Icon name="tags" size={25} color={tintColor} />,
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
        <Text>Find</Text>
      </View>
    );
  }
}

export default Find;