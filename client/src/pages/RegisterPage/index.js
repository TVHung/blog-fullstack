import React, {useState} from 'react'
import useStyles from './styles';
import { Container } from '@material-ui/core';
import api from '../../api';

export default function LoginRegister({Register, ChangeStateScreen}) {
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
    const onCLickChangeScreen = () => {
        ChangeStateScreen(true);
    }

    return (
        <Container maxWidth='lg'>
            <form onSubmit={submitHandler} className={classes.form}>
                <div>
                    <h2 className={classes.title}>Register</h2>
                    <div>
                        <label className={classes.textFeild} htmlFor="name">Username</label>
                        <input placeholder="Enter your username..." className={classes.input} type="name" name="name" id="name" onChange={e => setUserData({...userData, name: e.target.value})} value={userData.name}/>
                    </div>
                    <div className="form-group">
                        <label className={classes.textFeild} htmlFor="email">Email</label>
                        <input placeholder="Enter your email..." className={classes.input} type="email" name="email" id="email" onChange={e => setUserData({...userData, email: e.target.value})} value={userData.email}/>
                    </div>
                    <div className="form-group">
                        <label className={classes.textFeild} htmlFor="password">Password</label>
                        <input placeholder="Enter your password..." className={classes.input} type="password" name="password" id="password" onChange={e => setUserData({...userData, password: e.target.value})} value={userData.password}/>
                    </div>
                    <div className="form-group">
                        <label className={classes.textFeild} htmlFor="cfPassword">Confirm password</label>
                        <input placeholder="Confirm password..." className={classes.input} type="cfPassword" name="cfPassword" id="cfPassword" onChange={e => setUserData({...userData, cfPassword: e.target.value})} value={userData.cfPassword}/>
                    </div>
                    <input type="submit" value="Register" className={classes.submit}/>
                </div>
                <p className={classes.link} onClick={onCLickChangeScreen}>Bạn đã có tài khoản?</p>
            </form>
        </Container>
    )
}
