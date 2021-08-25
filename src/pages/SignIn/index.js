import { NavLink } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import { useHistory } from 'react-router-dom';

import TextLabel from '../../components/TextLabel';
import Container from '../../components/Container';
import InputReg from '../../components/InputReg';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Form from '../../components/Form';

import { authUser } from '../../store/actions/user';

import './style.css';

const SignIn = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const [data, setData] = useState({
        login: '',
        password: '',
    });

    const { loading, token } = useSelector(state => state.user, shallowEqual);

    useEffect(() => {
        !!token && token.token && localStorage.setItem('uid', (jwt.verify(token.token, 'privateKey')).id);
        !!token && history.push("/todo");
    }, [token]);

    const submitLogin = () => {
        dispatch(authUser({
            login: data.login,
            password: data.password
        }));
    };

    return (
        <>
            {/* {!!localStorage.getItem('uid') ? history.push("/todo") : */}
                <Container>
                    <Header headerText="Sign in" />
                    <Form loading={loading}>
                        <InputReg
                            placeHolder="Enter your email"
                            inputId="email"
                            value={data.login}
                            onChange={(e) => {
                                setData({
                                    ...data,
                                    login: e.target.value,
                                })
                            }}
                        />
                        <InputReg
                            placeHolder="Enter your password"
                            inputType="password"
                            id="password"
                            onChange={(e) => {
                                setData({
                                    ...data,
                                    password: e.target.value,
                                })
                            }}
                            value={data.password}
                        />
                        <TextLabel className="smLabel" textContent="Have no account?"><NavLink style={{ color: '#555555' }} to="/signup">Sign up</NavLink></TextLabel>
                        <Button
                            className="loginButton"
                            onClick={() => !!data.login.length && !!data.password.length && submitLogin()}
                            disabled={loading}
                        >Log in</Button>
                    </Form>
                </Container>
            {/* } */}
        </>
    )
}

export default SignIn;