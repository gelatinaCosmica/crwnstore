import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA6Ox5F3fvwJpSumLqPkOySKxa51L-A9PI",
  authDomain: "crwn-db-60f5c.firebaseapp.com",
  projectId: "crwn-db-60f5c",
  storageBucket: "crwn-db-60f5c.appspot.com",
  messagingSenderId: "35776943835",
  appId: "1:35776943835:web:98a7bdaf3425e6b83edefe",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
