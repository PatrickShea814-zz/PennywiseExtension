import React, { Component } from 'react';

import styled from 'styled-components';

const Balance = styled.h1`
display: inline-block;
    font-size: 18px;
    letter-spacing: 2px;
    margin: 0;
    width: 100%;
    padding: 10px;
    color: white;
    background-color: #00a79d;
    text-decoration: none;
    vertical-align: middle;
    border: 1px solid #00a79d;
    line-height: normal;
    &:hover {
        background-color: #7ae0bb;
        border: 1px solid #7ae0bb;
        color: white;
    }
`;


class MyBalance extends Component {
    render() {
        return (
            <Balance>Pennybank: $53.98</Balance>
        )
    }
}

export default MyBalance;