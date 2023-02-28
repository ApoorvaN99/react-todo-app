import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './LoginButton.css';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return (
      <button
        className="btn btn-primary 
            mx-5 my-5 px-4 loginButton"
        onClick={() => loginWithRedirect()}
      >
        Log In / Sign up
      </button>
    );
  }
};

export default LoginButton;
