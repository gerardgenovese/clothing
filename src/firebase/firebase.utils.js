import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBG43OKDMJ6DL765dJtR-cLF9cqzcnQO_8",
  authDomain: "crwn-db-1-b338d.firebaseapp.com",
  databaseURL: "https://crwn-db-1-b338d.firebaseio.com",
  projectId: "crwn-db-1-b338d",
  storageBucket: "crwn-db-1-b338d.appspot.com",
  messagingSenderId: "1083796069199",
  appId: "1:1083796069199:web:9481854af7f0be31e5433a",
  measurementId: "G-5RNXMJ3P14"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;