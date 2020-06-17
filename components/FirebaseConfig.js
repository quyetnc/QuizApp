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