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

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
