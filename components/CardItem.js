import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class CardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {data} = this.props;
    return (
      <TouchableOpacity onPress = {this.props.ButtonOnPress}>
        <View style={styles.container}>
          <View style={styles.wrapImage}>
            <Image style={styles.Image} source={{uri: data.avatar_url}} />
          </View>
          <View style={styles.wrapContent}>
            <View style={styles.contentTop}>
              <Text style={{fontWeight: 'bold', marginLeft: 10}}>
                {data.first_name}
              </Text>
              <View>
                <Text style={{fontStyle: 'italic', marginRight: 10}}>
                  {data.last_message_date}
                </Text>
              </View>
            </View>

            <View style={styles.contenBottom}>
              <Text style={{padding: 5, fontSize: 13}} numberOfLines = {2} >
                {data.last_message_content}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    justifyContent: 'center',
    marginTop: 12,
    height: 90,
    flexDirection: 'row',
    borderWidth: 1,
    padding: 3,
  },
  wrapImage: {
    flex: 0.2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image: {
    height: 80,
    width: 80,
    borderRadius: 30,
  },
  wrapContent: {
    flex: 0.8,
  },
  contentTop: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contenBottom: {
    flex: 0.7,
  },
});
