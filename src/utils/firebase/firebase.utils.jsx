

import {initializeApp} from 'firebase/app'

import {
  getAuth,
  signInWithRedirect, 
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
}  
  from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc

} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCDnEj7nxJXwS2c8nr-4flsa3YlINlXMsg",
  authDomain: "crwn-clothing-db-e158c.firebaseapp.com",
  projectId: "crwn-clothing-db-e158c",
  storageBucket: "crwn-clothing-db-e158c.appspot.com",
  messagingSenderId: "200349588221",
  appId: "1:200349588221:web:f929f81a0d786ba2593c94"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
    prompt:"select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider)
export const signInWithGoogleRedirect = () =>signInWithRedirect(auth,googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async(userAuth) =>{
  if(!userAuth) return
  
  const userDocRef = doc(db, 'users',userAuth.uid);
  

  const userSnapshot = await getDoc(userDocRef)
  
  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef,{
        displayName,
        email,
        createdAt
      });
    } catch(error){

     console.log('error creating the user', error.message)
  
    }
  }

  return userDocRef
};

export const createAuthUserWithEmailAndPassword = async(email,password)=>{
  if(!email|| !password) return

  return await createAuthUserWithEmailAndPassword(auth, email, password)
}
export const signInAuthUserWithEmailAndPassword = async(email,password)=>{
  if(!email|| !password) return

  return await signInWithEmailAndPassword(auth, email, password)
};