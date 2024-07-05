import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        console.log('Login submitted');
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label>
                    Username:
                    <input type="text" name="username" placeholder='username' required />
                </label>
                <br />
                <label>
                    Password:
                    <br />
                    <input type="password" name="password" placeholder='password' required />
                </label>
                <button type="submit">Login</button>
                <button type="button" onClick={() => navigate('/create-account')}>
                    Create Account
                </button>
            </form>
        </div>
    );
};

export default Login;
