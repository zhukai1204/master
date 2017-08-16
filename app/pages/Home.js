import React from 'react';
import { StyleSheet, Image, Text, Linking, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Home extends React.Component {
  static navigationOptions = {
    title: '首页',
    tabBarIcon: ({ tintColor }) =>
      <Icon name="home" size={25} color={tintColor} />,
    headerRight: (
      <Icon.Button
        name="home"
        backgroundColor="transparent"
        underlayColor="transparent"
        activeOpacity={0.8}
      />
    )
  };

  render() {
    return (
      <View>
        <Text>Home</Text>
      </View>
    );
  }
}

export default Home;