// import React, {Component} from 'react';
// import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
// import firebase from 'firebase';
// var firebaseConfig = {
//   apiKey: 'AIzaSyA1qA5o3ceMWxShuG2HB7yiSrzRiuyrkY8',
//   authDomain: 'quizapp-cc0d8.firebaseapp.com',
//   databaseURL: 'https://quizapp-cc0d8.firebaseio.com',
//   projectId: 'quizapp-cc0d8',
//   storageBucket: 'quizapp-cc0d8.appspot.com',
//   messagingSenderId: '836444575226',
//   appId: '1:836444575226:web:7577845b2bf782ee938043',
// };
// // Initialize Firebase
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// export default class RankScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {arr: [], IsLoading: false};
//   }
//   componentDidMount = async () => {
//     var rankRef = firebase.database().ref('/Ranking');
//     const snapshot = await rankRef.once('value');
//     // console.log(snapshot.val());
//     const convertSnap = snapshotToArray(snapshot);
//     function snapshotToArray(snapshot) {
//       var returnArr = [];

//       snapshot.forEach(function(childSnapshot) {
//         var item = childSnapshot.val();
//         item.key = childSnapshot.key;
//         returnArr.push(item);
//       });

//       return returnArr;
//     }
//     var arrTMP = convertSnap;
//     arrTMP.sort(function(a, b) {
//       if (a.Score > b.Score) return -1;
//       if (a.Score < b.Score) return 1;
//       return 0;
//     });
//     this.setState({
//       IsLoading: true,
//       arr: arrTMP,
//     });
//     // console.log(this.state.arr);

//     // console.log('------------------------------');
//   };

//   // componentDidMount = () => {
//   //   var Arr = [];
//   //   firebase
//   //     .database()
//   //     .ref('/Ranking')
//   //     .once('value')
//   //     .then(function(snapshot) {
//   //       Arr = snapshot.val();
//   //     });
//   //   console.log(Arr);
//   // };
//   render() {
//     return (
//       <View style={styles.container}>
//         {this.state.IsLoading === false ? (
//           <View
//             style={{
//               flex: 1,
//               flexDirection: 'row',
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}>
//             <ActivityIndicator size="large" color="red" />
//           </View>
//         ) : (
//           <View style={styles.content}>
//             {console.log(this.state.arr)}
//             <Text>{this.state.arr.length}</Text>
//           </View>
//         )}
//       </View>
//     );
//   }
// }
// RankScreen.navigationOptions = {
//   header: null,
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   content: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class RankScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {dataRank: []};
  }
  componentDidMount = () => {
    this.DataFromFirebase();
  };
  DataFromFirebase = () => {
    const {navigation} = this.props;
    const rankData = navigation.getParam('data', []);
    console.log(rankData);
    this.setState({dataRank: rankData});
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapTitle}>
          <Text style={styles.txtTitleRanking}> Ranking Quiz </Text>
        </View>
        <View style={styles.wrapContent}>
          <FlatList
            data={this.state.dataRank}
            renderItem={({item, index}) => (
              <View style={styles.Rankonce}>
                <View
                  style={{
                    flex: 0.7,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    marginLeft: 5,
                  }}>
                  <Text style={{fontSize: 16}}>
                    Top {(index + 1).toString()}. {item.nameShow}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 0.3,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                  }}>
                  <Text style={{fontSize: 16}}>{item.Score} Points</Text>
                </View>
              </View>
            )}
            keyExtractor={item => item.key}
            style={styles.FlatList}
          />
        </View>
        <View style={styles.navi}>
          <View
            style={{width: 50, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Dashboard')}>
              <Image
                style={{height: 40, width: 50}}
                source={require('../constaints/IMG/icon_back.png')}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{width: 50, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => this._ChangeTheme()}>
              <Image
                style={{height: 40, width: 50}}
                source={require('../constaints/IMG/let_play_icon.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      // <View>
      //   {this.state.dataRank.map(item => {
      //     return (
      //       <View key={item.key}>
      //         <Text>{item.Score}</Text>
      //       </View>
      //     );
      //   })}X
      // </View>
    );
  }
}

RankScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  wrapTitle: {
    flex: 0.1,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: 'red',
  },
  txtTitleRanking: {
    fontSize: 30,
  },
  wrapContent: {
    flex: 0.8,
  },
  navi: {
    flex: 0.1,
    borderWidth: 1,
    borderColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius : 20
  },
  Rankonce: {
    height: 70,
    margin: 2,
    justifyContent: 'center',
    borderRadius: 18,
    borderWidth: 2,
    borderColor: 'transparent',
    backgroundColor: '#F1F8EA', /// #F1F8EA/
    flexDirection: 'row',
    borderColor: 'green',
  },
  FlatList: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'pink',
  },
});
