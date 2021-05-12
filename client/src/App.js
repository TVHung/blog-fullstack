import {useDispatch} from 'react-redux';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import * as actions from './redux/actions';
import React, {useState} from 'react';

function App() {
  const [user, setUser] = useState({name: '', email: '', password: ''});
  const [loginSreen, setLoginSreen] = useState({state: true})

  //check login
  const Login = (userData) => {
    console.log(userData);

  }

  //create new user
  const Register = (userData) => {
    console.log(userData);
  }

  const ChangeStateScreen = (state) => {
    setLoginSreen({state: state});
  }

  return (
    <>
      <HomePage />
      {/* {
        loginSreen.state
        ?<LoginPage Login={Login} ChangeStateScreen={ChangeStateScreen}/>
        :<RegisterPage Register={Register} ChangeStateScreen={ChangeStateScreen}/>
      } */}
    </>
  );
}

export default App;
