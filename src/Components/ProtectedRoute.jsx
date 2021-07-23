import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import { LOGIN_USER } from '../Constants'
import { getObject } from '../DB/LocalStorage'

class ProtectedRoute extends React.Component {

    render() {
        const user = getObject(LOGIN_USER);
        const { component: Component, ...rest } = this.props
        return (
            <Route {...rest} render={
                props => user && Object.keys(user).length > 0 ?
                    <div><Header /><Component {...rest} {...props} /></div>
                    : <Login />
            } />
        )
    }
}

export default ProtectedRoute;