import React from 'react'
import { BrowserRouter as Router, Switch, } from "react-router-dom";
import Dashboard from './Components/Dashboard'
import ProtectedRoute from './Components/ProtectedRoute'
import AvblDogs from './Components/AvblDogs'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <ProtectedRoute path='/avbl-dogs/:breed' component={AvblDogs} />
                <ProtectedRoute path='/' component={Dashboard} />
            </Switch>
        </Router>
    )
}

export default Routes