import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {isLogin: '', nameUser: '', Score: ''};
  }
  componentDidMount = () => {
    AsyncStorage.getItem('idUserFacebook').then(myvalue => {
      this.setState({isLogin: myvalue});
    });
    AsyncStorage.getItem('nameUserFacebook').then(myvalue => {
      this.setState({nameUser: myvalue});
    });
    AsyncStorage.getItem('Score').then(myvalue => {
      this.setState({Score: myvalue});
    });
    AsyncStorage.getItem('isLogin').then(myvalue => {
      this.setState({isLogin: myvalue});
    });
  };
  render() {
    console.log();
    return (
      <View style={styles.container}>
        <View style={styles.wrapLG}>
          <Image
            style={styles.LG}
            source={require('../constaints/IMG/bear.png')}
          />
          <Image
            style={styles.LG}
            source={require('../constaints/IMG/quiz_icon.png')}
          />
          <Image
            style={styles.LG}
            source={require('../constaints/IMG/bear2.png')}
          />
        </View>
        <View style={styles.wrapContent}>
          <View style={styles.wrapButtonplay}>
            <TouchableOpacity
              onPress={() => {
                this.state.isLogin === 'true'
                  ? this.props.navigation.navigate('Feed')
                  : this.props.navigation.navigate('Quiz');
              }}>
              <Image
                style={styles.LGPlay}
                source={require('../constaints/IMG/icon_play.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.wrapOptions}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Rank')}>
              <Image
                style={
                  this.state.isLogin === 'true'
                    ? styles.LGOption
                    : styles.LGOption2
                }
                source={require('../constaints/IMG/Top_rank.png')}
              />
            </TouchableOpacity>
            {this.state.isLogin === 'true' ? (
              <TouchableOpacity
                onPress={() => this.props.navigation.openDrawer()}>
                <Image
                  style={styles.LGOption}
                  source={require('../constaints/IMG/profile_icon.png')}
                />
              </TouchableOpacity>
            ) : (
              <Text />
            )}

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('AboutUs')}>
              <Image
                style={
                  this.state.isLogin === 'true'
                    ? styles.LGOption
                    : styles.LGOption2
                }
                source={require('../constaints/IMG/about_us.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

Dashboard.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
  },
  wrapLG: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  LG: {
    height: 100,
    width: 100,
  },
  LGPlay: {
    height: 300,
    width: 300,
  },
  wrapButtonplay: {
    alignItems: 'center',
  },
  LGOption: {
    height: 70,
    width: 70,
  },
  LGOption2: {
    height: 70,
    width: 70,
  },
  wrapContent: {
    flex: 0.8,
  },
  wrapOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
