import React from 'react';
import { StyleSheet, Image, Text, Linking, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Style from '../utils/style';

class Find extends React.Component {
  static navigationOptions = {
    title: '开奖',
    tabBarIcon: ({ tintColor }) =>
      <Icon name="trophy" size={25} color={tintColor} />,
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
      <View style={Style.content}>
        
      </View>
    );
  }
}

var styles = StyleSheet.create({

});
export default Find;