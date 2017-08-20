import React from 'react';
import { StyleSheet, Image, Text, Linking, View ,ScrollView, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import TouchAbleButton from '../components/TouchAbleButton'
var {hieght, width} = Dimensions.get('window'); 
var swiperRatio = 680/width;

class Home extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) =>
      <Icon name="home" size={25} color={tintColor} />,
    headerLeft:(<Image style={{width:296/4,height:96/4}} source={require('../img/comm/logo.png')} />),
    headerRight:(<View style={{flexDirection:'row', flex:1,alignItems:'center'}}>
                  <TouchAbleButton style={{padding:5,color:'#fff',borderWidth:1,borderColor:'#fff',borderStyle:'solid',borderRadius:5,textAlign:'center',marginRight:5}} text={'登陆'} />
                  <TouchAbleButton style={{padding:5,color:'#fff',borderWidth:1,borderColor:'#fff',borderStyle:'solid',borderRadius:5,textAlign:'center',marginRight:5}} text={'注册'} />
                  <TouchAbleButton style={{padding:5,color:'#fff',borderWidth:1,borderColor:'#fff',borderStyle:'solid',borderRadius:5,textAlign:'center',marginRight:5}} text={'试玩'} />
                  </View>),
  };

  render() {
    return (
      	<View style={styles.content}>
	      	<ScrollView>
            <View style={styles.swiper}>
              <Swiper  autoplay={true} loop={true} paginationStyle={{bottom:5,justifyContent:'flex-start'}} dotStyle={{backgroundColor:'#fff'}}>
    		        <View style={styles.slide}>
    		          <Image style={styles.swiperImage} source={require('../img/home/banner/1.jpg')}/>
    		        </View>
    		        <View style={styles.slide}>
    		          <Image style={styles.swiperImage} source={require('../img/home/banner/2.jpg')}/>
    		        </View>
    		        <View style={styles.slide}>
    		          <Image style={styles.swiperImage} source={require('../img/home/banner/3.jpg')}/>
    		        </View>
    		     </Swiper>
           </View>
  		     <View style={{flex:1}}>
            <Image style={{width:296/4,height:96/4}} source={require('../img/comm/logo.png')} />
            <Image style={{width:296/4,height:96/4}} source={require('../img/comm/logo.png')} />
  		     </View>
          </ScrollView>
		</View>
    );
  }
}

var styles = StyleSheet.create({
  logo:{
    width:296/4,
    height:96/4
  },
  content:{
  	flex:1
  },
  swiper:{
    height:280/swiperRatio
  },
  swiperImage:{
    width:width,
    height:280/swiperRatio
  },
  slide: {
    flex: 1,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})


export default Home;