import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Share,
  Button,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyA1qA5o3ceMWxShuG2HB7yiSrzRiuyrkY8',
  authDomain: 'quizapp-cc0d8.firebaseapp.com',
  databaseURL: 'https://quizapp-cc0d8.firebaseio.com',
  projectId: 'quizapp-cc0d8',
  storageBucket: 'quizapp-cc0d8.appspot.com',
  messagingSenderId: '836444575226',
  appId: '1:836444575226:web:7577845b2bf782ee938043',
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default class Results extends React.Component {
  state = {
    score: 0,
    data: [{key: 'Play Again'}, {key: 'Go To Menu'}, {key: 'Rate Us'}],
    scoreInStorage: 0,
    idUser: '',
  };
  componentDidMount() {
    try {
      let value = AsyncStorage.getItem('isLogin');
      if (value != null) {
        AsyncStorage.getItem('idUserFacebook').then(myvalue => {
          this.setState({idUser: myvalue});
        });
        AsyncStorage.getItem('Score').then(myvalue => {
          this.setState({scoreInStorage: myvalue});
        });
        this.updateScoreIfHaveLogin(this.props);
      } else {
        // do something else
      }
    } catch (error) {
      console.log('Error In Result Screen Line 52');
    }
  }

  updateScoreIfHaveLogin = async props => {
    try {
      let scoreResult =
        parseInt((await AsyncStorage.getItem('Score')).toString()) +
        this.props.score;
      firebase
        .database()
        .ref('Ranking')
        .child((await AsyncStorage.getItem('idUserFacebook')).toString())
        .update({
          Score: scoreResult,
        })
        .then(AsyncStorage.setItem('Score', scoreResult.toString()));
    } catch (error) {
      this.setState({
        response: error.toString(),
      });
    }
  };

  _onClick = () => {
    Share.share(
      {
        message: 'Play with me now !!!',
        url: 'http://www.facebook.com',
        title: 'Wow, did you see that?',
      },
      {
        // Android only:
        dialogTitle: 'Share score now',
        // iOS only:
        excludedActivityTypes: ['com.apple.UIKit.activity.PostToTwitter'],
      },
    );
  };

  check = key => {
    console.log('key');
    switch (key) {
      case 'Play Again':
        this.props.updateState();
        break;
      case 'Go To Menu':
        this.props.navigation.navigate('Dashboard');
        break;
      default:
        break;
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{alignItems: 'center', alignContent: 'center', fontSize: 20}}>
          <Text>Your Score</Text>
          <View style={styles.score}>
            <Text
              style={{fontSize: 30, fontFamily: 'Cochin', fontWeight: 'bold'}}>
              {this.props.score}
            </Text>
          </View>
        </View>

        <View style={styles.optionwrapper}>
          <TouchableOpacity onPress={() => this.props.updateState()}>
            <Image
              style={{height: 70, width: 70}}
              source={require('../constaints/IMG/playagain_icon.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Dashboard')}>
            <Image
              style={{height: 70, width: 70}}
              source={require('../constaints/IMG/menu.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  score: {
    width: 120,
    height: 120,
    backgroundColor: 'green',
    borderRadius: 50,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  options: {
    marginRight: 20,
    marginLeft: 20,
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    alignItems: 'center',
    borderRadius: 18,
    borderColor: 'transparent',
    backgroundColor: '#FFFDE7',
  },
  optionwrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  container_options: {
    flex: 6,
  },
});
