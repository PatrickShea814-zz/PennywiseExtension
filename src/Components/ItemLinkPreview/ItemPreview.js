/* global chrome */
import React, { Component } from 'react';
import MicrolinkCard from '@microlink/react';
import styled from 'styled-components';

const ItemWrapper = styled.div`
    padding: 3%;
    text-align: center;
    margin: 0;
`;

class ItemPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemURL: 'https://www.getpennywise.io'
        };
    }

    componentDidMount() {
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
            const itemURL = new URL(tabs[0].url);
            this.setState({
                itemURL: itemURL,
            });
            console.log(itemURL);
        });
    }

    render() {
        return (
            <ItemWrapper>
                <MicrolinkCard
                    className='item-shadow'
                    url={this.state.itemURL}
                    style={{ fontFamily: 'Nitti, "Microsoft YaHei", 微软雅黑, monospace' }}
                    media={['video', 'image']}
                    size='large'
                    controls
                />
            </ItemWrapper>
        )
    }
}

export default ItemPreview;