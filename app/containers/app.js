/**
 *
 * Copyright 20170816-present dstj
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import { StackNavigator, TabNavigator } from 'react-navigation';
import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

import Home from '../pages/Home';
import Actives from '../pages/home/Actives';
import News from '../pages/home/News';
import Bet from '../pages/home/Bet';
import OpenData from '../pages/home/OpenData';
import BetRecord from '../pages/home/BetRecord';
import TwoLong from '../pages/home/TwoLong';
import ToDay from '../pages/home/ToDay';

import Master from '../pages/Master';
import Masters from '../pages/master/Masters'
import Find from '../pages/Find';

import User from '../pages/User';
import Login from '../pages/user/Login';
import Register from '../pages/user/Register';
import Protocol from '../pages/user/Protocol';
import Details from '../pages/user/Details';
import Setting from '../pages/user/Setting';

let storage = new Storage({
  // 最大容量，默认值1000条数据循环存储
  size: 1000,

  storageBackend: AsyncStorage,
    
  // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
  defaultExpires: 1000 * 3600 * 24 * 30,
    
  // 读写时在内存中缓存数据。默认启用。
  enableCache: true,
    
}) 
global.storage = storage;

const TabContainer = TabNavigator(
  {
    Home: { screen: Home },
    Find: { screen: Find },
    Master: { screen: Master },
    User: { screen: User },
  },
  {
    lazy: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#3e9ce9',
      inactiveTintColor: '#999999',
      showIcon: true,
      style: {
        backgroundColor: '#fff'
      },
      indicatorStyle: {
        opacity: 0
      },
      tabStyle: {
        padding: 0
      }
    }
  }
);

const App = StackNavigator(
  {
    Index: {
      screen: TabContainer,
    },
    //home
    Actives:{
      screen: Actives
    },
    News:{
      screen: News
    },
    Bet:{
      screen: Bet,
      //path: 'Bet/:id',
    },
    OpenData:{
      screen:OpenData
    },
    BetRecord:{
      screen:BetRecord
    },
    TwoLong:{
      screen:TwoLong
    },
    ToDay:{
      screen:ToDay
    },
    //user
    Login:{
      screen: Login
    },
    Register:{ 
      screen: Register
    },
    Protocol:{
      screen: Protocol
    },
    Details:{
      screen: Details
    },
    Setting:{
      screen:Setting
    }
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#3e9ce9'
      },
      headerTitleStyle: {
        color: '#fff',
        fontSize: 20
      },
      headerTintColor: '#fff'
    }
  }
);

export default App;
