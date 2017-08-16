import React from 'react';
import { StyleSheet, Image, Text, Linking, View ,Slider} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';

class Home extends React.Component {
  static navigationOptions = {
    title: '首页',
    tabBarIcon: ({ tintColor }) =>
      <Icon name="home" size={25} color={tintColor} />
  };

  render() {
    return (
      	<Swiper style={styles.wrapper} showsButtons={true}>
	        <View style={styles.slide1}>
	          <Text style={styles.text}>Hello Swiper</Text>
	        </View>
	        <View style={styles.slide2}>
	          <Text style={styles.text}>Beautiful</Text>
	        </View>
	        <View style={styles.slide3}>
	          <Text style={styles.text}>And simple</Text>
	        </View>
	      </Swiper>
    );
  }
}

var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})


export default Home;