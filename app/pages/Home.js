import React from 'react';
import { StyleSheet, Image, Text, Linking, View ,ScrollView, Dimensions,TouchableOpacity, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import TouchAbleButton from '../components/TouchAbleButton'
var {hieght, width} = Dimensions.get('window'); 
var swiperRatio = 680/width;

class Home extends React.Component {
  
  static navigationOptions = ({ navigation }) =>({
    title:'首页',
    tabBarLabel:'首页',
    header:null,
    tabBarIcon: ({ tintColor }) =>
      <Icon name="home" size={25} color={tintColor} />,
    //headerLeft:(<Image style={{width:296/4,height:96/4}} source={require('../img/comm/logo.png')} />),
    headerRight:(<View style={{flexDirection:'row', flex:1,alignItems:'center'}}>
                  <TouchAbleButton onPress={()=>navigation.navigate('Login')} style={{padding:5,color:'#fff',borderWidth:1,borderColor:'#fff',borderStyle:'solid',borderRadius:5,textAlign:'center',marginRight:5}} text={'登陆'} />
                  <TouchAbleButton onPress={()=>navigation.navigate('Register')} style={{padding:5,color:'#fff',borderWidth:1,borderColor:'#fff',borderStyle:'solid',borderRadius:5,textAlign:'center',marginRight:5}} text={'注册'} />
                  </View>),
  });

  //<TouchAbleButton style={{padding:5,color:'#fff',borderWidth:1,borderColor:'#fff',borderStyle:'solid',borderRadius:5,textAlign:'center',marginRight:5}} text={'试玩'} />
  
  onNav(page, param) {
    const { navigate } = this.props.navigation;
    if(param){
      navigate(page, { param });
    }else{
      navigate(page);
    }
  }
  render() {
    
    return (
      	<View style={styles.content}>
	      	<StatusBar backgroundColor={'#000'} barStyle={'light-content'}/>
          <ScrollView>
            <View style={styles.swiper}>
              <TouchableOpacity style={styles.moreActives} onPress={()=>this.onNav('Actives')}>
                <Image style={styles.active} source={require('../img/comm/active.png')}/>
              </TouchableOpacity>
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
  		     <View style={styles.gameArean}>
            <View style={styles.gameAreanRow}>
              <TouchableOpacity style={styles.gameAreanItem}>
                <Image style={styles.gameAreanItemImg} source={require('../img/game/ssc.png')} />
                <Text style={styles.gameAreanItemName}>秒速赛车</Text>
                <View style={styles.gameAreanItemHotTitleCon}>
                  <Text style={styles.gameAreanItemHotTitle}>用户喜中980万</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.gameAreanItem}>
                <Image style={styles.gameAreanItemImg} source={require('../img/game/ssc.png')} />
                <Text style={styles.gameAreanItemName}>秒速赛车</Text>
                <Text style={styles.gameAreanItemTitle}>用户喜中980万</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.gameAreanItem}>
                <Image style={styles.gameAreanItemImg} source={require('../img/game/ssc.png')} />
                <Text style={styles.gameAreanItemName}>秒速赛车</Text>
              </TouchableOpacity>
            </View>
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
  	flex:1,
    backgroundColor:'#fff'
  },
  moreActives:{
    backgroundColor:'rgba(255,255,255,.2)',
    position:'absolute',
    zIndex:2,
    top:25,
    right:-15,
    width:50,
    height:24,
    borderWidth:1,
    borderStyle:'solid',
    borderColor:'#fff',
    borderRadius:15,

  },
  active:{
    width:20,
    height:20,
    marginLeft:10
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
  gameArean:{
    paddingTop:5
  },
  gameAreanRow:{
    flexDirection:'row',
    justifyContent:'space-around'
  },
  gameAreanItem:{
    margin:5,
    padding:10,
    backgroundColor:'rgba(255,255,255,.5)',
    borderStyle:'solid',
    borderWidth:1,
    borderColor:'#fff',
    borderRadius:5,
    alignItems:'center'
  },
  gameAreanItemImg:{
    width:60,
    height:60
  },
  gameAreanItemName:{
    fontSize:13,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:5

  },
  gameAreanItemHotTitleCon:{
    borderWidth:1,
    borderStyle:'solid',
    borderColor:'#ff8c00',
    borderRadius:15,
    overflow:'hidden'
  },
  gameAreanItemHotTitle:{
    backgroundColor:'#ff8c00',
    color:'#fff',
    fontSize:10,
    textAlign:'center',
    paddingLeft:5,
    paddingRight:5,
  },
   gameAreanItemTitle:{
    backgroundColor:'#fff',
    color:'#999',
    fontSize:10,
    textAlign:'center',
    paddingLeft:5,
    paddingRight:5,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})


export default Home;