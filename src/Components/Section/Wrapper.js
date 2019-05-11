import React, { Component } from 'react';
// import MagicLamp from '../Nav/img/greenlamp.png';
import styled from 'styled-components';
// import SignInBtn from '../Buttons/SignIn';
// import GoToSite from '../Buttons/ToSite';
import ItemPreview from '../ItemLinkPreview/ItemPreview';
import SaveItem from '../Buttons/SaveItem';
import GoToDashboard from '../Buttons/ToDashboard';
import MyBalance from '../Balance/Balance';


const Section = styled.section`
    color: #00a79d;
    margin-top: 10%;
    text-align: center;
    justify-content: center;
`;

// const Title = styled.h1`
//     text-align: center
//     font-size: 40px;
//     margin: 5% auto;
// `;

// const CustIcon = styled.img`
//     width: 50px;
//     height: auto;
// `;




// <Title><CustIcon src={MagicLamp} /></Title>
//     <Title><i class="fas fa-piggy-bank"></i></Title>
//     <Title><i class="fas fa-gift"></i></Title>
//     <SignInBtn />
//     <GoToSite />


class Wrapper extends Component {
    render() {
        return (
            <Section>
                <MyBalance />
                <ItemPreview />
                <SaveItem />
                <GoToDashboard />
            </Section>
        )
    }
}

export default Wrapper;