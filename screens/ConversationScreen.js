import React from "react";
import { Image, Text, ScrollView, StyleSheet } from "react-native";

export default function ConversationScreen(props) {
  const dataMess = props.navigation.getParam('data', 'No-data');
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Image
        source={{ uri: dataMess.avatar_url }}
        style={{
          width: 200,
          height: 200
        }}
      />
      <Text>{dataMess.first_name}</Text>
      <Text style = {{marginHorizontal : 20}}>{dataMess.last_message_content}</Text>
    </ScrollView>
  );
}

ConversationScreen.navigationOptions = {
  title: "Conversation"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff"
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center"
  }
});