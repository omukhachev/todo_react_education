import React, { useEffect, useState } from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Form from '../../components/Form';
import InputReg from '../../components/InputReg';
import TextLabel from '../../components/TextLabel';
import Button from '../../components/Button';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { clearResponse, createUser } from '../../store/actions/user'
import Popup from '../../components/Popup';

const SignUp = () => {

    const sha256 = require('js-sha256');
    const dispatch = useDispatch();
    const [passwordValue, setPasswordValue] = useState('');
    const [copyValue, setCopyValue] = useState('');
    const [mail, setMail] = useState('');
    const mailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const [isMailOk, setIsMailOk] = useState(true);
    const [isPasswordOk, setIsPasswordOk] = useState(true);
    const [serverResponse, setServerResponse] = useState('');
    const [isPopup, setIsPopup] = useState(false);
    const result = useSelector(state => state.user.response);

   
    useEffect(() => {
        setIsMailOk(mailValidator.test(mail));
    }, [mail]);

    useEffect(() => {
        setIsPasswordOk(passwordValue.length > 5 && copyValue.length > 5 && passwordValue === copyValue);
    }, [passwordValue, copyValue]);

    useEffect(() => {
        setIsMailOk(true);
        setIsPasswordOk(true);
    }, [])

    useEffect(() => {
        !!result && setServerResponse(result.response);
    }, [result])

    const onSubmit = async (data) => {
        if (!!data.login && !!data.password) {
            dispatch(createUser(data));
            setIsPopup(true);
        }
    };

    useEffect(() => {
        !!serverResponse.length && setTimeout (setServerResponse, 3000,'');       
    },[serverResponse])


    return (
        <Container>
            <Header headerText="Create a new ToDo account" />
            <Form>
                <InputReg
                    inputType="email"
                    placeHolder="Enter your valid email address"
                    onChange={(e) => setMail(e.target.value)}
                />
                <TextLabel className={cx(!isMailOk ? "smLabel warning" : "smLabel hidden")}>Email is invalid</TextLabel>
                <InputReg
                    inputType="password"
                    placeHolder="Enter password"
                    onChange={(e) => setPasswordValue(e.target.value)}
                />
                <InputReg
                    inputType="password"
                    placeHolder="Repeat password"
                    onChange={(e) => setCopyValue(e.target.value)}
                />
                <TextLabel className={cx((!isPasswordOk) ? "smLabel warning" : "smLabel hidden")} textContent={!isPasswordOk && 'Password should match and be longer that 6 symbols'}/>
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
                    onClick={() => isMailOk && isPasswordOk && onSubmit({ login: mail, password: sha256(passwordValue) })}
                >Submit</Button>
            </Form>
            <Popup
                isOpen={!!serverResponse.length && isPopup}
                popupMessage={serverResponse}
            />
        </Container>
    )
}

export default SignUp;