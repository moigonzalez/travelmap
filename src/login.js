import React from 'react';
import './login.css';

const Login = () => {
  const url = `https://api.instagram.com/oauth/authorize/?client_id=ac293e32f0f34d7f829302d9d206b3d5&redirect_uri=${window.location.href}map&response_type=token`;
  console.log(url);
  return (
    <div className='login__wrapper'>
      <a className='login__button' href={url}>Login with your Instagram Account</a>
    </div>
  )
};

export default Login;