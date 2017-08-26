import React from 'react';
import { StyleSheet, Image, Text, Linking, View ,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Protocol extends React.Component {
  static navigationOptions = {
    title: '服务协议'
  };

  render() {
    return (
      	<ScrollView style={styles.content}>
      	</ScrollView>
    );
  }
}

var styles = StyleSheet.create({
	content:{
		backgroundColor:'#f9f8f1'
	}
})
export default Protocol;