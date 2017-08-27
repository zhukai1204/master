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
import Home from '../pages/Home';
import Master from '../pages/Master';
import Find from '../pages/Find';
import User from '../pages/User';
import Login from '../pages/user/Login';
import Register from '../pages/user/Register';
import Protocol from '../pages/user/Protocol'
import Actives from '../pages/home/Actives';
import News from '../pages/home/News';


const TabContainer = TabNavigator(
  {
    Home: { screen: Home },
    Master: { screen: Master },
    Find: { screen: Find },
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
    Home: {
      screen: TabContainer,
    },
    Master: {
      screen: Master,
    },
    Find: {
      screen: Find,
    },
    User: {
      screen: User,
    },
    Login:{
      screen: Login
    },
    Register:{ 
      screen: Register
    },
    Protocol:{
      screen: Protocol
    },
    Actives:{
      screen: Actives
    },
    News:{
      screen: News
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
