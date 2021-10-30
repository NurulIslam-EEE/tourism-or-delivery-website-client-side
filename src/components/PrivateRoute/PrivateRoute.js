import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Route, Redirect } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase'

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useFirebase();
    if (loading) {
        return <Spinner animation='border' variant='danger' />
    }
    console.log(user);
    return (
        <Route
            {...rest}
            render={({ location }) => user?.email ? children : <Redirect
                to={{
                    pathname: '/login',
                    state: { from: location }
                }}
            ></Redirect>} >
        </Route>
    );
};

export default PrivateRoute;