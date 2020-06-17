import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import decode from '../constaints/Utils/Unescape';

export default class Question extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Question}>
            {console.log(decode.chars)}
            {decode(this.props.question)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginTop: 10
  },
  Question: {   
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'

  },
});