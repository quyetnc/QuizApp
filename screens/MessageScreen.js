import React from 'react';
import {View, Text, StyleSheet, ScrollView,TouchableOpacity, Image} from 'react-native';
import {MessData} from '../constaints/DataMessage';
import CardItem from '../components/CardItem';

export default function MessagesScreen(props) {
  const {navigation} = props;
  function ToConversation(item)
  {
      navigation.navigate('Conversation', {
        data : item
      })
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        {
          MessData.map((item) => {
            return (
              <CardItem key = {item.id} data = {item} ButtonOnPress = {()=> ToConversation(item)}/>
            )
          })
        }
        
      </ScrollView>
    </View>
  );
}
MessagesScreen.navigationOptions = (props) => {
  return {
    title: "Messages            ",
    headerTitleStyle: {
      textAlign: 'center',
      flexGrow:1,
      alignSelf:'center',
  },
    headerLeft: () => {
      return (
        <TouchableOpacity onPress={props.navigation.openDrawer}>
          <Image
            style={{ height: 20, width: 20, marginLeft: 10 }}
            source={{
              uri:
                "https://cdn3.iconfinder.com/data/icons/ui-ux-essentials-solid/24/hamburger-menu-solid-512.png"
            }}
          />
        </TouchableOpacity>
      );
    }
  };
};


const styles = StyleSheet.create({
  container: {
    flex : 1,
    marginHorizontal: 15,
    justifyContent: 'center',
  },
});
