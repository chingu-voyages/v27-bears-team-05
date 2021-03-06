import React, { useState } from "react";
import Button from "./Button.js";
import Input from "./Input.js";
import styled from "styled-components";
import {
    whichModalAction,
    toggleModalAction,
} from "./../actions/modalActions.js";
import { useDispatch } from "react-redux";
import { userLogin, login } from "./../actions/userActions.js";

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        padding-bottom: 25px;
    }

    p {
        font-size: 0.8rem;
        padding-top: 25px;

        span {
            font-weight: bold;
            cursor: pointer;
            font-color: #355070;
        }
    }
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Login = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const onChange = (e, name) => {
        setFormData({ ...formData, [name]: e.target.value });
    };

    const { username, password } = formData;

    const handleLogin = () => {
        dispatch(login(username.trim(), password.trim()));
        dispatch(toggleModalAction());
        setFormData({ username: "", password: "" });
    };

    return (
        <LoginContainer>
            <h2>Login</h2>
            <LoginForm id="habit-add">
                <Input
                    label="Username"
                    type="text"
                    id="Username"
                    value={username}
                    placeholder="Username"
                    name="username"
                    handleChange={(e) => onChange(e, "username")}
                />
                <Input
                    label="Password"
                    type="password"
                    id="Password"
                    value={password}
                    placeholder="Password"
                    name="password"
                    handleChange={(e) => onChange(e, "password")}
                />

                <Button
                    content="Login"
                    color="#6d597a"
                    fontWeight="bold"
                    width="130px"
                    handleClick={() => handleLogin()}
                />
            </LoginForm>
            <p>
                Don't have an account?{" "}
                <span onClick={() => dispatch(whichModalAction("register"))}>
                    Register here.
                </span>
            </p>
        </LoginContainer>
    );
};

export default Login;
