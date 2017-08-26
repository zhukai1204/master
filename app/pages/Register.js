import React from 'react';
import { StyleSheet, Image, Text, Linking, View ,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TouchAbleButton from '../components/TouchAbleButton';
class Register extends React.Component {
  static navigationOptions = {
    title: '注册'
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
          <View style={styles.inputItem}>
            <Icon name="mobile" size={20} color={'#999'} />
            <TextInput style={styles.input} autoCapitalize={'none'} maxLength = {16} placeholder={'请输入手机号'} placeholderTextColor={'#d9d9d9'}/>
          </View>
          <View style={styles.inputItem}>
            <Icon name="lock" size={20} color={'#999'} />
            <TextInput style={styles.input} autoCapitalize={'none'} password={true} maxLength = {16} placeholder={'请输入密码'} placeholderTextColor={'#d9d9d9'}/>
            <Icon name="eye" size={20} color={'#999'} />
          </View>
          <TouchAbleButton text={'提交'} style={styles.loginBtn}/>
      	  <TouchAbleButton onPress={()=>this.onNav('Protocol')} text={'注册即代表我已满18周岁并同意《用户服务及隐私条款》'} style={styles.proto}/>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  content:{
    flex:1,
    padding:10,
    backgroundColor:'#fff',
    paddingTop:20
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
    flex:1
  },
  loginBtn:{
    borderColor:'#dc3c41',
    borderStyle:'solid',
    borderWidth:1,
    borderRadius:6,
    textAlign:'center',
    padding:10,
    color:'#fff',
    backgroundColor:'#dc3c41'
  },
  proto:{
  	marginTop:6,
  	color:'#999'
  }
});
export default Register;