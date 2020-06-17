import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> HomeScreen </Text>
      </View>
    );
  }
}


HomeScreen.navigationOptions = {
    title: "Home",
    headerTitleStyle: {
      textAlign: 'center',
      backgroundColor: 'white',
      flexGrow:1,
      alignSelf:'center',
  },
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }
  });