import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSxRSgAwEtK098QEtfj6II3Y7hr3WVLx8",
  authDomain: "clone-app-238e1.firebaseapp.com",
  projectId: "clone-app-238e1",
  storageBucket: "clone-app-238e1.appspot.com",
  messagingSenderId: "36033277276",
  appId: "1:36033277276:web:debb749a313d8e5f0f2599",
  measurementId: "G-220S5NS3TH"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth= firebase.auth();

  export {db,auth};