import React from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";

import "./App.css";
const Wrapper = styled.div`
    text-align: center;
    margin-top: 100px;
    top: 0;
    left: 0;
`;
const Title = styled.h1`
    margin: -10px;
    font-size: 120px;
    font-weight: light;
    color: white;
    text-align: center;
`;
const Subtitle = styled.h4`
    color: white;
    text-align: center;
`;
const Colored = styled.span`
    color: #f06191;
`;

const Welcome = () => {
    return (
        <Wrapper>
            <img src="https://i.postimg.cc/g2N9jGsx/Welcome-Prof.png"></img>
            <Title>
                Menti<Colored>i</Colored>
            </Title>
            <Subtitle>Find Your Mentor</Subtitle>
            <Button variant="contained" color="primary">
                Log in
            </Button>
            <Button variant="contained" color="secondary">
                Get Started
            </Button>
        </Wrapper>
    );
};

export default Welcome;
