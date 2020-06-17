import React, {Component} from 'react';
import {Platform, View, Text, Button} from 'react-native';
import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import Dashboard from '../screens/Dashboard';
import RankScreen from '../screens/RankScreen';
import CategoryScreen from '../screens/CategoryScreen';
import QuizScreen from '../screens/QuizScreen';
import TypeUserScreen from '../screens/TypeUserScreen';
import HandlingRankScreen from '../screens/HandlingRankScreen';
import HandingCheckUserInFirebase from '../screens/HandingCheckUserInFirebase';
import DrawContent from '../components/DrawContent';
import AboutUsScreen from '../screens/AboutUsScreen';

const config = Platform.select({
  web: {headerMode: 'screen'},
  default: {},
});

const MainStack = createStackNavigator(
  {
    Dashboard: Dashboard,
  },
  config,
);

const QuizStack = createStackNavigator(
  {
    Type: {screen: TypeUserScreen},
    HandingUserFb: {screen: HandingCheckUserInFirebase},
    Feed: {screen: CategoryScreen},
    Quiz: {screen: QuizScreen},
  },
  config,
);
const RankStack = createStackNavigator(
  {
    Handing: HandlingRankScreen,
    Rank: RankScreen,
  },
  config,
);


const AppDrawerNavigator = createDrawerNavigator(
  {
    Dashboards: {
      screen: MainStack,
    },
  },
  {
    contentComponent: props => <DrawContent {...props} />,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerBackgroundColor: '#99FFCC',
  },
);

const AppSwitchNavigator = createSwitchNavigator({
  Dashboard: {screen: AppDrawerNavigator},
  Quiz: {screen: QuizStack},
  Rank: {screen: RankStack},
  AboutUs: {screen: AboutUsScreen},
});

export default AppSwitchNavigator;
