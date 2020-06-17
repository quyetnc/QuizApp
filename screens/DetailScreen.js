import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const data = this.props.navigation.getParam('data', 'no-data');
    return (
      <View style = {styles.container}>
          <View style={{flex : 0.3, alignItems: 'center'}}>
          <Image source={{uri: data.avatar_url}} style={styles.image} />
          </View>
        <View style={{flex : 0.7}}>
        <Text numberOfLines = {0}>Last name : {data.last_name}</Text>
        <Text>First name : {data.first_name}</Text>
        <Text>Gender :  {data.gender} </Text>
        <Text>Time :  {data.last_message_date} </Text>
        <Text>Your content : {data.last_message_content}</Text>
      </View>
        </View>
     
    );
  }
}

DetailScreen.navigationOptions = {
    title: "Detail Item",
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
      justifyContent: "center",
      flexDirection : 'row',
      marginTop : 40
    },
    image: {
        width: 200,
        height: 100,
      },
  });
