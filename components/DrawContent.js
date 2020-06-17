import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native';
// import images from '../utils/Images';
// import {DrawerItems, SafeAreaView} from 'react-navigation';
import {LoginManager} from 'react-native-fbsdk';
import AsyncStorage from '@react-native-community/async-storage';

class componentName extends Component {
  state = {
    isLogin: '',
    nameUser: '',
    Score: '',
    url_img: '',
    idUser: '',
  };
  componentDidMount = () => {
    AsyncStorage.getItem('url_img').then(myvalue => {
      this.setState({url_img: myvalue});
    });
    AsyncStorage.getItem('nameUserFacebook').then(myvalue => {
      this.setState({nameUser: myvalue});
    });
    AsyncStorage.getItem('Score').then(myvalue => {
      this.setState({Score: myvalue});
    });
    AsyncStorage.getItem('idUserFacebook').then(myvalue => {
      this.setState({idUser: myvalue});
    });
    AsyncStorage.getItem('isLogin').then(myvalue => {
      this.setState({isLogin: myvalue});
    });
  };
  logOut = () => {
    AsyncStorage.removeItem('idUserFacebook');
    AsyncStorage.removeItem('nameUserFacebook');
    AsyncStorage.removeItem('Score');
    AsyncStorage.removeItem('url_img');
    AsyncStorage.removeItem('isLogin');
    LoginManager.logOut();
    this.props.navigation.navigate('Dashboard');
  };
  render() {
    // this._retrieveData();
    return (
      <View style={styles.container}>
        <View style={styles.wrapTitle}>
          <Text style={styles.titleText}>Welcome To Quiz App</Text>
        </View>
        <View style={styles.WrapContent}>
          {this.state.isLogin === 'true' ? (
            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 15}}>
                ~ Hello : {this.state.nameUser} ~
              </Text>
              <Text style={{fontSize: 15}}>Your ID : {this.state.idUser}</Text>
              <Image
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 30,
                  borderWidth: 1,
                  borderColor: 'red',
                  marginTop: 6,
                }}
                source={{uri: this.state.url_img}}
              />
              <Text style={{fontSize: 15}}>
                Your Score :{' '}
                <Text style={{color: 'blue'}}>{this.state.Score} Points </Text>
              </Text>
              <TouchableOpacity onPress={() => this.logOut()}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 20,
                    borderColor: 'pink',
                    backgroundColor: '#008080',
                    padding: 10,
                  }}>
                  <Text>LOGOUT</Text>
                  <Image
                    style={styles.LG}
                    source={require('../constaints/IMG/logout_icon.png')}
                  />
                </View>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderRadius: 20,
                  borderColor: 'pink',
                  backgroundColor: '#008080',
                  padding: 10,
                }}>
                <Text>LOGIN</Text>
                <Image
                  style={styles.LG}
                  source={require('../constaints/IMG/login_icon.png')}
                />
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}
export default componentName;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  wrapTitle: {
    flex: 0.1,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  WrapContent: {
    flex: 0.9,
    marginTop: 10,
    alignItems: 'center',
  },
  LG: {
    height: 60,
    width: 60,
  },
});
// <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>

// <View style={{height:100,backgroundColor:'#99FFCC',justifyContent:'center',alignItems:'center'}}>
//   <Image style={{width:50,height:50,borderRadius:50}} source={{uri:this.state.avatar}} />
//   <Text>{this.state.name}</Text>
// </View>

// <DrawerItems {...this.props} />
// <TouchableOpacity
// onPress={()=>Linking.openURL('https://tuhocplus.com')}
// >
// <Text style={{margin: 16,fontWeight: 'bold',}}>Policy</Text>
// </TouchableOpacity>
// <TouchableOpacity onPress={()=>{
// Alert.alert(
//   'Log out',
//   'Do you want to logout?',
//   [
//     {text: 'Cancel', onPress: () => {return null}},
//     {text: 'Confirm', onPress: () => {
//       AsyncStorage.clear();
//       LoginManager.logOut();
//       this.props.navigation.navigate('Welcome', {itemId:1});
//     }},
//   ],
//   { cancelable: false }
// );
// //props.navigation.navigate('Welcome') ;
// }
// }>

// <Text style={{margin: 16,fontWeight: 'bold',}}>Logout</Text>
// </TouchableOpacity>
// </SafeAreaView>
