import React from 'react'
import useStyles from './styles';
import { Container } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

export default function LoginRegister() {
    const classes = useStyles();
    const [data, setData] = React.useState({
        name: '',
        email: '',
        password: '',
    });
    const dispatch = useDispatch();


    const handleSubmitClick = (e) => {
        e.preventDefault();
        console.log("Login");
    }

    return (
        <Container maxWidth='lg'>
            <form>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Username</label>
                    <input type="text" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" 
                        className="form-control" 
                        id="email" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email"
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                    />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmitClick}>Register</button>
            </form>
        </Container>
    )
}
