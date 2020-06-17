import React, {Component} from 'react';
import {View, Text, ActivityIndicator, Button} from 'react-native';
import firebase from 'firebase';
// import {firebase} from '../components/FirebaseConfig';
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

export default class HandlingRankScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {arr: [], response: ''};
  }
  componentDidMount = () => {
    this.startHanding(this.props);
  };
  startHanding = async props => {
    try {
      var rankRef = firebase.database().ref('/Ranking');
      const snapshot = await rankRef.once('value');
      // console.log(snapshot.val());
      const convertSnap = snapshotToArray(snapshot);
      function snapshotToArray(snapshot) {
        var returnArr = [];
        snapshot.forEach(function(childSnapshot) {
          var item = childSnapshot.val();
          item.key = childSnapshot.key;
          returnArr.push(item);
        });

        return returnArr;
      }
      var arrTMP = convertSnap;
      arrTMP.sort(function(a, b) {
        if (a.Score > b.Score) return -1;
        if (a.Score < b.Score) return 1;
        return 0;
      });
      this.setState({
        IsLoading: true,
        arr: arrTMP,
      });
      setTimeout(() => {
        console.log(this.state.arr);
        props.navigation.navigate('Rank', {data: this.state.arr});
      }, 1500);
    } catch (error) {
      this.setState({
        response: error.toString(),
      });
    }
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" color="red" />
        {/* <Button
            title="QQQ"
            onPress={() => this.props.navigation.navigate('Rank')}
          /> */}
      </View>
    );
  }
}

HandlingRankScreen.navigationOptions = {
  header: null,
};
