import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';

export default class FeedItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  GoDetail = () => {
    this.props.navigation.navigate('Detail');
  }
  render() {
    const {item : {id, avatar_url, last_message_content, last_name}, navigation} = this.props;
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.card}>
        <View style={{flexDirection:'row', paddingVertical : 10}}>
        <Image source={{uri: avatar_url}} style={styles.image} />
        <Text style ={{marginRight : 10, flex : 0.6, fontSize : 20}}> {last_name} </Text>
        <TouchableOpacity style={styles.button} onPress = {()=>navigate("Detail", {data : this.props.item})}>
          <Text style={styles.textButton}>></Text>
        </TouchableOpacity>
        </View>
       
        
        <Text style= {{borderWidth:1, height : 0, marginTop : 5}} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    paddingVertical: 10,
    justifyContent :'center'
  },
  image: {
    width: 100,
    height: 50,
    alignItems : 'center',
    justifyContent :'center',
    paddingHorizontal: 15,
    flex : 0.3
  },
  button: {

    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flex : 0.1
  },
  textButton: {
    color: 'blue',
    fontSize: 17
  },
});
