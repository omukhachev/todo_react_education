import React from 'react';
import Form from '../../components/Form';
import Header from '../../components/Header';
import Container from '../../components/Container';
import InputReg from '../../components/InputReg';
import Button from '../../components/Button';
import { NavLink } from "react-router-dom";
import './style.css';
import TextLabel from '../../components/TextLabel';

const SignIn = () => {

    const submitLogin = () => {

    }

    return (
        <Container>
            <Header headerText="Sign in" />
            <Form>
                <InputReg placeHolder="Enter your email" inputId="email" />
                <InputReg placeHolder="Enter your password" inputType="password" id="password" />
                <TextLabel className="smLabel" textContent="Have no account?"><NavLink style={{ color: '#555555' }} to="/signup">Sign up</NavLink></TextLabel>
                <Button className="loginButton">Log in</Button>
            </Form>
        </Container>
    )
}

export default SignIn;