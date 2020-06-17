import React, {Component} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Modal,
  Image,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
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

export default class HandingCheckUserInFirebase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idFacebook: '',
      modalOpen: false,
      url_img: '',
      nameFb: '',
    };
  }

  componentDidMount = () => {
    AsyncStorage.getItem('idUserFacebook').then(myvalue => {
      this.setState({idFacebook: myvalue});
    });
    AsyncStorage.getItem('nameUserFacebook').then(myvalue => {
      this.setState({nameFb: myvalue});
    });
    AsyncStorage.getItem('url_img').then(myvalue => {
      this.setState({url_img: myvalue});
    });
    this.startHanding(this.props);
  };

  startHanding = async props => {
    try {
      var rankRef = firebase
        .database()
        .ref(
          '/Ranking/' +
            (await AsyncStorage.getItem('idUserFacebook')).toString(),
        );
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
      console.log(arrTMP.length);
      arrTMP.length === 0
        ? firebase
            .database()
            .ref('Ranking')
            .child((await AsyncStorage.getItem('idUserFacebook')).toString())
            .set({
              idFB: (await AsyncStorage.getItem('idUserFacebook')).toString(),
              nameShow: (await AsyncStorage.getItem(
                'nameUserFacebook',
              )).toString(),
              Score: 0,
            })
            .then(AsyncStorage.setItem('Score', '0'))
        : AsyncStorage.setItem('Score', arrTMP[0].toString()).then(
            this.setState({modalOpen: true}),
          );

      setTimeout(() => {
        props.navigation.navigate('Feed');
      }, 1500);
    } catch (error) {
      this.setState({
        response: error.toString(),
      });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalOpen}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{height: 200, width: 400}}
              resizeMode="contain"
              source={require('../constaints/IMG/welcome_icon.png')}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <Image
                style={{height: 80, width: 80, borderRadius: 30}}
                source={{uri: this.state.url_img}}
              />
              <Text style={styles.modalText}>{this.state.nameFb} </Text>
            </View>

            <View style={{backgroundColor: '#2196F3', flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({modalOpen: false});
                }}>
                {/* <Image
                  style={{height: 200, width: 400}}
                  resizeMode="contain"
                  source={require('../constaints/IMG/muiten_icon.png')}
                /> */}
                <Image
                  style={{height: 90, width: 200}}
                  resizeMode="cover"
                  source={require('../constaints/IMG/let_go.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" color="red" />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 27,
    fontWeight: 'bold',
    color: 'black',
  },
});

HandingCheckUserInFirebase.navigationOptions = {
  header: null,
};
