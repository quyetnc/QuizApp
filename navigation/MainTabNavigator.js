import React, {Component} from 'react';
import {Platform, View, Text, Button} from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import ContactScreen from '../screens/ContactScreen';
import GroupsScreen from '../screens/GroupsScreen';
import MessageScreen from '../screens/MessageScreen';
import MoreScreen from '../screens/MoreScreen';
import TimelineScreen from '../screens/TimelineScreen';
import TabBarIcon from '../components/TabBarIcon';
import ConversationScreen from '../screens/ConversationScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const config = Platform.select({
  web: {headerMode: 'screen'},
  default: {},
});

const MessageStack = createStackNavigator(
  {
    Message: MessageScreen,
    Conversation: ConversationScreen,
  },
  config,
);
MessageStack.navigationOptions = {
  tabBarLabel: 'Message',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-chatbubles' : 'md-send'}
    />
  ),
};
MessageStack.path = '';

const ContactStack = createStackNavigator(
  {
    Contact: ContactScreen,
  },
  config,
);
ContactStack.navigationOptions = {
  tabBarLabel: 'Contacs',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-chatbubles' : 'md-contacts'}
    />
  ),
};
ContactStack.path = '';

const GroupsStack = createStackNavigator(
  {
    Groups: GroupsScreen,
  },
  config,
);
GroupsStack.navigationOptions = {
  tabBarLabel: 'Groups',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-chatbubles' : 'md-funnel'}
    />
  ),
};
GroupsStack.path = '';



const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config,
);
HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-chatbubles' : 'md-funnel'}
    />
  ),
};
HomeStack.path = '';



const TimelineStack = createStackNavigator(
  {
    Timeline: TimelineScreen,
  },
  config,
);
TimelineStack.navigationOptions = {
  tabBarLabel: 'Timeline',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-chatbubles' : 'md-time'}
    />
  ),
};
TimelineStack.path = '';

const MoreStack = createStackNavigator(
  {
    More: MoreScreen,
    Detail : DetailScreen
  },
  config,
);
MoreStack.navigationOptions = {
  tabBarLabel: 'More',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-chatbubles' : 'md-more'}
    />
  ),
};
MoreStack.path = '';

const TabNavigator = createBottomTabNavigator({
  Message: {screen: MessageStack},
  Contact: {screen: ContactStack},
  Home: {screen: HomeStack},
  Timeline: {screen: TimelineStack},
  More: {screen: MoreStack},
});

const Drawer = (props) => (
  <View
    style={{
      flex: 1,
      justifyContent: 'space-around',

      borderRadius: 10,
      marginHorizontal: 10,

    }}>
    <Button
      title="Message"
      onPress={() => props.navigation.navigate('Message')}
    />
    <Button
      title="Contact"
      onPress={() => props.navigation.navigate('Contact')}
    />
    <Button
      title="Groups"
      onPress={() => props.navigation.navigate('Groups')}
    />
    <Button
      title="Timeline"
      onPress={() => props.navigation.navigate('Timeline')}
    />
    <Button title="More" onPress={() => props.navigation.navigate('More')} />
  </View>
);

const drawer = createDrawerNavigator(
  {
    Initial: TabNavigator,
  },
  {
    contentComponent: Drawer,
  },
);
export default drawer;
