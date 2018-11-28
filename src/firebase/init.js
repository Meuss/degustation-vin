import firebase from 'firebase/app';
// eslint-disable-next-line
import firestore from 'firebase/firestore';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyC2bPxYsgKGiXaZypAUbVu5J9lU77m-6kw',
  authDomain: 'degustation-vin.firebaseapp.com',
  databaseURL: 'https://degustation-vin.firebaseio.com',
  projectId: 'degustation-vin',
  storageBucket: 'degustation-vin.appspot.com',
  messagingSenderId: '516189020710',
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
