import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const ToSite = styled.button`
    display: inline-block;
    font-size: 18px;
    letter-spacing: 2px;
    width: 40%;
    margin-bottom: 10%;
    padding: 10px 0.5em;
    color: #ffffff;
    background-color: #7ae0bb;
    cursor: pointer;
    text-decoration: none;
    vertical-align: middle;
    text-align: center;
    box-shadow: 0px 5px 8px #888888;
    border:none;
    line-height: normal;
    border-radius: 25px;
    &:hover {
        background-color: #00a79d;
        color: white;
    }
`;

class GoToSite extends Component {
    render() {
        return (
            <ToSite className='btn' href="https://www.getpennywise.io" target="_blank">Full Site</ToSite>
        )
    }
}

export default GoToSite;