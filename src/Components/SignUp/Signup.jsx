import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import './Signup.css'
import { useDispatch, useSelector } from 'react-redux';
import { signUpInitiate } from '../../Services/Action/Auth.Action';

function SignUp() {

    const [initial, setInitial] = useState({
        email: '',
        password: '',
        c_password: ''
    });

    const [Err, setErr] = useState('')
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.AuthReducer)

    const navigate = useNavigate()

    // const [err, setErr] = useState('')

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setInitial({ ...initial, [name]: value })
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        if (initial.password === initial.c_password) {
            dispatch(signUpInitiate(initial.email, initial.password))
            console.log("Done");
        }
        else {
            setErr("Does't match email and password")
            console.log("Error");
        }


        // if (!initial.email || !initial.password === null) {
        //     console.log("Form is empty.Please fill in all fields.");
        //     return;
        // }

        // if (initial.password === initial.c_password) {
        //     sessionStorage.setItem("LoginData", JSON.stringify(initial));
        //     navigate('/')
        //     console.log("Done");
        // }
        // else {
        //     setErr("Does't match email and password")
        //     console.log("Error");
        // }
    }

    const handlesignUp = () => {
        dispatch(signUpInitiate());
    }

    const handleCancel = () => {
        navigate('/')
    }

    // useEffect(()=>{

    // })

    if (user !== null) {
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
                        <div className='marginn'>
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

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm Password" value={initial.c_password} name="c_password" onChange={(e) => { handleChange(e) }} />
                            </Form.Group>
                            <Form.Text className="text-danger">
                                {
                                    Err
                                }
                            </Form.Text>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={() => { handlesignUp() }}>
                                SignUp
                            </Button>
                            <div className='p-2'>
                                <div className='text-center'>
                                    <p>
                                        Already have a Account ?
                                        <br></br>
                                        <span>
                                            <NavLink to='/login' className='text-primary'>
                                                Login
                                            </NavLink>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}

export default SignUp;