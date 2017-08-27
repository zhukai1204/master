import React from 'react';
import { StyleSheet, Image, Text, Linking, View ,ScrollView, TouchableOpacity, SectionList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScrollableTabView from 'react-native-scrollable-tab-view';


class GeneralMaster extends React.Component{
  onNav(page, param) {
    const { navigate } = this.props.navigation;
    if(param){
      navigate(page, { param });
    }else{
      navigate(page);
    }
  }
  renderHeader(){
    return (
      <View>
      <View style={styles.rank}>
        <TouchableOpacity style={styles.rankItem}>
          <Image source={require('../img/comm/icon/rankpower.png')} style={{width:50,height:40}}/>
          <Text style={styles.rankItemName}>实力榜</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rankItem}>
          <Image source={require('../img/comm/icon/rankred.png')} style={{width:46,height:40}}/>
          <Text style={styles.rankItemName}>连红榜</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rankItem}>
          <Image source={require('../img/comm/icon/rankward.png')} style={{width:40,height:40}}/>
          <Text style={styles.rankItemName}>奖励榜</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.masters}>
        <View style={styles.mastersHeader}>
            <Text>爆热大神</Text>
            <TouchableOpacity style={styles.mastersMore} onPress={()=>this.onNav('Masters')}>
              <Text style={{color:'#999'}}>更多</Text>
              <Icon name="angle-right" size={25} color={'#999'} />
            </TouchableOpacity>
        </View>
        <View style={styles.masterItemArean}>
          <TouchableOpacity style={styles.masterItem}>
            <View style={styles.redCoin}></View>
            <Image  style={styles.masterAvatar} source={require('../img/news/timg.jpg')}/>
            <Text style={styles.masterName}>哈哈哈</Text>
          </TouchableOpacity>
          <View style={styles.masterItem}>
            <View style={styles.redCoin}></View>
            <Image  style={styles.masterAvatar} source={require('../img/news/timg.jpg')}/>
            <Text style={styles.masterName}>哈哈哈</Text>
          </View>
           <View style={styles.masterItem}>
            <View style={styles.redCoin}></View>
            <Image  style={styles.masterAvatar} source={require('../img/news/timg.jpg')}/>
            <Text style={styles.masterName}>哈哈哈</Text>
          </View>
           <View style={styles.masterItem}>
            <View style={styles.redCoin}></View>
            <Image  style={styles.masterAvatar} source={require('../img/news/timg.jpg')}/>
            <Text style={styles.masterName}>哈哈哈</Text>
          </View>
           <View style={styles.masterItem}>
            <View style={styles.redCoin}></View>
            <Image  style={styles.masterAvatar} source={require('../img/news/timg.jpg')}/>
            <Text style={styles.masterName}>哈哈哈</Text>
          </View>
           <View style={styles.masterItem}>
            <View style={styles.redCoin}></View>
            <Image  style={styles.masterAvatar} source={require('../img/news/timg.jpg')}/>
            <Text style={styles.masterName}>哈哈哈</Text>
          </View>
        </View>
      </View>
      </View>
    );
  }
  render() {
    return (
      <SectionList style={styles.content} 
        ListHeaderComponent={(this.renderHeader.bind(this))} 
        renderItem={({item}) => <ListItem title={item.title} />}
        sections={[]}>
        
      </SectionList>
    );    
  }
}

class AuthenMaster extends React.Component{
  render() {
    return (
      <ScrollView style={styles.content}>
      </ScrollView>
    );    
  }
}

class Master extends React.Component {
  static navigationOptions = {
    title: '大神擂台',
    tabBarLabel:'大神',
    tabBarIcon: ({ tintColor }) =>
      <Icon name="magic" size={25} color={tintColor} />,
    headerRight:(<TouchableOpacity style={{marginRight:10}} onPress={() => Linking.openURL('https://www.baidu.com')}>
          <Image source={require('../img/comm/service.png')} style={{width:26, height:26}} /> 
        </TouchableOpacity>)
  };
  render(){
    return (
      <GeneralMaster navigation={this.props.navigation} />
    );
  }
  /*render() {
    return (
     <ScrollableTabView 
        tabBarBackgroundColor={'#fff'} 
        tabBarActiveTextColor={'#1d97f0'} 
        tabBarUnderlineStyle={{backgroundColor:'#1d97f0'}}
        tabBarInactiveTextColor={'#d9d9d9'}
        style={{backgroundColor:'#fff'}}>
        <GeneralMaster tabLabel="普通大神" navigation={this.props.navigation}/>
        <AuthenMaster tabLabel="认证大神" navigation={this.props.navigation}/>
      </ScrollableTabView>
    );
  }*/
}


var styles = StyleSheet.create({
  content:{
    flex:1,
    backgroundColor:'#fff'
  },
  rank:{
    padding:14,
    flexDirection:'row',
    justifyContent:'space-around',
    borderStyle:'solid',
    borderColor:'#d9d9d9',
    borderBottomWidth:1
  },
  rankItem:{
    alignItems:'center'
  },
  rankItemName:{
    fontSize:12,
    color:'#999'
  },
  masters:{
    padding:14,
    borderStyle:'solid',
    borderColor:'#d9d9d9',
    borderBottomWidth:1
  },
  mastersHeader:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderColor:'#e23a3a',
    borderLeftWidth:4,
    borderStyle:'solid',
    paddingLeft:6
  },
  mastersMore:{
    flexDirection:'row',
    alignItems:'center'
  },
  masterItemArean:{
    flexDirection:'row',
    paddingTop:12,
    paddingBottom:12
  },
  masterItem:{
    position:'relative',
    marginRight:20
  },
  redCoin:{
    backgroundColor:'#e23a3a',
    position:'absolute',
    left:38,
    width:8,
    height:8,
    borderRadius:5
  },
  masterAvatar:{
    width:40,
    height:40,
    borderRadius:20,
  },
  masterName:{
    marginTop:6,
    fontSize:12,
  }
});
export default Master;