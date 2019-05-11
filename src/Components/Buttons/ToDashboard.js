import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Dashboard = styled.button`
    display: inline-block;
    font-size: 18px;
    letter-spacing: 2px;
    width: 50%;
    height:40%;
    margin-bottom: 10%;
    padding: 10px 0;
    color: #ffffff;
    background-color: #00a79d;
    cursor: pointer;
    text-decoration: none;
    vertical-align: middle;
    text-align: center;
    box-shadow: 0px 5px 8px #888888;
    line-height: normal;
    border: none;
    border-radius: 25px;
    &:hover {
        background-color: #7ae0bb;
        color: white;
    }
`;

class GoToDashboard extends Component {
    render() {
        return (
            <Dashboard className='btn' href="https://www.getpennywise.io/" target="_blank">Dashboard</Dashboard>
        )
    }
}

export default GoToDashboard;