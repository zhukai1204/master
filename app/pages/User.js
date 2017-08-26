import React from 'react';
import { StyleSheet, Image, Text, Linking, View, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class User extends React.Component {
  static navigationOptions = {
    title: '我的',
    tabBarIcon: ({ tintColor }) =>
      <Icon name="user" size={25} color={tintColor} />,
    headerRight: (
      <View style={{flexDirection:'row', flex:1,alignItems:'center'}}>
        <TouchableOpacity style={{marginRight:10}}>
          <Image source={require('../img/comm/service.png')} style={{width:22, height:22}} /> 
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight:10}}>
          <Image source={require('../img/comm/message.png')} style={{width:20, height:20}} /> 
        </TouchableOpacity>
      </View>
      
    )
  };

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
        <TouchableOpacity style={styles.userHeader} onPress={()=>this.onNav('Login')}>
          <Image source={require('../img/news/timg.jpg')} style={styles.avatar}/>
          <Text style={styles.logOrReText}>登陆／注册</Text>
        </TouchableOpacity>
        <View style={styles.subHeader}>
          <View style={[styles.subHeaderItem, styles.subHeaderItemBorderRight]}>
            <Image source={require('../img/comm/level.png')} style={[styles.userIcon, styles.userIcon1]}/>
            <Text>等级中心</Text>
          </View>
          <View style={styles.subHeaderItem}>
            <Image source={require('../img/comm/inte.png')} style={[styles.userIcon, styles.userIcon2]}/>
            <Text>积分中心</Text>
          </View>
        </View>
        <View style={[styles.subHeader, styles.subHeaderItemBorderMargin]}>
          <View style={[styles.subHeaderItem, styles.subHeaderItemBorderRight, styles.subContentCenter]}>
            <View>
              <View style={styles.money}><Text>0.00</Text><Text style={{fontSize:10}}>元</Text></View>
              <Text style={styles.moneyText}>余额</Text>
            </View>
          </View>
          <View style={[styles.subHeaderItem, styles.subHeaderItemBorderRight, styles.subContentCenter]}>
            <View>
              <Text style={styles.moneyNum}>0</Text>
              <Text style={styles.moneyText}>积分</Text>
            </View>
          </View>
          <View style={[styles.subHeaderItem,  styles.subContentCenter]}>
            <View>
              <View style={styles.money}><Text>0</Text><Text style={{fontSize:10}}>张</Text></View>
              <Text style={styles.moneyText}>彩金卡</Text>
            </View>
          </View>
        </View>
        <View style={styles.subHeader}>
          <View style={[styles.subHeaderItem, styles.subHeaderItemBorderRight]}>
            <Image source={require('../img/comm/rech.png')} style={[styles.userIcon3]}/>
            <Text>充值</Text>
          </View>
          <View style={styles.subHeaderItem}>
            <Image source={require('../img/comm/draw.png')} style={[styles.userIcon4]}/>
            <Text>取款</Text>
          </View>
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
    width:40,
    height:40,
    borderRadius:20,
    marginRight:14
  },
  logOrReText:{
    fontWeight:'bold'
  },
  subHeader:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#fff'
  },
  subHeaderItem:{
    flexDirection:'row',
    alignItems:'center',
    flex:1,
    paddingLeft:20,
  },
  subHeaderItemBorderRight:{
    borderColor:'#f0f0f0',
    borderStyle:'solid',
    borderRightWidth:1
  },
  subContentCenter:{
    justifyContent:'center'
  },
  subHeaderItemBorderMargin:{
    marginTop:5,
    marginBottom:5
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