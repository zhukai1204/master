import React from 'react';
import { StyleSheet, Image, Text, Linking, View ,ScrollView, Dimensions,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import TouchAbleButton from '../components/TouchAbleButton'
var {hieght, width} = Dimensions.get('window'); 
var swiperRatio = 680/width;

class Home extends React.Component {
  
  static navigationOptions = ({ navigation }) =>({
    title:'首页',
    tabBarLabel:'首页',
    tabBarIcon: ({ tintColor }) =>
      <Icon name="home" size={25} color={tintColor} />,
    headerLeft:(<Image style={{width:296/4,height:96/4}} source={require('../img/comm/logo.png')} />),
    headerRight:(<View style={{flexDirection:'row', flex:1,alignItems:'center'}}>
                  <TouchAbleButton onPress={()=>navigation.navigate('Login')} style={{padding:5,color:'#fff',borderWidth:1,borderColor:'#fff',borderStyle:'solid',borderRadius:5,textAlign:'center',marginRight:5}} text={'登陆'} />
                  <TouchAbleButton onPress={()=>navigation.navigate('Register')} style={{padding:5,color:'#fff',borderWidth:1,borderColor:'#fff',borderStyle:'solid',borderRadius:5,textAlign:'center',marginRight:5}} text={'注册'} />
                  </View>),
  });

  //<TouchAbleButton style={{padding:5,color:'#fff',borderWidth:1,borderColor:'#fff',borderStyle:'solid',borderRadius:5,textAlign:'center',marginRight:5}} text={'试玩'} />
  

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
             <View style={styles.notice}>
              <Icon name="volume-up" size={18} />
              <Swiper  horizontal={false} autoplay={true} loop={true} showsPagination={false}>
                <View>
                  <Text style={styles.noticeItem}>123456</Text>
                </View>
                <View>
                  <Text style={styles.noticeItem}>789asdff</Text>
                </View>
                <View>
                  <Text style={styles.noticeItem}>asdfasdfasd</Text>
                </View>
             </Swiper>
            </View>
           </View>
            <View style={styles.hotGameTitle}>
              <Icon name="gamepad" size={26} />
              <Text style={styles.hotGameTitleText}>热门游戏</Text>
            </View>
  		     <View style={styles.gameArean}>
            <View style={styles.gameAreanRow}>
              <TouchableOpacity style={styles.gameAreanItem}>
                <Image style={styles.gameAreanItemImg} source={require('../img/game/ssc.png')} />
                <Text style={styles.gameAreanItemName}>秒速赛车</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.gameAreanItem}>
                <Image style={styles.gameAreanItemImg} source={require('../img/game/ssc.png')} />
                <Text style={styles.gameAreanItemName}>秒速赛车</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.gameAreanItem}>
                <Image style={styles.gameAreanItemImg} source={require('../img/game/ssc.png')} />
                <Text style={styles.gameAreanItemName}>秒速赛车</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.gameAreanRow}>
              <TouchableOpacity style={styles.gameAreanItem}>
                <Image style={styles.gameAreanItemImg} source={require('../img/game/ssc.png')} />
                <Text style={styles.gameAreanItemName}>秒速赛车</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.gameAreanItem}>
                <Image style={styles.gameAreanItemImg} source={require('../img/game/ssc.png')} />
                <Text style={styles.gameAreanItemName}>秒速赛车</Text>
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
  notice:{
    backgroundColor:'#fff',
    flexDirection:'row',
    alignItems:'center',
    height:20,
    paddingLeft:3
  },
  noticeItem:{
    fontSize:16,
    paddingLeft:3
  },
  hotGameTitle:{
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:3,
    borderBottomWidth:1,
    borderStyle:'solid',
    borderBottomColor:'rgba(0,0,0,.2)'
  },
  hotGameTitleIcon:{

  },
  hotGameTitleText:{
    fontSize:14,
    fontWeight:'bold',
    paddingLeft:3
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
    borderRadius:5
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
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})


export default Home;