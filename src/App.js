import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import GoogleLogin from 'react-google-login';
// import FacebookLogin from 'react-facebook-login';
import './App.css';
import Profile from './Profile';
import Login from './Login';


// const responseGoogle = (response) => {
//   console.log(response);
// }

// const responseFacebook = (response) => {
//   console.log(response);
// }

// const componentClicked = () => {
//   console.log("clicked");
// }

function App() {
  return (
    <Router>
    <Switch>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  </Router>
  );
}

// function App() {
//   return (
//     <div className="content">
//       <div className="google">
//         <GoogleLogin
//         clientId="372426080986-g7ugvsmsv55gbj5lpmp242eauofo1rp1.apps.googleusercontent.com"
//         buttonText="Login"
//         onSuccess={responseGoogle}
//         onFailure={responseGoogle}
//         cookiePolicy={'single_host_origin'}
//       />
//      </div>
//      < div className="facebook">
//           <FacebookLogin
//           appId="586211698731249"
//           autoLoad={true}
//           fields="name,email,picture"
//           onClick={componentClicked}
//           callback={responseFacebook} />
//       </div>
//     </div>
//   );
// }

export default App;
