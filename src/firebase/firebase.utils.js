import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBrqoAX711qCWJsIxH6X0KE6eMYagixgk8",
    authDomain: "my-tracking-app-37aa5.firebaseapp.com",
    databaseURL: "https://my-tracking-app-37aa5.firebaseio.com",
    projectId: "my-tracking-app-37aa5",
    storageBucket: "my-tracking-app-37aa5.appspot.com",
    messagingSenderId: "139330362117",
    appId: "1:139330362117:web:45a9c5b2c83b0231f3f56c",
    measurementId: "G-6YNS1BS4SM"
  };

  export const createUserProfileDocument = async (userAuth,additionalData)=>{
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists)
    {
      const {displayName,email} = userAuth;
      const createdAt = new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      }
      catch(error)
      {
        console.log('error creating user',error.message);
        
      }
    }
    return userRef;    
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;