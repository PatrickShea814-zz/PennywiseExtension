import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const SignInButton = styled.button`
    display: inline-block;
    font-size: 18px;
    letter-spacing: 2px;
    width: 100%;
    margin: 10% 0 10% 0;
    padding: 10px 1em;
    color: white;
    background-color: #00a79d;
    cursor: pointer;
    text-decoration: none;
    vertical-align: middle;
    border: none;
    box-shadow: 0px 5px 8px #888888;
    text-align: center;
    line-height: normal;
    &:hover {
        background-color: #7ae0bb;
        color: white;
    }
`;

class SignInBtn extends Component {
    render() {
        return (
            <SignInButton>Sign In</SignInButton>
        )
    }
}

export default SignInBtn;