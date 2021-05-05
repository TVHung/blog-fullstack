import React, {useState} from 'react'
import useStyles from './styles';
import { Container } from '@material-ui/core';
import api from '../../api';

export default function LoginRegister({Login}) {
    const classes = useStyles();
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const submitHandler = (e) => {
        e.preventDefault();

        Login(userData);
    }

    return (
        <Container maxWidth='lg'>
            <form onSubmit={submitHandler}>
                <div className="form-inner">
                    <h2>Login</h2>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" onChange={e => setUserData({...userData, email: e.target.value})} value={userData.email}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={e => setUserData({...userData, password: e.target.value})} value={userData.password}/>
                    </div>
                    <input type="submit" value="Login"/>
                </div>
            </form>
        </Container>
    )
}
