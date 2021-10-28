import React from 'react';
import useFirebase from '../hooks/useFirebase';

const Login = () => {
    const { signInUsingGoogle } = useFirebase();
    return (
        <div>
            <button onClick={signInUsingGoogle}>Sign In Using Google</button>
        </div>
    );
};

export default Login;