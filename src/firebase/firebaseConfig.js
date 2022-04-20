import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCDc1Lp_ku9z_MoKkx_yXz8p09H6Ztfmhw",
  authDomain: "prueba-tecnica-tita.firebaseapp.com",
  projectId: "prueba-tecnica-tita",
  storageBucket: "prueba-tecnica-tita.appspot.com",
  messagingSenderId: "272844251405",
  appId: "1:272844251405:web:063b2c0cafdd7e3ece9044",
  measurementId: "G-KXMKN2XQ2D"
};


firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
  db,
  googleAuthProvider,
  firebase
}