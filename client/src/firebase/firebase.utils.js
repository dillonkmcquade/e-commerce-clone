import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtIUW1Kg1lfdPu7lBj7RSRYTvgGs5SMrY",
  authDomain: "green-mountain-gear.firebaseapp.com",
  databaseURL: "https://green-mountain-gear.firebaseio.com",
  projectId: "green-mountain-gear",
  storageBucket: "green-mountain-gear.appspot.com",
  messagingSenderId: "806851228157",
  appId: "1:806851228157:web:063ddd7bf7844272da2994",
  measurementId: "G-PHENRSS68V"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
