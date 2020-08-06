import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDTNM7ICfGaTlvCYx-VIMmENzAuDHjqBGY",
    authDomain: "clone-75a9a.firebaseapp.com",
    databaseURL: "https://clone-75a9a.firebaseio.com",
    projectId: "clone-75a9a",
    storageBucket: "clone-75a9a.appspot.com",
    messagingSenderId: "1071051286176",
    appId: "1:1071051286176:web:35dee44bb96b48d2624bc5",
    measurementId: "G-997Y0M6ZM8"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };