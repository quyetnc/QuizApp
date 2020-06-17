import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {MessData} from '../constaints/DataMessage';
import FeedItem from '../components/FeedItem';

export default class MoreScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderItem = ({item}) => {
    return <FeedItem item={item} navigation={this.props.navigation} />;
  };

  render() {
    return (
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={MessData}
        style={styles.FlatList}
        renderItem={this.renderItem}
        navigation={this.props.navigation}
      />
    );
  }
}

MoreScreen.navigationOptions = {
  title: 'List',
  headerTitleStyle: {
    textAlign: 'center',
    backgroundColor: 'white',
    flexGrow: 1,
    alignSelf: 'center',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  FlatList: {
    marginHorizontal: 5,
    marginVertical: 10,
  },
});
