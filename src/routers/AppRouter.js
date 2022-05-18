import { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { firebase } from '../firebase/firebaseConfig'
import { AuthRouter } from './AuthRouter'
import { login } from '../actions/auth'
import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'
import { MainView } from '../components/main/MainView';


export const AppRouter = () => {

  const dispatch = useDispatch()

  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName))
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
      setChecking(false)
    })
  }, [dispatch, setChecking, setIsLoggedIn])

  if (checking) {
    return (<h1>Cargando, por favor espere..</h1>)
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isAuthenticated={isLoggedIn}
          />

          <PrivateRoute
            exact
            isAuthenticated={isLoggedIn}
            path="/"
            component={MainView}
          />

          <Redirect to="/auth/login" />


        </Switch>
      </div>
    </Router>
  )
}

