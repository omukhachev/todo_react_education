import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import cx from 'classnames';

import Container from '../../components/Container';
import TextLabel from '../../components/TextLabel';
import InputReg from '../../components/InputReg';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Popup from '../../components/Popup';
import Form from '../../components/Form';

import { createUser, clearResponse } from '../../store/actions/user';

import './style.css';

const SignUp = () => {

    const dispatch = useDispatch();

    const mailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const [isPopup, setIsPopup] = useState(false);
    const { response, loading } = useSelector(state => state.user, shallowEqual);

    const [data, setData] = useState({
        login: '',
        loginError: false,
        password: '',
        passwordCopy: null,
        passwordError: false,
    });

    useEffect(() => {
        !!data.login && setData({
            ...data, loginError: !mailValidator.test(data.login),
        })
    }, [data.login])

    useEffect(() => {
        !!data.password && !!data.passwordCopy && setData({
            ...data, passwordError: data.password !== data.passwordCopy || data.password.length < 5 || data.passwordCopy.length < 5,
        })
    }, [data.password, data.passwordCopy])

    const onSubmit = async (data) => {
        if (!data.loginError && !data.passwordError && !!data.login.length && !!data.password.length) {
            dispatch(createUser({ login: data.login, password: data.password }));
            setIsPopup(true);
        };
    };

    useEffect(() => {
        !!response && (!!response.response || !!response.error) && setTimeout(setIsPopup, 3000, false);
    }, [response])

    return (
        <>
            {!!response && response.response === "User created!" ? <Redirect to="/" /> :
                <Container>
                    <Header headerText="Create a new ToDo account" />
                    <Form loading={loading}>
                        <InputReg
                            inputType="email"
                            placeHolder="Enter your valid email address"
                            onChange={(e) => setData({ ...data, login: e.target.value })}
                        />
                        <TextLabel className={cx(data.submit && data.loginError ? "smLabel warning" : "smLabel hidden")}>Email is invalid</TextLabel>
                        <InputReg
                            inputType="password"
                            placeHolder="Enter password"
                            onChange={(e) => setData({ ...data, password: e.target.value })}
                        />
                        <InputReg
                            inputType="password"
                            placeHolder="Repeat password"
                            onChange={(e) => setData({ ...data, passwordCopy: e.target.value })}
                        />
                        <TextLabel className={cx((data.submit && data.passwordError) ? "smLabel warning" : "smLabel hidden")} textContent={'Password should match and be longer that 5 symbols'} />
                        <TextLabel
                            className="smLabel"
                            textContent="Already have an account?"
                            style={{ paddingBottom: "10px" }}
                        >
                            <NavLink
                                style={{ color: '#555555' }}
                                to="/">
                                Sign in
                        </NavLink>
                        </TextLabel>
                        <Button
                            className="loginButton"
                            onClick={() => {
                                !isPopup && onSubmit(data);
                                !isPopup && dispatch(clearResponse());
                            }}
                            disabled={data.loginError || data.passwordError}
                        >Submit</Button>
                    </Form>
                    <Popup
                        isOpen={!!response && isPopup}
                        popupMessage={!!response && (response.response || response.error)}
                        error={!!response && response.error}
                    />
                </Container>
            }
        </>
    )
};

export default SignUp;