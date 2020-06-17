import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import formatTime from 'minutes-seconds-milliseconds';
import Question from '../components/Question';
import Options from '../components/Options';
import Results from '../components/Results';

export default class QuizScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz: [],
      counter: 0,
      bgColors: {
        math: '#0099FF',
        physics: '#785549',
        chemistry: '#8CC152',
        biology: '#FBC02D',
        literature: '#FBC02D',
        english: '#FBC02D',
        music: '#FBC02D',
        art: '#FBC02D',
        mythology: '#FBC02D',
      },
      category: 'books',
      score: 0,
      showNext: true,
      end: false,
      timeElapsed: null,
      running: false,
      startTime: null,
    };
  }

  callAPI = async cateid => {
    const {listArticles} = this.state;
    const response = await fetch(
      `https://opentdb.com/api.php?amount=5&type=multiple&category=${cateid}`,
    );
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    let _quiz = jsonResponse.results;
    this.setState({
      quiz: _quiz,
    });
  };

  componentDidMount() {
    const {navigation} = this.props;
    let categoryid = navigation.getParam('cateid', 'NoData');
    this.callAPI(categoryid);
  }

  updateState = () => {
    this.incremenetScore();
  };
  //count question
  incremenetCounter = () => {

    this.setState(prevState => {
      if (prevState.counter < this.state.quiz.length - 1) {
        prevState.counter += 1;
        prevState.showNext = true;
      } else prevState.end = true;
      return {
        counter: prevState.counter,
        showNext: prevState.showNext,
        end: prevState.end,
      };
    });
  };

  showNext = () => {
    this.setState({
      showNext: true,
    });
  };

  incremenetScore = () => {
    this.setState(prevState => {
      let _score =
        prevState.counter < this.state.quiz.length
          ? prevState.score + 1
          : prevState.score;
      return {score: _score};
    });
  };

  handleStartPress() {
    if (this.state.running) {
      clearInterval(this.interval); 
      this.setState({ running: false });
      return
    }
    this.setState({ startTime: new Date() });
    this.interval = setInterval(() => {
      this.setState({
        timeElapsed: new Date() - this.state.startTime,
        running: true
      });
    }, 30);
  }


  render() {
    return (
      <View style={[styles.QuizContainer1, {backgroundColor: '#ccccff'}]}>
        {this.state.quiz.length === 0 ? (
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size="large" color="#FFFDE7" />
          </View>
        ) : this.state.end === true ? (
          <Results
            updateState={() =>
              this.setState({end: false, counter: 0, score: 0})
            }
            score={this.state.score}
            navigation={this.props.navigation}
          />
        ) : (
          <View style={styles.QuizContainer2}>
            <View style={styles.InfoCardContainer}>
              <Text style={styles.ScoreBox}>
                {'Time' + '\n' + formatTime(this.state.timeElapsed)}
              </Text>
              <Text style={styles.ScoreBox}>
                {'Score' + '\n' + this.state.score}
              </Text>
            </View>
            <View style={styles.QuizCardContainer3}>
              <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={styles.QuizCard}>
                  <Question
                    question={this.state.quiz[this.state.counter].question}
                  />
                  <Options
                    updateState={this.updateState}
                    chuyen={this.incremenetCounter}
                    correct={this.state.quiz[this.state.counter].correct_answer}
                    incorrect={
                      this.state.quiz[this.state.counter].incorrect_answers
                    }
                  />
                </View>
              </View>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.CategoryBox}>
                {this.state.counter + 1 + ' / ' + this.state.quiz.length}
              </Text>
            </View>
          </View>
        )}
      </View>
    );
  }
}

QuizScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  QuizContainer1: {
    flex: 1,
    // backgroundColor: QuizScreen.state.bgColors.sports, //'#41C6E6', //'#FBC02D',
    // borderWidth: 1,
    // borderRadius: 5,
    // borderColor: '#000',
  },
  QuizContainer2: {
    marginTop: 0,
    paddingTop: 0,
    flexDirection: 'column',
    flex: 1,
    // backgroundColor: '#FBC02D',
    alignItems: 'center',
    // borderWidth: 1,
    // borderRadius: 5,
    // borderColor: '#000',
  },
  QuizCardContainer3: {
    // borderWidth: 1,
    // borderRadius: 10,
    // borderColor: '#000',
    flex: 5,
    margin: 10,
    marginTop: 0,
    // backgroundColor: '#FFFDE7',
    flexDirection: 'row',
    color: '#444444',
  },
  QuizCard: {
    flex: 8,
    padding: 5,
  },
  InfoCardContainer2: {
    // borderWidth: 1,
    // borderRadius: 2,
    // borderColor: "#000",
    flex: 1,
    flexDirection: 'row',
    justifyContent :'space-around'
  },
  InfoCardContainer: {
    // borderWidth: 1,
    // borderRadius: 2,
    // borderColor: "#000",
    elevation: 1,
    flex: 1.3,
    flexDirection: 'row',
    width: 300,
    margin: 5,
    marginBottom: 5,
  },
  Box: {
    textAlign: 'center',
    // borderWidth: 1,
    // borderRadius: 5,
    // borderColor: '#000',
    padding: 5,
    margin: 5,
    flex: 1,
  },
  ScoreBox: {
    textAlign: 'center',
    // borderWidth: 1,
    // borderRadius: 5,
    // borderColor: '#000',
    color: '#FFFDE7',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 2,
    margin: 10,
    flex: 1,
  },
  CategoryBox: {
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: 18,
    borderColor: 'transparent',
    padding: 2,
    margin: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    //flex:1,
    //alignItems: 'center',
    //alignContent: 'center',
  },
  score: {
    width: 60,
    height: 60,
    backgroundColor: '#FF9900',
    borderRadius: 50,
    padding: 20,
    alignItems: 'center',
    alignContent: 'center',
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
  container_options: {
    flex: 6,
  },
});
