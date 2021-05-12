import React, {useState} from 'react'
import useStyles from './styles';
import { Container } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../redux/actions';

export default function LoginRegister({Login, ChangeStateScreen}) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const submitHandler = (e) => {
        e.preventDefault();
        setUserData({
            email: '',
            password: '',
        });
        Login(userData);
    }

    // const submitHandler = React.useCallback(() => {
    //     dispatch(login.loginRequest(userData));
    // }, [userData, dispatch]);

    const onCLickChangeScreen = () => {
        ChangeStateScreen(false);
    }

    return (
        <Container maxWidth='lg'>
            <form onSubmit={submitHandler} className={classes.form}>
                <div className={classes.formInner}>
                    <h2 className={classes.title}>Login</h2>
                    <div>
                        <label className={classes.textFeild} htmlFor="email">Email</label>
                        <input placeholder="Enter your email..." className={classes.input} type="email" name="email" id="email" onChange={e => setUserData({...userData, email: e.target.value})} value={userData.email}/>
                    </div>
                    <div>
                        <label className={classes.textFeild} htmlFor="password">Password</label>
                        <input placeholder="Enter your password..." className={classes.input} type="password" name="password" id="password" onChange={e => setUserData({...userData, password: e.target.value})} value={userData.password}/>
                    </div>
                    <input type="submit" value="Login" className={classes.submit}/>
                </div>
                <p className={classes.link} onClick={onCLickChangeScreen}>Bạn chưa có tài khoản?</p>
            </form>
        </Container>
    )
}
