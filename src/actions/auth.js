import { types } from "../types/types";
import { firebase, googleAuthProvider } from '../firebase/firebaseConfig'

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(
          login(user.uid, user.displayName)
        )
      })
      .catch(err => { console.error(err) })
  }

}

export const startRegisterEmailPassword = (email, password, name, lastname) => {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name })
        dispatch(
          login(user.uid, user.displayName)
        )
      })
      .catch(err => { console.error(err) })
  }
}

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(
          login(user.uid, user.displayName)
        )
      })
      .catch(err => console.error(err))
  }
}

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName
  }
})

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut()
      .then(() => {
        dispatch(logout())
      })
      .catch(err => console.error(err))
  }
}

export const logout = () => ({
  type: types.logout
})