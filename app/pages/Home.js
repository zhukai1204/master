import React from 'react';
import { StyleSheet, Image, Text, Linking, View ,Slider, Dimensions} from 'react-native';
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
      	<View style={{flex:1,flexDirection: 'column'}}>
	      	<Swiper style={styles.wrapper}  autoplay={true} loop={true}>
		        <View style={styles.slide1}>
		          <Image source={require('../img/1.jpg')}/>
		        </View>
		        <View style={styles.slide2}>
		          <Image source={require('../img/2.jpg')}/>
		        </View>
		        <View style={styles.slide3}>
		          <Image source={require('../img/3.jpg')}/>
		        </View>
		     </Swiper>
		     <View style={{flex:1,flexDirection: 'column'}}>

		     </View>
		</View>
    );
  }
}

var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
  	flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#9DD6EB',
    height:280
  },
  slide2: {
  	flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#97CAE5',
  },
  slide3: {
  	flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})


export default Home;