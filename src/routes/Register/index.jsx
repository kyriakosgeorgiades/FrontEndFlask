import React from 'react';
import Header from '../../components/Header';
import './style.scss';

export default function Login() {
  return (
    <>
        <Header title="Login" />
            <div className="w__login-container">
            <h1 className="w__login-container-title">Login Page</h1>
            <p>Welcome Ben</p>
        </div>
    </>
  );
}
