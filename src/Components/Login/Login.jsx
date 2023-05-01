import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import './Login.css'
import { Facebook, Google, Twitter } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { LoginWithGoogle, logInInitiate } from '../../Services/Action/Auth.Action';
import { useEffect } from 'react';

function Login() {

    const [initial, setInitial] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, error } = useSelector(state => state.AuthReducer)

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setInitial({ ...initial, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(logInInitiate(initial.email, initial.password));

        // if (!initial.email || !initial.password === null) {
        //     console.log("Form is empty.Please fill in all fields.");
        //     return;
        // }
        // console.log("form data", initial);
        // sessionStorage.setItem("LoginData", JSON.stringify(initial));
        // navigate('/')
    }

    // const handleCancel = () => {
    //     navigate('/')
    // }

    const handleGoogle = () => {
        dispatch(LoginWithGoogle());
    }

    const handleLogin = () => {
        dispatch(logInInitiate());
    }

    // useEffect(() => {
    //     if (user !== null) {
    //         navigate('/');
    //     }
    // }, []);

    if (user != null) {
        navigate('/')
    }
    else {
        return (
            <div className='a'>
                <div className='d-flex justify-content-center main '>
                    <Form onSubmit={(e) => { handleSubmit(e) }} className='form-field' >
                        <div id="one"></div>
                        <div id="two"></div>
                        <div id="three"></div>
                        <div id="four"></div>
                        <div id="five"></div>
                        <div className='margin'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={initial.email} name="email" onChange={(e) => { handleChange(e) }} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={initial.password} name="password" onChange={(e) => { handleChange(e) }} />
                            </Form.Group>
                            {
                                error !== null ?
                                    error === 'auth/user-not-found' ?
                                        <p className='text-danger'> Please Create Account. </p>
                                        :
                                        error === 'auth/wrong-password' ?
                                            <p className='text-denger'> Password Wrong </p>
                                            : <p className='text-danger'> </p>
                                    : null
                            }
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={() => { handleLogin() }}>
                                LOGIN
                            </Button>
                            <div className='p-2'>
                                <div className='text-center'>
                                    <p>
                                        Create Your Account ?
                                        <br></br>
                                        <span>
                                            <NavLink to='/signup' className='text-primary'>
                                                SignUp
                                            </NavLink>
                                        </span>
                                    </p>
                                    <Button variant='primary' onClick={() => { handleGoogle() }} >
                                            <span className='m-2'> <Google /></span>
                                            <span className='m-2'><Facebook /> </span>
                                            <span className='m-2'><Twitter /></span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Form >
                </div >
            </div >
        )
    }
}

export default Login;