
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDZD26PKSMsTVVVSKc9qsFj4ZGsLD_VK3A",
    authDomain: "tinder-clone-b2bc6.firebaseapp.com",
    databaseURL: "https://tinder-clone-b2bc6.firebaseio.com",
    projectId: "tinder-clone-b2bc6",
    storageBucket: "tinder-clone-b2bc6.appspot.com",
    messagingSenderId: "1024893466730",
    appId: "1:1024893466730:web:04ff00d47ee3fb61a17213",
    measurementId: "G-ZR2MEKDET0"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();
  
  export default database;