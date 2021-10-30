import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle, setLoading } = useFirebase();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
            .catch((error) => {
                const errorMessage = error.message;

            })
            .finally(() => setLoading(false))
    }
    return (
        <div className='login'>
            <div className='login-window'>
                <h1>Please Login</h1>
                <button onClick={handleGoogleLogIn}> <img className='google' src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/5/53/20161128230037%21Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png" alt="" />Sign In Using Google</button>

            </div>

        </div>
    );
};
export default Login;