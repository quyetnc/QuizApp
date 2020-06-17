import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AppNavigator from './navigation/AppNavigator';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     <AppNavigator/>
    );
  }
}


// import React, { Component } from 'react';
// import { View, Text } from 'react-native';

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//   render() {
//     return (
//       <View>
//         <Text> App </Text>
//       </View>
//     );
//   }
// }
