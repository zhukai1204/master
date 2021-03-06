import React from 'react';
import { StyleSheet, Image, Text, Linking, View ,ScrollView, Dimensions,TouchableOpacity, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import TouchAbleButton from '../components/TouchAbleButton';
import _ from 'lodash';
import { Game, GameLogo } from '../utils/config';
import { Lottery } from '../utils/service';
import toastUtils from '../utils/toastUtils';
const {hieght, width} = Dimensions.get('window'); 
const swiperRatio = 680/width;

class Home extends React.Component {
  
  static navigationOptions = ({ navigation }) =>({
    title:'首页',
    tabBarLabel:'首页',
    //header:null,
    headerStyle:{shadowColor: 'transparent',backgroundColor:'#000', elevation:0},
    tabBarIcon: ({ tintColor }) =>
      <Icon name="home" size={25} color={tintColor} />,
    headerRight:(<TouchableOpacity style={{marginRight:10}} onPress={() => Linking.openURL('https://www.baidu.com')}>
          <Image source={require('../img/comm/service.png')} style={{width:26, height:26}} /> 
        </TouchableOpacity>)
  });

  //<TouchAbleButton style={{padding:5,color:'#fff',borderWidth:1,borderColor:'#fff',borderStyle:'solid',borderRadius:5,textAlign:'center',marginRight:5}} text={'试玩'} />
  

  constructor(props) {
      super(props);
      this.state = {
          swiperShow:false,
          games:[]
      };
      Lottery.getLotterys(6).then((res)=>{
        if(res.status == 1){
          let games = [];
          res['data'].map((game)=>{
            games.push({
              status:game.status,
              key:game.id,
              name:game.name,
              imgSrc:GameLogo[game.id],
              hot:game.hotStatus,
              hotText:game.hotText
            })
          })
          this.setState({
            games:_.chunk(games, 3)
          })
        }
      }).catch((err)=>{
        
      })
  }

  componentDidMount(){
      setTimeout(()=>{
          this.setState({swiperShow:true});
      },0)
  }


  renderSwiper=()=>{
      if(this.state.swiperShow){
          return (
              <View>
                <View style={styles.swiper}>
                  <TouchableOpacity style={styles.moreActives} onPress={()=>this.onNav('Actives')}>
                    <Image style={styles.active} source={require('../img/comm/active.png')}/>
                  </TouchableOpacity>
                  <Swiper  removeClippedSubviews={false} autoplay={true} loop={true} paginationStyle={{bottom:5,justifyContent:'flex-start'}} dotStyle={{backgroundColor:'#fff'}}>
                    <View style={styles.slide}>
                      <Image style={styles.swiperImage} source={require('../img/home/banner/active1.jpg')}/>
                    </View>
                    <View style={styles.slide}>
                      <Image style={styles.swiperImage} source={require('../img/home/banner/active2.jpg')}/>
                    </View>
                    <View style={styles.slide}>
                      <Image style={styles.swiperImage} source={require('../img/home/banner/active3.jpg')}/>
                    </View>
                 </Swiper>
                </View>
              </View>
          );
      }else {
          return <View style={{height:(280/swiperRatio)+20}}></View>;
      }
  }

  onNav(page, param) {
    if(this.navStatus) return;
    if(page == 'Bet'){
      if(param.status == 0){
        toastUtils.showShort('该彩票已经停售！');
        return;
      }else if(param.status == 2){
        toastUtils.showShort('该彩票正在维护！');
        return;
      }else{
        delete param.status;
      }
    }
    this.navStatus = true;
    setTimeout(()=>{
      this.navStatus = false;
    }, 1000)
    const { navigate } = this.props.navigation;
    if(param){
      navigate(page, param);
    }else{
      navigate(page);
    }
  }

  render() {
    
    return (
      	<View style={styles.content}>
	      	<StatusBar backgroundColor={'#000'} barStyle={'light-content'}/>
          <ScrollView>
           {this.renderSwiper()}
  		     <View style={styles.gameArean}>
  		      {
              this.state.games.map((item)=>(
                <View style={styles.gameAreanRow}>
                  {item.map((game)=>(
                      <TouchableOpacity style={styles.gameAreanItem} onPress={()=>this.onNav('Bet', {id:game.key,status:game.status})}>
                        <Image style={styles.gameAreanItemImg} source={game.imgSrc} />
                        <Text style={styles.gameAreanItemName}>{game.name}</Text>
                        {game.hot==1?(<View style={styles.gameAreanItemHotTitleCon}>
                          <Text style={styles.gameAreanItemHotTitle}>{game.hotText}</Text>
                        </View>):(<Text style={styles.gameAreanItemTitle}>{game.hotText}</Text>)}
                      </TouchableOpacity>
                    ))}
                </View>
              ))
            }
           </View>
           <View style={styles.news}>
            <View style={styles.newsHeader}>
              <Text>资讯</Text>
              <TouchableOpacity style={styles.newsMore} onPress={()=>this.onNav('News')}>
                <Text style={{color:'#999'}}>更多</Text>
                <Icon name="angle-right" size={25} color={'#999'} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.newsItem}>
              <View style={styles.newsContent}>
                <Text>阿拉斯加地方辣椒素；伦敦发生的纠纷啊；是的看法；发觉；快点放假</Text>
                <View style={styles.newsInfo}>
                  <View style={styles.newsFromTime}>
                    <Text style={styles.newsFrom}>云端球课</Text>
                    <Text style={styles.newsTime}>08-25 12:35</Text>
                  </View>
                  <Text style={styles.newsReaded}>阅读 98989</Text>
                </View>
              </View>
              <Image source={require('../img/news/timg.jpg')} style={styles.newsIcon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.newsItem}>
              <View style={styles.newsContent}>
                <Text>阿拉斯加地方辣椒素；伦敦发生的纠纷啊；是的看法；发觉；快点放假</Text>
                <View style={styles.newsInfo}>
                  <View style={styles.newsFromTime}>
                    <Text style={styles.newsFrom}>云端球课</Text>
                    <Text style={styles.newsTime}>08-25 12:35</Text>
                  </View>
                  <Text style={styles.newsReaded}>阅读 98989</Text>
                </View>
              </View>
              <Image source={require('../img/news/timg.jpg')} style={styles.newsIcon}/>
            </TouchableOpacity>
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
    backgroundColor:'#fff',
  },
  moreActives:{
    backgroundColor:'rgba(255,255,255,.2)',
    position:'absolute',
    zIndex:2,
    top:16,
    right:-15,
    width:50,
    height:24,
    paddingTop:2,
    borderWidth:1,
    borderStyle:'solid',
    borderColor:'#fff',
    borderRadius:15,

  },
  active:{
    width:18,
    height:18,
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
  notice:{
     backgroundColor:'#fff',
     flexDirection:'row',
     alignItems:'center',
     height:20,
     paddingLeft:10
   },
   noticeItem:{
     fontSize:12,
     paddingLeft:3,
     color:'#999',
     lineHeight:20
   },
  gameArean:{
  },
  gameAreanRow:{
    flexDirection:'row',
    justifyContent:'flex-start'
  },
  gameAreanItem:{
    width:width/3,
    marginTop:5,
    padding:5,
    backgroundColor:'rgba(255,255,255,.5)',
    borderStyle:'solid',
    borderWidth:1,
    borderColor:'#fff',
    borderRadius:5,
    alignItems:'center',
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
    backgroundColor:'#ff8c00',
    borderWidth:1,
    borderStyle:'solid',
    borderColor:'#ff8c00',
    borderRadius:15,
    overflow:'hidden'
  },
  gameAreanItemHotTitle:{
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
  news:{
    paddingLeft:10,
    paddingRight:10
  },
  newsHeader:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderColor:'#e23a3a',
    borderLeftWidth:4,
    borderStyle:'solid',
    paddingLeft:6
  },
  newsMore:{
    flexDirection:'row',
    alignItems:'center'
  },
  newsItem:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:12,
    paddingBottom:12,
    borderStyle:'solid',
    borderColor:'#cdcdcd',
    borderBottomWidth:1
  },
  newsContent:{
    width:width-120,
    justifyContent:'space-between'
  },
  newsInfo:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  newsFromTime:{
    flexDirection:'row'
  },
  newsFrom:{
    color:'#547bca'
  },
  newsTime:{
    color:'#999',
    marginLeft:12
  },
  newsReaded:{
    color:'#999'
  },
  newsIcon:{
    width:80,
    height:60
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})


export default Home;