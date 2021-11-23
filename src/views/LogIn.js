import React from 'react';
import { signInUser } from '../api/auth';
import personalLogo from '../assets/personalLogo.png';

export default function LogIn() {
  return (
    <div className="text-center mt-5 signIn-view">
      <h1>Welcome Back! Sign In!</h1>
      <img src={personalLogo} alt="logo" className="signIn-view-logo" />
      <button
        type="button"
        className="btn btn-success signIn-button"
        onClick={signInUser}
      >
        Sign In
      </button>
    </div>
  );
}
