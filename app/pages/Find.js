import React from 'react';
import { StyleSheet, Image, Text, Linking, View, ScrollView, TouchableOpacity, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Style from '../utils/style';
import { Game, GameLogo, shows } from '../utils/config';
import { Lottery } from '../utils/service';
import toastUtils from '../utils/toastUtils';
import moment from 'moment';
import zhCn  from 'moment/locale/zh-cn';
moment.locale('zhCn');

class Find extends React.Component {
  static navigationOptions = {
    title: '开奖',
    tabBarIcon: ({ tintColor }) =>
      <Icon name="trophy" size={25} color={tintColor} />,
    headerRight: (
      <Icon.Button
        name="magic"
        backgroundColor="transparent"
        underlayColor="transparent"
        activeOpacity={0.8}
      />
    )
  };

  constructor(props) {
      super(props);
      this.state = {
          openDatas:[],
          isRefreshing:false,
          refreshText:'上次更新时间:'+moment().fromNow(),
          refreshDate: new Date()
      };
      Lottery.lotteryDatas().then((res)=>{
        if(res.status == 1){
          this.setState({openDatas:res['data']})
        }else{
          toastUtils.showShort(res.info);
        }
      }).catch((err)=>{
        toastUtils.showShort('数据加载出错'+err);
      })
  }
  static navStatus = false;
  onNav = (lotteryId) => {

    if(this.navStatus) return;
    this.navStatus = true;
    setTimeout(()=>{
      this.navStatus = false;
    }, 1000)
    const { navigate } = this.props.navigation;
    navigate('MoreOpenData', {id:lotteryId});
  }

  renderItem = (item) => {
    return (<TouchableOpacity style={[styles.item, styles.content]} onPress={()=>this.onNav(item.lotteryId)}>
              <Image source={GameLogo[item.lotteryId]} style={styles.itemLogo}/>
              <View style={styles.itemLeft}>
                <View style={styles.titleTimeCon}>
                  <Text style={styles.name}>{item.lotteryName}</Text>
                  <Text style={styles.time}>{item.issue}期 {item.opened_at}</Text>
                </View>
                <View style={styles.con}>
                  <View style={styles.ballCon}>
                    {
                      item.openNum.split(' ').map(ball=>(<View style={styles.ball}>
                        <Text style={styles.ballText}>{ball}</Text>
                      </View>))
                    }
                  </View>
                  <Icon name="angle-right" size={20} color={'#bcbcbc'} style={styles.angleRight}/>
                </View>
              </View>
            </TouchableOpacity>)
  }
  onRefresh = ()=>{
    this.setState({
      isRefreshing:true,
      refreshText:'上次更新时间:'+moment(this.state.refreshDate).fromNow(),
    });
    Lottery.lotteryDatas().then((res)=>{
      if(res.status == 1){
        this.setState({
          openDatas:res['data'],
          isRefreshing:false,
          refreshDate: new Date()
        })
      }else{
        this.setState({isRefreshing:false});
        toastUtils.showShort(res.info);
      }
    }).catch((err)=>{
      this.setState({
        isRefreshing:false,
        refreshDate: new Date()
      });
      toastUtils.showShort('数据加载出错'+err);
    })
  }


  render() {
    return (
      <ScrollView style={Style.content}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this.onRefresh}
            tintColor="#999"
            title={this.state.refreshText}
            titleColor="#999"
            colors={['#999', '#999', '#999']}
            progressBackgroundColor="#999"
          />
        }
      >
        {this.state.openDatas.map(item=>{return this.renderItem(item)})}
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  content:{
    padding:10
  },
  item:{
    flexDirection:'row',
  },
  itemLogo:{
    width:50,
    height:50
  },
  itemLeft:{
    flex:1,
    justifyContent:'space-between',
    marginLeft:6,
    borderColor:'#d9d9d9',
    borderStyle:'solid',
    borderBottomWidth:1,
    paddingBottom:10,
    paddingTop:2
  },
  titleTimeCon:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  name:{
    fontSize:14,
    color:'#333'
  },
  time:{
    fontSize:12,
    color:'#999'
  },
  con:{
    flexDirection:'row',
  },
  ballCon:{
    flexDirection:'row',
    marginTop:4,
    flex:1
  },
  angleRight:{
    alignSelf:'center'
  },
  ball:{
    width:24,
    height:24,
    borderRadius:12,
    overflow:'hidden',
    backgroundColor:'#e23a3a',
    justifyContent:'center',
    alignItems:'center',
    marginRight:5
  },
  ballText:{
    color:'#fff'
  }
});
export default Find;