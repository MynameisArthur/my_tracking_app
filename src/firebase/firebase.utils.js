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
  export const createTrackerDocument = async (uid,objectItem)=>{
    if(!uid) return;
    const trackerRef = firestore.collection(`trackers`);    
      try{
        await trackerRef.doc().set({userId: uid,...objectItem});
        console.log('New tracker Added',objectItem);
      }
      catch(error)
      {
        console.log('error creating user',error.message);        
      } 
    return trackerRef;
  };
  export const removeTrackerDocument = async (uid,date)=>{
    if(!uid) return;
    const trackerRef = await firestore.collection('trackers');  
    const data = await trackerRef.where('date','==',date).get();  
    const docId = data.docs[0].id;  
      try{
        await trackerRef.doc(docId).delete();
        console.log(`tracker removed`);
      }
      catch(error)
      {
        console.log('error creating user',error.message);        
      } 
    return trackerRef;
  }



  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;