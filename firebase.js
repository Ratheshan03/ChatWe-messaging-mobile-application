import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHsAopl1AO3iNoGWECN8XWB58zIg9dBtk",
  authDomain: "signal-clone-44df1.firebaseapp.com",
  projectId: "signal-clone-44df1",
  storageBucket: "signal-clone-44df1.appspot.com",
  messagingSenderId: "820304129197",
  appId: "1:820304129197:web:fef2fda1a0b54e113b6a24",
  measurementId: "G-HSYP5KRBCG",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
