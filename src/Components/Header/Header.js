import React, { Component } from 'react';

import ExtensionNav from '../Nav/Nav';
import Wrapper from '../Section/Wrapper';

class Header extends Component {
    render() {
        return (
            <header>
                <ExtensionNav />
                <Wrapper />
            </header>
        )
    }
}

export default Header;