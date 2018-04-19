import React from 'react';
import {Route, Redirect} from 'react-router-dom';

import DefaultLayout from '../../containers/DefaultRoute';

const PrivateRoute = ({component: Component, isAuthenticated, ...rest}) => (
    <Route {...rest} render={props => (
        isAuthenticated ? (
            <DefaultLayout component={Component} {...props}/>
        ) : (
            <Redirect to={{
                pathname: '/sign/in',
                state: {from: props.location}
            }}/>
        )
    )}/>
);

export default PrivateRoute;