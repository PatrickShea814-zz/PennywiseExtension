import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import pennywiselogo from './img/colorfullpw.png';

const Nav = styled.nav`
    height: 8%;
    border-bottom: 1px solid #00a79d;
    img {
        max-width: 140px;
        max-height : auto;
        vertical-align: middle;
    }
    .logo {
        display: inline-block;
        vertical-align: middle;
        margin: 3% auto;
    }
`;

class ExtensionNav extends Component {
    render() {
        return (
            <Nav>
                <a href={"https://www.getpennywise.io"} className="logo">
                    <img src={pennywiselogo} alt="PennyWise Logo" />
                </a>
            </Nav>
        )
    }
}

export default ExtensionNav;