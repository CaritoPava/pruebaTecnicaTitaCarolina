import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";


export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {

  return (
    <Route {...rest}
      component={(props) => (
        (isAuthenticated)
          ? (<Component {...props} />)
          : (<Redirect to="/auth/login" />)
      )}

    />
  )
}

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}