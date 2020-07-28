import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { Redirect } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [dataLoginGoogle, setDataLoginGoogle] = useState();
  const [statusLogin, setStatusLogin] = useState(false);
  const [dataLoginFacebook, setDataLoginFacebook] = useState();

  //Arrow function
  const responseGoogle = (response) => {
    setDataLoginGoogle(response.profileObj);
    localStorage.setItem('name', response.profileObj.givenName);
    localStorage.setItem('email', response.profileObj.email);
    localStorage.setItem('image', response.profileObj.imageUrl);
    setStatusLogin(true);
  }

  // Arrow function
  const responseFacebook = (response) => {
    console.log(response)
    setDataLoginFacebook(response);
    console.log(response)
    localStorage.setItem('nameFacebook', response.name);
    localStorage.setItem('emailFacebook', response.email);
    localStorage.setItem('imageFacebook', response.picture.data.url);
    setStatusLogin(true);
  }

  const componentClicked = () => {
    console.log( "Clicked!" )
  }

  return (
    <div className="content">
          <div className="google">
            <GoogleLogin
            clientId="372426080986-g7ugvsmsv55gbj5lpmp242eauofo1rp1.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
         </div>
         < div className="facebook">
              <FacebookLogin
              appId="586211698731249"
              autoLoad={true}
              fields="name,email,picture"
              onClick={componentClicked}
              callback={responseFacebook} />
          </div>

        {
          statusLogin ? (
            <Redirect
            to={{
              pathname: "/profile",
            }}
          />
          ) : (
            <Redirect
            to={{
              pathname: "/",
            }}
          />
          )
        }
      </div>
  );
}

export default Login;