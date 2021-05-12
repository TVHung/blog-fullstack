import {useDispatch} from 'react-redux';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import * as actions from './redux/actions';
import React, {useState} from 'react';
import axios from 'axios';

function App() {
  const [user, setUser] = useState({name: '', email: '', password: ''});
  const [loginSreen, setLoginSreen] = useState({state: true})

  const Login = (userData) => {
    console.log(userData);
  }

  const Register = (userData) => {
    console.log(userData);
  }

  const ChangeStateScreen = (state) => {
    setLoginSreen({state: state});
  }

  return (
    <>
      {
        loginSreen.state
        ?<LoginPage Login={Login} ChangeStateScreen={ChangeStateScreen}/>
        :<RegisterPage Register={Register} ChangeStateScreen={ChangeStateScreen}/>
      }
    </>
  );
}

export default App;
