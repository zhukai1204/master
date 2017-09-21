import React from 'react';
import { StyleSheet, Image, Text, Linking, View, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Style from '../utils/style';
import { UserService } from '../utils/service';
class User extends React.Component {
  static navigationOptions = ({ navigation })=>({
    title: '我的',
    tabBarIcon: ({ tintColor }) =>
      <Icon name="user" size={25} color={tintColor} />,
    headerRight: (
      <View style={{flexDirection:'row', flex:1,alignItems:'center'}}>
        <TouchableOpacity style={{marginRight:10}} onPress={() => Linking.openURL('https://www.baidu.com')}>
          <Image source={require('../img/comm/service.png')} style={{width:26, height:26}} /> 
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight:10}} onPress={()=>navigation.navigate('Setting')}>
          <Image source={require('../img/comm/icon/setting.png')} style={{width:24, height:24}} /> 
        </TouchableOpacity>
      </View>
    )
  });
  
  constructor(props) {
    super(props);
    this.state = {
      orderIndex:1,
      loginStatus:false,
      userInfo:{}
    }
    this.update();
  }
  
  update = ()=>{
    storage.load({
      key:'loginState',
    }).then(ret => {
      this.state.loginStatus = true;
      UserService.getInfo(ret.userId).then(res=>{
        if(res.status == 1){
          this.setState({
            loginStatus:true,
            userInfo:{userName:res.data.userName, money:res.data.money}
          })  
        }else{
          this.setState({loginStatus:false});
        }
      }).catch(err=>{
      })
    }).catch(ret=>{
    })
    
  }

  onNav = (page, param) => {
    const { navigate } = this.props.navigation;
    if(param){
      navigate(page, { param });
    }else{
      navigate(page, {update: this.update});
    }
  }

  loginOrDetails = () => {
      const { navigate } = this.props.navigation;
      if(this.state.loginStatus){
        navigate('Details');
      }else{
        navigate('Login', {update: this.update});
      }
  }

  checkOrderItem = (index)=>{
    if(index == this.state.orderIndex) return;
    this.setState({
      orderIndex:index
    })
  }
  render() {
    return (
      <View style={Style.content}>
        <TouchableOpacity style={styles.userHeader} onPress={()=>this.loginOrDetails()}>
          <Image source={require('../img/news/timg.jpg')} style={styles.avatar}/>
          <Text style={styles.logOrReText}>{this.state.loginStatus?this.state.userInfo.userName:'登陆／注册'}</Text>
        </TouchableOpacity>
        <View style={styles.subHeader}>
          <View style={[styles.subHeaderItem, styles.subHeaderItemBorderRight, styles.subContentCenter]}>
            <View>
              <View style={styles.money}><Text>0.00</Text><Text style={{fontSize:10}}>元</Text></View>
              <Text style={styles.moneyText}>余额</Text>
            </View>
          </View>
          <TouchableOpacity style={[styles.subHeaderItem, styles.subHeaderItemBorderRight]}>
            <Image source={require('../img/comm/rech.png')} style={[styles.userIcon3]}/>
            <Text>充值</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.subHeaderItem}>
            <Image source={require('../img/comm/draw.png')} style={[styles.userIcon4]}/>
            <Text>取款</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.orderHeader}>
         <TouchableOpacity style={[styles.subHeaderItem, this.state.orderIndex==1?styles.orderItemActive:null]} onPress={()=>this.checkOrderItem(1)}>
            <Text style={this.state.orderIndex==1?styles.orderItemActiveText:null}>全部订单</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={[styles.subHeaderItem, this.state.orderIndex==2?styles.orderItemActive:null]} onPress={()=>this.checkOrderItem(2)}>
            <Text style={this.state.orderIndex==2?styles.orderItemActiveText:null}>中奖订单</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={[styles.subHeaderItem, this.state.orderIndex==3?styles.orderItemActive:null]} onPress={()=>this.checkOrderItem(3)}>
            <Text style={this.state.orderIndex==3?styles.orderItemActiveText:null}>未开奖订单</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  content:{
    flex:1,
    backgroundColor:'#f9f9f9'
  },
  userHeader:{
    padding:10,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#fff',
    borderColor:'#d5d5d5',
    borderStyle:'solid',
    borderBottomWidth:1
  },
  avatar:{
    width:60,
    height:60,
    borderRadius:30,
    marginRight:14
  },
  logOrReText:{
    fontSize:16,
    fontWeight:'bold'
  },
  subHeader:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#fff',
    borderColor:'#d5d5d5',
    borderStyle:'solid',
    borderBottomWidth:1
  },
  orderHeader:{
    flexDirection:'row',
    justifyContent:'space-between',
    height:40,
    backgroundColor:'#fff',
    borderColor:'#d5d5d5',
    borderStyle:'solid',
    borderBottomWidth:1,
    backgroundColor:'#eee'
  },
  orderItemActive:{
    backgroundColor:'#fff'
  },
  orderItemActiveText:{
    color:'#3e9ce9'
  },
  subHeaderItem:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    flex:1,
  },
  subHeaderItemBorderRight:{
    borderColor:'#f0f0f0',
    borderStyle:'solid',
    borderRightWidth:1
  },
  subContentCenter:{
    justifyContent:'center'
  },
  money:{
    flexDirection:'row',
    alignItems:'flex-end'
  },
  moneyNum:{
    textAlign:'center'
  },
  moneyText:{
    color:'#666',
    fontSize:10,
    textAlign:'center'
  },
  userIcon:{
    width:20,
    height:20,
    borderRadius:10,
    padding:4,
    marginRight:6
  },
  userIcon1:{
    backgroundColor:'#ffc12e',
  },
  userIcon2:{
    backgroundColor:'#34b996',
  },
  userIcon3:{
    marginRight:6,
    width:25,
    height:20
  },
  userIcon4:{
    marginRight:6,
    width:20,
    height:20
  },
});

export default User;