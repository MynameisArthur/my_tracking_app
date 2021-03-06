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
  export const getCurrentUser = ()=>{
    return new Promise((resolve,reject)=>{
      const unsubscribe = auth.onAuthStateChanged(userAuth=>{
        unsubscribe();
        resolve(userAuth);
      },reject);
    });
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
  export const createTrackerDocument = async ({uid,objectItem:{payload}})=>{   
    if(!uid) return;
    const trackerRef = firestore.collection(`trackers`);    
      try{
        await trackerRef.doc().set({userId: uid,...payload});       
      }
      catch(error)
      {
        console.log('error adding tracker',error.message);        
      } 
    return trackerRef;
  };
  export const removeTrackerDocument = async ({payload,user})=>{
    if(!user.id) return;
    const trackerRef = await firestore.collection('trackers');
    let data = await trackerRef.where('date','==',payload).where('userId','==',user.id).get();
      if(data && data.docs[0])
      {
        const docId = data.docs[0].id;  
          try{
            await trackerRef.doc(docId).delete();
            console.log(`tracker removed`);
          }
          catch(error)
          {
            console.log('error removing tracker',error.message);        
          } 
      }
      else{
        alert('You can\'t remove this tracker!');
        return console.error('You can\'t remove this tracker!');
      }
    return trackerRef;
  }

  firebase.initializeApp(config);

  export const convertCategoriesSnapshotToMap = (categories)=>{
    const transformedCategories = categories.docs.map(doc=>{
      const {title} = doc.data();
      return {
        title,
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id
      };
    });
   return transformedCategories.reduce((accumulator,category)=>{
     accumulator[category.title.toLowerCase()] = category;
     return accumulator;
   },{});    
  };
  export const trackersList = (trackers)=>{
    return trackers.docs.map(doc=>{
      const {item,description,date,category,userId} = doc.data();
      return {
        item,
        description,
        date,
        category,
        userId,
        routeName: encodeURI(category),
        id:doc.id
      };
    }).sort((a,b)=>a.date>b.date);
  };

  

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(googleProvider);

  export default firebase;