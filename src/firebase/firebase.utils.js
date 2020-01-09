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

//take user auth object from app.js componentdidmount and store inside of db
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  //check if there is data and save displayname and email as the userAuth
  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    //create new user
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(err){
      console.log('error creating user', err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;