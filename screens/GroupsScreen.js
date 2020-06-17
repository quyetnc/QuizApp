import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MessagesScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Groups Screen</Text>
    </View>
  );
}

MessagesScreen.navigationOptions = {
  title: "Groups",
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