import React, { Component } from 'react';
import styled from 'styled-components';

const SaveItemButton = styled.button`
display: inline-block;
    font-size: 18px;
    letter-spacing: 2px;
    width: 100%;
    margin: 0 0 10% 0;
    padding: 10px 1em;
    color: white;
    background-color: #7ae0bb;
    cursor: pointer;
    text-decoration: none;
    vertical-align: middle;
    border: 1px solid #7ae0bb;
    box-shadow: 0px 5px 8px #888888;
    text-align: center;
    line-height: normal;
    &:hover {
        background-color: #00a79d;
        border: 1px solid #00a79d;
        color: white;
    }
`;


class SaveItem extends Component {
    render() {
        return (
            <SaveItemButton>Add To Wish List</SaveItemButton>
        )
    }
}

export default SaveItem;