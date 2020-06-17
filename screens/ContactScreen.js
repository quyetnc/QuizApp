import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MessagesScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Contact Screen</Text>
    </View>
  );
}

MessagesScreen.navigationOptions = {
  title: "Contact",
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