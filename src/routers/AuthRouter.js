import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginView } from '../components/auth/LoginView';
import { RegisterView } from '../components/auth/RegisterView';

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route
                        exact
                        path="/auth/login"
                        component={LoginView}
                    />

                    <Route
                        exact
                        path="/auth/register"
                        component={RegisterView}
                    />

                    <Redirect to="/auth/login" />

                </Switch>
            </div>

        </div>
    )
}
