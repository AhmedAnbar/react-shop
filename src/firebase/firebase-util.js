import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyAemb4LJDSTdwiAITri_xU60rn5VP_7M40",
  authDomain: "reactshop-1ae12.firebaseapp.com",
  databaseURL: "https://reactshop-1ae12.firebaseio.com",
  projectId: "reactshop-1ae12",
  storageBucket: "",
  messagingSenderId: "600603308442",
  appId: "1:600603308442:web:3eea3055ed202b34010a23",
  measurementId: "G-ZNKNRR4Z33"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  
  if(!snapShot.exists) {
    const {displayName, email} = userAuth
    const createdAt = new Date()

  try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user: ', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

const faceProvider = new firebase.auth.FacebookAuthProvider()
faceProvider.setCustomParameters({ prompt: 'select_account' })
export const signInWithFaceBook = () => auth.signInWithPopup(faceProvider)

export default firebase
