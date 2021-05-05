import {useDispatch} from 'react-redux';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import * as actions from './redux/actions';
import React, {useState} from 'react'

function App() {
  const [user, setUser] = useState({name: '', email: '', password: ''});

  const Login = (userData) => {
    console.log(userData);
  }

  const Register = (userData) => {
    console.log(userData);
  }

  return (
    <>
      <LoginPage Login={Login}/>
      <RegisterPage Register={Register}/>
    </>
  );
}

export default App;
