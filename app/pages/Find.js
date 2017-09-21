import React from 'react';
import { StyleSheet, Image, Text, Linking, View, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Style from '../utils/style';
import { Game, GameLogo } from '../utils/config';
import { Lottery } from '../utils/service';

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
          openDatas:[]
      };
      Lottery.lotteryDatas().then((res)=>{
        if(res.status == 1){
          this.setState({openDatas:res['data']})
        }else{
        
        }
      }).catch((err)=>{
      })
  }

  renderItem = (item) => {
    return (<TouchableOpacity style={[styles.item, styles.content]}>
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

  render() {
    return (
      <ScrollView style={Style.content}>
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