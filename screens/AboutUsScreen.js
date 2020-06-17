import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class AboutUsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Image
            style={styles.LGOption}
            resizeMode="contain"
            source={require('../constaints/IMG/hcmue_icon.png')}
          />
          <View style={{padding: 10}}>
            <Text style={{fontSize: 15, fontStyle: 'italic'}}>
              APP CREATED BY
            </Text>
          </View>
        </View>

        <View style={styles.onceMem}>
          <Image
            style={styles.LGMember}
            resizeMode="contain"
            source={require('../constaints/IMG/member.png')}
          />
          <Text>Nguyễn Cảnh Quyết - 43.01.104.146</Text>
        </View>

        <View style={styles.onceMem}>
          <Image
            style={styles.LGMember}
            resizeMode="contain"
            source={require('../constaints/IMG/member.png')}
          />
          <Text>Nguyễn Tấn Tài - 43.01.104.152</Text>
        </View>

        <View style={styles.onceMem}>
          <Image
            style={styles.LGMember}
            resizeMode="contain"
            source={require('../constaints/IMG/member.png')}
          />
          <Text>Đặng Phúc Toàn - 43.01.104.183</Text>
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
    padding: 40,
  },
  LGOption: {
    height: 100,
    width: 150,
  },
  LGMember: {
    height: 50,
    width: 50,
  },
  onceMem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    marginTop: 3,
    borderRadius: 30,
  },
});
