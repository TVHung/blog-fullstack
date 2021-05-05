import React, {useState} from 'react'
import useStyles from './styles';
import { Container } from '@material-ui/core';
import api from '../../api';

export default function LoginRegister({Register}) {
    const classes = useStyles();
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        cfPassword: ''
    });

    const submitHandler = (e) => {
        e.preventDefault();

        Register(userData);
    }

    return (
        <Container maxWidth='lg'>
            <form onSubmit={submitHandler}>
                <div className="form-inner">
                    <h2>Register</h2>
                    <div className="form-group">
                        <label htmlFor="name">Username</label>
                        <input type="name" name="name" id="name" onChange={e => setUserData({...userData, name: e.target.value})} value={userData.name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" onChange={e => setUserData({...userData, email: e.target.value})} value={userData.email}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={e => setUserData({...userData, password: e.target.value})} value={userData.password}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cfPassword">Confirm password</label>
                        <input type="cfPassword" name="cfPassword" id="cfPassword" onChange={e => setUserData({...userData, cfPassword: e.target.value})} value={userData.cfPassword}/>
                    </div>
                    <input type="submit" value="Login"/>
                </div>
            </form>
        </Container>
    )
}
