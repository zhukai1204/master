import React from 'react';
import { StyleSheet, Image, Text, Linking, View ,TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TouchAbleButton from '../../components/TouchAbleButton';
import Style from '../../utils/Style';

class LoginUserName extends React.Component {
  render() {
    return (
      <View style={[Style.content, styles.content]}>
          <View style={styles.inputItem}>
            <Icon name="user-o" size={24} color={'#999'} />
            <TextInput underlineColorAndroid='rgba(0,0,0,0)' style={styles.input} autoCapitalize={'none'} maxLength = {16} placeholder={'请输入用户名'} placeholderTextColor={'#d9d9d9'}/>
          </View>
          <View style={styles.inputItem}>
            <Icon name="lock" size={24} color={'#999'} />
            <TextInput underlineColorAndroid='rgba(0,0,0,0)' style={styles.input} autoCapitalize={'none'} password={true} maxLength = {16} placeholder={'请输入密码'} placeholderTextColor={'#d9d9d9'}/>
            <Icon name="eye-slash" size={24} color={'#999'} />
          </View>
          <View style={styles.loginFinds}>
            <TouchAbleButton text={'短信验证码登录'} style={styles.loginMsg} />
            <TouchAbleButton text={'忘记密码'} style={styles.findPass} />
          </View>
          <TouchAbleButton text={'登录'} style={styles.loginBtn}/>
      </View>
    );
  }
}

class LoginPhone extends React.Component {
  render() {
    return (
       <View style={[Style.content, styles.content]}>
          <View style={styles.inputItem}>
            <Icon name="mobile" size={24} color={'#999'} />
            <TextInput underlineColorAndroid='rgba(0,0,0,0)' style={styles.input} autoCapitalize={'none'} maxLength = {16} placeholder={'请输入手机号'} placeholderTextColor={'#d9d9d9'}/>
          </View>
          <View style={styles.inputItem}>
            <Icon name="lock" size={24} color={'#999'} />
            <TextInput underlineColorAndroid='rgba(0,0,0,0)' style={styles.input} autoCapitalize={'none'} password={true} maxLength = {16} placeholder={'请输入密码'} placeholderTextColor={'#d9d9d9'}/>
            <Icon name="eye" size={24} color={'#999'} />
          </View>
          <View style={styles.loginFinds}>
            <TouchAbleButton text={'短信验证码登录'} style={styles.loginMsg} />
            <TouchAbleButton text={'忘记密码'} style={styles.findPass} />
          </View>
          <TouchAbleButton text={'登录'} style={styles.loginBtn}/>
      </View>
    );
  }
}

class Login extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: '欢迎登陆',
    headerBackTitle:'登录',
    shadowHidden:true,
    headerStyle:{shadowColor: 'transparent',backgroundColor:'#1d97f0', elevation:0},
    headerRight:(<TouchAbleButton onPress={()=>navigation.navigate('Register')} text={'注册'} style={{color:'#fff', paddingLeft:10,paddingRight:10}} />)
  });

  render() {
    return (
      <View style={Style.content}>
        <ScrollableTabView 
          tabBarBackgroundColor={'#1d97f0'} 
          tabBarActiveTextColor={'#fff'} 
          tabBarUnderlineStyle={{backgroundColor:'#fff'}}
          tabBarInactiveTextColor={'#fff'}
          style={{borderWidth:0}}>
          <LoginUserName tabLabel="用户名登陆" />
          <LoginPhone tabLabel="手机号登录" />
        </ScrollableTabView>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  content:{
    padding:10,
    paddingTop:20,
  },
  inputItem:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:24,
    paddingBottom:12,
    borderStyle:'solid',
    borderColor:'#d9d9d9',
    borderBottomWidth:1,

  },
  input:{
    marginLeft:6,
    flex:1,
  },
  loginFinds:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:20
  },
  loginMsg:{
    color:'#547bca'
  },
  findPass:{
    color:'#999'
  },
  loginBtn:{
    borderColor:'#707070',
    borderStyle:'solid',
    borderWidth:1,
    borderRadius:4,
    textAlign:'center',
    padding:10,
    color:'#333'
  },

});

export default Login;