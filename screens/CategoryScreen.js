import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import CATE from '../constaints/Category';
// import {Icon} from 'react-native-vector-icons/Icon';

export default class CategoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {Themelist: false};
  }

  _handleNextPress(category) {
    this.props.navigation.navigate('Quiz', {
      cateid: category,
    });
  }

  // nextRoute = {
  //   component: QuizScreen,
  //   title: 'Quiz',
  //   passProps: {cateid: 'sports'},
  // };
  _ChangeTheme = () => {
    this.state.Themelist === true
      ? this.setState({Themelist: false})
      : this.setState({Themelist: true});
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text>TOPICS</Text>
        </View>
        {this.state.Themelist === false ? (
          <View style={styles.MenuScreenTable}>
            {CATE.map(item => {
              return (
                <View key={item.categoryid} style={styles.CategoryContainer}>
                  <TouchableOpacity
                    style={styles.Category}
                    onPress={() => {
                      this._handleNextPress(item.categoryid);
                    }}>
                    <View style={{alignItems: 'center'}}>
                      <Image
                        style={{height: '100%', width: '100%'}}
                        source={item.urlIcon}
                      />
                    </View>
                  </TouchableOpacity>
                  <View
                    style={{
                      alignItems: 'center',
                      padding: 5,
                      color: '#FFF',
                      fontSize: 14,
                      fontWeight: 'bold',
                    }}>
                    <Text
                      style={{
                        color: 'green',
                        fontSize: 14,
                        fontWeight: 'bold',
                      }}
                      numberOfLines={2}>
                      {item.name}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        ) : (
          <View style={styles.MenuScreenList}>
            <ScrollView>
              {CATE.map(item => {
                return (
                  <TouchableOpacity
                    key={item.categoryid}
                    onPress={() => {
                      this._handleNextPress(item.categoryid);
                    }}>
                    <View style={styles.itemlist}>
                      <Text numberOfLines={1}>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        )}

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
                source={require('../constaints/IMG/icon_settingview.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding : 5
  },
  title: {
    flex: 0.1,
    borderWidth: 1,
    borderColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'vincHand',
    borderRadius : 10
  },
  MenuScreenTable: {
    flex: 0.85,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor: '#39C5D6',
    // borderWidth: 1,
    // borderColor: 'green',
    padding: 10,
    marginTop: 0,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius : 20
  },
  MenuScreenList: {
    flex: 0.85,
    // justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  navi: {
    flex: 0.1,
    borderWidth: 1,
    borderColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius : 20
  },
  CategoryContainer: {
    width: '33.33%',
    height: '25%',
    // borderWidth: 1,
    // borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
  },
  itemlist: {
    borderRadius: 10,
    height: 50,
    borderWidth: 1,
    padding: 3,
    marginTop: 10,
    backgroundColor: '#33CCCC',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Category: {
    height: 62.5,
    width: 62.5,
    margin: 2,
    justifyContent: 'center',
    //borderRadius: 15,
    // borderWidth: 2,
    // borderColor: '#FBC02D',
    // backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
});

CategoryScreen.navigationOptions = {
  header: null,
};
