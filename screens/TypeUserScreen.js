import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {LoginManager, LoginResult, AccessToken} from 'react-native-fbsdk';
import AsyncStorage from '@react-native-community/async-storage';

export default class TypeUserScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {nameFb: ''};
  }

  Login = navigation => {
    let nameFB;
    initUser = token => {
      fetch(
        'https://graph.facebook.com/v2.5/me?fields=id,name,email,picture&access_token=' +
          token,
      )
        .then(response => response.json())
        .then(json => {
          console.log(json);
          AsyncStorage.setItem('idUserFacebook', json.id);
          AsyncStorage.setItem('nameUserFacebook', json.name);
          AsyncStorage.setItem('isLogin', 'true');
          AsyncStorage.setItem('url_img', json.picture.data.url);
          
          this.setState({
            nameFb: json.name,
          });
          nameFB = json.name;
        })
        .catch(() => {
          reject('ERROR GETTING DATA FROM FACEBOOK');
        });
    };
    // SetStatus = () => {
    //   this.setState({
    //     status: 'Login Done',
    //   });
    // };
    LoginManager.logInWithPermissions(['public_profile']).then(
      function(result) {
        if (result.isCancelled) {
          alert('Login was cancelled');
        } else {
          // this.SetStatus();

          AccessToken.getCurrentAccessToken().then(data => {
            const {accessToken} = data;
            initUser(accessToken);
          });
          // alert(
          //   'Login was successful with permissions: ' + nameFB,
          //   // result.grantedPermissions.toString(),
          // );
          setTimeout(() => {
            navigation.navigate('HandingUserFb');
            // this.setState({modalOpen: false});
          }, 1000);
        }
      },
      function(error) {
        alert('Login failed with error: ' + error);
      },
    );
    // AsyncStorage.setItem('idUserFacebook', this.state.DataFetctFB.id);
    // AsyncStorage.setItem('nameUserFacebook', this.state.DataFetctFB.name);
    console.log(this.state.DataFetctFB);
  };
  componentDidMount = () => {
    //  AsyncStorage.setItem('idUserFacebook', '12312312312');
    // AsyncStorage.removeItem('idUserFacebook');
  };
  logOut = () => {
    // this.setState({
    //   status: 'No Login',
    // });
    alert('logoutDone');
    LoginManager.logOut();
  };
  Remove = () => {
    AsyncStorage.removeItem('idUserFacebook');
    AsyncStorage.removeItem('nameUserFacebook');
    AsyncStorage.removeItem('isLogin');
  };
  render() {
    return (
      <View style={styles.container}>   
        <View style={{alignItems: 'center', paddingBottom: 30}}>
          <Text style={{fontSize: 25}}>Choose Type Play</Text>
        </View>
        <View style={styles.wrappType}>
          
          <View
            style={{flex: 0.4, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => this.Login(this.props.navigation)}>
              <Image
                style={{height: 100, width: 100}}
                source={require('../constaints/IMG/facebook_icon.png')}
              />
            </TouchableOpacity>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text>Play with Facebook</Text>
            </View>
          </View>
          <View
            style={{flex: 0.2, justifyContent: 'center', alignItems: 'center'}}>
            <Text>OR</Text>
          </View>

          <View
            style={{flex: 0.4, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Feed')}>
              <Image
                style={{height: 100, width: 100}}
                source={require('../constaints/IMG/guest_icon.png')}
              />
            </TouchableOpacity>
            <View style={{justifyContent: 'center'}}>
              <Text>Play as Guest</Text>
            </View>
          </View>
        </View>
        <View style={{marginTop: 30, alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Dashboard')}>
            <Image
              style={{height: 80, width: 80}}
              resizeMode="contain"
              source={require('../constaints/IMG/icon_back_use_inaboutus.png')}
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
  wrappType: {
    flexDirection: 'row',
  },
  modalText: {
    fontSize: 27,
    fontWeight: 'bold',
    color: 'black',
  },
});

TypeUserScreen.navigationOptions = {
  header: null,
};
