import React from 'react';
import { StyleSheet, Image, Text, Linking, View ,ScrollView, TouchableOpacity, SectionList, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Swiper from 'react-native-swiper';
const {hieght, width} = Dimensions.get('window'); 
const swiperRatio = 680/(width-20);
import Style from '../utils/style';

class Master extends React.Component {
  static navigationOptions = {
    title: '动态',
    tabBarLabel:'动态',
    tabBarIcon: ({ tintColor }) =>
      <Icon name="tags" size={25} color={tintColor} />,
    headerRight:(<TouchableOpacity style={{marginRight:10}} onPress={() => Linking.openURL('https://www.baidu.com')}>
          <Image source={require('../img/comm/service.png')} style={{width:26, height:26}} /> 
        </TouchableOpacity>)
  };

  constructor(props) {
      super(props);
      this.state = {
          swiperShow:false,
          messageIndex:1
      };
  }

  componentDidMount(){
      setTimeout(()=>{
          this.setState({swiperShow:true});
      },0)
  }

  renderSwiper=()=>{
      if(this.state.swiperShow){
          return (
                <View style={styles.swiper}>
                  <Swiper  
                    removeClippedSubviews={false} 
                    autoplay={true} 
                    loop={true} 
                    paginationStyle={{bottom:5}} 
                    dotStyle={{backgroundColor:'#fff', width:10,height:4}}
                    activeDotStyle={{width:10, height:4}}>
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
          );
      }else {
          return <View style={{height:(280/swiperRatio)+20}}></View>;
      }
  }

  checkMessageItem = (index) =>{
    this.setState({
      messageIndex:index
    })
  }

  render(){
    return (
      <View style={[Style.content, styles.content]}>
        {this.renderSwiper()}
        <View style={styles.message}>
          <View style={styles.messageHeader}>
            <TouchableOpacity style={styles.messageHeaderItem}>
              <Text style={this.state.messageIndex==1?styles.messageActiveText:null} onPress={()=>this.checkMessageItem(1)}>通知公告</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.messageHeaderItem}>
              <Text style={this.state.messageIndex==2?styles.messageActiveText:null} onPress={()=>this.checkMessageItem(2)}>我的消息</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  
}


var styles = StyleSheet.create({
  content:{
    paddingTop:10,
    paddingLeft:10,
    paddingRight:10
  },
   swiper:{
    height:280/swiperRatio,
    paddingBottom:10,
  },
  swiperImage:{
    width:width,
    height:280/swiperRatio
  },
  slide: {
    flex: 1,
  },
  message:{
    flex:1,
    backgroundColor:'#fff'
  },
  messageHeader:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    height:44,
    borderColor:'#eee',
    borderStyle:'solid',
    borderBottomWidth:1
  },
  messageHeaderItem:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  messageActiveText:{
    color:'#3e9ce9'
  },
});
export default Master;